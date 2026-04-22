import { micromark } from 'https://esm.sh/micromark@3?bundle'

console.log("starting the front-end");

const userId = crypto.randomUUID();

const inputField = document.querySelector("input");
const chatBox = document.querySelector("#chat-container");

const btn = document.querySelector("button");
btn.addEventListener("click", async (e) => {

    e.preventDefault();
    const userDiv = document.createElement("div");
    const userPrompt = inputField.value;

    userDiv.innerText = userPrompt;
    userDiv.classList.add("user-bubble");

    chatBox.append(userDiv);

    inputField.value = "";

    await sendChat(userPrompt)
});



async function sendChat(prompt) {

    btn.classList.add("Disabled");
    btn.disabled = true;
    btn.innerText = "Working..."

    try {
        const data = await fetch("./api/chat", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId, prompt: prompt })
        })

        const result = await data.json();
        // console.log(result.tokens);
        console.log(result.question);
        console.log(result.answers);
        console.log(result.questionNumber);
        console.log(result.score);
        console.log(result.userId);
        console.log(result.feedback);


        let botDiv = document.createElement("div");
        let botFeedback = document.createElement("div");
        let botQuestion = document.createElement("div");
        let botQuestionNumber = document.querySelector("#questionNumber");
        let botScore = document.querySelector("#score");
        let botTokens = document.createElement("div");
        let buttonsContainer = document.createElement("div");

        botFeedback.innerHTML = micromark(result.feedback);
        botQuestion.innerHTML = micromark(result.question);
        botTokens.innerText = `Tokens: ${result.tokens}`;
        botScore.innerText = `Score: ${result.score} / 10`;
        botQuestionNumber.innerText = `Question: ${result.questionNumber} / 10`;

        result.answers.map(answer => {
            let answerButton = document.createElement("button");
            answerButton.innerText = answer;

            answerButton.addEventListener("click", async (e) => {

                e.preventDefault();
                const userDiv = document.createElement("div");
                userDiv.innerText = answer;
                userDiv.classList.add("user-bubble");

                chatBox.append(userDiv);
                buttonsContainer.remove();

                await sendChat(answer);

            })

            buttonsContainer.append(answerButton);

        });


        botDiv.classList.add("bot-bubble");
        botTokens.classList.add("bot-tokens");

        botDiv.append(botFeedback, botQuestion, buttonsContainer, botTokens);

        chatBox.append(botDiv);

        btn.disabled = false;
        btn.innerText = "Send";
    } catch (error) {
        console.error("Something goes wrong:", error);
        btn.disabled = false;
    }
}


sendChat("Welcome me and explain what kind of quiz i can do. Ask me if i want to start it.");


