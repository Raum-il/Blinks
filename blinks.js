let boxes=document.querySelectorAll(".box")
let x;
let flag=false;
let y=1;
let globalId="";
let createdTime,clickedTime,reactionTime;
function timeset() {
    
}
function blink() {
    x=setInterval(callback,2000);
}
function callback() {
    flag=true;    
    boxes[(y-1)%boxes.length].classList.remove("red");
    boxes[(y-1)%boxes.length].classList.add("white");

    boxes[(y)%boxes.length].classList.remove("white");
    boxes[(y)%boxes.length].classList.add("red");
    createdTime=new Date();
    y=y+1;
}

    function check(e) {
        let currId=e.id;
        // console.log(currId);
        if (flag==true && globalId!=currId) {
            globalId=currId;
            if (e.classList.contains("red")) {
                clickedTime=new Date();
                reactionTime=clickedTime-createdTime;
                alert("Reaction time: "+ reactionTime + " ms.");
                location.reload();
                clearInterval(x);
            }
            else{
                
            }
        }
        else{
            alert("you cannot click a box more than once.")
        }
        
    }