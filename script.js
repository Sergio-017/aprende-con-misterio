const questions = [
{ question: "the structure of present simple tense in positive?", answers: ["subj+ verb+pred", "subj+to be+verb+pred", "do+subj+pred"], correct: 0 },
    { question: "its the structure:subj+to be+verb+pred correct", answers: ["true", ".", "false"], correct: 2 },
    { question: "what is the present simple used for?", answers: ["things that will happen", "rutines", "the same present continious"], correct: 1 },
	{ question: "traduce yo juego fortnite", answers: ["i am playing fortnite", "i play fortnite", "nothing"], correct: 1 },
	{ question: "what is present continiuos", answers: ["for say what you do now", "the opposite present simple", "nothing"], correct: 0 },
	{ question: "is the following formula correct?", answers: ["true", ".", "false"], correct: 0 },
	{ question: "is this sentence in present simple tense?", answers: ["true", ".", "false"], correct: 0 },
	{ question: "what type is this i play fortnite" , answers: ["Present Continuous", "Present Simple", "Nothing"], correct: 1 },
	{ question: "what need this I _____ playing Roblox", answers: ["is", "are", "am"], correct: 2 },
	{ question: "there are 4 formulaas in present simple? ", answers: ["true", ".", "false"], correct: 2 }
  ];
  
  let currentQuestion = 0;
  
  function showQuestion() {
    if (currentQuestion < questions.length) {
      document.getElementById("questionBox").innerText = questions[currentQuestion].question;
  
      let buttons = document.querySelectorAll(".answer");
      questions[currentQuestion].answers.forEach((answer, index) => {
        buttons[index].innerText = answer;
      });
    } else {
      document.getElementById("questionBox").innerText = "🎉 Вы закончили игру!";
      document.getElementById("answers").style.display = "none";
    }
  }
  
  showQuestion();
  