function question(question, opt1, opt2, opt3, opt4, rightAnswer, bonus, img){
    this.question = question;
    this.options = [opt1, opt2, opt3, opt4];
    this.rightAnswer = rightAnswer;
    this.bonus = bonus;
    this.img = img;
}

  function randOrd() {
    return (Math.round(Math.random())-0.5);
  }

const pergunta1 = new question('O lema "A inteligência além da medida é o maior tesouro do homem" pertence a qual casa', "Grifinória", "Sonserina", "Lufa-lufa", "Corvinal", "Corvinal", "", "img/casas.png");
const pergunta2 = new question("Que feitiço Harry usou para matar Lord Voldemort", "Expelliarmus", "Expecto Patronum", "Feitiço da morte", "Accio", "Expelliarmus", "", "img/batalhaFinal.jpg");
const pergunta3 = new question("Qual Horcrux foi a segunda a ser destruída", "O medalhão", "A taça", "O anel", "O diadema", "O medalhão", "", "img/Horcruxes_de_voldemort.webp");
const pergunta4 = new question("Com quem Harry foi ao Baile de Inverno", "Parvati Patil", "Padma Patil", "Cho Chang", "Gina Weasley", "Parvati Patil", "", "img/baile.jpg");
const pergunta5 = new question("Em qual animal Rita Skeeter se transforma para poder espionar as pessoas", "Um besouro", "Uma formiga", "Uma barata", "Uma aranha", "Um besouro", "", "img/ritaSkeeter.jpg");
const pergunta6 = new question("Em que ano o primeiro filme foi lançado", "2001", "1999", "2004", "2002", "2001", "", "img/primeiroFilme.jpg");
const pergunta7 = new question("De que personagem é essa voz", "Remus Lupin", "Sirius Black", "Olho-Tonto Moody", "Cornelius Fudge", "Sirius Black", "<audio controls autoplay><source src='audio/sirius.mp3' type='audio/mpeg'></audio>", "img/voz.png");
const pergunta8 = new question("Que lugar é esse cenário", "Salão Comunal", "Salão Principal", "Sala de aula", "Gringotts", "Salão Principal", "", "img/grandeSalao.jpg");
let perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8];
let pontos = 0;
let acertos = 0;

function showQuestion(id){
  const questSection = document.querySelector("#questions");
  if(id < 8){
    console.log(`Questão ${id+1}\n`);
    console.log();
    let options = perguntas[id].options.sort(randOrd);
    options = options.sort(randOrd);
    questSection.innerHTML =  `
    <h2 id="questTitle">${id+1}/${perguntas.length}- ${perguntas[id].question}?</h2>
    ${perguntas[id].bonus}
    <img src="${perguntas[id].img}" alt='${perguntas[id].img}'>
    <div><input id="opt1" type="radio" name="quest" onclick="saveAnswer(${id+1}, '${options[0]}')">
    <label for="opt1">${options[0]}</label>
    <input id="opt2" type="radio" name="quest" onclick="saveAnswer(${id+1}, '${options[1]}')">
    <label for="opt2">${options[1]}</label>
    <input id="opt3" type="radio" name="quest" onclick="saveAnswer(${id+1}, '${options[2]}')">
    <label for="opt3">${options[2]}</label>
    <input id="opt4" type="radio" name="quest" onclick="saveAnswer(${id+1}, '${options[3]}')">
    <label for="opt4">${options[3]}</label></div>
    <div class="tempo"></div>`;
    setTimeout(`showQuestion(${id+1})`, 15000);
  }
  else{
    endQuiz();
  }
}

function saveAnswer(quest, value){
    const inputs = document.querySelectorAll("#questions input[type='radio']");
    const labels = document.querySelectorAll("#questions label");
    for(radio of inputs){
        radio.onclick = "";
    }
    for(label of labels){
        if(label.innerText == perguntas[quest-1].rightAnswer){
            label.style.backgroundColor = "#21714A";
        } else {
            label.style.backgroundColor = "#d2d3db";
        }
        if(label.innerText == value){
          label.style.border = "2px solid #242633";
        }
    }
    if (value == perguntas[quest-1].rightAnswer){
        console.log(`Questão ${quest}: ${value} - Acertou!`);
        acertos += 1;
        pontos += 125;
    } else{
        console.log(`Questão ${quest}: ${value} - Errou!`);
    }
    setTimeout(clearTimeout(timer), 500);
}

function startQuiz(){
    console.log("O Quiz começou\n");
    perguntas = perguntas.sort(randOrd)
    showQuestion(0);
}

function endQuiz(){
    console.log("Acabou");
    const questSection = document.querySelector("#questions");
    questSection.innerHTML = `
    <div id="FinalPoints"><h2>Você acertou ${acertos} de ${perguntas.length} perguntas</h2>
    <h2>Sua pontuação final é ${pontos} pts</h2></div>
    `;
}

