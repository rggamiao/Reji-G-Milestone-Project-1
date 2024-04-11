const questions = [
    {
      question: "What is the name of Harry Potter's owl?",
      options: ["Hedwig", "Crookshanks", "Scabbers", "Fawkes"],
      answer: "Hedwig"
    },
    {
      question: "What is the name of Harry Potter's best friends?",
      options: ["Ron Weasley and Hermione Granger", "Neville Longbottom and Luna Lovegood", "Draco Malfoy and Ginny Weasley", "Cho Chang and Cedric Diggory"],
      answer: "Ron Weasley and Hermione Granger"
    },
    {
      question: "What house was Harry Potter sorted into?",
      options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
      answer: "Gryffindor"
    },
    {
      question: "Who is the author of the Harry Potter series?",
      options: ["J.K. Rowling", "Stephenie Meyer", "George R.R. Martin", "C.S. Lewis"],
      answer: "J.K. Rowling"
    },
    {
      question: "What is the name of the sport played on broomsticks in the wizarding world?",
      options: ["Quidditch", "Broomstickball", "Wizardball", "Broomstick Racing"],
      answer: "Quidditch"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('questionNum').textContent = currentQuestion + 1;
    document.getElementById('question').textContent = q.question;
    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = q.options[i];
    }
  }
  
  function checkAnswer(btn) {
    const selectedAnswer = btn.textContent;
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      score++;
    }
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('options').style.pointerEvents = 'none';
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      document.getElementById('nextButton').style.display = 'none';
      document.getElementById('options').style.pointerEvents = 'auto';
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;
  }
  loadQuestion();