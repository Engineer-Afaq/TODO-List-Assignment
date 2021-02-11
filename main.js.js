window.onload = () =>{
    let form1 = document.querySelector('#form');
    let submit = document.querySelector('#submit');
    let items = document.querySelector('#items');

    form1.addEventListener('submit', additem);
    items.addEventListener('click', removeitem);
}

function additem(e){
    e.preventDefault();
    console.log("Wa Alaikum Asalam");
    if(submit.value!= 'submit'){
        edititem.target.parentNode.childNodes[0].data = document.querySelector('#item').value;
        submit.value = 'submit';
        document.querySelector('#item').value = '';
        document.querySelector('#lblsuccess').innerHTML = "Text edited Successfully";
            document.querySelector('#lblsuccess').style.display = 'block';
            setTimeout(function(){
                document.querySelector('#lblsuccess').style.display = 'none'
            }, 3000)
            return true;

    }
    
    let newitem = document.querySelector('#item').value;

    if(newitem.trim() == '' || newitem.trim() == null){
        return false;
    }else{
        document.querySelector('#item').value = '';
    }
    let li = document.createElement('li');
    li.className = 'list-group-item';

    


    let editButton = document.createElement('button');
    editButton.className = "btn-success btn btn-sm float-right edit";
    editButton.appendChild(document.createTextNode('Edit'));

    let deleteButton = document.createElement('button');
    deleteButton.className = "btn-danger btn btn-sm float-left delete";
    deleteButton.appendChild(document.createTextNode('Delete'));

    li.appendChild(document.createTextNode(newitem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);

}
function removeitem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            let li = e.target.parentNode;
            items.removeChild(li);
            document.querySelector('#lblsuccess').innerHTML = "Text deleted Successfully";
            document.querySelector('#lblsuccess').style.display = 'block';
            setTimeout(function(){
                document.querySelector('#lblsuccess').style.display = 'none'
            }, 3000)
        }
    }
    if(e.target.classList.contains('edit')){
        document.querySelector('#item').value= e.target.parentNode.childNodes[0].data;
        submit.value = 'Edit';
        edititem= e;

        }
    

}
function toggleButton(ref, btnId){
    console.log("Assalam o Alaikum");
    document.querySelector(`#${btnId}`).disabled = false;
}