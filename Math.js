const quizData = [
    {
      question: "What is  5 * 11?",
      options: ["65", "10", "55", "50"],
      answer: "55"
    },
    {
      question: "What is 5 / 2?",
      options: ["1.5", "2.5", "3", "1"],
      answer: "2.5"
    },
    {
        question: "What is 55 + 230?",
        options: ["285", "300", "245", "258"],
        answer: "285"
    },
    {
        question: "What is 324 - 34?",
        options: ["291", "289","299","290"],
        answer: "290"
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