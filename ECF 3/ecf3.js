

function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log('readyState', this.readyState);
    if (this.readyState === 4 && this.status === 200) {
      var employees = JSON.parse(this.responseText);
      
      showData(employees);
    }
  };
 xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true);
  
  xhttp.send(); 

}

loadData();

var list = document.querySelector('.denv');

function showData(personnes) {
  personnes.forEach((employees, index) => {
    var listItem = createMyLi(employees, index);
    list.appendChild(listItem);
  });
}

 


function createMyLi(employees) {
  var listItem = document.createElement('li');
  var btnEdit = createBtns('edit btn btn-primary', 'Modifier');
  var btninfo = createBtns('info btn btn-secondary', 'Information');
  var btnDelete = createBtns('delete btn btn-danger', 'Supprimer');
  var btnCreation = createBtns('creation btn btn-danger', 'Creation');
  var nameNode = createColumn('span', 'name', employees.name);
  var lastnameNode = createColumn('span', 'name', employees.last_name);
  listItem.setAttribute('id', employees.id);
 

  
  listItem.appendChild(lastnameNode);
  listItem.appendChild(nameNode);
  listItem.appendChild(btninfo);
  listItem.appendChild(btnEdit);
  listItem.appendChild(btnDelete);
  btnEdit.addEventListener('click', editEmployee);

  btnDelete.addEventListener('click', function (event) {
    if (confirm(`Etes-vous sûr de retirer l'employeur` + employees.name)) {
      list.removeChild(listItem);
    }
  });
  return listItem;
}

var info = employees.name

alert(info);





function createBtns(className, text) {
  var btnElement = document.createElement('button');
  btnElement.innerHTML = text;
  btnElement.setAttribute('class', className);
  return btnElement;
}




function createColumn(type, className, data) {
  var node = document.createElement(type);
  node.setAttribute('class', className);
  if (data) {
    node.innerText = data;
  }
  return node;
}





function editEmployee(event) {
  var li = event.target.parentNode;
  var nameSpan = li.querySelector('.name');
  var name = nameSpan.innerText;
  var id = li.id;
  var employeesName = prompt('Modifier le nom', name);
  if (employeesName !== '') {
    var newData = {

    };
    var listItem = createMyLi(newData, null);

    li.replaceWith(listItem);
  }
}