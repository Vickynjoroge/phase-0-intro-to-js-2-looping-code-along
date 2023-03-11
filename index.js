let name = ["Guadalupe", "Ollie", "Aki"];
let event = ["Surprise"];

function writeCards(name, events) {
    const message = [];
    for (let i = 0; i < name.length; i++) {
            message.push(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);
    }
    return message;
}

function countDown (n){
    let countDown = n;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}

countDown(10);