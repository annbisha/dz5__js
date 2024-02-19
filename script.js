// alert([confirm("Ok?"), confirm("NOT Ok?"), confirm("Ok OR Not Ok?")]);

// arr = [];
// arr[0] = prompt("hello?");
// arr[1] = prompt("You?");
// arr[2] = prompt("We?");
// console.log(arr);

// arr = ["привіт", "пока", "допобачення"];
// let array = prompt("Введіть індекс масиву ");
// let arr_index = arr[array];

// alert(arr_index);
// console.log(arr.length);

// let arr = [];
// let array = prompt("Введіть знаення ідексу");
// let array2 = prompt("Введіть значення ");
// arr[array] = array2;
// console.log(arr[array]);

// arr = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4, 5],
//   [0, 2, 4, 6, 8, 10],
//   [0, 4, 8, 12, 16, 20],
//   [0, 5, 10, 15, 20, 25],
// ];
// arr[4][5];

// arr = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4, 5],
//   [0, 2, 4, 6, 8, 10],
//   [0, 4, 8, 12, 16, 20],
//   [0, 5, 10, 15, 20, 25],
// ];
// arr2 = arr.slice(1);
// arr2[0] = arr2[0].slice(1);
// arr2[1] = arr2[0].slice(1);
// arr2[2] = arr2[0].slice(1);
// arr2[3] = arr2[0].slice(1);
// console.log(arr2);

// let enterWord = prompt("Введіть рядок");
// let arrya = prompt("Введіть слово порядок якого хочете дізнатись");
// const arr = enterWord.split(" ");
// let element = arr.indexOf(arrya);
// if (element == -1) {
//   alert("Нема");
// } else console.log(element);

// let newElement = prompt("Введіть 5 елеметів ");
// const arr = [];
// const array = newElement.split(" ");

// arr.push(array[0]);
// arr.push(array[1]);
// arr.push(array[2]);
// arr.push(array[3]);
// arr.push(array[4]);

// // const newArr = [];

// // newArr.push(arr.pop());
// // newArr.push(arr.pop());
// // newArr.push(arr.pop());
// // newArr.push(arr.pop());
// // newArr.push(arr.pop());
// // console.log(newArr);

// const firstArr = [];
// firstArr.unshift(arr.shift());
// firstArr.unshift(arr.shift());
// firstArr.unshift(arr.shift());
// firstArr.unshift(arr.shift());
// firstArr.unshift(arr.shift());
// console.log(firstArr);

// arr = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4, 5],
//   [0, 2, 4, 6, 8, 10],
//   [0, 4, 8, 12, 16, 20],
//   [0, 5, 10, 15, 20, 25],
// ];
// arr[4][5];

// arr = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4, 5],
//   [0, 2, 4, 6, 8, 10],
//   [0, 4, 8, 12, 16, 20],
//   [0, 5, 10, 15, 20, 25],
// ];
// arr2 = arr.slice(1);
// arr2[0] = arr2[0].slice(1);
// arr2[1] = arr2[0].slice(1);
// arr2[2] = arr2[0].slice(1);
// arr2[3] = arr2[0].slice(1);

// const newArr = [...arr2];
// console.log(newArr);
// Array Equals
// const arr = [];
// const arr2 = arr;
// console.log(arr == arr2);..............

// arr = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4, 5],
//   [0, 2, 4, 6, 8, 10],
//   [0, 4, 8, 12, 16, 20],
//   [0, 5, 10, 15, 20, 25],
// ];
// arr[4][5];

// arr = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4, 5],
//   [0, 2, 4, 6, 8, 10],
//   [0, 4, 8, 12, 16, 20],
//   [0, 5, 10, 15, 20, 25],
// ];
// arr2 = arr.slice(1);
// arr2[0] = arr2[0].slice(1);
// arr2[1] = arr2[0].slice(1);
// arr2[2] = arr2[0].slice(1);
// arr2[3] = arr2[0].slice(1);
// arr2[4] = arr2[0].slice(1);
// arr2[5] = arr2[0].slice(1);
// let newArr = [
//   ...arr2[0],
//   ...arr2[1],
//   ...arr2[2],
//   ...arr2[3],
//   ...arr2[4],
//   ...arr2[5],
// ];
// console.log(newArr);

// let string = prompt("Введіть рядок ");

// const [firstLetter, , , , fifthLetter, , , , ninthLetter] = string;
// console.log("Перша літера:", firstLetter);
// console.log("П'ята літера:", fifthLetter);
// console.log("Дев'ята літера:", ninthLetter);

