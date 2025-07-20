let moveL = 50;
let moveT = 50;

// const box = document.getElementById("box");

// let leftStr = getComputedStyle(box).left;
// let topStr = getComputedStyle(box).top;

// let moveL = parseFloat(leftStr);  // "50%" or "200px" -> 50 or 200
// let moveT = parseFloat(topStr);


console.log( moveL , moveT );
let moves = 5;
const moveLeft = () =>
{
    if(moveL > 5){
    moveL = moveL - moves;
    }
    else
    {
        moveL = 5;
    }
    document.getElementById("box").style.left = moveL + '%';
    console.log(moveL)
}

const moveright = () =>
{
    if(moveL < 95){
    moveL = moveL + moves;
    }
    else
    {
        moveL = 95;
    }
    document.getElementById("box").style.left = moveL + '%';
    console.log(moveL);
}

const moveUp = () =>
{
    if(moveT > 5){
    moveT = moveT - moves;
    }
    else
    {
        moveT = 5;
    }
    document.getElementById("box").style.top = moveT + '%';
    console.log(moveT);
}

const moveDown = () =>
{
    
    if(moveT < 95)
    {
        moveT = moveT + moves;
    }
    else
    {
        moveT  = 95;
    }
    document.getElementById("box").style.top = moveT + '%';
    console.log(moveT);
}


const reset = () => 
{
    moveL = 50;
    moveT = 50;
    document.getElementById("box").style.left = moveL + '%';
    document.getElementById("box").style.top = moveT + '%';
    console.log("//Reseted to center")
    console.log(moveL);
    console.log(moveT);
    console.log("//Reseted to center")
}
