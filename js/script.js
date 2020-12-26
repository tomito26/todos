let form = document.getElementById('addForm');
let itemList = document.getElementById('list-group');
let filter = document.getElementById('filter');


// add submit event
form.addEventListener('submit',addItems)

// Add click event
itemList.addEventListener('click',removeItems)

//add keyup evnt
filter.addEventListener('keyup',filterItems)




function addItems(e){
    e.preventDefault()
    let newItem = document.getElementById('item').value;

    // create a new li 
    let li = document.createElement('li');

    // Add class 
    li.className = 'list-group-item';

    //Add text node
    li.appendChild(document.createTextNode(newItem));
    console.log(li)

    // Add button
    let delButton = document.createElement('button')
    // add class
    delButton.className = 'btn btn-danger btn-sm delete float-right'
    //add text node
    delButton.appendChild(document.createTextNode('X'))
    // add button to list item 
    li.appendChild(delButton)


    // Add the item to list 
    itemList.appendChild(li);
    
};

function removeItems(e){
  if (e.target.classList.contains('delete')){
      if(confirm('Are you sure?')){
          let li = e.target.parentElement;
          itemList.removeChild(li);
      }
  };
};

function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');

    // convert to an array 
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display='none';
        }
    });

};