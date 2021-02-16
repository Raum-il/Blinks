let boxes=document.querySelectorAll(".box")
let intervalId;
let Gameflag=false;
let index=1;
let globalId="";
let createdTime;
let reactionTime;
let time;
let sr=1;

function blink() {
    addLogs("start");
    intervalId=setInterval(callback,1000);
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
    let msg=document.querySelector(".message")
    // console.log(currId);
    if (Gameflag==true) {
        if (globalId!=currId) {
            globalId=currId;
            if (e.classList.contains("red")) {
                let clickedTime=new Date();
                reactionTime=clickedTime-createdTime;
                msg.style.display="block"

                // alert("Reaction time: "+ reactionTime + " ms.");
                // location.reload();
                clearInterval(intervalId);
                addLogs("red");
            }
            else{
                let today = new Date();
                time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                addLogs("white");
                
            }
            
        }
        else{
            alert("You cannot click a box more than once.")

        }
    }
    else{
        alert("Please press *START* button")
    }
    
}

function addLogs(e) {
    let table=document.querySelector("table");
    let rows=document.querySelectorAll('table tr');
    let row;
    let strt=new Date();
    if(e=="start"){
        row=`
        <tr class="table table-info">
        <td class="table-info">${sr}</td>
        <td class="table-info">You Clicked ${e}</td>
        <td class="table-info">${strt.getHours() + ":" + strt.getMinutes() + ":" + strt.getSeconds()}</td>
        </tr>
        `
    }
    // console.log(e);
    else{
        if (e=="red") {
            row=`
                <tr class="table table-success">
                <td class="table-success">${sr}</td>
                <td class="table-success">You Clicked ${e}</td>
                <td class="table-success">${reactionTime}</td>
                </tr>
                `
            }
            else{
            row=`
                <tr class="table table-danger">
                <td class="table-danger">${sr}</td>
                <td class="table-danger">You Clicked ${e}</td>
                <td class="table-danger">${time}</td>
                </tr>
                `

        }
    }    
    table.insertRow(rows.length).innerHTML=row;
    sr+=1;
}
function stop() {
    location.reload();
}