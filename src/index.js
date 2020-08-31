const talk = require('talk-like-a');

function component() {
    const element = document.getElementById('here');

    element.innerHTML = talk.censor("hey how are you fuckface?");

    return element;
}

document.body.appendChild(component());
