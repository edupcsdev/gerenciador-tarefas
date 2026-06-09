const formTarefa = document.getElementById('form-tarefa');
const inputNome = document.getElementById('nomeTarefa');
const selectCategoria = document.getElementById('categoriaTarefa');
const listaTarefas = document.getElementById('lista-tarefas');

formTarefa.addEventListener('submit', function(event) {
    
    event.preventDefault(); 

    const nomeValue = inputNome.value.trim();
    const categoriaValue = selectCategoria.value;

    if (nomeValue === "") {
        inputNome.classList.add('is-invalid'); 
        alert("Por favor, digite o nome da tarefa!");
        return; 
    }

    inputNome.classList.remove('is-invalid');

    const novaLinha = document.createElement('li');
    
    novaLinha.className = "list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn";

    let corBadge = "bg-primary"; 
    if (categoriaValue === "Trabalho") corBadge = "bg-warning text-dark"; 
    if (categoriaValue === "Pessoal") corBadge = "bg-success"; 

    novaLinha.innerHTML = `
        <div>
            <span class="fw-medium">${nomeValue}</span>
            <span class="badge ${corBadge} ms-2 style="font-size: 0.75rem;">${categoriaValue}</span>
        </div>
        <button class="btn btn-outline-danger btn-sm border-0 btn-remover">
            <i class="bi bi-trash3-fill"></i>
        </button>
    `;

    listaTarefas.appendChild(novaLinha);

    inputNome.value = "";
    inputNome.focus();
    
    const botaoRemover = novaLinha.querySelector('.btn-remover');
    
    botaoRemover.addEventListener('click', function() {
        novaLinha.remove();
    });

});