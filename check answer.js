function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    const resultBox = document.getElementById("resultAnimation");
    const feedbackIcon = document.getElementById("feedbackIcon");

    feedbackIcon.style.display = "block"; // Показываем значок

    if (selected === correct) {
        resultBox.innerText = "✅ correcto!";
        resultBox.classList.add("correct");
        feedbackIcon.innerText = "✔"; // Галочка
        feedbackIcon.classList.add("correct-icon");
        document.body.classList.add("correct"); // Фон мигает зелёным
    } else {
        resultBox.innerText = "❌ incorrecto!";
        resultBox.classList.add("incorrect");
        feedbackIcon.innerText = "✖"; // Крестик
        feedbackIcon.classList.add("incorrect-icon");
        document.body.classList.add("incorrect"); // Фон мигает красным
    }

    setTimeout(() => {
        resultBox.classList.remove("correct", "incorrect"); // Убираем эффект текста
        feedbackIcon.classList.remove("correct-icon", "incorrect-icon"); // Прячем значок
        feedbackIcon.style.display = "none"; // Скрываем
        document.body.classList.remove("correct", "incorrect"); // Убираем мигающий фон
        currentQuestion++;

        if (currentQuestion >= questions.length) {
            window.location.href = "menu.html"; // Завершение игры
        } else {
            showQuestion();
            resultBox.innerText = "";
        }
    }, 2000);
}
