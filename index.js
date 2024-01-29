function is2DArrayContains1DArray(arr2D, arr1D) {
    for (var i = 0; i < arr2D.length; i++) {
      var currentRow = arr2D[i];
  
      // Check if the length of the current row matches the length of the target 1D array
      if (currentRow.length === arr1D.length) {
        // Check if each element in the current row is equal to the corresponding element in the target 1D array
        var match = true;
        for (var j = 0; j < currentRow.length; j++) {
          if (currentRow[j] !== arr1D[j]) {
            match = false;
            break; // exit the loop early if a mismatch is found
          }
        }
  
        // If all elements match, return true
        if (match) {
          return true;
        }
      }
    }
  
    // If no match is found, return false
    return false;
  }

  function showError(data){
    heading.innerHTML=data;

    setTimeout(function() {
        heading.innerHTML = '';
    }, 1000);
  }

let allBoxes = document.querySelectorAll(".chessBox");

let container = document.querySelector(".container");

let heading = document.querySelector(".heading")

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
        let prevBox;
        for(let i=0;i<allBoxes.length;i++){
            if(allBoxes[i].classList.contains("active")){
                prevBox =allBoxes[i];
                allBoxes[i].classList.remove("active");
            }
        }
        let curPos = [Number(e.target.classList[1]) , Number(e.target.classList[2])];
        let prevPos = [Number(prevBox.classList[1]) , Number(prevBox.classList[2])];

        if(curPos[0]>10) curPos[0]=curPos[0]%10;
        if(curPos[1]>10) curPos[1]=curPos[1]%10;
        if(prevPos[0]>10) prevPos[0]=prevPos[0]%10;
        if(prevPos[1]>10) prevPos[1]=prevPos[1]%10;

        console.log(prevPos,curPos);
        let post = prevBox.classList[4];
        let colour = prevBox.classList[3];
        
        console.log(post,colour);
        let possibleMoves;
        
        if(post=="soldier"){
            if(prevPos[0]=='2' || colour=="white"){
                possibleMoves = [[prevPos[0]+1,prevPos[1]],[prevPos[0]+2,prevPos[1]]];
                console.log(possibleMoves);
            }
            else if(prevPos[0]=='7' || colour=="black"){
                possibleMoves = [[prevPos[0]-1,prevPos[1]],[prevPos[0]-2,prevPos[1]]];
                console.log(possibleMoves);
            }
            else if(colour=="white"){
                possibleMoves = [[prevPos[0]+1,prevPos[1]]];
                console.log(possibleMoves);
            }
            else{
                possibleMoves = [[prevPos[0]-1,prevPos[1]]];
                console.log(possibleMoves);
            }
            // if(prevPos)

            if(is2DArrayContains1DArray(possibleMoves,curPos)){
                let childIcon=prevBox.childNodes[0];
                prevBox.removeChild(prevBox.childNodes[0]);
                e.target.appendChild(childIcon);
            }
            else{
                showError("Invalid Move");
            }
        }
        else if(post=="elephant"){

        }
        else if(post=="horse"){
            
        }
        else if(post=="camel"){
            
        }
        else if(post=="queen"){
            
        }
        else if(post=="king"){
            
        }
    }


})


