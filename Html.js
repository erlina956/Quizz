const quizData = [
    {
      question: "What do we use for the bigest heading?",
      options: ["<h1>","<br>", "<div>", "<em>"],
      answer: "<h1>"
    },
    {
      question: "What  do we use to make a paeagraph?",
      options: ["<p>", "<div>", "<ul>", "<li>"],
     answer: "<p>"
    },
    {
        question: " How do you separate a section of text in HTML?",
        options: ["<p>", "<a>", "<br>", "class=''"],
        answer: "<br>"
    },
    {
        question: "What is HTML?",
        options: ["Hypertext Language  Markup", " Hypertext Markup Language", "None"],
        answer: "Hypertext Markup Language"
    }
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
showQuestion();