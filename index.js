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
    question: "What would be your go-to spell?",
    options: ["Expelliarmus", "Avada Kadavra", "Alohamora", "Wingardium Leviosa"],
    houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  },
  {
    question: "What kind of people do you admire?",
    options: ["Heroes", "Leaders", "Scholars", "Friends"],
    houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  },
  {
    question: "What would your animagus be?",
    options: ["Dog ", "Basilisk", "Raven", "Badger"],
    houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  },
  {
    question: "Which Hogwarts subject do you find the most fascinating?",
    options: ["Defense Against the Dark Arts", "Apparition", "History of Magic", "Divination"],
    houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  },
  {
    question: "If you could visit one place in the wizarding world, where would you go?",
    options: ["Hogsmeade", "The Leaky Cauldron", "Florish & Blotts", "Weasleys' Wizard Wheezes"],
    houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  },
  {
    question: "Which magical artifact would you like to possess?",
    options: ["Marauder's Map", "Elder Wand", "Alastor Moody's Eyeball", "Invisibility Cloak"],
    houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  },
  {
    question: "What is your favorite magical creature?",
    options: ["Phoenix", "Dragon", "Unicorn", "Thestral"],
    houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  },
  {
    question: "If you could have one magical ability, what would it be?",
    options: ["Apparition", "Legilimency", "Occlumency", "Animagus"],
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


  const options = document.getElementsByClassName('option');
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove('selected');
  }

  
  btn.classList.add('selected');

  document.getElementById('nextButton').style.display = 'block';
  document.getElementById('options').style.pointerEvents = 'none';
}

function resetAnswer() {
  answers = []; 
  const options = document.getElementsByClassName('option');
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove('selected'); 
  }
  document.getElementById('nextButton').style.display = 'none'; 
  document.getElementById('options').style.pointerEvents = 'auto'; 
}

function retryQuiz() {
  window.location.reload(); 
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();

    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove('selected');
    }

    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('options').style.pointerEvents = 'auto';
  } else {
    sortUser();
  }
}


function sortUser() {
  const answerCounts = [0, 0, 0, 0]; 
  answers.forEach(answerIndex => {
      answerCounts[answerIndex]++;
  });
  const maxCount = Math.max(...answerCounts);
  const dominantHouseIndex = answerCounts.indexOf(maxCount);
  const dominantHouse = questions[0].houses[dominantHouseIndex];

  const resultContainer = document.getElementById('result');
  resultContainer.textContent = `Congratulations! You belong to ${dominantHouse}!`;


  const imageContainer = document.getElementById('houseImageContainer');
  let imageName;
  switch (dominantHouse) {
    case "Gryffindor":
      imageName = "gryffindorhat.png";
      break;
    case "Hufflepuff":
      imageName = "hufflepuffHat.png";
      break;
    case "Ravenclaw":
      imageName = "ravenclawhat.png";
      break;
    case "Slytherin":
      imageName = "slytherinhat.png";
      break;
    default:
      imageName = "default.png"; 
  }
  imageContainer.innerHTML = `<img src="assets/${imageName}" alt="${dominantHouse} Hat">`;
}


loadQuestion();
