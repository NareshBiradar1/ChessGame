let allBoxes = document.querySelectorAll(".chessBox");

let container = document.querySelector(".container");

let count=0;
let addBlackClass=true;

for(let i=0;i<allBoxes.length;i++){
    if(count%8==0){
        if(!addBlackClass){
            allBoxes[i].classList.add("dark");
        }
        else{
            allBoxes[i].classList.add("light");
        }
        count++;
        continue;
    }
    if(addBlackClass){
        allBoxes[i].classList.add("dark");
        addBlackClass=false;
    }
    else{
        allBoxes[i].classList.add("light");
        addBlackClass=true;
    }
    count++;
}

let swap = false;

container.addEventListener('click',function(e){
    
    if(!swap){
        if(e.target.classList[0]=="chessBox"){
            e.target.classList.add("active");
        }
        else{
            e.target.parentNode.classList.add("active");
        }
        swap=!swap;
    }
    else{
        swap=!swap;
        for(let i=0;i<allBoxes.length;i++){
            if(allBoxes[i].classList.contains("active")){
                let childIcon = (allBoxes[i].childNodes[0]);
                allBoxes[i].removeChild(allBoxes[i].childNodes[0]);
                e.target.appendChild(childIcon);
                allBoxes[i].classList.remove("active");
            }
        }
        
    }


})


