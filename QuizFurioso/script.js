const questions = [
  {
      question: "Qual ano foi fundada a FURIA Esports?",
      options: ["2017", "2015", "2019", "2013"],
      answer: "2017"
  },
  {
      question: "Qual jogo tornou a FURIA famosa no cenário competitivo?",
      options: ["League of Legends", "CS:GO", "Valorant", "Dota 2"],
      answer: "CS:GO"
  },
  {
      question: "Qual desses jogadores é conhecido por jogar na FURIA?",
      options: ["FalleN", "Neymar", "Gaules", "s1mple"],
      answer: "FalleN"
  },
  {
      question: "Qual o símbolo da FURIA?",
      options: ["Um dragão", "Uma águia", "Uma pantera", "Uma raposa"],
      answer: "Uma pantera"
  },
  {
      question: "A FURIA é uma organização de qual país?",
      options: ["Brasil", "Portugal", "EUA", "Canadá"],
      answer: "Brasil"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-text").textContent = q.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "option-btn";
      btn.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  const feedback = document.getElementById("feedback");

  if (selected === q.answer) {
      feedback.textContent = "✅ Resposta correta!";
      feedback.style.color = "limegreen";
      score++;
  } else {
      feedback.textContent = `❌ Resposta incorreta. Resposta correta: ${q.answer}`;
      feedback.style.color = "crimson";
  }

  // Desativa botões após resposta
  document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);
  document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
      loadQuestion();
  } else {
      const quizBox = document.getElementById("quiz-box");
      quizBox.innerHTML = `
          <h2>Quiz concluído! Você acertou ${score} de ${questions.length} questões. Obrigado por jogar 🐺</h2>
          <button class="btn btn-success mt-3" onclick="restartQuiz()">Jogar Novamente</button>
      `;
  }
}

function restartQuiz() {
  currentQuestion = 0; // Resetando a pergunta atual para a primeira
  score =0;
  document.getElementById("quiz-box").innerHTML = `
      <p id="question-text">Carregando pergunta...</p>
      <div id="options-container"></div>
      <p id="feedback"></p>
      <button id="next-button" onclick="nextQuestion()" class="btn btn-dark mt-3" style="display:none;">Próxima Pergunta</button>
  `;
  loadQuestion(); // Recarregar a primeira pergunta
}

window.onload = loadQuestion;
