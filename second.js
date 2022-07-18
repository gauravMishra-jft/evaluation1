console.log('script is running');
const text=document.getElementById('input-field');
const btn=document.getElementsByClassName('btn');
var main=document.getElementsByTagName('main');


//adding element
function addElement(data){
    var newDiv=document.createElement("div");
    var newPara=document.createElement("p");
    var textNode=document.createTextNode(data);
    newPara.appendChild(textNode);
    var editBtn=document.createElement('button');
    var delBtn=document.createElement('button');
    editBtn.type='button';
    editBtn.innerHTML='Edit';
    editBtn.classList.add('edit-btn');
    delBtn.type='button';
    delBtn.innerHTML='Delete';
    delBtn.classList.add('del-btn');
    newDiv.appendChild(newPara);
    newDiv.appendChild(editBtn);
    newDiv.appendChild(delBtn);
    main[0].appendChild(newDiv);
    delBtn.onclick = () => {
      main[0].removeChild(newDiv);  
    }

    editBtn.onclick=()=>{
        text.value=data;
        btn[0].innerText='Update';
    }
}

console.log(main);
btn[0].addEventListener('click',()=>{
    console.log(text.value);
    if(btn[0].innerText=='Update'){
        btn[0].innerText='Add';
    }
    if(text.value!=''){
        addElement(text.value);
        text.value='';
    }
});
//fetching btn
function deleteData(e){
    console.log('press delete button');
}

