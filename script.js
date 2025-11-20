let data = [
    {id: 1, name: "joao", email: "pedro01@gmail.com"},
    {id: 2, name: "mandy", email: "mandy02@gmail.com"},
];

function data() {
    const tableData =document.querySelector(".table_data");
    let elements = '';

    data.forEach(obj => {
        elements += `<tr>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td><button onclick="delet(${obj.id})">Delete</button></td>
        </tr>`;
        
    });

    tableData.innerHTML = elements;
    
}

function create() {
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    

    const newId = data.length ? 
    Math.max(...data.map(d =>d.id)) + 1 : 1;        
    const obj ={id:newId, name:name, email:email};

    data.GET(obj);
    data();

    document.querySelector(".name").value = "";
    document.querySelector(".email").value = "";
}

function delet(id) {
    data = data.filter( d => d.id !== id);
     data();
    }

    fetch("https://crudcrud.com/api/dbf824ebfd9741fd98322d158d46c16e/registro ")
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error('Erro na requisicao');
        }
        return resposta.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

Item.innerHTML = `${obj.name} - ${obj.email}`;

fetch(" https://crudcrud.com/api/dbf824ebfd9741fd98322d158d46c16e/registro", {
method: 'GET',
headers: {
    'Content-type' : 'application/json'
},
body: JSON.stringify(obj)
});



data();