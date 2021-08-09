//let button = document.querySelector('button') 
//button.addEventListner('click',funciton(){

//})
//function generatequotes{}
let myJson = 'https://animechan.vercel.app/api/quotes'
let body = document.querySelector('body');
let divMain = document.createElement('div');
body.appendChild(divMain);

fetch(myJson)
.then(function(response){
    return response.json();
})
.then(function(myJson){
    console.log(myJson)

    for(i=0; i<10; i++){
        display(myJson);
    }
    // let quote1 = document.createElement('p')
    // quote1.innerHTML = myJson[0].quote;
    // divMain.appendChild(quote1);

})

function display(element){
    let quote = document.createElement('p');
    quote.innerHTML = element[i].quote;
    divMain.appendChild(quote);


}