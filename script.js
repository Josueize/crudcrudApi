const API_BASE = 'https://crudcrud.com/api/4eabbb88389e4c30973aeb7bf0062b5c';
const RESOURCE = 'clientes';

function data() {
    fetchData().catch(err => console.error('Failed to load data:', err));
}

async function fetchData() {
    try {
        const res = await fetch(`${API_BASE}/${RESOURCE}`);
        if(!res.ok) throw new Error(`GET failed: ${res.status}`);
        const items = await res.json();
        populateTable(items);
        populateList(items);
    }catch (err) {
        console.error(err);
        document.querySelector('.table_data').innerHTML = '<tr><td colspan="3">Error loading data</td></tr>';
    }
}

function populateTable(items) {
    const tableData = document.querySelector('.table_data');
   if(!tableData) return;
   const rows = items.map(item => `
    <tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>
        <button onclick="deleteItem('${item._id}')">Delete</button>
        </td>
    </tr>
    `).join('');
    tableData.innerHTML = rows || '<tr><td colspan="3">Nenhum registro</td></tr';
}

function populateList(items) {
    const ul = document.getElementById('listaNomes');
    if(!ul) return;
    ul.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.email}`;
        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.onclick = () => deleteItem(item._id);
        li.appendChild(btn);
        ul.appendChild(li);
    });    
}

async function create(){
    const nameInput = document.querySelector('.name');
    const emailInput = document.querySelector('.email');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if(!name || !email) {
        alert('Por favor, preencha nome e email.');
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/${RESOURCE}`,{
            method: 'POST',
            headers: {'Content-type': 'application/json' },
            body: JSON.stringify({name, email})
        });
        if(!res.ok) throw new Error('Create failed');

        nameInput.value = '';
        emailInput.value = '';
        await fetchData();
        } catch (err) {
            console.error(err);
            alert('Erro ao salvar. Veja console para mais detalhes.');
        }
}

async function deleteItem(id) {
    if(!confirm('Confirma exclusao?')) return;
    try {
        const res = await fetch(`${API_BASE}/${RESOURCE}/${id}`, {method: 'DELETE' });
        if(!res.ok) throw new Error('Delete failed');
        await fetchData();
    }catch (err) {
        console.error(err);
        alert('Erro ao excluir. Veja console para detalhes.');
    }
 }