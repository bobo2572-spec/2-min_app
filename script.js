// =====================================================================
// クイズデータ（組み込み）
// スキーマ: elementName / elementNo / title / sequenceNo / passage /
//           question / choices / answers（配列・複数可） / explanation
// =====================================================================
const builtinQuizData = [
  {
    id: "q001",
    elementName: "文章読解",
    elementNo: 1,
    title: "キャンセル規定",
    sequenceNo: 1,
    passage: "本講座のキャンセル規定は以下の通りです。開催日の7日前以降のキャンセルについては、返金に応じられません。一方、開催日の8日前から13日前までのキャンセルは参加費の50％を、14日前以前のキャンセルは全額を返金します。なお、返金手数料は一律500円とし、返金分から差し引かれます。",
    question: "参加費を全額（手数料除く）返金してもらうには、開催日の何日前までに連絡が必要か。",
    choices: ["7日前まで", "8日前まで", "14日前まで"],
    answers: [2],
    explanation: "「14日前以前のキャンセルは全額を返金します。」という記述が根拠。「7日前以降（不可）」「8〜13日前（50%）」「14日前以前（全額）」という数値の境界線を整理して読む。"
  },
  {
    id: "q002",
    elementName: "文章読解",
    elementNo: 1,
    title: "SNSと思考",
    sequenceNo: 2,
    passage: "SNSの普及は情報の伝達速度を飛躍的に高めたが、その速さが情報の「質」を保証することはない。むしろ、速すぎる拡散は、事実確認を置き去りにするリスクを孕んでいる。現代人に必要なのは、流れてくる情報を即座に受け入れる反射神経ではなく、その出典を疑い、立ち止まって検証する「思考のブレーキ」である。",
    question: "この文章において、筆者が現代人に最も必要だと考えているものは何か。",
    choices: [
      "情報をより速く拡散するための反射神経",
      "情報の信頼性を立ち止まって検証する習慣",
      "SNSを使わずに情報を収集する能力"
    ],
    answers: [1],
    explanation: "「現代人に必要なのは、……出典を疑い、立ち止まって検証する『思考のブレーキ』である。」という記述が根拠。「AではなくB」という形を探す。筆者の言いたいことは常にBにある。"
  },
  {
    id: "q003",
    elementName: "文章読解",
    elementNo: 1,
    title: "ミツバチのダンス",
    sequenceNo: 3,
    passage: "ミツバチは「ダンス」によって仲間にエサ場の情報を伝える。エサ場が近い場合は円を描き、遠い場合は「8の字」に動きながら尻を振る。この複雑な行動には、太陽の位置を基準とした正確な方角と距離の情報が凝縮されている。これを発見した研究者たちは、昆虫が高度な抽象概念を扱っていることに驚愕した。",
    question: "文中の「この複雑な行動」が指している内容として、最も適切なものはどれか。",
    choices: [
      "太陽の位置を基準にしてエサを探しまわること",
      "ダンスの動きでエサ場の情報を仲間に伝えること",
      "研究者が昆虫の行動を精密に記録すること"
    ],
    answers: [1],
    explanation: "「ミツバチは『ダンス』によって仲間にエサ場の情報を伝える。……この複雑な行動には……」という記述が根拠。指示語「この〜」は直前の具体的な説明を指す。直前の内容を代入して意味が通るか確認する。"
  },
  {
    id: "q004",
    elementName: "文章読解",
    elementNo: 1,
    title: "旅費精算",
    sequenceNo: 4,
    passage: "出張旅費規程の改定により、宿泊費と交通費の精算方法が変更されました。宿泊費の上限は一泊10,000円と定められ、上限を超える分は自己負担、上限以内は実費が支給されます。交通費は種別を問わず実費が全額支給されますが、タクシー利用時は金額や理由に関わらず領収書の提出が必須です。鉄道利用時は領収書の提出は不要です。",
    question: "宿泊費が8,500円、タクシー代が1,200円だった場合、支給額と提出書類の組み合わせとして正しいものは？",
    choices: [
      "支給額：9,700円 / タクシーの領収書が必要",
      "支給額：10,000円 / 宿泊とタクシー両方の領収書が必要",
      "支給額：8,500円 / 書類の提出はすべて不要"
    ],
    answers: [0],
    explanation: "「上限以内は実費が支給されます。交通費は……実費が全額支給されますが、タクシー利用時は……領収書の提出が必須です。」という記述が根拠。金額ルールと書類ルールを分けて整理する。宿泊費（8,500円）＋タクシー代（1,200円）＝9,700円。"
  },
  {
    id: "q005",
    elementName: "文章読解",
    elementNo: 1,
    title: "AIと人間",
    sequenceNo: 5,
    passage: "AIが生成する知能は、膨大なデータの「平均値」を導き出す統計的な処理にすぎない。対して、人間が持つ知能の本質は、論理の穴を飛び越え、全く新しい概念を構築する「飛躍」にこそある。AIが既存の枠組みを効率化するツールであるならば、人間はその枠組み自体を作り変える開拓者であるべきだ。",
    question: "筆者は、AIと人間をどのような対比で捉えているか。",
    choices: [
      "平均的な処理を行うAIと、概念の飛躍を生む人間",
      "複雑な計算を行うAIと、感情的に判断する人間",
      "枠組みを壊すAIと、それを守り続ける人間"
    ],
    answers: [0],
    explanation: "「AIが……『平均値』を導き出す……。対して、人間……は……『飛躍』にこそある。」という記述が根拠。「A（AI）は〜、一方でB（人間）は〜」という対比の軸（平均 vs 飛躍）を正確に掴む。"
  },
  {
    id: "q006",
    elementName: "文章読解",
    elementNo: 1,
    title: "読書の転機",
    sequenceNo: 6,
    passage: "子どもの頃、私は本を読むのが苦手だった。文字を追うだけで精一杯で、物語の世界に入り込む余裕などなかった。転機は中学生のとき、ある司書の先生が「あなたに合う本がきっとある」と言って、一冊の短い小説を手渡してくれたことだ。その夜、私は初めて夢中になって本を読み、気づけば朝になっていた。それ以来、読書は私にとって特別な時間になった。",
    question: "筆者が読書を「特別な時間」と感じるようになったきっかけは何か。",
    choices: [
      "子どもの頃から文字を読む訓練を続けてきたこと",
      "司書の先生が自分に合う本を選んで手渡してくれたこと",
      "中学生になって読める本のレベルが上がったこと"
    ],
    answers: [1],
    explanation: "「転機は……司書の先生が『あなたに合う本がきっとある』と言って、一冊の短い小説を手渡してくれたことだ。」という記述が根拠。「転機は〜」は変化のきっかけを示すサイン。その後に続く出来事に注目する。"
  },
  {
    id: "q007",
    elementName: "文章読解",
    elementNo: 1,
    title: "記憶と接続語",
    sequenceNo: 7,
    passage: "人間の記憶は、意外にも「不正確」である。目撃者の証言が誤りを含むことは多く、研究によって繰り返し示されてきた。それにもかかわらず、私たちは自分の記憶を確かなものと信じて疑わない。むしろ、記憶を疑うことへの抵抗感が、誤った情報を固定させてしまう原因にもなっている。",
    question: "「それにもかかわらず」の前後の関係として正しいものはどれか。",
    choices: [
      "記憶が不正確と示されているのに、自分の記憶を信じてしまうという逆接の関係",
      "記憶が不正確なため、自分の記憶を信じるべきではないという順接の関係",
      "記憶への抵抗感があるため、記憶が不正確になるという因果の関係"
    ],
    answers: [0],
    explanation: "「研究によって繰り返し示されてきた。それにもかかわらず、私たちは……信じて疑わない。」という記述が根拠。「それにもかかわらず」は逆接の接続語。前の内容から予想される結果と実際の結果が逆になっていることを確認する。"
  }
];

