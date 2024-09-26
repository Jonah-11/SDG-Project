// Quiz logic for SDG 9 Quiz
document.addEventListener('DOMContentLoaded', function() {
  let currentQuestion = 0;
  let score = 0;

  const questions = [
    { question: "What does SDG 9 aim to promote?", choices: ["Industry", "Agriculture", "Education", "Health"], answer: 0 },
    { question: "Why is infrastructure important for economic growth?", choices: ["It increases unemployment", "It reduces investment", "It facilitates trade", "It has no impact"], answer: 2 },
    { question: "Which of the following is a key component of SDG 9?", choices: ["Pollution", "Innovation", "Deforestation", "Unemployment"], answer: 1 },
    { question: "What type of infrastructure is crucial for industrial growth?", choices: ["Digital infrastructure", "Forest land", "Tourist attractions", "Cultural monuments"], answer: 0 },
    { question: "How does innovation contribute to sustainability?", choices: ["By using more resources", "By reducing efficiency", "By creating new solutions to old problems", "By increasing pollution"], answer: 2 },
    { question: "What sector is most related to SDG 9?", choices: ["Healthcare", "Manufacturing", "Tourism", "Education"], answer: 1 },
    { question: "What is one of the challenges to achieving SDG 9?", choices: ["Lack of financial investment", "Too much infrastructure", "Overemployment", "Too much innovation"], answer: 0 }
  ];

  function showQuestion() {
    const quizContainer = document.getElementById('quiz');
    if (currentQuestion < questions.length) {
      const questionData = questions[currentQuestion];
      quizContainer.innerHTML = `
        <h3>${questionData.question}</h3>
        ${questionData.choices.map((choice, index) => `
          <div>
            <input type="radio" name="answer" id="choice${index}" value="${index}">
            <label for="choice${index}">${choice}</label>
          </div>
        `).join('')}
        <button id="nextButton">Next</button>
      `;

      document.getElementById('nextButton').addEventListener('click', checkAnswer);
    } else {
      quizContainer.innerHTML = `<h3>Quiz Completed! You scored ${score} out of ${questions.length}.</h3>`;
      
      // Show a congratulatory message if the score is 5 or higher
      if (score >= 5) {
        alert("Congratulations! You scored " + score + " Great job!");
      }
    }
  }

  function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
      if (parseInt(selected.value) === questions[currentQuestion].answer) {
        score++;  // Increase score if correct
      }
      currentQuestion++;
      showQuestion();
    } else {
      alert("Please select an answer.");
    }
  }

  function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;

    alert(`Welcome, ${username}!`);

    // Hide the signup form and show the quiz
    document.getElementById('signup').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';

    showQuestion();  // Start the quiz
  }

  // Initialize the app
  document.getElementById('quiz').style.display = 'none';  // Hide quiz initially
  document.getElementById('signupForm').addEventListener('submit', handleSignup);
});
