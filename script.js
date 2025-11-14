let data = [
    {id: 1, name: "joao", email: "pedro01@gmail.com"},
    {id: 2, name: "mandy", email: "mandy02@gmail.com"},
];

function readAll() {
    var tableData = document.querySelector(".table_data");
    var elements = '';
    

    data.map(obj => (
        elements += `<tr>   
            <td>${obj.name}</td>   
            <td>${obj.email}</td>   
            <td>                
                <button onclick={delet(${obj.id})}>Delete</button>
            </td>    
        </tr>`      
    ))

    tableData.innerHTML = elements;
    
}

function create() {
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var obj = {id: 3, name: name, email: email};
    data.push(obj);
    readAll();
    document.querySelector(".name").value = "";
    var email = document.querySelector(".email").value = "";
}

function delet(id) {
    data = data.filter( d => d.id !== id);
     readAll();
    }

    fetch("https://crudcrud.com/api/4757c7ef9ec545e09e9be5425c0e35d2/tarefa")
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error('Erro na requisicao');
        }
        return resposta.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

Item.innerHTML = `${obj.name} - ${obj.email}`;

fetch("https://crudcrud.com/api/4757c7ef9ec545e09e9be5425c0e35d2/tarefa", {
method: 'POST',
headers: {
    'Content-type' : 'application/json'
},
body: JSON.stringify(obj)
});



readAll();