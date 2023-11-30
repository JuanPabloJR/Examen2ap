//Mostar en pantalla una lista desordenada de eventos, guardados en un array 
//Arriba de la lista poner dos botones.
//Uno verde y otro rojo, el botón verde debe decir CREAR (izq) y el botón rojo ELEMINAR (dere)
//Arriba de los botones debe haber 1 input tipo texto donde se escriben los nombres de los eventos a agregar o eliminar

// let b1 = document.querySelector("#b11");
// let b2 = document.querySelector("#b22");

// b1.addEventListener("click", () => {
//     let input = document.querySelector("#ip").value;
//     document.getElementById("arr1").innerHTML += "<li></li>" + eventos.push(input);
    
// });

// b2.addEventListener("click", () => {
//     let input = document.querySelector("#ip").value;
//     document.getElementById("arr1").innerHTML += "<li></li>" + eventos.pop(input);
// });

// let eventos = ["click", "mouseenter", "mouseleave", "mousemove"];

// Dom("arr1", eventos);
// show(eventos);
// function show (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// function Dom(element, arr) {
//     document.getElementById(element).innerHTML = "";

//     for (let i = 0; i < arr.length; i++) {
//         document.getElementById(element).innerHTML += "<li></li>" + arr[i]; 
//     }
// }



let b1 = document.querySelector("#b11");
let b2 = document.querySelector("#b22");

let eventos = ["click", "mouseenter", "mouseleave", "mousemove", "load", "pause", "seeking", "resume", "keypress","select"];

Dom("arr1", eventos);
show(eventos);

b1.addEventListener("click", () => {
    let input = document.querySelector("#ip").value;
    eventos.unshift(input);
    updateList("arr1", eventos);
});

b2.addEventListener("click", () => {
    eventos.pop();
    updateList("arr1", eventos);
});

function show(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function Dom(element, arr) {
    document.getElementById(element).innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        document.getElementById(element).innerHTML += "<li>" + arr[i] + "</li>";
    }
}

function updateList(element, arr) {
    let list = document.getElementById(element);
    list.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        list.innerHTML += "<li>" + arr[i] + "</li>";
    }
}