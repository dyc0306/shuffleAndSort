
var arrData={
    values: [{elem:1,color:'#6F98A8'},{elem:2,color:'#2B8EAD'},{elem:3,color:'#2F454E'},{elem:4,color:'#2B8EAD'},
    {elem:5,color:'#2F454E'},{elem:6,color:'#BFBFBF'},{elem:7,color:'#BFBFBF'},{elem:8,color:'#6F98A8'},
    {elem:9,color:'#2F454E'}]
}
var sorted=true;
loadApp = function(){
    sorted?document.getElementById('sort-button').disabled=true: document.getElementById('sort-button').disabled=false;
    let mainDiv=document.getElementById('issuesList');
   
    arrData.values.forEach((item)=>{
        var columnDiv = document.createElement('div');
        columnDiv.id='grid-column';
        columnDiv.className='column';
        var numberCard=document.createElement('span');
        numberCard.className='card';
        numberCard.id='grid-card';
        numberCard.style.backgroundColor=item.color;
        numberCard.innerHTML=item.elem;
        
        columnDiv.appendChild(numberCard);
        mainDiv.appendChild(columnDiv);
    })
};

shuffle = function(){
    sorted=false;
    document.getElementById('issuesList').innerHTML='';

    for(var i = arrData.values.length-1; i>0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = arrData.values[i]
        arrData.values[i] = arrData.values[j]
        arrData.values[j] = temp
      }
      loadApp();
      
};

sort = function(){
    document.getElementById('issuesList').innerHTML='';
    arrData.values.sort(function (a, b) {
        return a.elem - b.elem;
      });
      sorted=true;
      loadApp();
      
};

