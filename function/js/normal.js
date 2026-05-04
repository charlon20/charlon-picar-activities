function normal() {
    //alert(withReturn(1, 2));
    const sum = withReturn(123, 456);
    alert("the sum is: " + sum);
}

function withParameter(name) {
    alert("Hello " + name);
}

function withReturn(num1, num2) {
    const sum = num1 + num2;

    return sum;
}
//function append (value) {
//            document.getElementById("display").value += 
//  value;
//        }
         
//        function  calculator() {
//            document.getElemetById("display").value =
      
//  eval(document.getElementById("display").value); 
//        }
        
//        function clearDisplay() {
//            document.getElementById("display").value =
//  "";
//        }