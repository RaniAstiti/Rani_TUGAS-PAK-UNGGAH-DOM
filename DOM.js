document.addEventListener("DOMContentLoaded", function() {
    const askButton = document.getElementById('ask-button');
    const questionInput = document.getElementById('question-input');
    const answerText = document.getElementById('answer');

    // Data koleksi
    const collections = {
        classic: "Classic literature offers timeless stories that shape our culture.",
        scifi: "Science fiction expands our imagination, exploring futuristic concepts.",
        mystery: "Mystery novels challenge readers to solve intriguing puzzles."
    };

    // Menjawab pertanyaan
    askButton.addEventListener('click', function() {
        const question = questionInput.value.toLowerCase();
        if (question.includes("classic")) {
            answerText.textContent = collections.classic;
        } else if (question.includes("science fiction") || question.includes("scifi")) {
            answerText.textContent = collections.scifi;
        } else if (question.includes("mystery")) {
            answerText.textContent = collections.mystery;
        } else {
            answerText.textContent = "Sorry, I don't have information on that topic.";
        }
        questionInput.value = "";  // Mengosongkan input setelah bertanya
    });
});
