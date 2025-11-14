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

