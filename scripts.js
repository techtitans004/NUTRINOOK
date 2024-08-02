// Javascript for Navbar
document.querySelector(".navbar-toggle").addEventListener("click", () => {
  document.querySelector(".navbar-menu").classList.toggle("active");
});

// Javascript  For Carousel
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  document
    .querySelector(".carousel-button.left")
    .addEventListener("click", function () {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
      updateCarousel();
    });

  document
    .querySelector(".carousel-button.right")
    .addEventListener("click", function () {
      currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });

  setInterval(function () {
    currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  }, 5000);
});

// Javascript for Calorie Calculator
function calculateCalories() {
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const activity = document.getElementById("activity").value;

  document.getElementById("result").innerText = "";

  // Basic validation
  if (!age || !gender || !weight || !height || !activity) {
    document.getElementById("result").innerText = "Please fill in all fields.";
    return;
  }

  if (age <= 0 || weight <= 0 || height <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid positive numbers for age, weight, and height.";
    return;
  }

  let bmr;

  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  let calories;
  switch (activity) {
    case "sedentary":
      calories = bmr * 1.2;
      break;
    case "light":
      calories = bmr * 1.375;
      break;
    case "moderate":
      calories = bmr * 1.55;
      break;
    case "active":
      calories = bmr * 1.725;
      break;
    case "very-active":
      calories = bmr * 1.9;
      break;
  }

  document.getElementById(
    "result"
  ).innerText = `You need approximately ${Math.round(
    calories
  )} calories per day.`;
}

function resetForm() {
  document.getElementById("calorie-form").reset();
  document.getElementById("result").innerText = "";
}

// Javascript for BMI Calculator
function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  document.getElementById("result").innerText = "";

  // Basic validation
  if (!weight || !height) {
    document.getElementById("result").innerText = "Please fill in both fields.";
    return;
  }

  if (weight <= 0 || height <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid positive numbers for weight and height.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let bmiCategory;

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obesity";
  }

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(
    1
  )} (${bmiCategory}).`;
}

function resetForm() {
  document.getElementById("bmi-form").reset();
  document.getElementById("result").innerText = "";
}

// Javascript for Feedback Form

document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedback-form");
  const thankYouMessage = document.getElementById("thank-you-message");
  const submitAnotherButton = document.getElementById("submit-another");

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    feedbackForm.classList.add("hidden");
    thankYouMessage.classList.remove("hidden");

    feedbackForm.reset();
  });

  submitAnotherButton.addEventListener("click", function () {
    thankYouMessage.classList.add("hidden");
    feedbackForm.classList.remove("hidden");
  });
});
