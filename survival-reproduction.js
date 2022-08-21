//survival difficulty
//console.log("hello")
let radioElems2 = document.querySelectorAll("input[type=radio][name=s_difflv]")
//console.log(); (radioElems2.length)

for (let radioElem2 of radioElems2) {
    console.log("line7  " + radioElem2.value);
    radioElem2.addEventListener('change', () => {
        console.log("line9  ");
        radioElem3 = document.querySelector('input[type=radio][name=s_difflv]:checked')
        console.log("selected from barry.js: " + radioElem3.value);
        if (!!radioElem3) {
            generate(radioElem3.value)
        }
    }
    )
}

// let radioElems4 = document.querySelectorAll("input[type=radio][name=r_difflv]")
// //console.log(); (radioElems2.length)

// for (let radioElem4 of radioElems4) {
//     console.log("line7  " + radioElem4.value);
//     radioElem4.addEventListener('change', () => {
//         console.log("line9  ");
//         radioElem5 = document.querySelector('input[type=radio][name=s_difflv]:checked')
//         console.log("selected from barry.js: " + radioElem5.value);
//         if (!!radioElem5) {
//             generate(radioElem5.value)
//         }
//     }
//     )
// }