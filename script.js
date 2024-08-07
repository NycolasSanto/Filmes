const data = {
    generos: ["Ficção", "Comédia", "Anime"],
    plataformas: {
    "Ficção": ["Apple TV", "Amazon Prime"],
    "Comédia": ["Disney+", "Hulu"],
    "Anime": ["HBO Max", "Netflix"]
    },
    filmes: {
    "Apple TV": ["Matéria Escura", "Fundção"],
    "Amazon Prime": ["FGen V", "Fallout"],
    "Disney+": ["Uma Noite no Museu", "Uma Babá quase perfeita"],
    "Hulu": ["Dopesick", "Palm Spring"],
    "HBO Max": ["Evangelion", "Ninja Kamui"],
    "Netflix": ["Naruto", "Death Note"]
    }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Preencher o seletor de gêneros
    data.generos.forEach(genero => {
    let option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    generoSelect.appendChild(option);
    });
    });
    
    function atualizarPlataformas() {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar plataformas e filmes
    plataformaSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.disabled = true;
    
    if (generoSelect.value === "") {
    plataformaSelect.disabled = true;
    return;
    }
    
    plataformaSelect.disabled = false;
    
    // Preencher plataformas
    const plataformas = data.plataformas[generoSelect.value];
    plataformas.forEach(plataforma => {
    let option = document.createElement("option");
    option.value = plataforma;
    option.textContent = plataforma;
    plataformaSelect.appendChild(option);
    });
    }
    
    function atualizarFilmes() {
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar filmes
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    
    if (plataformaSelect.value === "") {
    filmeSelect.disabled = true;
    return;
    }
    
    filmeSelect.disabled = false;
    
    // Preencher filmes
    const filmes = data.filmes[plataformaSelect.value];
    filmes.forEach(filme => {
    let option = document.createElement("option");
    option.value = filme;
    option.textContent = filme;
    filmeSelect.appendChild(option);
    });
    }