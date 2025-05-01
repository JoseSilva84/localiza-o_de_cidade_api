function buscarRegioes() {
    const regioes = document.getElementById("regioes"); // Define o elemento regioes
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
        .then(res => res.json())
        .then(res => {
            res.forEach(regiao => {
                regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
            });
        });
}

function buscarEstados() {
    const regioes = document.getElementById("regioes"); // Define o elemento regioes
    const estados = document.getElementById("estados"); // Define o elemento estados
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados`)
        .then(res => res.json())
        .then(res => {
            estados.innerHTML = `<option value="">Selecione um estado</option>`;
            res.forEach(estado => {
                estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
            });
        });
}

function buscarCidades() {
    const estados = document.getElementById("estados"); // Define o elemento estados
    const cidades = document.getElementById("cidades"); // Define o elemento cidades
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`)
        .then(res => res.json())
        .then(res => {
            cidades.innerHTML = `<option value="">Selecione a cidade</option>`;
            res.forEach(cidade => {
                cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
            });
        });
}

buscarRegioes();