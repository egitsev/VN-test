const story = [

    {
        speaker: "",
        type: "thought",
        text: "Takina has been staring at me for approximately thirty-seven seconds."
    },

    {
        speaker: "Chisato",
        text: "Takinaaa."
    },

    {
        speaker: "Takina",
        text: "What?"
    },

    {
        speaker: "Chisato",
        text: "You're staring."
    },

    {
        speaker: "Takina",
        text: "I'm looking at you."
    },

    {
        speaker: "Chisato",
        text: "That's what staring means."
    },

    {
        speaker: "Takina",
        text: "Then yes."
    },

    {
        speaker: "",
        type: "thought",
        text: "No hesitation whatsoever."
    },

    {
        speaker: "Chisato",
        text: "Wow. At least pretend to be embarrassed."
    },

    {
        speaker: "Takina",
        text: "Why?"
    },

    {
        speaker: "Chisato",
        text: "Because you're supposed to go, 'No, Chisato, I wasn't staring at you!'"
    },

    {
        speaker: "Chisato",
        text: "And then I go, 'Takinaaa, don't lie to me!'"
    },

    {
        speaker: "Chisato",
        text: "Then you look away dramatically."
    },

    {
        speaker: "Takina",
        text: "That sounds inefficient."
    },

    {
        speaker: "Chisato",
        text: "Romance is inefficient."
    },

    {
        speaker: "Takina",
        text: "Romance?"
    },

    {
        speaker: "Chisato",
        text: "..."
    },

    {
        speaker: "",
        type: "thought",
        text: "Abort."
    },

    {
        speaker: "Chisato",
        text: "ANYWAY."
    },

    {
        speaker: "Chisato",
        text: "Why were you looking at me?"
    },

    {
        speaker: "Takina",
        text: "You have something on your face."
    },

    {
        speaker: "Chisato",
        text: "..."
    },

    {
        speaker: "",
        type: "thought",
        text: "Of course."
    },

    {
        speaker: "Chisato",
        text: "You could've just said that!"
    },

    {
        speaker: "Takina",
        text: "I was waiting to see if you noticed."
    },

    {
        speaker: "Chisato",
        text: "Takina."
    },

    {
        speaker: "Takina",
        text: "What?"
    },

    {
        speaker: "Chisato",
        text: "That's evil."
    },

    {
        speaker: "Takina",
        text: "Stay still."
    },

    {
        speaker: "Chisato",
        text: "Huh?"
    },

    {
        speaker: "",
        type: "thought",
        text: "She steps closer."
    },

    {
        speaker: "",
        type: "thought",
        text: "Closer."
    },

    {
        speaker: "",
        type: "thought",
        text: "...Very close."
    },

    {
        speaker: "Chisato",
        text: "Takina?"
    },

    {
        speaker: "Takina",
        text: "Stop moving."
    },

    {
        speaker: "",
        type: "thought",
        text: "Her hand reaches toward my face."
    },

    {
        speaker: "",
        type: "thought",
        text: "For some completely unreasonable reason, I forget how breathing works."
    },

    {
        speaker: "Takina",
        text: "There."
    },

    {
        speaker: "Chisato",
        text: "...There?"
    },

    {
        speaker: "Takina",
        text: "Whipped cream."
    },

    {
        speaker: "",
        type: "thought",
        text: "She holds up one finger."
    },

    {
        speaker: "",
        type: "thought",
        text: "A tiny spot of whipped cream sits on it."
    },

    {
        speaker: "Chisato",
        text: "Oh."
    },

    {
        speaker: "Takina",
        text: "You eat like a child."
    },

    {
        speaker: "Chisato",
        text: "Hey!"
    },

    {
        speaker: "Takina",
        text: "It's true."
    },

    {
        speaker: "Chisato",
        text: "And here I thought we were having a moment."
    },

    {
        speaker: "Takina",
        text: "A moment?"
    },

    {
        speaker: "Chisato",
        text: "Nothing."
    },

    {
        speaker: "Takina",
        text: "Chisato."
    },

    {
        speaker: "Chisato",
        text: "Nope."
    },

    {
        speaker: "Takina",
        text: "Chisato."
    },

    {
        speaker: "Chisato",
        text: "Can't hear you."
    },

    {
        speaker: "Takina",
        text: "Your face is red."
    },

    {
        speaker: "Chisato",
        text: "IT IS WARM IN HERE."
    },

    {
        speaker: "Takina",
        text: "The air conditioner is on."
    },

    {
        speaker: "Chisato",
        text: "Takina, please allow me to maintain some dignity."
    },

    {
        speaker: "Takina",
        text: "No."
    },

    {
        speaker: "",
        type: "thought",
        text: "Absolutely heartless."
    },

    {
        speaker: "",
        type: "thought",
        text: "...She's smiling, though."
    },

    {
        speaker: "Chisato",
        text: "You're enjoying this!"
    },

    {
        speaker: "Takina",
        text: "Maybe."
    },

    {
        speaker: "",
        type: "thought",
        text: "Oh."
    },

    {
        speaker: "",
        type: "thought",
        text: "That's somehow worse."
    }

];


