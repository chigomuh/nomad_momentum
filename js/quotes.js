const quotes = [
  {
    quote: "늦었다고 생각할 때가 진짜 너무 늦었다",
    author: "박명수",
  },
  {
    quote: "뭘 무서워 그냥 하는 거지. 난관이 이것만 있겠어?",
    author: "박명수",
  },
  {
    quote: "잠을 자도 피로가 안 풀리냐",
    author: "박명수",
  },
  {
    quote: "원수는 직장에서 만난다",
    author: "박명수",
  },
  {
    quote: "내 명분·이익이나 찾으면 될 것 같아요",
    author: "박명수",
  },
  {
    quote: "열심히는 하지만 노력은 안 한다",
    author: "박명수",
  },
  {
    quote: "조금만 더 돈 벌고 뜬다. 이 바닥",
    author: "박명수",
  },
  {
    quote: "엉망으로 살아야 해! 인생은 한 번이야!",
    author: "박명수",
  },
  {
    quote: "사람이 배고플 때 뭐가 나온다",
    author: "박명수",
  },
  {
    quote: "꿈은 없고요. 그냥 놀고 싶습니다",
    author: "박명수",
  },
  {
    quote: "어려운 길은 길이 아니다",
    author: "박명수",
  },
  {
    quote: "즐길 수 없으면 피하라",
    author: "박명수",
  },
  {
    quote: "감사의 표시는 돈으로 하라.",
    author: "박명수",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// round 반올림. ceil 올림, floor 내림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;;
author.innerText = todaysQuote.author;