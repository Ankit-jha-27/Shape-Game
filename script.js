// To select the elements of html give the shape(class) respective ids

let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

s1.addEventListener("mouseenter",function(){
    
    let x = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${x}</h1>`;
    
});

s1.addEventListener("mouseleave",function(){    
    s1.innerHTML = "<h1>1</h1>";
});


let flag = 1;
s2.addEventListener("mouseenter",function(){
    
    if(flag == 1){
        s2.style.backgroundColor = "red";
        flag = 0;
    }
    else if(flag == 0) {
        s2.style.backgroundColor = "green";
        flag = 2;
    }
    else{
        s2.style.backgroundColor = "blue";
        flag = 1;
    }
    
});

s2.addEventListener("mouseleave",function(){    
    s2.style.backgroundColor = "white";
});



s3.addEventListener("mouseenter",function(){

    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;

});

s3.addEventListener("mouseleave",function(){    
    s3.style.backgroundColor = "white";
});


s4.addEventListener("click",function(){

    let r4 = Math.floor(Math.random()*256);
    let r5 = Math.floor(Math.random()*256);
    let r6 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r4},${0},${0})`;
    s2.style.backgroundColor = `rgb(${0},${r5},${0})`;
    s3.style.backgroundColor = `rgb(${0},${0},${r6})`;

});

s4.addEventListener("mouseleave",function(){    
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
});
