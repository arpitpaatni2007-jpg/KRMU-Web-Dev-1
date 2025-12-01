const quizQuestions = [
    {
        question: "Which gas do plants release during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "a"
    },
    {
        question: "What does CPU stand for?",
        options: ["Central Performance Unit", "Central Processing Unit", "Control Power Unit", "Computer Processing Utility"],
        answer: "b"
    },
    {
        question: "Who wrote the book 'Wings of Fire'?",
        options: ["Chetan Bhagat", "APJ Abdul Kalam", "Rabindranath Tagore", "R.K. Narayan"],
        answer: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "c"
    },
    {
        question: "In binary, what is the value of 1 + 1?",
        options: ["01", "10", "11", "100"],
        answer: "b"
    }
];

function runQuiz() {
    alert("🎉 Welcome to Prompt Quizzer MCQ Quiz!\n\nYou will get 5 questions. Choose a, b, c, or d.\nGood luck!");

    let score = 0;
    let report = "";

    for (let i = 0; i < quizQuestions.length; i++) {

        const q = quizQuestions[i];

        let mcqText =
            `Q${i + 1}: ${q.question}\n\n` +
            `a) ${q.options[0]}\n` +
            `b) ${q.options[1]}\n` +
            `c) ${q.options[2]}\n` +
            `d) ${q.options[3]}\n\n` +
            "Enter your answer (a/b/c/d):";

        let userAnswer = prompt(mcqText);

        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === q.answer) {
            score++;
            report += `Q${i + 1}: ✔ Correct\n`;
        } else {
            report += `Q${i + 1}: ❌ Wrong (Correct: ${q.answer})\n`;
        }
    }

    let percentage = (score / quizQuestions.length) * 100;

    alert(
        "📘 QUIZ REPORT CARD\n\n" +
        report +
        `\nTotal Score: ${score} / ${quizQuestions.length}\n` +
        `Percentage: ${percentage}%`
    );
}

// Auto-start quiz when page loads
runQuiz();
