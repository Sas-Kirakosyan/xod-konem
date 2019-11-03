let chess = [
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0]
];


function drow(){
    let container =  document.querySelector('#feild');
   let grid = '';
    let   count = 0;
       for(let i = 0; i< chess.length; i++){
           let vertArr = chess[i];
           for(let j=0; j<vertArr.length; j++){
            let grid =  document.createElement('DIV');
            grid.setAttribute('class','chess-block');
            container.append(grid);
            console.log(grid);
            count++;
            
            // grid.setAttribute('dataY', j) 
            if(count%2 ===0){ 
                grid.setAttribute('data-X', i);
               grid.style.background = 'black';
               grid.setAttribute('data-Y', j);
              
            }else{//odd numbers
                 grid.style.background = 'greenyellow';
                 grid.setAttribute('data-X', i);
                
                 grid.setAttribute('data-Y', j);
               }
               
             }
        count++;
    }
    
}
drow()


