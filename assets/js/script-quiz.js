"use strict";

const quizData = [
  {
    question:
      "Tanggal berapa diperingatinya hari kemerdekaan Bangsa Indonesia?",
    a: "8 Maret 1942",
    b: "29 April 1945",
    c: "6 Agustus 1945",
    d: "17 Agustus 1945",
    e: "10 November 1948",
    correct: "d",
  },
  {
    question:
      "Tanggal berapa Gubernur Jenderal Tjarda Van Starkenborgh Stachouwer ditawan oleh Jepang?",
    a: "8 Maret 1942",
    b: "10 November 1948",
    c: "6 Agustus 1945",
    d: "29 April 1945",
    e: "17 Agustus 1945",
    correct: "a",
  },
  {
    question:
      "Kota di Jepang yang dijatuhi bom pertama kali oleh Amerika Serikat adalah?",
    a: "Hiroshima",
    b: "Nagasaki",
    c: "Kyoto",
    d: "Tokyo",
    e: "Osaka",
    correct: "a",
  },
  {
    question:
      "Setelah BPUPKI dibubarkan, lalu dibentuk organisasi baru bernama?",
    a: "PETA",
    b: "Boedi Oetomo",
    c: "Sarekat Islam",
    d: "Indische Partij",
    e: "PPKI",
    correct: "e",
  },
  {
    question:
      "Kota di Jepang yang dijatuhi bom kedua oleh Amerika Serikat adalah?",
    a: "Hiroshima",
    b: "Nagasaki",
    c: "Kyoto",
    d: "Tokyo",
    e: "Osaka",
    correct: "b",
  },
  {
    question: "Naskah Proklamasi disusun di rumah?",
    a: "Hitoshi Imamura",
    b: "Laksamana Maeda",
    c: "Marsekal Terauchi",
    d: "Uzumaki Naruto",
    e: "Uchiha Itachi",
    correct: "b",
  },
  {
    question:
      "Penjajahan bangsa Indonesia oleh Belanda terjadi kurang lebih selama?",
    a: "350 tahun",
    b: "250 tahun",
    c: "150 tahun",
    d: "50 tahun",
    e: "1 tahun",
    correct: "a",
  },
  {
    question:
      "Tokoh yang mengusulkan agar naskah proklamasi ditandangani oleh Soekarno adalah?",
    a: "Mohammad Ibnu Sayuri",
    b: "Mohammad Yamin",
    c: "Chaerul Saleh",
    d: "Soekarni",
    e: "Johannes Latuharhary",
    correct: "d",
  },
  {
    question: "Pencipta lagu Indonesia Raya adalah?",
    a: "Agus salim",
    b: "Sutan Sjahrir",
    c: "Wage Rudolf Supratman",
    d: "Soeharto",
    e: "Moh Hatta",
    correct: "c",
  },
  {
    question: "Siapa yang mengetik naskah proklamasi?",
    a: "Dewi Sartika",
    b: "Cut Nyak Dien",
    c: "R.A. Kartini",
    d: "Fatmawati",
    e: "Sayuti Melik",
    correct: "e",
  },
];

const quizContainer = document.querySelector(".app");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.querySelector(".question");
const aAnswer = document.getElementById("a--answer");
const bAnswer = document.getElementById("b--answer");
const cAnswer = document.getElementById("c--answer");
const dAnswer = document.getElementById("d--answer");
const eAnswer = document.getElementById("e--answer");
const submit = document.querySelector(".btn");

const AUDIOC = {
  CLICK: new Audio("assets/hooh.mp3"),
};

const AUDIOW = {
  CLICK: new Audio("assets/ente.mp3"),
};

let currentQuiz = 0;
let score = 0;

const resetAnswers = function () {
  answerElements.forEach((el) => (el.checked = false));
};

const loadQuiz = function () {
  resetAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.textContent = currentQuizData.question;
  aAnswer.textContent = currentQuizData.a;
  bAnswer.textContent = currentQuizData.b;
  cAnswer.textContent = currentQuizData.c;
  dAnswer.textContent = currentQuizData.d;
  eAnswer.textContent = currentQuizData.e;
};
loadQuiz();

const getSelected = function () {
  let answer;
  answerElements.forEach((el) => {
    if (el.checked) answer = el.id;
  });
  return answer;
};

submit.addEventListener("click", function () {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      AUDIOC.CLICK.play();
      score++;
    } else {
      AUDIOW.CLICK.play();
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML =
        score < 7
          ? `<h2 class="question">Skor kamu ${score * 10
          }%, raih minimal 70% agar bisa menang!</h2>
        <img class="mx-auto d-block img-fluid" width="350" src="assets/images/quiz/try-again.png" alt="Coba lagi"/>
      <div class="d-grid gap-2 mt-2">
        <button class="btn btn-color-theme btn-lg" onclick="location.reload()" type="button">Coba Lagi</button>
      </div>`
          : `<h2 class="question">Selamat! Skor kamu ${score * 10}%✨</h2>
        <img class="mx-auto d-block img-fluid" width="350" src="assets/images/quiz/congrats.png" alt="Main Lagi"/>
      <div class="d-grid gap-2 mt-2">
        <button class="btn btn-color-theme btn-lg" onclick="location.reload()" type="button">Main Lagi</button>
      </div>`;
    }
  }
});
