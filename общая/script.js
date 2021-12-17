
// /////        JSON - текстовый формат обмена данными
// ////JavaScript Object Notation - описание объекта в Javascript.
// ////  с помощью JSON можем создавать глубокие копии
// const persone = {
//     name: 'Alex',
//     tel: '+557493', 
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };
// // console.log(JSON.stringify(persone));/////переводим обьект в JSON
// // console.log(JSON.parse(JSON.stringify(persone)));///переводим JSON обратно в обычный обьект

// const clone = JSON.parse(JSON.stringify(persone));///создали глубокую копию обьекта persone
// clone.parents.mom = 'Ann';///изменили в копии одно значение
// console.log(persone);
// console.log(clone);///вывели независимую копию с изменениями



///////     PROMISE  
///обещания, работа с асинхронными операциями (таймауты, запросы на сервер)

//1 пример

console.log('Запрос данных...');
const req = new Promise((resolve, reject) =>{
setTimeout(() =>{
console.log('Подготовка данных...');
const product = {
    name: 'TV',
    price: 2000
};
resolve(product); 
}, 2000);
}); ////resolve-обещание выполнено///reject -  чтото пошло не так
req.then((product) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          product.status = 'order';
          resolve(product);
      }, 2000);
  });
}).then(data => {
   data.modify = true;
   return data;
}).then(data => {
      console.log(data);
  }).catch(() => {
    console.error('Произошла ошибка');
  }).finally(() => {
    console.log('Finally');
  });

//2 пример

  const test = time => {
    return new Promise(resolve =>{
      setTimeout(() => resolve(), time);
    });
  };
  // test(1000).then(() => console.log('1000 ms'));
  // test(2000).then(() => console.log('2000 ms'));
  Promise.all([test(1000), test(2000)]).then(() =>{
    console.log('All');
  }); //ждет окончания всех промисов и только потом будет что-то выполнять
  Promise.race([test(1000), test(2000)]).then(() =>{
    console.log('All');
  });//выполняется только когда самый первый promise отработал


//////     API  - интерфейс програмного обеспечения application programm interface
// набор данных и возможностей который предоставляет нам готовое решение

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({name: 'Alex'}),
  headers: {
      'Content-type': 'application/json'
  }
})
.then(response => response.json())
.then(json => console.log(json));


  ///ФУНКЦИИ - ГЕНЕРАТОРЫ 

  function* count(n){
    for(let i = 0; i < n; i++){
      yield i;
    }
  }
  // const counter = count(7);
  // console.log(counter.next().value);
  // console.log(counter.next().value);
  // console.log(counter.next().value);///нужно 7 раз прописать
  for(let k of count(7)){
    console.log(k);//раз прописать
  }//более удобный способ

  