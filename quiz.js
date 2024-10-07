function checkAnswer() {
  const correctAnswer = "4";

  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  let userAnswer = "";

  if (selectedOption) {
    userAnswer = selectedOption.value;
  } else {
    document.getElementById("feedback").textContent = "Please select an answer";
  }

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
