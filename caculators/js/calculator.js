const display = document.getElementById("display");

 function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
   function appendValue(value) {
            display.value += value;
        }
        function clearDisplay() {
            display.value = "";
        }

function clearOne() {
    display.value = display.value.slice(0, -1);
}
