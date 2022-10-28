function points(name, points){
    this.name = name;
    this.points = points;
}

let jogadas = []

function listarPoints() {
    let tabela = document.querySelector("#listaPontuacoes");
    let pontuacoes = sessionStorage.getItem("pontuacoes");
    if (pontuacoes == null){
        tabela.innerHTML = `
        <tr><th colspan="2">Maiores Pontuações</th></tr>
        <tr><td colspan="2"><img src="assets/estilo.svg"/></td></tr>
        <tr><td colspan="2">Ainda não há pontuações</td></tr>`;
    } else{
        pontuacoes = pontuacoes.split("\n");
        pontuacoes.pop();
        for (pontos of pontuacoes){
            let jogada = pontos.split("/");
            let pessoa = new points(jogada[0], jogada[1]);
            jogadas.push(pessoa);
        }
        jogadas.sort(function(a, b) {
            if(parseInt(a.points) < parseInt(b.points)) {
              return true;
            } else {
              return -1;
            }
          });
        tabela.innerHTML = '<tr><th colspan="2">Maiores Pontuações</th></tr><tr><td colspan="2"><img src="assets/estilo.svg"/></td></tr>';
        for (let i = 0; i < 5; i++ ){
            tabela.innerHTML += `<tr><td>${jogadas[i].name}: </td><td>${jogadas[i].points} pts</td></tr>`;
        }
    }
}