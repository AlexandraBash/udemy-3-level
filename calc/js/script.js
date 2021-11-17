


// AJAX – это аббревиатура от «Asynchronous JavaScript and XML»,
/// которая дословно переводится как «асинхронный JavaScript и XML»
///  асинхронное выполнение задач на странице и общение с сервером

 ///status номер ошибки
        ///statusText текст описание ошибки (Not found)
        ///response ответ
        //readyState текущее состояние нашего запроса(3 - Loading 4-Done)
const inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');

    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();//request= запрос
        request.open('GET', 'js/current.json');//собирает настройки для запроса
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();


        request.addEventListener('load', () => {
            if(request.status === 200){
                const data = JSON.parse(request.response);/// перевели json в обычный обьект
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);///сделали логику конвертации валют с округлением до сотых
            }else{
                inputUsd.value = 'Что-то пошло не так';  
            } 
        });

//          ниже точно такой код как и над этой строкой

        // request.addEventListener('readystatechange', () => {
        //     if(request.readyState === 4 && request.status === 200){
        //         console.log(request.response);///результат вывели в консоль, обьект json
        //         const data = JSON.parse(request.response);/// перевели json в обычный обьект
        //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);///сделали логику конвертации валют с округлением до сотых
        //     }else{
        //         inputUsd.value = 'Что-то пошло не так';
        //     }
        // });//событие остлеживает статус готовности нашего запроса в текущий момент
    });

    