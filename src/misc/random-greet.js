
function getRndInteger(min, max) {
    const res = Math.floor(Math.random() * (max - min) ) + min;
    return res-1;
  }

const randomGreet = (text) => {
    
    const dialogs=[
        `What’s crackin’?`,
        `How are ya, ${text}?`,
        `Hello ${text} 👋👋`,
        `Hallo ${text} 🇩🇪`,
        `Hey ${text} 😁`,
        `Sup ${text}?`
    ]
    const randomNum = getRndInteger(1,dialogs.length);
    const rand = dialogs[randomNum]
    return rand;
}

export default randomGreet;