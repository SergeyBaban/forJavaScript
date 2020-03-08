function makeNums(){
    let newTable = document.createElement( 'table' );
    let k = 0;
    let lets = [ '1','2','3','C','4','5','6','+','7','8','9','-','0','*','/','='];
    for (let i = 0; i<4;i++){
        let newTr = newTable.insertRow(i);
        for (let j = 0; j<4;j++){
            let newTd = newTr.insertCell(j);
            newTd.height = '50px';
            newTd.width = '50px'; 
            let newButton = document.createElement('button');
            
            newButton.textContent = lets[k];
            newTd.appendChild(newButton);
            k = k + 1;
        }
        
    }
    document.body.appendChild( newTable );
    
    
};
makeNums();


