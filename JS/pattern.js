// 1. Right-Angled Triangle:
for(let i=1;i<=5;i++){
    let star = "";
    for(let j=1;j<=i;j++){
        star += "*";
    }console.log(star);
}

// 2. Solid Rectangle:
for(let i=1;i<=5;i++){
    let solid ="";
    for(let j=1;j<=7;j++){
        solid += "*";
    }console.log(solid);
}

// 3. Inverted Triangle:
for(let i=5;i>=1;i--){
    let inv = "";
    for(let j=1;j<=i;j++){
        inv += "*";
    }console.log(inv);
}

// 4. Pyramid:
let pyr ='';
for(let i=1;i<=5;i++){
    
    for(let j=1;j<=5-i;j++){
        pyr += " ";
    }
    for(let k=1; k<=2*i-1; k++){
        pyr += "*";
    }
    pyr +='\n';
}
console.log(pyr);

//5. Inverted Pyramid:
let inp = '';
for(let i=5;i>=1;i--){
    for(let j=1;j<=5-i;j++){
        inp += " ";
    }
    for(let k=1;k<=2*i-1;k++){
        inp +="*";
    }
    inp +='\n';
}console.log(inp);

// 6. Hollow Rectangle:
let width = 7;
let height = 5;
let holl = '';

for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
        if (i === 1 || i === height || j === 1 || j === width) {
            holl += '*';
        } else {
            holl += ' ';
        }
    }
    holl += '\n';
}
console.log(holl);

//7. Cross: 
let cross = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i === j || j === 5 - i + 1) {
            cross += '*';
        } else {
            cross += ' ';
        }
    }
    cross += '\n';
}
console.log(cross);

//8. X
let x = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i === j || j === 5 - i + 1) {
            x += '*';
        } else {
            x += ' ';
        }
    }
    x += '\n';
}
console.log(x);

// 9. Number Triangle:
for(let i=1;i<=5;i++){
    let tri = "";
    for(let j=1;j<=i;j++){
        tri += j;
    }console.log(tri);
}

// 10. Repeated Number Triangle:
for(let i=1;i<=5;i++){
    let rtri = "";
    for(let j=1;j<=i;j++){
        rtri += i;
    }console.log(rtri);
}

//11. Inverted Number Triangle:
for(let i=5;i>=1;i--){
    let intri ="";
    for(let j =1;j<=i;j++){
        intri += j;
    }console.log(intri);
}

//12. Inverted Number Square:
for(let i=1;i<=5;i++){
    let insqr ="";
    for(let j=5;j>=1;j--){
        insqr += j;
        
    }console.log(insqr);
}

//13. Right-Aligned Triangle:
let rtri = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        rtri += ' ';
    }
    for (let k = 1; k <= i; k++) {
        rtri += '*';
    }
    rtri += '\n';
}
console.log(rtri);


//14. Inverted Number Ladder:
for(let i=5;i>=1;i--){
    let lad = "";
    for(let j=1;j<=i;j++){
        lad += j;
    }console.log(lad);
}

//15. Alphabet Triangle:
let alpha = '';

for (let i = 1; i <= 5; i++) {
    let charCode = 65; 
    for (let j = 1; j <= i; j++) {
        alpha += String.fromCharCode(charCode);
        charCode++;
    }
    alpha += '\n';
}
console.log(alpha);
