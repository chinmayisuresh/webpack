//console.log('hello world');
import a from './calc';

import "./index.css";

import icon from './icon.png'

var img=document.createElement('img');
img.src=icon;

img.classList.add('ic');
document.getElementById('icon').appendChild(img);

var ab=document.getElementById('button');
ab.addEventListener('click',create);

function create(){
    var b=document.getElementById('user');
    var c=document.createElement('input');
    
    
    c.classList.add('user');
    b.append(c);
}




// import  bookk from './book.jpg'

// function add(first,second){
//     return first+second;
// }

// const h1=document.createElement('h1');
// h1.innerHTML='hello webpack';
// h1.classList.add('redcolor');
// document.getElementById('root').appendChild(h1);


// const img=document.createElement('img');
// img.classList.add('img');
// img.src=bookk;

// document.getElementById('img').append(img);



// console.log(a(3,3));
// console.log(add(5,10));