const btns = document.querySelectorAll('#todo-list .delete');
const list = document.querySelector('#todo-list ul');
const forms = document.forms;
const hideBox = document.querySelector('#hide');
const clear = document.querySelector('.clear');


//Delete todo
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const  li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
})


const addForm = document.forms['add-todo'];

//add todo
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;


  //create elemnts
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add textContent
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  //add classes
  bookName.classList.add('todo');
  deleteBtn.classList.add('delete')

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  //clear all To-Do
  clear.addEventListener('click', function(e) {
      document.getElementById('todo-list').innerHTML = "";
  })

  //Hide To-Do
  hideBox.addEventListener('change', function(e) {
    if (hideBox.checked) {
      list.style.display = 'none';
    }else {
      list.style.display = 'initial';
    }
  });

})
