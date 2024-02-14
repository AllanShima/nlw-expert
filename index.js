const perguntas = [
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      resposta: [
        "Para adicionar um elemento ao documento HTML.",
        "Para adicionar um manipulador de eventos a um elemento HTML.",
        "Para criar uma nova variável no escopo global."
      ],
      correta: 1
    },
    {
      pergunta: "O que é um 'callback' em JavaScript?",
      resposta: [
        "Uma função passada como argumento para outra função, para ser executada posteriormente.",
        "Uma variável global que armazena uma referência a um elemento HTML.",
        "Uma expressão usada para verificar se uma condição é verdadeira ou falsa."
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      resposta: [
        "Ambos os operadores fazem a mesma coisa.",
        "'==' compara apenas o valor, enquanto '===' compara o valor e o tipo de dados.",
        "'===' é utilizado para concatenar strings."
      ],
      correta: 1
    },
    {
      pergunta: "O que é o 'hoisting' em JavaScript?",
      resposta: [
        "É uma técnica para levantar elementos HTML acima de outros elementos.",
        "É um mecanismo que move as declarações para o topo do seu escopo atual.",
        "É um método para organizar funções em uma ordem específica."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o propósito da função 'parseInt()' em JavaScript?",
      resposta: [
        "Para analisar uma string e retornar um número inteiro.",
        "Para converter uma variável em uma string.",
        "Para dividir uma string em substrings."
      ],
      correta: 0
    },
    {
      pergunta: "O que significa o termo 'DOM' em JavaScript?",
      resposta: [
        "Document Oriented Model",
        "Data Object Model",
        "Document Object Model"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de negação em JavaScript?",
      resposta: [
        "&&",
        "||",
        "!"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um 'array' em JavaScript?",
      resposta: [
        "Um tipo de dado que armazena apenas números.",
        "Uma coleção ordenada de elementos.",
        "Uma estrutura de controle de fluxo."
      ],
      correta: 1
    },
    {
      pergunta: "Como você declararia uma variável em JavaScript?",
      resposta: [
        "using",
        "var",
        "let"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o operador 'typeof' em JavaScript?",
      resposta: [
        "Um operador para verificar se um valor é igual a outro.",
        "Um operador para verificar o tipo de um valor.",
        "Um operador para concatenar strings."
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector("#quiz")
  
  const template = document.querySelector("template")
  
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  //loop para as perguntas (h3)
  for(const item of perguntas) {
    const quiz_item = template.content.cloneNode(true) //clone original
    quiz_item.querySelector("h3").textContent = item.pergunta
  
    //loop para as 3 responstas
    for(let resposta of item.resposta){
      const dt = quiz_item.querySelector("dl dt").cloneNode(true) //clone do clone original
  
      dt.querySelector("span").textContent = resposta
  
      dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
  
      dt.querySelector("input").value = item.resposta.indexOf(resposta)
  
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // === considera o tipo e o valor, == considera só o valor
  
        if(estaCorreta) {
          corretas.add(item)
        } else {
          corretas.delete(item)
        }
  
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
      }
  
      
      // coloca as respostas na tela
      quiz_item.querySelector("dl").appendChild(dt) //appendando para o clone original
    }
  
    //remove a opção "Pergunta A"
    quiz_item.querySelector("dl dt").remove() //tirando o original
  
    //coloca as perguntas na tela
    quiz.appendChild(quiz_item)
  }