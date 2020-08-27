
import spammer from 'talk-like-a';

function component() {
    const element = document.createElement('div');

    console.log(spammer("hey how are you fuckface?"));

    return element;
}

document.body.appendChild(component());