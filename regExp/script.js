

// new RegExp('pattern', 'flags');
// /pattern/f

const ans = prompt('Ведите Ваше имя!');
const reg = /n/ig;
console.log(reg.test(ans));


// console.log(ans.match(reg));//получаем массив
// console.log(ans.search(reg));


// const pass = prompt('Password');
// // console.log(pass.replace(/./g, '*'));
// console.log('12-34-56'.replace(/-/g, ':'));