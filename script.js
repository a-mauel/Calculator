// number function, passes a number string when being invoked.
const numb = number => {
  let screen = document.getElementById('textScreen');
   screen.value += number;
};

// Result function to calculate the result of the textscreen.
const result = () => {
    let input = document.getElementById('textScreen');
    let inputValue = input.value;
    let output = eval(inputValue); 
    if (inputValue.length < 20) {
        input.value = `${inputValue} = ${output}`;
    } else {
        input.value = output;
    };
};
// clear function; to clear the screen result when invoked.
const Clr = () => {
    let clear = document.getElementById('textScreen');
    clear.value = '';
};
 