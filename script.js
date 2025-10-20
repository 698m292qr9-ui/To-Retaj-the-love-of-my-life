function wrongAnswer(nextPage) {
  const result = document.getElementById('result');
  if (result) {
    result.innerHTML = "🎀😡 خطأ، الحب لا حدود له 💖";
    setTimeout(() => {
      window.location.href = nextPage;
    }, 2500);
  }
}

function nextPage(page) {
  window.location.href = page;
}

// "أحبك" بلغات متعددة
const loveWords = [
  "أحبك", "I love you", "Je t’aime", "Te amo", "Ich liebe dich", "Ti amo",
  "Te quiero", "Saranghae (사랑해)", "Я тебя люблю", "Eu te amo", "Aku cinta kamu"
];
let index = 0;
document.addEventListener("click", () => {
  const loveWord = document.getElementById("loveWord");
  if (loveWord && index < loveWords.length) {
    loveWord.innerText = loveWords[index];
    index++;
  }
});