 var display = document.getElementById("inputBox");
 var buttons = document.querySelectorAll("button");

var buttonsArray = Array.from(buttons);

var string = "";

buttonsArray.forEach(btn => {
    
    btn.addEventListener("click",(e) => {

        if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            display.value = string;
        }else if(e.target.innerHTML  == "AC"){
            string = "";
            display.value = string;
        }else if(e.target.innerHTML  == "="){
                string = eval(string);
                display.value = string;
        }
        else{
        string += e.target.innerHTML;
        display.value = string;
        }
    });    
    });