// 実行時に使うクイズデータ（カスタム問題 + 組み込み）
let quizData = [...builtinQuizData];

// =====================================================================
// localStorage
// =====================================================================
const STORAGE_KEY = 'yomu2min';

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { dailyLog: {}, streak: 0, lastAnsweredDate: null, notificationsEnabled: true };
    return JSON.parse(raw);
  } catch {
    return { dailyLog: {}, streak: 0, lastAnsweredDate: null, notificationsEnabled: true };
  }
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // プライベートブラウズ・ストレージ制限時は保存しないが処理は継続
  }
}

// =====================================================================
// 日付ユーティリティ（Asia/Tokyo 04:00 区切り）
// =====================================================================

// アプリの「今日」: JST 04:00 をゼロ時として扱う
// 04:00 JST = UTC+9 - 4h = UTC+5 → Date.now() に +5h して ISO 日付を取得
function getAppDate() {
  const shifted = new Date(Date.now() + 5 * 60 * 60 * 1000);
  return shifted.toISOString().split('T')[0]; // "YYYY-MM-DD"
}

// 決定論的な今日の問題インデックス（全ユーザー共通）
function getTodayQuestionIndex() {
  const epoch = new Date('2026-04-01T00:00:00Z');
  const today = new Date(getAppDate() + 'T00:00:00Z');
  const days = Math.floor((today - epoch) / 86400000);
  return ((days % quizData.length) + quizData.length) % quizData.length;
}

