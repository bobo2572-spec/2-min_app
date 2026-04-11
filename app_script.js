// =====================================================================
// クイズデータ（組み込み）
// 構成: 要素名 (elementName)
//       要素No. (elementNo)
//       タイトル (title)
//       追番 (sequenceNo)
//       本文 (passage)
//       問い (question)
//       選択肢 (choices: A, B, C)
//       答え (answers: 複数選択の場合あり)
//       解説 (explanation)
// =====================================================================
const builtinQuizData = [
  {
    id: "q001",
    elementName: "基本読解",
    elementNo: 1,
    title: "本場の焼肉",
    sequenceNo: 1,
    passage: "韓国料理といえばビビンバ、トッポッキなどいろいろあるが、韓国に来たら絶対に食べておきたいのが本場の焼肉だ。炭火でじっくりと焼いたカルビ、鉄板でこんがりと焼いたサムギョプサル、さく切りの野菜と炒めた甘辛いタッカルビなど、焼肉だけでもさまざまな種類があって、どれを食べたらいいのかと迷ってしまう。",
    question: "問　筆者がおすすめしている韓国料理を含んでいるものを、すべて選びなさい。",
    choices: [
      "ビビンバ、サムギョプサル",
      "トッポッキ、ビビンバ",
      "焼肉"
    ],
    answers: [0, 2],
    explanation: "「韓国に来たら絶対に食べておきたいのが本場の焼肉だ」と書かれているので、筆者は焼肉をすすめています。ここから、Cが正しいことはすぐにわかります。そして、焼肉の種類として、カルビ、サムギョプサル、タッカルビを紹介しているので、サムギョプサルを含んだAも正しいことになります。"
  },
  {
    id: "q002",
    elementName: "基本読解",
    elementNo: 1,
    title: "漢字で書くと？",
    sequenceNo: 2,
    passage: "国の名前を漢字一文字で書き表すことがある。中国を「中」、韓国を「韓」と略すだけでなく、イギリスを「英」、アメリカを「米」のように、カタカナの国名も漢字で表される。漢字は中国から伝わったものなので、中国でも同じように漢字一文字で国名を表すことがあるが、日本と中国で表記が異なる国もある。たとえば、「中」や「韓」、スペインを「西」と表すのは、日本も中国も同じである。その一方で、日本ではフランスを「仏」、ドイツを「独」と表すが、中国ではそれぞれ「法」、「徳」と表す。ちなみに、中国ではアメリカを「美」と表す。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "フランスとドイツの漢字一文字での表記は、日本も中国も同じである。",
      "アメリカとフランスの漢字一文字での表記は、日本と中国では異なる。",
      "イギリスとスペインの漢字一文字での表記は、日本と中国では異なる。"
    ],
    answers: [1],
    explanation: "Aについて、フランスとドイツは、本文で表記が異なるものの例として挙げられているので、内容が一致しません。Bについて、フランスはAの説明の通りです。アメリカは、本文の「アメリカを『米』」という部分と「ちなみに、中国ではアメリカを『美』と表す」という部分を見比べれば、表記が異なるとわかります。よって、Bは本文と一致しています。Cについては、イギリスを「英」と表すことは書いてありますが、中国と表記が同じなのか異なるのかまでは、本文では触れられていません。また、スペインは中国と表記が同じものの例として挙げられているので、Cは本文と一致しないことがわかります。"
  },
  {
    id: "q003",
    elementName: "基本読解",
    elementNo: 2,
    title: "天王洲",
    sequenceNo: 1,
    passage: "天王洲は、東京にあるJR品川駅の東南約1kmに位置する広さ約20haの埋立地である。周りを海に囲まれた島状の地域で、英語で「小島」の意味をもつ「アイル」をつけた「天王洲アイル」という愛称もよく知られている。この地域は夜になると都会的な夜景が美しいことで知られている。\n※ 海や川などを土砂でうめて造った人工的な陸地。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "天王洲は島状の埋立地である。",
      "天王洲アイルは、天王洲から約1km離れた人工の島である。",
      "天王洲から東南約1kmの場所は、都会的な地域である。"
    ],
    answers: [0],
    explanation: "Aは、本文に天王洲の特徴として「埋立地」「島状の地域」といった内容が書かれているので、一致しているといえます。Bは、本文の「『天王洲アイル』という愛称もよく知られている」という部分から、「天王洲アイル」は天王洲の別名であることがわかります。同じ場所が「約1km離れ」ているのはおかしいので、Bは本文と一致しません。Cは、本文に「天王洲は、東京にあるJR品川駅の東南約1kmに位置する」と書いてありますが、「天王洲から東南約1kmの場所」については、どこにも書いてありません。よって、本文とは一致しません。"
  },
  {
    id: "q004",
    elementName: "基本読解",
    elementNo: 2,
    title: "体温計",
    sequenceNo: 2,
    passage: "おでこに近づければ計測できる、肌に触れない非接触式の体温計を見かけることがあります。脇にはさんだり口に入れたりするわずらわしさもなく、計測終了までに時間がかかることもないので、とても便利なものです。しかし、皮膚の表面の温度から体温を予測しているため、ずれが大きいという短所があります。皮膚の表面の温度は気温や室温に左右されるため、外気の影響を受けにくい脇や口の中の温度に比べて、誤差が出やすいといわれています。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "非接触式の体温計は、気温から皮膚の表面の温度を予測して計測する。",
      "非接触式の体温計は、脇にはさむ接触式の体温計より計測の時間が短い。",
      "脇や口の中の温度は、外気の影響を受けやすい。"
    ],
    answers: [1],
    explanation: "Aについては、本文に「皮膚の表面の温度から体温を予測している」と書かれています。「気温から皮膚の表面の温度を予測」するわけではありませんね。よって、Aは本文と一致しません。Bについては、「計測終了までに時間がかかることもない」の手前に「脇にはさんだり口に入れたりするわずらわしさもなく」と書かれていることから、これらの説明は、非接触式の体温計のことだとわかります。よって、Bは本文と一致します。Cについては、「外気の影響を受けにくい脇や口の中の温度」という説明と反対のことをいっているので、本文と一致しません。"
  },
  {
    id: "q005",
    elementName: "基本読解",
    elementNo: 3,
    title: "歯医者さんの暗号",
    sequenceNo: 1,
    passage: "学校などで歯科健診を受けたときにCOという結果が出ることがあります。COとは「要観察歯」と呼ばれ、虫歯になる前の状態を指します。放置した場合、1年後にはその3割程度が虫歯に進行してしまうといわれています。そのため、COと診断された場合は、歯科医院で歯みがき指導や生活指導を受け、フッ素を使って予防したり定期健診を続けたりして、虫歯に進行するのを防ぎましょう。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "COと診断された歯は、1年後にはその3割程度が確実に虫歯に進行してしまう。",
      "COとは、虫歯に進行してしまい、観察が必要な歯のことである。",
      "COは、予防や健診を続けることで、虫歯に進行するのを防ぐことができる。"
    ],
    answers: [2],
    explanation: "AとBは、本文の「放置した場合、1年後にはその3割程度が虫歯に進行してしまう」に注目します。これは、COと診断されたのに何も対策をとらなかったときの場合ですね。よって、Aは本文と一致しません。Bについては、「放置した場合」に「虫歯に進行してしまう」のですから、現在はまだ「虫歯に進行してしまい、観察が必要」とはいえません。本文の「虫歯になる前の状態」という部分からもわかりますね。よって、Bも一致しません。Cは、本文に同様のことが書いてあります。「防ぎましょう」ということは「防ぐことができる」ということです。"
  },
  {
    id: "q006",
    elementName: "基本読解",
    elementNo: 3,
    title: "住宅の申し込み",
    sequenceNo: 2,
    passage: "これは、A市が提供する住宅の申し込みの案内を記載した広報の一部です。\n\nA市では、市営特定賃貸住宅・市営定住支援住宅の入居者※1を募集中です。市内居住者※2はもちろん、市外居住者、単身者※3も申し込むことができます。ただし、申し込みには収入面での条件があります。また、市営定住支援住宅は家賃補助申請書の写しがないと申し込むことができません。\n\n※1　アパートなどに入って住む人。\n※2　市内に住んでいる人。\n※3　1人で暮らす人。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "市営定住支援住宅の申し込みには、家賃補助申請書の写しが必要である。",
      "市営特定賃貸住宅には、現在、市外に住んでいる人だけが申し込みできる。",
      "市営特定賃貸住宅には、いつでも、誰でも住むことができる。"
    ],
    answers: [0],
    explanation: "Aについては、本文に「家賃補助申請書の写しがないと申し込むことができません」とあります。これは「家賃補助申請書の写しが必要」と同じ意味なので、本文と一致します。Bについては、「市内居住者はもちろん、市外居住者、単身者も申し込むことができます」とあります。市内に住んでいる人も申し込みできるので、本文と一致しません。Cについては、「申し込みには収入面での条件があります」とあります。条件に合わない人は申し込みできないということですから、「誰でも」とはいえません。"
  },
  {
    id: "q007",
    elementName: "基本読解",
    elementNo: 4,
    title: "ネアンデルタール人",
    sequenceNo: 1,
    passage: "通常、「人」「人間」と呼ばれているホモ・サピエンスと、「ネアンデルタール人」と呼ばれているホモ・ネアンデルターレンシスでは、後者のほうが、大きい体と強い力をもっていた。しかも、脳の容量がホモ・サピエンスよりも多かった。その優れた体力と知性のため、他人と集団を作る必要があまりなかったといわれている。一方でホモ・サピエンスは、つねに集団を作り、その中で工夫をくり返し、生きるすべを増やしていったのである。結果として、ホモ・ネアンデルターレンシスは約3万年前に絶滅し、その後はホモ・サピエンスが全世界に広がることになる。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "ホモ・ネアンデルターレンシスよりホモ・サピエンスのほうが体力が優れていた。",
      "ホモ・ネアンデルターレンシスよりホモ・サピエンスのほうが知性が優れていた。",
      "ホモ・ネアンデルターレンシスよりホモ・サピエンスのほうがよく集団を作っていた。"
    ],
    answers: [2],
    explanation: "本文の「後者のほうが、大きい体と強い力をもっていた」の「後者」とは、ホモ・ネアンデルターレンシスのことを指しています。ホモ・ネアンデルターレンシスは、「大きい体と強い力」と「優れた体力と知性」をもっていたと書かれています。ここで比べられているのがホモ・サピエンスだということが読み取れれば、AとBは本文と一致しないとわかります。Cについては、「ホモ・サピエンスは、つねに集団を作り」と書かれていることから、内容が一致しているといえます。"
  },
  {
    id: "q008",
    elementName: "基本読解",
    elementNo: 4,
    title: "ハリモグラの呼吸",
    sequenceNo: 2,
    passage: "ハリモグラはほ乳類だが、卵を産むという変わった特徴をもつ。これは、カモノハシと同様である。さらに、地中で呼吸をするという特徴ももつ。なぜ地中で呼吸できるのだろうか。ハリモグラは、同じ大きさのほかのほ乳類と比べて、必要とする酸素の量が少なく、はき出す二酸化炭素の量も少ない。また、穴を掘り進めたあとの土はやわらかく、空気を通す。これらのことから、地中でも窒息せずに生きられるのである。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "ハリモグラとカモノハシは、卵を産むほ乳類である。",
      "ハリモグラが地中で呼吸できるのは、穴を掘ったあとの土のやわらかさと関係がある。",
      "ハリモグラとカモノハシはほかの動物に比べ、必要とする酸素の量が少ない。"
    ],
    answers: [0, 1],
    explanation: "Aについては、冒頭に「ハリモグラはほ乳類だが、卵を産む」と書かれていて、その直後に、同様の動物としてカモノハシが紹介されています。これより、Aは本文と一致しているとわかります。Bについて、本文ではハリモグラが地中で呼吸できる理由が2つ書かれています。1つは「ほかのほ乳類と比べて、必要とする酸素の量」が少ないこと、もう1つは「穴を掘り進めたあとの土はやわらかく、空気を通す」ということです。Bは2つ目の理由と一致しています。Cについては、本文でカモノハシが必要とする酸素の量には触れていないため、一致しません。"
  },
  {
    id: "q009",
    elementName: "基本読解",
    elementNo: 5,
    title: "太陽の描き方",
    sequenceNo: 1,
    passage: "アメリカ人の子どもがお絵描きをしている。太陽を描くとき、黄色のクレヨンを使いはじめた。「えっ、赤じゃないの？」と驚く人もいるだろう。日本では、太陽の色といえば赤色をイメージする人が多いはずだ。しかし、ある本によると、黄色や赤のほかに、オレンジや白、金色で太陽を表す国もあるということだ。物のとらえ方が住んでいるところによって異なることは、実に興味深い。",
    question: "問　上の文章の内容と一致しないものを、すべて選びなさい。",
    choices: [
      "太陽は、さまざまな色で描かれる。",
      "太陽を描くときの色は、金色や白、黄色などもある。",
      "太陽は、住んでいる場所によって異なる色に変わる。"
    ],
    answers: [2],
    explanation: "本文に「黄色や赤のほかに、オレンジや白、金色で太陽を表す国もあるということだ」と書かれているので、AとBは本文と一致します。Bについては、色の順番が入れかわっていることに注意しましょう。Cについては、「物のとらえ方が住んでいるところによって異なる」とは書かれていますが、これは、住んでいるところによって「太陽の色のとらえ方」が異なるという意味であり、場所によって太陽自体の色が変わるという意味ではないので、内容と一致しません。"
  },
  {
    id: "q010",
    elementName: "基本読解",
    elementNo: 5,
    title: "医療費のしくみ",
    sequenceNo: 2,
    passage: "病院で支払う医療費は、診療報酬制度というものに基づいて決まる。行われる治療や検査、使われる医薬品など、ひとつひとつに金額が定められていて、患者にどういう医療を行ったかを記録し、その合計を医療費として請求する。このとき、保険の対象になる医療費は、全国健康保険協会・健康保険組合などの保険者と保険加入者（患者）とで協力して支払うことになっている。「3割負担」というのは、健康保険に加入している患者が医療費の30％のみを負担することを指す。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "健康保険に加入している場合、医療費の3割は患者が支払う。",
      "医療サービスはひとつひとつに金額が定められていて、その30％が病院に入る。",
      "健康保険組合が医療費の総額を決定している。"
    ],
    answers: [0],
    explanation: "Aについては、本文の最後の一文にある「健康保険に加入している患者が医療費の30％のみを負担する」という部分を読み解けば、内容が一致しているとわかります。Bについては、「30％が病院に入る」という部分が間違っています。Aでも見た通り、30％は患者が支払う金額です。Cについて、医療費は行った医療の内容によって決まることを踏まえれば、医療費の総額を決めるのは健康保険組合ではなく、病院側であることが読み取れます。よって、Cも一致しません。"
  },
  {
    id: "q011",
    elementName: "基本読解",
    elementNo: 6,
    title: "ルビと呼ぶワケ",
    sequenceNo: 1,
    passage: "漢字の読み方を示す「ふりがな」には、「ルビ」という呼び方もある。これは、宝石のルビーのことで、イギリスで印刷用の文字の大きさを宝石の名前で呼んでいたことに関係がある。イギリスでは約1.6mm幅の文字をダイヤモンド、約2.3mm幅の文字をエメラルドと呼び、その中間の約1.95mm幅の文字をルビーと呼んでいた。実はこの順番、偶然にも、宝石の硬さの順番と同じなのである。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "「ふりがな」も「ルビ」も宝石に関係のある言葉である。",
      "イギリスでは、印刷に使う文字の大きさに宝石の名前をつけていた。",
      "「ルビー」の発音が「ルビ」になったのは、1.6mm幅の文字をダイヤモンドといっていたからである。"
    ],
    answers: [1],
    explanation: "Aについては、本文に「宝石の『ルビー』のこと」とありますが、これは「ルビ」についての説明であり、「ふりがな」という言葉が宝石に関係があるとは書かれていません。よって、Aは本文と一致しません。Bは、本文の「イギリスで印刷用の文字の大きさを宝石の名前で呼んでいた」という部分をいいかえたものなので、内容が一致します。Cについて、「ルビー」の発音が「ルビ」になったことと、1.6mm幅の文字をダイヤモンドと呼んでいたことには関係がありませんね。"
  },
  {
    id: "q012",
    elementName: "基本読解",
    elementNo: 6,
    title: "丁稚と番頭",
    sequenceNo: 2,
    passage: "昔、商業に関わる人々の大半は、住み込みで働いていました。「丁稚」というのは、10歳前後で商家※に入ったときの位の名前です。丁稚は商家で働く人々と寝起きや食事をともにしながら、仕事を覚えていきました。仕事を覚えるほどに責任のある仕事を任せられるようになり、手代、番頭というふうに位が上がりました。番頭になると、自分の家から通うことが許されるようになります。なかには番頭になっても、そのまま商家で生活する人もいたそうです。\n※　商人の家。商店。",
    question: "問　上の文章の内容と一致するものを、すべて選びなさい。",
    choices: [
      "丁稚は手代などと一緒に暮らしながら、仕事をしていた。",
      "位が上がると、商家の中での呼び名が変わった。",
      "番頭になると、自分の家から通わなければならなかった。"
    ],
    answers: [0, 1],
    explanation: "Aは、「丁稚は商家で働く人々と寝起きや食事をともにしながら、仕事を覚えていきました」とあります。「寝起きや食事をともにする」は、「一緒に暮らす」とほぼ同じ意味なので、Aは本文と一致します。Bも、丁稚から位が上がった呼び名として手代、番頭が挙げられているので、本文と一致するといえます。Cについては、「自分の家から通うことが許される」とありますが、「なかには番頭になっても、そのまま商家で生活する人もいた」ともあります。「自分の家から通わなければならなかった」というわけではないので、これは本文と一致しません。"
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
    if (!raw) return { dailyLog: {}, streak: 0, lastAnsweredDate: null, notificationsEnabled: true, questionHistory: {} };
    const data = JSON.parse(raw);
    if (!data.questionHistory) data.questionHistory = {};
    return data;
  } catch {
    return { dailyLog: {}, streak: 0, lastAnsweredDate: null, notificationsEnabled: true, questionHistory: {} };
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

  // 履歴更新（過去2回分）
  if (!appData.questionHistory) appData.questionHistory = {};
  if (!appData.questionHistory[questionId]) appData.questionHistory[questionId] = [];
  appData.questionHistory[questionId].push(isCorrect);
  if (appData.questionHistory[questionId].length > 2) {
    appData.questionHistory[questionId] = appData.questionHistory[questionId].slice(-2);
  }

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
// 問題一覧の描画
// =====================================================================
function renderQuestionList() {
  const listEl = document.getElementById('question-list');
  const appData = loadData();
  const history = appData.questionHistory || {};

  const rows = quizData.map((q, i) => {
    const label = `${q.elementNo}-${q.sequenceNo}`;
    const h = history[q.id] || [];
    const histStr = h.length === 0 ? '<span style="color:var(--text-secondary)">-</span>' : h.map(res => 
       res ? '<span style="color:var(--correct-color)">〇</span>' : '<span style="color:var(--incorrect-color)">×</span>'
    ).join(' ');

    return `<tr>
      <td class="ql-num">${label}</td>
      <td class="ql-title" data-index="${i}">${q.title}</td>
      <td class="ql-genre">${q.elementName}</td>
      <td class="ql-history" style="text-align:center; white-space:nowrap;">${histStr}</td>
    </tr>`;
  }).join('');

  listEl.innerHTML = `
    <table class="question-table">
      <thead><tr><th>No.</th><th>タイトル</th><th>要素名</th><th style="text-align:center;">履歴</th></tr></thead>
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

