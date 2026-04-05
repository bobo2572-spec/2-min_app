// Service Worker — よむ、2分。
// ローカル通知スケジューラー（07:00 JST = 22:00 UTC）

let scheduledTimer = null;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// 将来の Web Push Protocol 対応
self.addEventListener('push', event => {
  const data = event.data?.json() ?? {};
  event.waitUntil(
    self.registration.showNotification(data.title ?? 'よむ、2分。', {
      body: data.body ?? '今日の2分、はじまってます。',
      tag: 'daily-reminder',
      data: { url: '/2-min_app/' }
    })
  );
});

// 通知タップ → アプリを開く
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data?.url ?? '/2-min_app/';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('/2-min_app/') && 'focus' in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow(url);
    })
  );
});

// ページからのメッセージ受信
self.addEventListener('message', event => {
  if (event.data?.type === 'SCHEDULE_NOTIFICATION') {
    cancelSchedule();
    scheduleNext7am();
  } else if (event.data?.type === 'CANCEL_NOTIFICATION') {
    cancelSchedule();
  }
});

// 既存のタイマーをキャンセル
function cancelSchedule() {
  if (scheduledTimer !== null) {
    clearTimeout(scheduledTimer);
    scheduledTimer = null;
  }
}

// 次の 07:00 JST（= 22:00 UTC）まで待って通知を出し、翌日分を再予約
function scheduleNext7am() {
  const now = Date.now();
  const target = new Date();
  target.setUTCHours(22, 0, 0, 0); // 22:00 UTC = 07:00 JST

  // 今日の 22:00 UTC が過ぎていたら翌日へ
  if (target.getTime() <= now) {
    target.setUTCDate(target.getUTCDate() + 1);
  }

  const delay = target.getTime() - now;

  scheduledTimer = setTimeout(() => {
    self.registration.showNotification('よむ、2分。', {
      body: '今日の2分、はじまってます。',
      tag: 'daily-reminder',
      icon: '/2-min_app/icon-192.png',
      badge: '/2-min_app/icon-192.png',
      data: { url: '/2-min_app/' }
    });
    // 翌日分を再予約
    scheduleNext7am();
  }, delay);
}
