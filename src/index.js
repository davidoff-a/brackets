"use strict";
module.exports = function check(str, bracketsConfig) {
// let str = "|()|(||)||",
//     bracketsConfig = [
//         ["(", ")"],
//         ["[", "]"],
//         ["{", "}"],
//         ["|", "|"],
//     ];

// парный поиск
let brackets = "";
let strNew = str;
let strTemp;
brackets = bracketsConfig.map((item) => item.join(""));

function downString(index, strLine){
    if (strNew.indexOf(strLine) >= 0 && strNew.length > 1){
    strTemp =
        strNew.slice(0, index) +
        strNew.slice(index + 2, strNew.length);
    strNew = strTemp;}
}
for (let count=0; count<=str.length/2; count++){
    brackets.map((item)=>downString(strNew.indexOf(item),item));
}
if ((strNew === "")) {
    return true;
} else {
    return false;
}





// поиск по одной скобке
// let strNew = "";
// let flag = false;

// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < bracketsConfig.length; j++) {
//         if (bracketsConfig[j][0] === str[i]&&flag===false) {
//             strNew += str[i];
//             if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
//                 flag = true;
//             }
//             console.log(strNew);
//         } else if (
//             bracketsConfig[j][1] === str[i] &&
//             bracketsConfig[j][0] === strNew[strNew.length - 1]
//         ) {
//             strNew = strNew.slice(0, strNew.length - 1);
//             console.log(strNew);
//         } /* else {
//                 return false;
//             } */
//     }
// }
// if (strNew.length === 0) {
//     console.log("true");
//     // return true;
// } else {
//     console.log("false");
//     // return false;
};

