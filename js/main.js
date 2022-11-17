// creare pratofiorito

// dichiaro le constanti
const btn = document.getElementById("button")
let count = 0;


btn.addEventListener("click",

    function(){

        // creare le bombe
        const myArrNum = randomNumberNot(16, 1, 100)

        console.log(myArrNum)

        let myElement = document.getElementById("container")

        for(let i = 1; i<=100; i++){

            // console.log(number);

            let nuovoElemento = createGrid(i);

            myElement.appendChild(nuovoElemento);


            // click per colorare / scolorare il quadratino di blu
            nuovoElemento.addEventListener("click",
            
                function(){
                    

                    if(myArrNum.includes(i)){
                        nuovoElemento.classList.add("bomba");

                            if(count == 84){
                                document.getElementById("risultato_partita").innerHTML = `Hai vinto, prova a giocare al superenalotto perchè sei fortunato`;
                            }else{
                                document.getElementById("risultato_partita").innerHTML = `Mi dipiace, hai perso. Il tuo punteggio è di ${count}`;
                            }
                        

                        }else{
                        nuovoElemento.classList.add("save");
                        count += 1;
                    }
                    
                }
            );
        };
    }

    
    
);






