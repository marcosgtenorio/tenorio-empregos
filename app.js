function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "Nenhuma vaga encontrada"
        return
    }  

    campoPesquisa = campoPesquisa.toLowerCase()
 
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // se o titulo includes campoPesquisa
     if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        // cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
        }
    }
    
    if (!resultados) {
        resultados = "Nenhuma vaga encontrada"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }




