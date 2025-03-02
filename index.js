const container = document.querySelector(".container")

let check = Array(300).fill(0);

let BombSpot = Array(300).fill(0);

let cntBomb=0;
while(cntBomb!=40){
    let RandomSpot=Math.floor(Math.random()*289)
    if(BombSpot[RandomSpot]===0){
        BombSpot[RandomSpot]=1;
        cntBomb++;
    }
}


let colorcnt=0;

for(let i=1;i<=17;i++){
    for(let j=1;j<=17;j++){
        colorcnt++;
        const box = document.createElement("div")
        box.classList.add("box");
        
        if(colorcnt%2){
            box.style.backgroundColor="green"
        }
        else{
            box.style.backgroundColor="Chartreuse"
        }
        container.appendChild(box);
    }
}

const box = document.querySelectorAll(".box");

let clickcnt=0;
for(let i=0;i<box.length;i++){
    box[i].addEventListener("click",()=>{
        box[i].style.backgroundColor="BlanchedAlmond";
        box[i].classList.add("clicked");
        if(BombSpot[i]===1){
            alert("YOU LOSER");
            location.reload();
        }
        if(check[i]===0){
            clickcnt++;
            check[i]=1;
        }
        console.log(clickcnt)
        if(clickcnt===20){
            alert("YOU WIN")
            location.reload();
        }
    })
    box[i].addEventListener("contextmenu",(event)=>{
        event.preventDefault();
        alert("YOU RIGHT CLICK");
    })
}
console.log("HELLO")



