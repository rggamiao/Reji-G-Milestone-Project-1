const questions = [
    {
      question: "Which trait do you value the most?",
      options: ["Bravery", "Ambition", "Intelligence", "Loyalty"],
      houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    },
    {
      question: "What is your greatest fear?",
      options: ["Failure", "Being overlooked", "Ignorance", "Betrayal"],
      houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    },
    {
      question: "Which animal do you identify with the most?",
      options: ["Lion", "Snake", "Eagle", "Badger"],
      houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    },
    {
      question: "What kind of people do you admire?",
      options: ["Heroes", "Leaders", "Scholars", "Friends"],
      houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    },
    {
      question: "What would you rather be known for?",
      options: ["Bravery", "Ambition", "Intelligence", "Kindness"],
      houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    }
  ];
  
  let currentQuestion = 0;
  let answers = [];
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('questionNum').textContent = currentQuestion + 1;
    document.getElementById('question').textContent = q.question;
    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = q.options[i];
    }
  }
  
  function selectAnswer(btn) {
    const selectedAnswerIndex = Array.from(btn.parentNode.children).indexOf(btn);
    answers.push(selectedAnswerIndex);
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
      sortUser();
    }
  }
  
  function sortUser() {
    const answerCounts = [0, 0, 0, 0]; // Count of answers for each house
    answers.forEach(answerIndex => {
      answerCounts[answerIndex]++;
    });
    const maxCount = Math.max(...answerCounts);
    const dominantHouses = answerCounts.reduce((acc, count, index) => {
      if (count === maxCount) {
        acc.push(questions[0].houses[index]);
      }
      return acc;
    }, []);
  
    const resultContainer = document.getElementById('result');
    if (dominantHouses.length === 1) {
      resultContainer.textContent = `Congratulations! You belong to ${dominantHouses[0]}!`;
    } else {
      resultContainer.textContent = `You have traits of multiple houses: ${dominantHouses.join(", ")}`;
    }
  }
  
  loadQuestion();
  