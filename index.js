const newArray = [];

function writeCards(name, eventName) {
    for (let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }

    return newArray;
}


function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(num)
        num--
    }
}