let index = 0;

let skipping = false;
let skipTimer = null;

let typing = false;
let typeTimer = null;

let currentText = "";

const TYPE_SPEED = 28;


const nameBox = document.getElementById("name");
const dialogue = document.getElementById("dialogue");
const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");
const dialogueBox = document.getElementById("dialogueBox");
const stage = document.getElementById("stage");


function showLine(instant = false) {

    clearTimeout(typeTimer);

    const line = story[index];

    if (
    line.speaker === "Chisato" &&
    line.text === "ANYWAY."
) {
    shakeScreen();
}

    nameBox.textContent = line.speaker || "";
    currentText = line.text;

    if (line.type === "thought") {
        dialogue.classList.add("thought");
    } else {
        dialogue.classList.remove("thought");
    }

    dialogue.textContent = "";

    if (instant) {
        dialogue.textContent = currentText;
        typing = false;
        return;
    }

    typing = true;

    let charIndex = 0;

    function typeCharacter() {

        dialogue.textContent =
            currentText.slice(0, charIndex + 1);

        charIndex++;

        if (charIndex < currentText.length) {

            typeTimer = setTimeout(
                typeCharacter,
                TYPE_SPEED
            );

        } else {

            typing = false;

        }
    }

    typeCharacter();
}


function finishTyping() {

    if (!typing) {
        return false;
    }

    clearTimeout(typeTimer);

    dialogue.textContent = currentText;

    typing = false;

    return true;
}


function nextLine() {

    if (finishTyping()) {
        return;
    }

    if (index >= story.length - 1) {

        stopSkip();

        nameBox.textContent = "";
        dialogue.textContent = "END";

        return;
    }

    index++;

    showLine();
}


function skipStep() {

    clearTimeout(typeTimer);

    typing = false;

    if (index >= story.length - 1) {

        stopSkip();

        nameBox.textContent = "";
        dialogue.textContent = "END";

        return;
    }

    index++;

    showLine(true);
}


function startSkip() {

    if (skipping) return;

    skipping = true;

    skipButton.textContent = "STOP";

    finishTyping();

    skipTimer = setInterval(
        skipStep,
        140
    );
}


function stopSkip() {

    skipping = false;

    skipButton.textContent = "SKIP";

    clearInterval(skipTimer);

    skipTimer = null;
}


function toggleSkip() {

    if (skipping) {
        stopSkip();
    } else {
        startSkip();
    }
}


nextButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        nextLine();

    }
);


skipButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        toggleSkip();

    }
);


dialogueBox.addEventListener(
    "click",
    nextLine
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.code === "Enter" ||
            event.code === "Space"
        ) {

            event.preventDefault();

            nextLine();
        }


        if (
            event.key.toLowerCase() === "s"
        ) {

            toggleSkip();
        }

    }
);


function resizeStage() {

    const x = window.innerWidth / 800;
    const y = window.innerHeight / 600;

    const scale = Math.min(x, y);

    stage.style.setProperty("--stage-scale", scale);
}


window.addEventListener(
    "resize",
    resizeStage
);


showLine();
resizeStage();

function shakeScreen() {

    stage.classList.remove("shake");

    void stage.offsetWidth;

    stage.classList.add("shake");

    shakeSFX.currentTime = 0;
    shakeSFX.play();
}

const shakeSFX = new Audio("objection.mov");
shakeSFX.preload = "auto";
shakeSFX.volume = 0.7;