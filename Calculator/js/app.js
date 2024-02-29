let userNumber1 = Number(prompt('enter your number'));
let Mark = prompt('لطفا علامت خود را وارد کنید');
let userNumber2 = Number(prompt('enter your number'));
if(Mark == '+'){
    result = userNumber1 + userNumber2
}
else if(Mark == '-'){
    result = userNumber1 - userNumber2
}
else if(Mark == '*'){
    result = userNumber1 * userNumber2
}
else if(Mark == '**'){
    result = userNumber1 ** userNumber2
}
else if(Mark == '/'){
    result = userNumber1 / userNumber2
}
else if(Mark == '%'){
    result = userNumber1 % userNumber2
}
alert(result);