// アプリ日付文字列から「1日前」の日付文字列を返す
function getPrevAppDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().split('T')[0];
}

// =====================================================================
// streak 計算（当日の初回回答時のみ更新）
// =====================================================================
function calcNewStreak(data, today) {
  const last = data.lastAnsweredDate;
  if (!last) return 1;
  if (last === today) return data.streak; // 既に今日カウント済み
  if (last === getPrevAppDate(today)) return data.streak + 1; // 連続
  return 1; // リセット
}

// =====================================================================
// アプリの状態
// =====================================================================
let state = {
  currentIndex: 0,
  isAnswered: false,
  selectedIndices: new Set()
};

// =====================================================================
// DOM 参照
// =====================================================================
const tagsEl          = document.getElementById('tags');
const passageEl       = document.getElementById('passage');
const questionEl      = document.getElementById('question');
const choicesEl       = document.getElementById('choices');
const explanationArea = document.getElementById('explanation-area');
const resultBadge     = document.getElementById('result-badge');
const explanationText = document.getElementById('explanation-text');
const confirmBtn      = document.getElementById('confirm-btn');
const nextBtn         = document.getElementById('next-btn');
const streakBadge     = document.getElementById('streak-badge');
const streakCount     = document.getElementById('streak-count');
const dailyCountEl    = document.getElementById('daily-count');
const dailyCountNum   = document.getElementById('daily-count-num');

// =====================================================================
// stats 表示
// =====================================================================
function renderStreak(streak) {
  if (!streak || streak <= 0) {
    streakBadge.classList.add('hidden');
    return;
  }
  streakBadge.classList.remove('hidden');
  streakCount.textContent = streak;
}

function renderDailyCount(count) {
  if (!count || count <= 0) {
    dailyCountEl.classList.add('hidden');
    return;
  }
  dailyCountEl.classList.remove('hidden');
  dailyCountNum.textContent = count;
}

// =====================================================================
// 問題の描画
// =====================================================================
function renderQuestion() {
  const data = quizData[state.currentIndex];
  const isMulti = data.answers.length > 1;

  state.isAnswered = false;
  state.selectedIndices = new Set();
  explanationArea.classList.add('hidden');
  nextBtn.classList.add('hidden');
  confirmBtn.classList.add('hidden');

  tagsEl.innerHTML = `
    <span class="tag">${data.elementName}</span>
    <span class="tag">No.${data.elementNo}-${data.sequenceNo}</span>
    <span class="tag">${data.title}</span>
    ${isMulti ? '<span class="tag tag--multi">複数選択</span>' : ''}
  `;

  passageEl.textContent = data.passage;
  questionEl.textContent = data.question;

  choicesEl.innerHTML = '';
  data.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'choice-item';
    button.innerHTML = `
      <span class="choice-label">${String.fromCharCode(65 + index)}</span>
      <span class="choice-text">${choice}</span>
    `;
    if (isMulti) {
      button.addEventListener('click', () => handleSelectMulti(index));
    } else {
      button.addEventListener('click', () => handleSelect(index));
    }
    choicesEl.appendChild(button);
  });
}

// =====================================================================
// 選択肢クリック（単一回答）
// =====================================================================
function handleSelect(index) {
  if (state.isAnswered) return;
  state.isAnswered = true;

  const data = quizData[state.currentIndex];
  const isCorrect = data.answers.includes(index);

  const choiceButtons = choicesEl.querySelectorAll('.choice-item');
  choiceButtons[data.answers[0]].classList.add('correct-answer');
  if (!isCorrect) choiceButtons[index].classList.add('wrong-answer');

  showExplanation(data, isCorrect);
}

