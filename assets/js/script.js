
// for( let i=0 ; i<document.querySelectorAll('img').length ; i++){
//     console.log(document.querySelectorAll('img')[i]);
// }
// for( let i=0 ; i<document.querySelectorAll('p').length ; i++){
//     console.log(document.querySelectorAll('p')[i]);
// }

// function test(){
//     for( let element of document.querySelectorAll('img')){
//        element.src="https://static.blog4ever.com/2013/03/731698/artfichier_731698_8238411_201906025607257.png"
//     }
// }

document.querySelector('h1').addEventListener('click',() => {
    document.querySelectorAll('h1').forEach((elm) => {
        if (elm.style.color == 'blue'){
            elm.style.color = 'green'
        }
        else if(elm.style.color == 'green'){
            elm.style.color = 'pink'
        } else {
            elm.style.color = 'blue';
        }
    });
});