// const userInput = prompt("Введіть рядок:");

// let [secondLetter = '!', , fourthLetter = '!', fifthLetter = '!'] = userInput;
// console.log("Друга літера:", secondLetter);
// console.log("Четверта літера:", fourthLetter);
// console.log("П'ята літера:", fifthLetter);









//16 Multiply table rest
const arr = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25],
  ];
  

  const [, ...arr2] = arr; 
  const [[, ...slice1], [, ...slice2], [, ...slice3], [, ...slice4], [, ...slice5]] = arr2;
  const newArr = [...slice1, ...slice2, ...slice3, ...slice4, ...slice5].filter(item => item !== 0);
   console.log(newArr);
  

//17 For Alert
const names = ["John", "Paul", "George", "Ringo"];

for (const name of names) {
  alert(name);
}


//18 For Select Option
const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";

for (const currency of currencies) {
    str += `<option value="${currency}">${currency}</option>`;
}

str += "</select>";
document.write(str);


//19 For Table Horizontal
const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";

str += "<tr>"; 

for (const name of names) {
    str += `<td>${name}</td>`; 
}

str += "</tr>"; 
str += "</table>"; 

document.write(str); 


//20 For Table Vertical
const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";

for (const name of names) {
    str += "<tr>"; 
    str += `<td>${name}</td>`; 
    str += "</tr>"; 
}

str += "</table>"; 

document.write(str); 


//21 For Table Letters
if(howeWork==21){
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>"
    for (const currency of currencies){ 
        str += <tr>;
        console.log(currency)
        for (const letter of currency){ 
            str += <td>${letter}</td>
            console.log(letter)
        }
        str += </tr>;
    }
    str+= "</table>"
    document.write(str) 
}

//22 For Multiply Table
if(howeWork==22){
    let arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let str = "<table>"
    for (let number of arr.keys()){
    if (number % 2 == 0) {
        str += "<tr style='background-color: Tomato;'>";
    } else {
        str += "<tr style='background-color: DodgerBlue;'>";
    }
    for (let numbers of arr[number]) {
        str += <td style = 'text-align: center; border: 1px solid; width: 25px; height: 25px;'>${numbers}</td>;
    }
    str += "</tr>";
    }
    str += "</table>";
    document.write(str);
}

//23 Function Capitalize
if(howeWork==23){
    const capitalize = str => {
        let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
        return result 
    }
   console.log(capitalize("cANBerRa")) 
}

//24 Map Capitalize
if(howeWork==24){
    const capitalize = str => {
        let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
        return result
    }
    let sentense = prompt("Give a sentense").split(' ')
    let mapSentense = sentense.map(x => capitalize(x)).join(' ');
    alert(mapSentense)
}

//25 Filter Lexics
if(howeWork==25){
    let strFilter = prompt("Give a sentense").split(' ');
    let arr = ['lox', 'net', 'who'];
    let result = strFilter.filter(item => !arr.includes(item.toLowerCase())).join(' ');
    alert(result);
}

//26 Beep Lexics
if(howeWork==26){
    let strFilter = prompt('Enter the string').split(' ');
    let arr = ['lox', 'net', 'who'];
    let result = strFilter.map(item => arr.includes(item.toLowerCase()) ? 'BEEP' : item).join(' ');
    alert(result);
}

//27 Reduce HTML
if(howeWork==27){
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    str += currencies.reduce((a, b) => ${a}<option value='${b}'>${b}</option>, "")
    str += "</select>"
    document.write(str)
}

//28 For Brackets Hell Check
if(howeWork==28){
    const line = prompt()
    const bracketsStack = []
    let i = 0
    let errorIndex = -1
    
    for (const character of line) {
        if (character === '['  character === '('  character === '{') {
            bracketsStack.push(character) 
        } 
        else if (character === ']'  character === ')'  character === '}') {
            if (bracketsStack.length === 0) {
                errorIndex = i
                break
            }
            const lastOpeningBracket = bracketsStack.pop() 
            if (
                (character === ']' && lastOpeningBracket !== '[') 
                (character === ')' && lastOpeningBracket !== '(') 
                (character === '}' && lastOpeningBracket !== '{')
            ) {
                errorIndex = i
                break
            }
        }
    
        i++
    }
    
    if (errorIndex !== -1) {
        console.log(Помилка у позиції ${errorIndex})
    } 
    else {
        console.log('Рядок містить правильну послідовність дужок')
    }
}