// =====================================================================
// 選択肢クリック（複数回答：トグル選択）
// =====================================================================
function handleSelectMulti(index) {
  if (state.isAnswered) return;

  const choiceButtons = choicesEl.querySelectorAll('.choice-item');
  if (state.selectedIndices.has(index)) {
    state.selectedIndices.delete(index);
    choiceButtons[index].classList.remove('selected');
  } else {
    state.selectedIndices.add(index);
    choiceButtons[index].classList.add('selected');
  }

  confirmBtn.classList.toggle('hidden', state.selectedIndices.size === 0);
}

// =====================================================================
// 答えを確認（複数回答）
// =====================================================================
function handleConfirm() {
  if (state.isAnswered) return;
  state.isAnswered = true;
  confirmBtn.classList.add('hidden');

  const data = quizData[state.currentIndex];
  const selected = [...state.selectedIndices].sort((a, b) => a - b);
  const correct  = [...data.answers].sort((a, b) => a - b);
  const isCorrect = JSON.stringify(selected) === JSON.stringify(correct);

  const choiceButtons = choicesEl.querySelectorAll('.choice-item');
  data.answers.forEach(i => choiceButtons[i].classList.add('correct-answer'));
  state.selectedIndices.forEach(i => {
    if (!data.answers.includes(i)) choiceButtons[i].classList.add('wrong-answer');
  });

  showExplanation(data, isCorrect);
}

