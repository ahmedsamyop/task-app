//input
let input = document.querySelector('input[type="text"]');
//Button Add Task
const addBtn = document.getElementById('add');
// container Tasks
let tasks = document.querySelector('.tasks');
// Empty Variable
let arr = [];





if (window.localStorage.getItem('tasks')) {

  let dataStorge = JSON.parse(window.localStorage.getItem('tasks'));
  // create Tasks Form LocalStorge
  dataStorge.forEach(ele => {
    creatTask(ele.title);
  });
  // push in Arr data form Storge 
  dataStorge.forEach(ele => {
    arr.push(ele);
  })

}

addBtn.addEventListener('click', function () {
  //Input Value
  let inputValue = input.value;
  // object
  let obj = {title: inputValue}
  // add object in Array
  arr.push(obj);
  // function Create Task
  creatTask(inputValue);
  //Updata or Add Data to LocalStorge
  window.localStorage.setItem('tasks',JSON.stringify(arr));
});

function creatTask(data) {
  // create Elements
  let div = document.createElement('div');
  let p = document.createElement('p');
  let span = document.createElement('span')
  let textData = document.createTextNode(`${data}`);
  // Class Name
  div.className = 'content';
  span.className = 'dl-btn';
  // Append
  p.appendChild(textData);
  div.appendChild(p);
  span.textContent = 'Delete'
  div.appendChild(span);
  tasks.appendChild(div);
  // Delete task
  deleteItem();
}
function deleteItem() {

  let allTasks = Array.from(document.querySelectorAll('.dl-btn'));
  
  allTasks.forEach(btn => {

    btn.addEventListener('click', (e) => {
      // looping in Arr
      arr.forEach((ele, index) => {

        if (e.currentTarget.previousElementSibling.textContent === ele.title) {
          // Remove Item Form Array
          arr.splice(index,1);
          // Updata Value in Local Storge
          window.localStorage.setItem('tasks',JSON.stringify(arr));
        }

      });
      // remove iteam in page
      e.currentTarget.parentElement.remove();
    });

  });



}


// Note:>>
// arr


