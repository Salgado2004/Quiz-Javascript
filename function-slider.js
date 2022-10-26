function question(question, opt1, opt2, opt3, opt4, rightAnswer){
    this.question = question;
    this.options = {
        opt1: opt1,
        opt2: opt2,
        opt3: opt3,
        opt4: opt4
    };
    this.rightAnswer = rightAnswer;
}

  function randOrd() {
    return (Math.round(Math.random())-0.5);
  }

const pergunta1 = new question('O lema "A inteligência além da medida é o maior tesouro do homem" pertence a qual casa', "Grifinória", "Sonserina", "Lufa-lufa", "Corvinal", "Corvinal");
const pergunta2 = new question("Que feitiço Harry usou para matar Lord Voldemort", "Expelliarmus", "Expecto Patronum", "Feitiço da morte", "Accio", "Expelliarmus");
const pergunta3 = new question("Qual Horcrux foi a segunda a ser destruída", "O medalhão", "A taça", "O anel", "O diadema", "O medalhão");
const pergunta4 = new question("Com quem Harry foi ao Baile de Inverno", "Parvati Patil", "Padma Patil", "Cho Chang", "Gina Weasley", "Parvati Patil");
const pergunta5 = new question("Em qual animal Rita Skeeter se transforma para poder espionar as pessoas", "Um besouro", "Uma formiga", "Uma barata", "Uma aranha", "Um besouro");
const pergunta6 = new question("Em que ano o primeiro filme foi lançado", "2001", "1999", "2004", "2002", "2001");
const pergunta7 = new question("A que personagem pertence essa voz", "Remus Lupin", "Gilderoy Lockhart", "Olho-Tonto Moody", "Cornelius Fudge", "Remus Lupin");
const pergunta8 = new question("Que lugar é esse cenário", "Salão Comunal", "Sala do Dumbledore", "Hogsmeade", "Dedos de mel", "Dedos de mel");
let perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8];
let pontos = 0;
let acertos = 0;

function showQuestion(id){
  const questSection = document.querySelector("#questions");
  if(id < 8){
    console.log(`Questão ${id+1}\n`);
    questSection.innerHTML =  `
    <h2>${id+1}/${perguntas.length}- ${perguntas[id].question}?</h2>
    <input id="opt1" type="radio" name="quest" onclick="saveAnswer(${id+1}, '${perguntas[id].options.opt1}')">
    <label for="opt1">${perguntas[id].options.opt1}</label>
    <input id="opt2" type="radio" name="quest" onclick="saveAnswer(${id+1}, '${perguntas[id].options.opt2}')">
    <label for="opt2">${perguntas[id].options.opt2}</label>
    <input id="opt3" type="radio" name="quest" onclick="saveAnswer(${id+1}, '${perguntas[id].options.opt3}')">
    <label for="opt3">${perguntas[id].options.opt3}</label>
    <input id="opt4" type="radio" name="quest" onclick="saveAnswer(${id+1}, '${perguntas[id].options.opt4}')">
    <label for="opt4">${perguntas[id].options.opt4}</label>
    <div class="tempo"></div>`;
    setTimeout(`showQuestion(${id+1})`, 10000);
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
            label.style.backgroundColor = "green";
        } else {
            label.style.backgroundColor = "red";
        }
    }
    if (value == perguntas[quest-1].rightAnswer){
        console.log(`Questão ${quest}: ${value} - Acertou!`);
        acertos += 1;
        pontos += 125;
    } else{
        console.log(`Questão ${quest}: ${value} - Errou!`);
    }
}

function startQuiz(){
    console.log("O Quiz começou\n");
    perguntas = perguntas.sort(randOrd)
    console.log(perguntas)
    //const perguntas = [];
    //for(i of order){
     //   perguntas.push[lista[i]];
    //}
    showQuestion(0);
}

function endQuiz(){
    console.log("Acabou");
    const questSection = document.querySelector("#questions");
    questSection.innerHTML = `
    <h2>Você acertou ${acertos} de ${perguntas.length} perguntas</h2>
    <h2>Sua pontuação final é ${pontos} pts</h2>
    `;
}

