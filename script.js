const input=document.querySelector("#guess");
const button=document.querySelector("#btn");
const answer =Math.floor(Math.random()*20)+1//генерируем число -загадонное компьютером
console.log(answer)
input.addEventListener("keypress",function(e){// добавляем нажатие на ентер
if(e.keyCode===13){ //entук код на клавиатуре 13
    play();
}
})
button.addEventListener("click",play);
function play(){// получение доступа к числу
    const userNubmer=document.querySelector("#guess").value;//Доступ к введеному значению с помощью value
    //console.log(userNubmer);
    if( userNubmer < 1 || userNubmer > 20){// ставим условие отбора числ от 1 до 20
        Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Введи число от 1 до 20',
            })
    }
    else if(isNaN(userNubmer)){
        Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Нужно ввести число',
            })
    }
    else{
         if(userNubmer < answer){//проверяем условие игры с компом
            Swal.fire('Попробуй число повыше','Компьютер пока побеждает')
         }
         else if(userNubmer > answer){
            Swal.fire('Попробуй число пониже','Компьютер пока побеждает')
         }
else{
    Swal.fire({ // ставим окно с картинкой победа
        title: 'ПОБЕДА',
       
        imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614843950_150-p-fon-s-sharikami-192.jpg',
        imageWidth: 600,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
}
    }
}

