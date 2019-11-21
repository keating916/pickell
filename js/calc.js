let display = document.getElementById("display");
let output = document.getElementById("output")
let disallowLetters = /[a-z]/gi
let disallowSymbols = /[\!\@\#\$\%\%\^\&\(\)\_\|\<\>\?\,]/g
let all = /[\*\/\+\-]/g
let m = /\*/
let d = /\//
let a = /\+/
let s = /\-/

let dot = document.getElementById("14");
dot.addEventListener("click", () => {
    dot.disabled = true;
})

for(let i = 0; i < 16; i++) {
    //add event listeners to each button
    let t = display.value.length;
    let button = document.getElementById(`${i}`)
    button.addEventListener('mouseover', e => {
        button.style.color = "white";
    })
    button.addEventListener('mouseout', e => {
        button.style.color = "black";
    })
    button.addEventListener("click", e => {
        if(button.value != "=") {
            changeDisplay(button)
        }else{
            let str = display.value;
            let t1 = disallowLetters.test(str)
            let t2 = disallowSymbols.test(str)
            if(t1 != false || t2 != false){
                clear()
                display.value = "I'm Sorry, only numbers and basic functions allowed!"
            }else{
            let i1 = getOps(str).join("")
            let i2 = str.split(all)
            multiOps(i1,i2)
            }
        }
    }) 
}
let backspace = document.getElementById("back");
backspace.addEventListener("click", e => {
    let d = display.value;
    d = d.split("")
    d.pop()
    display.value = d.join("")
})
backspace.addEventListener('mouseover', e => {
    backspace.style.color = "white";
})
backspace.addEventListener('mouseout', e => {
    backspace.style.color = "black";
})

function multiOps(arr1, arr2) {
    //arr1 is the array of operators
    //arr2 is the array of numbers entered
    let str = display.value;
    let times = arr1.length
    for(let i = 0; i < times; i++) { //iterate over how many operations were used
        if(arr1.search(m) != -1) { //search for multiplication first
            let opIndex = arr1.search(m);
            arr1 = arr1.replace(m,"") //remove the operator used
            let numbers = arr2.slice(opIndex, (opIndex+2))
            let sol = multiply(numbers[0],numbers[1])
            arr2.splice(opIndex,2, sol)//insert solution into array where it should be
        }else if(arr1.search(d) != -1) { // search for division
            let opIndex = arr1.search(d);
            arr1 = arr1.replace(d,"")
            let numbers = arr2.slice(opIndex, (opIndex+2))
            let sol = divide(numbers[0],numbers[1])
            arr2.splice(opIndex,2, sol)
        }else if(arr1.search(a) != -1) { //search for addition
            let opIndex = arr1.search(a);
            arr1 = arr1.replace(a,"")
            let numbers = arr2.slice(opIndex, (opIndex+2))
            let sol = add(numbers[0],numbers[1])
            arr2.splice(opIndex,2, sol)
        }else if(arr1.search(s) != -1) { //search for subtraction
            let opIndex = arr1.search(s);
            arr1 = arr1.replace(s,"")
            let numbers = arr2.slice(opIndex, (opIndex+2))
            let sol = subtract(numbers[0],numbers[1])
            arr2.splice(opIndex,2, sol)
        }
    }
    let sol = arr2[0]
    let tf = Number.isInteger(sol);
    console.log
    if(tf == true) {
        addHistory(str, sol);
        display.value = sol;
    }else{
        sol = Math.round(sol*100)/100;
        addHistory(str, sol)
        display.value = sol //display final product
    }
}

function getOps(string) {
    return string.match(all);
}
function changeDisplay(b) {
    if(display.value == 0) {
        display.value = b.value;
    }else{
        display.value = display.value + b.value;
    }
}
function addHistory(input, answer) {
    let out = document.createElement("p")
    out.textContent = `${input} = ${answer}`
    output.appendChild(out);
}

for(let i = 10; i < 17; i++) {
    if(i != 14) {
        let b = document.getElementById(`${i}`)
        b.addEventListener("click", ()=> {
            dot.disabled = false;
        })
    }
}

function clear() {
    display.value = 0;
}
let clearButton = document.getElementById('16');
clearButton.addEventListener('click', clear);
clearButton.addEventListener('mouseover', e => {
    clearButton.style.color = "white";
})
clearButton.addEventListener('mouseout', e => {
    clearButton.style.color = "black";
})

function add(a,b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a,b) {
    return a - b;
}

function divide(a, b) {
    return a/b;
}

function multiply(a,b) {
    return a * b;
}