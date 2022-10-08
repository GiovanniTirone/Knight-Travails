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


for(let a=0; a<8; a++){ 
    for(let b=0; b<8; b++){
        console.log("Possible moves for the box (" + a + "," + b +") : ");
        knigthMoves[a+","+b].forEach(move => console.log(move));
    }
}
//MAX DEPTH = 63

const start = {
    startingBox : [],
    nextMoves : [], 
}

const box = {
    box : [],
    nextMoves : [],
}


//insert the box in array form

const minPath = (startBox,endBox) => {
 
    const possiblePaths = []; 

    const minPathRec = (startRow,startCol,endRow,endCol,path,depth) => {
        if (depth>63){return} //rivedere
        const startBox = knigthMoves[startRow+","+startCol];
        startBox.forEach(move =>{
            const newPath = path.map(box => box); 
            newPath.push(move);
            if(move[0]==endRow && move[1]==endCol){
                possiblePaths.push(newPath);
                return;
            }
            minPathRec(move[0],move[1],endRow,endCol,newPath,depth+1);
        });
    }

    minPathRec(startBox[0],startBox[1],endBox[0],endBox[1],[[startBox[0],startBox[1]]],0);

    const possiblePathsLengths = possiblePaths.map(path => { return {"path": path, "pathLength": path.length} });
    mergeSort(possiblePathsLengths); 
    return possiblePathsLengths[0]["path"];
}


function mergeSort (arr) {
    const l = arr.length;
    const m = Math.floor(l/2);

    if(l==2){return merge(arr.slice(0,1),arr.slice(1))}
    else if(l==3){return merge(mergeSort(arr.slice(0,2)),arr.slice(2))}
    else{return merge(mergeSort(arr.slice(0,m)),mergeSort(arr.slice(m)))}
}


function merge (ar1,ar2) {
    const l1 = ar1.length;
    const l2 = ar2.length; 
    if(l1==0){return ar2}
    if(l2==0){return ar1}
        
    if(ar1[0]["pathLength"]<ar2[0]["pathLength"]){
        return [ar1.shift()].concat(merge(ar1,ar2));
    }
    else{
        return [ar2.shift()].concat(merge(ar1,ar2));
    }
}
