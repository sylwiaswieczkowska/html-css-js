const BASE_URL = "http://it-pokemon.webappcraft.com";
let quizId;
let score = 0;

async function startQuiz() {
    const url = BASE_URL + "/quiz";
    const options = {
        method: "POST",
    };

    const response = await fetch(url, options);
    if (response.status === 200) {
        const result = await response.json();
        quizId = result.id;
        loadQuestion();
    }
}

function loadQuestion() {
    const url = BASE_URL + '/quiz/' + quizId + '/question';

    fetch(url).then((response) => {
        if (response.status === 200) {
            response.json().then((result) => {
                document.getElementById('question').textContent = result.name;
            });
        }
    });
}

async function answer(answer) {
    const url = BASE_URL + "/quiz/" + quizId + "/answer";
    const body = {
        answer: answer
    };
    const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json",
        },
    };

    const response = await fetch(url, options);
    console.log(response);
    if (response.status === 200) {
        const result = await response.json();
        if (result.correct) {
            document.getElementById('result').textContent = "Correct!";
            score++;
            document.getElementById('score').textContent = score;
        } else {
            document.getElementById('result').textContent = "incorrect...";
        }
    } else {
        console.log(await response.json());
    }
}
