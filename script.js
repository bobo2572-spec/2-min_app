// =====================================================================
// クイズデータ
// =====================================================================
const quizData = [
  {
    "id": "q001",
    "genre": "申込書・規約",
    "skillTag": "数量・条件",
    "passage": "本講座のキャンセル規定は以下の通りです。開催日の7日前以降のキャンセルについては、返金に応じられません。一方、開催日の8日前から13日前までのキャンセルは参加費の50％を、14日前以前のキャンセルは全額を返金します。なお、返金手数料は一律500円とし、返金分から差し引かれます。",
    "question": "参加費を全額（手数料除く）返金してもらうには、開催日の何日前までに連絡が必要か。",
    "choices": ["7日前まで", "8日前まで", "14日前まで"],
    "answerIndex": 2,
    "evidence": "「14日前以前のキャンセルは全額を返金します。」",
    "tip": "「7日前以降（不可）」「8〜13日前（50%）」「14日前以前（全額）」という数値の境界線を整理する。"
  },
  {
    "id": "q002",
    "genre": "論説文",
    "skillTag": "筆者の主張",
    "passage": "SNSの普及は情報の伝達速度を飛躍的に高めたが、その速さが情報の「質」を保証することはない。むしろ、速すぎる拡散は、事実確認を置き去りにするリスクを孕んでいる。現代人に必要なのは、流れてくる情報を即座に受け入れる反射神経ではなく、その出典を疑い、立ち止まって検証する「思考のブレーキ」である。",
    "question": "この文章において、筆者が現代人に最も必要だと考えているものは何か。",
    "choices": [
      "情報をより速く拡散するための反射神経",
      "情報の信頼性を立ち止まって検証する習慣",
      "SNSを使わずに情報を収集する能力"
    ],
    "answerIndex": 1,
    "evidence": "「現代人に必要なのは、……出典を疑い、立ち止まって検証する『思考のブレーキ』である。」",
    "tip": "「AではなくB」という形を探す。筆者の言いたいことは常にBにある。"
  },
  {
    "id": "q003",
    "genre": "説明文",
    "skillTag": "指示語",
    "passage": "ミツバチは「ダンス」によって仲間にエサ場の情報を伝える。エサ場が近い場合は円を描き、遠い場合は「8の字」に動きながら尻を振る。この複雑な行動には、太陽の位置を基準とした正確な方角と距離の情報が凝縮されている。これを発見した研究者たちは、昆虫が高度な抽象概念を扱っていることに驚愕した。",
    "question": "文中の「この複雑な行動」が指している内容として、最も適切なものはどれか。",
    "choices": [
      "太陽の位置を基準にしてエサを探しまわること",
      "ダンスの動きでエサ場の情報を仲間に伝えること",
      "研究者が昆虫の行動を精密に記録すること"
    ],
    "answerIndex": 1,
    "evidence": "「ミツバチは『ダンス』によって仲間にエサ場の情報を伝える。……この複雑な行動には……」",
    "tip": "指示語「この〜」は直前の具体的な説明を指す。直前の内容を代入して意味が通るか試す。"
  },
  {
    "id": "q004",
    "genre": "ビジネス",
    "skillTag": "実務・規定",
    "passage": "出張旅費規程の改定により、宿泊費と交通費の精算方法が変更されました。宿泊費の上限は一泊10,000円と定められ、上限を超える分は自己負担、上限以内は実費が支給されます。交通費は種別を問わず実費が全額支給されますが、タクシー利用時は金額や理由に関わらず領収書の提出が必須です。鉄道利用時は領収書の提出は不要です。",
    "question": "宿泊費が8,500円、タクシー代が1,200円だった場合、支給額と提出書類の組み合わせとして正しいものは？",
    "choices": [
      "支給額：9,700円 / タクシーの領収書が必要",
      "支給額：10,000円 / 宿泊とタクシー両方の領収書が必要",
      "支給額：8,500円 / 書類の提出はすべて不要"
    ],
    "answerIndex": 0,
    "evidence": "「上限以内は実費が支給されます。交通費は……実費が全額支給されますが、タクシー利用時は……領収書の提出が必須です。」",
    "tip": "複合的な条件（金額のルール＋必要書類のルール）を分けて整理する。宿泊費（8,500円）＋タクシー代（1,200円）＝9,700円。"
  },
  {
    "id": "q005",
    "genre": "科学・社会",
    "skillTag": "対比構造",
    "passage": "AIが生成する知能は、膨大なデータの「平均値」を導き出す統計的な処理にすぎない。対して、人間が持つ知能の本質は、論理の穴を飛び越え、全く新しい概念を構築する「飛躍」にこそある。AIが既存の枠組みを効率化するツールであるならば、人間はその枠組み自体を作り変える開拓者であるべきだ。",
    "question": "筆者は、AIと人間をどのような対比で捉えているか。",
    "choices": [
      "平均的な処理を行うAIと、概念の飛躍を生む人間",
      "複雑な計算を行うAIと、感情的に判断する人間",
      "枠組みを壊すAIと、それを守り続ける人間"
    ],
    "answerIndex": 0,
    "evidence": "「AIが……『平均値』を導き出す……。対して、人間……は……『飛躍』にこそある。」",
    "tip": "「A（AI）は〜、一方でB（人間）は〜」という対比の軸（平均 vs 飛躍）を正確に掴む。"
  },
  {
    "id": "q006",
    "genre": "随筆",
    "skillTag": "心情・理由",
    "passage": "子どもの頃、私は本を読むのが苦手だった。文字を追うだけで精一杯で、物語の世界に入り込む余裕などなかった。転機は中学生のとき、ある司書の先生が「あなたに合う本がきっとある」と言って、一冊の短い小説を手渡してくれたことだ。その夜、私は初めて夢中になって本を読み、気づけば朝になっていた。それ以来、読書は私にとって特別な時間になった。",
    "question": "筆者が読書を「特別な時間」と感じるようになったきっかけは何か。",
    "choices": [
      "子どもの頃から文字を読む訓練を続けてきたこと",
      "司書の先生が自分に合う本を選んで手渡してくれたこと",
      "中学生になって読める本のレベルが上がったこと"
    ],
    "answerIndex": 1,
    "evidence": "「転機は……司書の先生が『あなたに合う本がきっとある』と言って、一冊の短い小説を手渡してくれたことだ。」",
    "tip": "「転機は〜」という表現は変化のきっかけを示すサイン。その後に続く出来事に注目する。"
  },
  {
    "id": "q007",
    "genre": "説明文",
    "skillTag": "接続語",
    "passage": "人間の記憶は、意外にも「不正確」である。目撃者の証言が誤りを含むことは多く、研究によって繰り返し示されてきた。それにもかかわらず、私たちは自分の記憶を確かなものと信じて疑わない。むしろ、記憶を疑うことへの抵抗感が、誤った情報を固定させてしまう原因にもなっている。",
    "question": "「それにもかかわらず」の前後の関係として正しいものはどれか。",
    "choices": [
      "記憶が不正確と示されているのに、自分の記憶を信じてしまうという逆接の関係",
      "記憶が不正確なため、自分の記憶を信じるべきではないという順接の関係",
      "記憶への抵抗感があるため、記憶が不正確になるという因果の関係"
    ],
    "answerIndex": 0,
    "evidence": "「研究によって繰り返し示されてきた。それにもかかわらず、私たちは……信じて疑わない。」",
    "tip": "「それにもかかわらず」は逆接の接続語。前の内容から予想される結果と、実際の結果が逆になっていることを確認する。"
  }
];

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
  isAnswered: false
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
const evidenceText    = document.getElementById('evidence-text');
const tipText         = document.getElementById('tip-text');
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

  state.isAnswered = false;
  explanationArea.classList.add('hidden');
  nextBtn.classList.add('hidden');

  tagsEl.innerHTML = `
    <span class="tag">${data.genre}</span>
    <span class="tag">${data.skillTag}</span>
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
    button.addEventListener('click', () => handleSelect(index));
    choicesEl.appendChild(button);
  });
}

// =====================================================================
// 選択肢クリック
// =====================================================================
function handleSelect(index) {
  if (state.isAnswered) return;

  state.isAnswered = true;
  const data = quizData[state.currentIndex];
  const isCorrect = index === data.answerIndex;

  // 選択肢の見た目更新
  const choiceButtons = choicesEl.querySelectorAll('.choice-item');
  choiceButtons[index].classList.add('selected');

  // 解説表示
  explanationArea.classList.remove('hidden');

  if (isCorrect) {
    resultBadge.textContent = 'ナイス読解。';
    resultBadge.className = 'result-badge correct';
  } else {
    resultBadge.textContent = '惜しい。';
    resultBadge.className = 'result-badge incorrect';
  }

  evidenceText.textContent = data.evidence;
  tipText.textContent = data.tip;

  // localStorage に保存 & stats 更新
  saveAnswer(data.id, isCorrect);

  // 次へボタンを表示
  nextBtn.classList.remove('hidden');

  // スムーズスクロール
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
async function initNotifications() {
  if (!('serviceWorker' in navigator) || !('Notification' in window)) {
    updateNotificationButton(false);
    document.getElementById('notification-toggle').disabled = true;
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
  const appData = loadData();
  const newState = !(appData.notificationsEnabled !== false);
  appData.notificationsEnabled = newState;
  updateNotificationButton(newState); // saveData より先に UI 更新
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

function updateNotificationButton(enabled) {
  const btn = document.getElementById('notification-toggle');
  if (!btn) return;
  btn.textContent = enabled ? '通知 ON' : '通知 OFF';
  btn.classList.toggle('off', !enabled);
}

// =====================================================================
// 初期化
// =====================================================================
function init() {
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
  nextBtn.addEventListener('click', handleNext);
  initNotifications();
}

init();
