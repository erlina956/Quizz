const quizData = [
    {
      question: "What does CSS stand for?",
      options: [ "Cascading Style Sheets", "Style Sheets Cascading","None"],
      answer: "Cascading Style Sheets"
    },
    {
      question: " What is the current version of CSS?",
      options: ["CSS1", "CSS", "CSS3", "CSS2"],
     answer: "CSS3"
    },
    {
        question: "How to style a link?",
        options: [".p", ".a", "btn", "header"],
        answer: ".a"
    },
    {
        question: "How to put a color to the background?",
        options: ["background-image", "background-repat", "background-color", "background-size"],
        answer: "background-color"
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