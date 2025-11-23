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

    fetch("https://crudcrud.com/api/de6f3110eda643dd9d82b62d4db7b0dc/projecto ")
    .then(resposta => resposta.json())
    .then(data => {

        data.forEach(obj => {
            const item = document.createElement("li");
            item.textContent = `${obj.name} - ${obj.email}`;
            item.innerHTML += `button onclick="delet(${obj.id})">Delete</button>`;
            document.getElementById("listaNomes").appendChild(item);
        })
    })

    document.getElementById("listaNomes").addEventListener("click", ()=>{

        const descricao = document.getElementById("listaNomes").value;

        fetch("https://crudcrud.com/api/de6f3110eda643dd9d82b62d4db7b0dc/projecto",{

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: descricao})
        })
        .then(resposta => resposta.json())
        .then((data) => {
            const item = document.createElement("li");
            item.textContent = `${obj.name} - ${obj.email}`;
            item.innerHTML += `button onclick="delet(${obj.id})">Delete</button>`;
            document.getElementById("listaNomes").appendChild(item);

            const myButton = document.createElement('create');
            myButton.id = 'createButton';
            myButton.innerText = 'Create';

            document.body.appendChild(myButton);
            myButton.addEventListener('click', function() {
            const descricao = document.getElementById("listaNomes").value;
           


            })

        })
    })
        