// =====================================================================
// 解説を表示（共通）
// =====================================================================
function showExplanation(data, isCorrect) {
  explanationArea.classList.remove('hidden');
  resultBadge.textContent = isCorrect ? 'ナイス読解。' : '惜しい。';
  resultBadge.className   = `result-badge ${isCorrect ? 'correct' : 'incorrect'}`;
  explanationText.textContent = data.explanation;
  saveAnswer(data.id, isCorrect);
  nextBtn.classList.remove('hidden');
  setTimeout(() => {
    explanationArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// =====================================================================
// 回答を localStorage に保存
// =====================================================================
function saveAnswer(questionId, isCorrect) {
  const today = getAppDate();
  const appData = loadData();

  const log = appData.dailyLog[today] || { done: false, questionId: null, isCorrect: null, count: 0 };

  // 当日の初回回答時のみ streak を更新
  if (!log.done) {
    log.done = true;
    log.questionId = questionId;
    log.isCorrect = isCorrect;

    const newStreak = calcNewStreak(appData, today);
    appData.streak = newStreak;
    appData.lastAnsweredDate = today;
    renderStreak(newStreak);
  }

  log.count = (log.count || 0) + 1;
  appData.dailyLog[today] = log;

  saveData(appData);
  renderDailyCount(log.count);
}

// =====================================================================
// 次の問題へ
// =====================================================================
function handleNext() {
  state.currentIndex = (state.currentIndex + 1) % quizData.length;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =====================================================================
// 通知機能
// =====================================================================

// 通知対応状況を詳しく診断
function diagNotification() {
  const hasNotification = 'Notification' in window;
  const hasSW = 'serviceWorker' in navigator;
  const ua = navigator.userAgent;
  const isIOS = /iP(hone|ad|od)/.test(ua);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true;
  // iOSバージョンを取得 ("OS 17_1" 形式から)
  let iosVersion = null;
  if (isIOS) {
    const m = ua.match(/OS (\d+)_(\d+)/);
    if (m) iosVersion = parseFloat(`${m[1]}.${m[2]}`);
  }
  return { hasNotification, hasSW, isIOS, isStandalone, iosVersion };
}

function notificationSupported() {
  const d = diagNotification();
  return d.hasNotification && d.hasSW;
}

async function initNotifications() {
  const d = diagNotification();

  if (!d.hasNotification || !d.hasSW) {
    if (d.isIOS && !d.isStandalone) {
      // Safari直开き → ホーム画面追加誘導
      updateNotificationButton('ios-hint');
    } else if (d.isIOS && d.iosVersion !== null && d.iosVersion < 16.4) {
      // iOSバージョン不足
      updateNotificationButton('ios-old');
    } else {
      updateNotificationButton(null);
    }
    return;
  }

  const appData = loadData();
  updateNotificationButton(appData.notificationsEnabled !== false);

  if (appData.notificationsEnabled === false) return;

  try {
    await navigator.serviceWorker.register('/2-min_app/sw.js');

    if (Notification.permission === 'default') {
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') return;
    }
    if (Notification.permission !== 'granted') return;

    const sw = await navigator.serviceWorker.ready;
    sw.active?.postMessage({ type: 'SCHEDULE_NOTIFICATION' });
  } catch {
    // 通知なしで継続
  }
}

async function toggleNotification() {
  if (!notificationSupported()) return;

  const appData = loadData();
  const newState = !(appData.notificationsEnabled !== false);
  appData.notificationsEnabled = newState;
  updateNotificationButton(newState);
  saveData(appData);

  const sw = await navigator.serviceWorker.ready.catch(() => null);
  if (!sw?.active) return;

  if (newState) {
    const perm = await Notification.requestPermission().catch(() => 'denied');
    if (perm === 'granted') {
      sw.active.postMessage({ type: 'SCHEDULE_NOTIFICATION' });
    }
  } else {
    sw.active.postMessage({ type: 'CANCEL_NOTIFICATION' });
  }
}

// enabled: true→ON, false→OFF, null→非対応, 'ios-hint'→iOS誘導, 'ios-old'→バージョン不足
function updateNotificationButton(enabled) {
  const btn = document.getElementById('notification-toggle');
  if (!btn) return;
  if (enabled === null) {
    btn.textContent = '通知 非対応';
    btn.classList.add('off');
    btn.style.opacity = '0.45';
    btn.style.fontSize = '';
    return;
  }
  if (enabled === 'ios-hint') {
    btn.textContent = '📲 ホーム画面から起動で通知ON';
    btn.classList.add('off');
    btn.style.opacity = '0.85';
    btn.style.fontSize = '0.7rem';
    return;
  }
  if (enabled === 'ios-old') {
    const d = diagNotification();
    btn.textContent = `iOS ${d.iosVersion ?? '?'} → 16.4以上が必要`;
    btn.classList.add('off');
    btn.style.opacity = '0.7';
    btn.style.fontSize = '0.7rem';
    return;
  }
  btn.textContent = enabled ? '通知 ON' : '通知 OFF';
  btn.classList.toggle('off', !enabled);
  btn.style.opacity = '';
  btn.style.fontSize = '';
}

// テスト通知をすぐに送信
async function sendTestNotification() {
  const testBtn = document.getElementById('test-notification-btn');
  const d = diagNotification();

  if (!d.hasNotification) {
    if (d.isIOS && !d.isStandalone) {
      testBtn.textContent = '📲 Safariで「ホーム画面に追加」してください';
    } else if (d.isIOS) {
      testBtn.textContent = 'iOS 16.4以上が必要です';
    } else {
      testBtn.textContent = '通知非対応のブラウザです';
    }
    setTimeout(() => { testBtn.textContent = '🔔 今すぐテスト送信'; }, 5000);
    return;
  }

  testBtn.disabled = true;
  testBtn.textContent = '⏳ 送信中...';

  // 5秒タイムアウト — 何があっても必ずボタンをリセット
  const resetBtn = () => {
    testBtn.textContent = '🔔 今すぐテスト送信';
    testBtn.disabled = false;
  };
  const timer = setTimeout(resetBtn, 5000);

  try {
    let perm = Notification.permission;
    if (perm === 'default') {
      perm = await Notification.requestPermission();
    }

    if (perm === 'granted') {
      // Service Worker 経由を試み、失敗したら直接 Notification
      let sent = false;
      try {
        const swReg = await Promise.race([
          navigator.serviceWorker.getRegistration(),
          new Promise((_, rej) => setTimeout(() => rej(new Error('SW timeout')), 2000))
        ]);
        if (swReg) {
          // icon なしで送信（404エラーによるハング回避）
          await Promise.race([
            swReg.showNotification('よむ、2分。', {
              body: '通知テスト成功！毎朝7時にこの通知が届きます。',
              tag: 'test-notification'
            }),
            new Promise((_, rej) => setTimeout(() => rej(new Error('show timeout')), 2000))
          ]);
          sent = true;
        }
      } catch {
        // SW経由が失敗 → 直接 Notification にフォールバック
      }
      if (!sent) {
        new Notification('よむ、2分。', {
          body: '通知テスト成功！毎朝7時にこの通知が届きます。'
        });
      }
      clearTimeout(timer);
      testBtn.textContent = '✅ 送信しました！';
      setTimeout(resetBtn, 3000);
    } else {
      clearTimeout(timer);
      testBtn.textContent = '❌ 通知が許可されていません';
      setTimeout(resetBtn, 3000);
    }
  } catch (e) {
    clearTimeout(timer);
    testBtn.textContent = '⚠️ エラーが発生しました';
    setTimeout(resetBtn, 3000);
  }
}

// =====================================================================
// 管理者機能
// =====================================================================
const CUSTOM_KEY = 'yomu2min_custom';

function loadCustomQuestions() {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCustomQuestions(arr) {
  try {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(arr));
  } catch {}
}

function rebuildQuizData() {
  const customs = loadCustomQuestions();
  quizData = [...customs, ...builtinQuizData];
}

function renderQuestionList() {
  const listEl = document.getElementById('question-list');
  const isAdmin = window.location.href.includes('admin');

  const rows = quizData.map((q, i) => {
    const isCustom = q.id.startsWith('custom_');
    const label = `${q.elementNo}-${q.sequenceNo}`;
    const numCell = isAdmin
      ? `<td class="ql-num ${isCustom ? 'ql-num--deletable' : 'ql-num--builtin'}" data-index="${i}" data-id="${q.id}">${label}</td>`
      : `<td class="ql-num">${label}</td>`;
    return `<tr>
      ${numCell}
      <td class="ql-title" data-index="${i}">${q.title}</td>
      <td class="ql-genre">${q.elementName}</td>
    </tr>`;
  }).join('');

  listEl.innerHTML = `
    <table class="question-table">
      <thead><tr><th>No.</th><th>タイトル</th><th>要素名</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;

  // タイトルクリック → その問題へジャンプ
  listEl.querySelectorAll('.ql-title').forEach(el => {
    el.addEventListener('click', () => {
      state.currentIndex = parseInt(el.dataset.index, 10);
      renderQuestion();
      document.getElementById('question-list').classList.add('hidden');
      document.getElementById('list-toggle-btn').textContent = '≡ 問題一覧';
      document.getElementById('quiz-card').scrollIntoView({ behavior: 'smooth' });
    });
  });

  if (!isAdmin) return;

  // 管理者: カスタム問題の番号クリック → 削除確認
  listEl.querySelectorAll('.ql-num--deletable').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.index, 10);
      const q = quizData[idx];
      if (confirm(`「${q.title}」を削除しますか？`)) {
        const arr = loadCustomQuestions();
        const ci = arr.findIndex(c => c.id === q.id);
        if (ci !== -1) {
          arr.splice(ci, 1);
          saveCustomQuestions(arr);
          rebuildQuizData();
          renderQuestionList();
          renderAdminList();
        }
      }
    });
  });

  // 組み込み問題の番号クリック
  listEl.querySelectorAll('.ql-num--builtin').forEach(el => {
    el.addEventListener('click', () => alert('組み込み問題は削除できません。'));
  });
}

function renderAdminList() {
  const list = document.getElementById('admin-list');
  const customs = loadCustomQuestions();

  if (customs.length === 0) {
    list.innerHTML = '<p class="admin-empty">追加した問題はまだありません。</p>';
    return;
  }

  list.innerHTML =
    `<p class="admin-list-title">追加済み問題 （${customs.length}件）</p>` +
    customs.map((q, i) => `
      <div class="admin-item">
        <div class="admin-item-header">
          <span class="tag">${q.elementName}</span>
          <span class="tag">No.${q.elementNo}-${q.sequenceNo}</span>
          <span class="tag">${q.title}</span>
          <button class="admin-delete-btn" data-index="${i}">削除</button>
        </div>
        <p class="admin-item-passage">${q.passage.slice(0, 70)}…</p>
        <p class="admin-item-question">${q.question}</p>
      </div>
    `).join('');

  list.querySelectorAll('.admin-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      const arr = loadCustomQuestions();
      arr.splice(idx, 1);
      saveCustomQuestions(arr);
      rebuildQuizData();
      renderAdminList();
    });
  });
}

function handleAdminSubmit(e) {
  e.preventDefault();

  const answers = [];
  if (document.getElementById('admin-ans-a').checked) answers.push(0);
  if (document.getElementById('admin-ans-b').checked) answers.push(1);
  if (document.getElementById('admin-ans-c').checked) answers.push(2);
  if (answers.length === 0) {
    alert('答えを1つ以上選択してください。');
    return;
  }

  const newQ = {
    id: 'custom_' + Date.now(),
    elementName: document.getElementById('admin-element-name').value.trim(),
    elementNo: parseInt(document.getElementById('admin-element-no').value, 10) || 1,
    title: document.getElementById('admin-title').value.trim(),
    sequenceNo: parseInt(document.getElementById('admin-sequence-no').value, 10) || 1,
    passage: document.getElementById('admin-passage').value.trim(),
    question: document.getElementById('admin-question').value.trim(),
    choices: [
      document.getElementById('admin-choice-a').value.trim(),
      document.getElementById('admin-choice-b').value.trim(),
      document.getElementById('admin-choice-c').value.trim(),
    ],
    answers,
    explanation: document.getElementById('admin-explanation').value.trim(),
  };

  const arr = loadCustomQuestions();
  arr.push(newQ);
  saveCustomQuestions(arr);
  rebuildQuizData();
  renderAdminList();
  renderQuestionList();
  e.target.reset();

  const btn = document.querySelector('.admin-submit-btn');
  btn.textContent = '✅ 追加しました！';
  setTimeout(() => { btn.textContent = '問題を追加'; }, 2000);
}

function showAdminPanel() {
  const panel = document.getElementById('admin-panel');
  if (!panel.classList.contains('hidden')) return; // 既に表示済み
  panel.classList.remove('hidden');
  renderAdminList();
  renderQuestionList(); // 管理者モードで一覧を再描画
  document.getElementById('admin-form').addEventListener('submit', handleAdminSubmit);
  panel.scrollIntoView({ behavior: 'smooth' });
}

function initAdminPanel() {
  // URL に "admin" が含まれていれば表示（?admin / ?admin=1 / #admin すべて対応）
  if (window.location.href.includes('admin')) {
    showAdminPanel();
  }

  // フッターの著作権テキストを5回タップしても開く（スマホ用）
  let tapCount = 0;
  let tapTimer = null;
  const footer = document.querySelector('.app-footer p');
  if (footer) {
    footer.style.cursor = 'pointer';
    footer.addEventListener('click', () => {
      tapCount++;
      clearTimeout(tapTimer);
      if (tapCount >= 5) {
        tapCount = 0;
        showAdminPanel();
      } else {
        tapTimer = setTimeout(() => { tapCount = 0; }, 2000);
      }
    });
  }
}

// =====================================================================
// 初期化
// =====================================================================
function init() {
  rebuildQuizData(); // カスタム問題をマージ
  initAdminPanel();

  const today = getAppDate();
  const appData = loadData();
  const todayIndex = getTodayQuestionIndex();
  const todayCount = appData.dailyLog[today]?.count || 0;

  // 当日すでに解いた問題数だけ先に進める（続きから再開）
  state.currentIndex = (todayIndex + todayCount) % quizData.length;

  renderStreak(appData.streak);
  renderDailyCount(todayCount);
  updateNotificationButton(appData.notificationsEnabled !== false);

  renderQuestion();

  // 問題一覧トグル
  const listToggleBtn = document.getElementById('list-toggle-btn');
  const questionListEl = document.getElementById('question-list');
  if (listToggleBtn && questionListEl) {
    listToggleBtn.addEventListener('click', () => {
      if (questionListEl.classList.contains('hidden')) {
        questionListEl.classList.remove('hidden');
        listToggleBtn.textContent = '≡ 問題一覧 ▴';
        renderQuestionList();
      } else {
        questionListEl.classList.add('hidden');
        listToggleBtn.textContent = '≡ 問題一覧';
      }
    });
  }

  confirmBtn.addEventListener('click', handleConfirm);
  nextBtn.addEventListener('click', handleNext);
  document.getElementById('notification-toggle')?.addEventListener('click', toggleNotification);
  document.getElementById('test-notification-btn')?.addEventListener('click', sendTestNotification);
  initNotifications();
}

init();
