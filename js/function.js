
let number 

// funzione per creare la griglia
function createGrid(number){

    // creazione elemento div
    const elemento = document.createElement("div");
    
    elemento.classList.add("box");

    elemento.innerHTML = `${number }`;

        // ritornare l'elemento per visualizzarlo
    
    console.log(elemento);

    // ritornalo
    return elemento;

}

// genera numeri random min max
function randomNumber(min, max){
    return (math.floor(math.random() * ((max + 1) - min) + min));
}

// genera numeri unici random senza doppioni
function randomNumberNot (howMany, minNum, maxNum){
    const newArr = []:

    // inserire i numeri nel array
    while (newArr.length < howMany){
        let newNumber = randomNumber(minNum, maxNum);

        if(!newArr.includes(newNumber)){

            newArr.push(newNumber);
        }
    }
}