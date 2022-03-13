const quotes = [
  {
    quote: "늦었다고 생각할 때가 진짜 너무 늦었다",
  },
  {
    quote: "뭘 무서워 그냥 하는 거지. 난관이 이것만 있겠어?",
  },
  {
    quote: "치킨은 살 안쪄요, 살은 내가 쪄요",
  },
  {
    quote: "원수는 직장에서 만난다",
  },
  {
    quote: "개가 짖는다고 해서 개랑 같이 짖을 필요는 없다",
  },
  {
    quote: "지금처럼 일 할거면 어렸을 때 많이 좀 놀걸",
  },
  {
    quote: "조금만 더 돈 벌고 뜬다. 이 바닥",
  },
  {
    quote: "엉망으로 살아야 해! 인생은 한 번이야!",
  },
  {
    quote: "사람이 배고플 때 뭐가 나온다",
  },
  {
    quote: "꿈은 없고요. 그냥 놀고 싶습니다",
  },
  {
    quote: "어려운 길은 길이 아니다",
  },
  {
    quote: "즐길 수 없으면 피하라",
  },
  {
    quote: "감사의 표시는 돈으로 하라.",
  },
  {
    quote: "사람들은 할 말이 없으면 욕을 한다",
  },
  {
    quote: "돈이라는 건 있다가도 없고, 있다가도 없고",
  }
];

const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");

// round 반올림. ceil 올림, floor 내림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;;
// author.innerText = `,${todaysQuote.author}`;