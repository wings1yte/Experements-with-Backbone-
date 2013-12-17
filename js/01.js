window.onload=function (){
document.getElementById("active1").addEventListener("click", function() {

// First task
// Задать многомерный массив 
// Вывести массив по спирали
/*(function () {
    var a=[[],[]], n=1;
    a.length=100;
    for (var i=0; i<2; i++){
        for (var j=0; j<=99; j++){
            a[i][j]=n;
            n++;
        }
    };
    console.dir(a);
}());*/


// Second task
// Вывести все простые числа от z до 1
// console.log("Second");
/*(function (){
    z=999;
    for (var m=z; m>0; m-=1) {
        var i=m,
        a=[],
        n=0; 

        while (i>1) {
            if (m%(i-1)===0){
                a[n]=(i-1);
                n++; 
            };
            i--;
        }
        if (a.length==1){
            console.log(m);
        };
    }; 
   
    // console.dir(a)
}());


// second better variant of second task
// Вывести все простые числа от z до 1
console.log("second better variant of second task");
n=+prompt('Enter a number');
a=[];
date= new Date();
(function (){
    for (i=2; i<n; i++){
        isPrime=true;
        for (j=2; j<Math.sqrt(i); j++) {
            if (i%j===0) {
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            a.push(i);
        }
    }
endTime = new Date();
fullTime = endTime-date;
console.log("Time:", fullTime.toString(), "Milliseconds");
console.log(a);
}());*/


// Thirth task
//Создать и заполнить список учеников А-Г класса с 1 по 11. Отсортировать списки.
// console.log("3 task");
/*(function () {
var a=[[],[],[],[]]; 
for (var i=0; i<4; i++) { 
    for (j=0; j<11; j++) {
        a[i][j]=Math.round(Math.random()*100);
    }
};
for (var n=0, mm=a.length; n<mm; n++){
    for (var j=1, max=a[n].length; j<max; j++) {
        key=a[n][j]; 
        i=j-1;  
        while (i>=0 && a[n][i]>key) {
            a[n][i+1]=a[n][i];
            i--;
        }; 
        a[n][i+1]=key;
    };
}
console.dir(a);
}());*/


//Fouth task
//

/*(function() {
    var a=[], 
    n=+prompt('Enter a width of Array'), 
    m=+prompt('Enter a higth of Array'); 
    for (var i=0; i<n; i++) {
        a[i]=[];
         a[i].length=m;
         for (var j=0; j<m; j++){
            a[i][j]=Math.round(Math.random()*100)
        }
    };
    // for (var i=0, max=a.length; i<max; i++){
    //     console.log(a[0][i]);
    // }
    console.dir(a);
}());
*/


(function() {
function test (a) {
    var count=0, max=a.length, b=[];
    b.length=max;
    // for (var i=0; i<max; i++){b[i]=0}

    for (var i=0; i<max; i++) {
       var m=a[i];
       count+=b[m];
       b[m]+=1;
    }
    console.log(count); 
};  
    //Test
var a=[];
a.length=+prompt("Enter the length of Array");
for (var i=0, max=a.length; i<max; i++) {
    a[i]=Math.round(Math.random()*10); 
}
console.log(a);
date= new Date(); //Control of Time
test(a);
endTime = new Date();
console.log("Time:", ( endTime-date).toString(), "Milliseconds");
}())

 
//
},false);   
};