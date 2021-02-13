let boxes=document.querySelectorAll(".box")
let intervalId;
let Gameflag=false;
let index=1;
let globalId="";
let createdTime;
let sr=1;

function blink() {
    addLogs("start");
    intervalId=setInterval(callback,2000);
}
function callback() {
    Gameflag=true;    
    boxes[(index-1)%boxes.length].classList.remove("red");
    boxes[(index-1)%boxes.length].classList.add("white");
    
    boxes[(index)%boxes.length].classList.remove("white");
    boxes[(index)%boxes.length].classList.add("red");
    createdTime=new Date();
    index=index+1;
}

function check(e) {
    let currId=e.id;
    // console.log(currId);
    if (Gameflag==true && globalId!=currId) {
        globalId=currId;
        if (e.classList.contains("red")) {
            addLogs("red");
            let clickedTime=new Date();
            let reactionTime=clickedTime-createdTime;
            // alert("Reaction time: "+ reactionTime + " ms.");
            // location.reload();
            clearInterval(intervalId);
        }
        else{
            addLogs("white");
            
        }
    }
    else{
        alert("you cannot click a box more than once.")
    }
    
}

function addLogs(e) {
    let table=document.querySelector("table");
    let rows=document.querySelectorAll('table tr');
    let row;
    if(e=="start"){
        row=`
        <tr>
        <td>${sr}</td>
        <td>You Clicked ${e}</td>
        <td>abc</td>
        `
    }
    // console.log(e);
    else{
        row=`
            <tr>
            <td>${sr}</td>
            <td>You Clicked ${e}</td>
            <td>abc</td>
            `
    }    
    table.insertRow(rows.length-1).innerHTML=row;
    sr+=1;
}