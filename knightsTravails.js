const knigthMoves = {} ; 

for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
        let key = i+","+j;
        knigthMoves[key] = [];
    }
}

for(let a=0; a<8; a++){ 
    for(let b=0; b<8; b++){
        if(a+2<8){
            if(b+1<8){knigthMoves[a+","+b].push([a+2,b+1])}
            if(b-1>=0){knigthMoves[a+","+b].push([a+2,b-1])}
        }
        if(a-2>=0){
            if(b+1<8){knigthMoves[a+","+b].push([a-2,b+1])}
            if(b-1>=0){knigthMoves[a+","+b].push([a-2,b-1])}
        }
        if(a+1<8){
            if(b+2<8){knigthMoves[a+","+b].push([a+1,b+2])}
            if(b-2>=0){knigthMoves[a+","+b].push([a+1,b-2])}
        }
        if(a-1>=0){
            if(b+2<8){knigthMoves[a+","+b].push([a-1,b+2])}
            if(b-2>=0){knigthMoves[a+","+b].push([a-1,b-2])}
        }
    }
}


//insert the boxes in array form

const minPath = (startBox,endBox) => {
 
    const possiblePaths = []; 

    const minPathRec = (startRow,startCol,endRow,endCol,path,depth,justFoundDepths) => {
        
        let minFoundDepth = Math.min(...justFoundDepths);
        if (depth>63 || depth>minFoundDepth){return} 

        const startBox = knigthMoves[startRow+","+startCol];
        startBox.forEach(move =>{
            const newPath = path.map(box => box); 
            newPath.push(move);
            if(move[0]==endRow && move[1]==endCol){
                possiblePaths.push(newPath);
                justFoundDepths.push(depth);
                return;
            }
            minPathRec(move[0],move[1],endRow,endCol,newPath,depth+1,justFoundDepths);
        });
    }

    minPathRec(startBox[0],startBox[1],endBox[0],endBox[1],[[startBox[0],startBox[1]]],0,[]);

    const possiblePathsLengths = possiblePaths.map(path => { return {"path": path, "pathLength": path.length} });
    possiblePathsLengths.sort((a,b)=> a.pathLength - b.pathLength);
    return possiblePathsLengths[0].path; 
}


console.log("Min Path: " , minPath([0,0],[1,2]));
console.log("Min Path: " , minPath([0,0],[0,1]));
console.log("Min Path: " , minPath([0,0],[6,3]));
