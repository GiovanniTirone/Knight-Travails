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
/*
const index = (box) => {
    let j = box.indexOf();
    let i = knigthMoves[]
    return [box.indexOf().in, indexOf();
}


const minPath = (start, end, box, depth) => {
    if (depth>63){return} 
    start.forEach(move =>{
        possiblePaths.push({move}); 
        if(move == end){return}
        minPath(move, end, box.nextMoves.,depth+1);
    });
    start.forEach(move => {
        
        minPath(move, end, ,depth+1);
    });
}
*/