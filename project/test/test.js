localStorage.setItem("array",JSON.stringify([1,2,3]));
let array = JSON.parse(localStorage.getItem("array"));
console.log(array)
array.push(4);
localStorage.setItem("array",array);
console.log(localStorage.getItem("array"));
