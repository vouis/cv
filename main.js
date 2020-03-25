let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `/*右边展示一个div*/
 #div1{
     border:1px solid red;
     width:200px;
     height:200px;
 }
 /*div八卦
 把div变成圆形*/
 #div1{
    border-radius:50%;
    box-shadow:0 0 1px black;
    border:none;
}
/*
颜色*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加球*/
#div1::before {
    width: 50%;
    height: 50%;
    left: 25%;
    top: 0;
    background: black;
    border-radius: 50%;
   
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 50%;
    height: 50%;
    left: 25%;
    bottom: 0;
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*球中间*/

`;
let string2 = '';
//string = string.replace(/\n/g, "<br>");
let n = 0;
//0,0空和0,1第一个字符

let step = () => {
    setTimeout(() => {
        if (n > string.length - 1) return;
        if (string[n] === '\n') {
            string2 = string2 + '<br>'
        }
        else if (string[n] === ' ') {
            string2 = string2 + '&nbsp;';
        }
        else {
            string2 = string2 + string[n];
        }
        console.log(string.substring(0, n + 1))
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n + 1);
        n = n + 1;
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        step();

    }, 5);
}
step();


