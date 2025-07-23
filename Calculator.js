// Calculator working functionalities

const onDisplay = (value) =>
{

    let new_T = document.getElementById("answer").innerText + value;
    document.getElementById("answer").innerText = new_T.replace('*', 'x');
    let scr = document.getElementById("answer").innerText;
    document.getElementById("answer").innerText = scr;
}

const onClear = () =>
{
    document.getElementById("answer").innerText = "";
}

const onDel = () =>
{
    let current = document.getElementById("answer").innerText;
    document.getElementById("answer").innerText = current.slice(0,-1);
}

const calculate = () =>
{
    let new_T = document.getElementById("answer").innerText;
    document.getElementById("answer").innerText = new_T.replace('x', '*');

    let expression = document.getElementById("answer").innerText;
    document.getElementById("answer").innerText = eval(expression);
}