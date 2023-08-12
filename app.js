let screen = document.querySelector(".screen");
screen.innerText=0
let string="";

let buttons = document.querySelectorAll(".key");
buttons.forEach(element => {
    element.addEventListener("click",(e)=>{
        e.stopPropagation();
        document.querySelector(".normal-sound").play()
        console.log(e.target);
        try{
            if(e.target.innerText=="="){
                string= eval(string);
                screen.innerText = string;
            }else if(e.target.innerText=="AC"){
                string="";
                screen.innerText = string;
            }else if(e.target.innerText=="C"){
                string = string.slice(0,(string.length-1));
                screen.innerText = string;
            }
            else{
                string= string+ e.target.innerHTML;
                console.log(string);
                screen.innerText = string;
            };
        }catch{
            screen.innerText = "INVALID-INPUT";
        }
    });
});
