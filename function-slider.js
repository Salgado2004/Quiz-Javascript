const questions = document.querySelector("#questions");

function question2(){
  console.log("Questão2\n");
  questions.innerHTML = `<section id="question2">
  <h2>2-  Que feitiço Harry usou para matar Lord Voldemort?</h2>
  <input id="2option1" type="radio" name="quest2">
  <label for="2option1">Expelliarmus</label>
  <input id="2option2" type="radio" name="quest2">
  <label for="2option2">Patronum Expecto</label>
  <input id="2option3" type="radio" name="quest2">
  <label for="2option3">Feitiço da morte</label>
  <input id="2option4" type="radio" name="quest2">
  <label for="2option4">Accio</label>
  <div class="tempo"></div>
  </section>`;
  setTimeout(`question3()`, 8000);
}

function question3(){
    console.log("Questão3\n");
    questions.innerHTML = `<section id="question3">
    <h2>3- Qual Horcrux foi a segunda a ser destruída?</h2>
    <input id="3option1" type="radio" name="quest3">
    <label for="3option1">O medalhão</label>
    <input id="3option2" type="radio" name="quest3">
    <label for="3option2">A taça</label>
    <input id="3option3" type="radio" name="quest3">
    <label for="3option3">O anel</label>
    <input id="3option4" type="radio" name="quest3">
    <label for="3option4">O diadema</label> 
    <div class="tempo"></div>
    </section>`;
    setTimeout("question4()", 8000);
}

function question4(){
    console.log("Questão4\n");
    questions.innerHTML = `<section id="question4">
    <h2>4- Harry foi com quem ao Baile de Inverno?</h2>
    <input id="4option1" type="radio" name="quest4">
    <label for="4option1">Parvati Patil</label>
    <input id="4option2" type="radio" name="quest4">
    <label for="4option2">Padma Patil</label>
    <input id="4option3" type="radio" name="quest4">
    <label for="4option3">Cho Chang</label>
    <input id="4option4" type="radio" name="quest4">
    <label for="4option4">Gina Weasley</label> 
    <div class="tempo"></div>
    </section>`;
    setTimeout("question5()", 8000);
}

function question5(){
    console.log("Questão5\n");
    questions.innerHTML = `<section id="question5">
    <h2>5-Rita Skeeter se transforma em qual animal para poder espionar as pessoas?</h2>
    <input id="5option1" type="radio" name="quest5">
    <label for="5option1">Um besouro</label>
    <input id="5option2" type="radio" name="quest5">
    <label for="5option2">Uma formiga</label>
    <input id="5option3" type="radio" name="quest5">
    <label for="5option3">Uma barata</label>
    <input id="5option4" type="radio" name="quest5">
    <label for="5option4">Uma aranha</label> 
    <div class="tempo"></div>
    </section>`;
    setTimeout("question6()", 8000);
}

function question6(){
    console.log("Questão6\n");
    questions.innerHTML = `<section id="question6">
    <h2>6- Em que ano o primeiro filme foi lançado?</h2>
    <input id="6option1" type="radio" name="quest6">
    <label for="6option1">2001</label>
    <input id="6option2" type="radio" name="quest6">
    <label for="6option2">1999</label>
    <input id="6option3" type="radio" name="quest6">
    <label for="6option3">2004</label>
    <input id="6option4" type="radio" name="quest6">
    <label for="6option4">2002</label>
    <div class="tempo"></div>
    </section>`;
    setTimeout("question7()", 8000);
}

function question7(){
    console.log("Questão7\n");
    questions.innerHTML = `<section id="question7">
    <h2>7- Quem tem essa voz?- áudio</h2>
    <input id="7option1" type="radio" name="quest7">
    <label for="7option1">Remus Lupin</label>
    <input id="7option2" type="radio" name="quest7">
    <label for="7option2">Gilderoy Lockhart</label>
    <input id="7option3" type="radio" name="quest7">
    <label for="7option3">Olho-Tonto Moody</label>
    <input id="7option4" type="radio" name="quest7">
    <label for="7option4">Cornelius Fudge</label>
    <div class="tempo"></div>
    </section>`;
    setTimeout("question8()", 8000);
}

function question8(){
    console.log("Questão8\n");
    questions.innerHTML = `<section id="question8">
    <h2>8- Que lugar é esse cenário? </h2>
    <input id="8option1" type="radio" name="quest8">
    <label for="8option1">Salão Comunal</label>
    <input id="8option2" type="radio" name="quest8">
    <label for="8option2">Sala do Dumbledore</label>
    <input id="8option3" type="radio" name="quest8">
    <label for="8option3">Hogsmeade</label>
    <input id="8option4" type="radio" name="quest8">
    <label for="8option4">Dedos de mel</label>
    <div class="tempo"></div>
    </section>`;
}

function startQuiz(){
    console.log("O quiz começou\n");
    console.log("Questão1\n");
    setTimeout(`question2()`, 8000);
}

