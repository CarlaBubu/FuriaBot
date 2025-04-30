document.addEventListener("DOMContentLoaded", () => {
    console.log("Quiz iniciado");
  
    const chatbox = document.getElementById("chatbox");
    const input = document.getElementById("userInput");
  
    if (!chatbox || !input) {
      console.error("Elementos essenciais não encontrados!");
      return;
    }
  
    chatbox.innerHTML += `<p><strong>FURIABot:</strong> FALA FURIOSOOO(A)!!!! Vamos começar o quiz da FURIA!</p>`;
    novaPergunta();
  });
  
  const perguntas = [
    {
      pergunta: "Em que ano a FURIA foi fundada?",
      resposta: "2017"
    },
    {
      pergunta: "Qual jogador da FURIA é conhecido pelo estilo agressivo de jogo?",
      resposta: "arT"
    },
    {
      pergunta: "Qual é a cidade de origem da FURIA?",
      resposta: "Uberlândia"
    },
    {
      pergunta: "Qual o nome do AWPer da line principal da FURIA?",
      resposta: "Fallen"
    },
    {
      pergunta: "Em que jogo a FURIA se destacou internacionalmente?",
      resposta: "CS:GO"
    },
    {
        pergunta: "Quantos titulos no CS:GO a Furia possui?",
        resposta: "17"
    },
    {
        pergunta: "Qual um dos principais patrocinadores da Furia?",
        resposta: "RedBull"
    }
  ];
  
  let perguntaAtual = null;
  let aguardandoContinuacao = false;
  
  function novaPergunta() {
    const chatbox = document.getElementById("chatbox");
  
    // Sorteia uma pergunta aleatória
    perguntaAtual = perguntas[Math.floor(Math.random() * perguntas.length)];
    chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${perguntaAtual.pergunta}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  
  function sendMessage() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
  
    const userText = input.value.trim();
    if (userText === "") return;
  
    chatbox.innerHTML += `<p><strong>Você:</strong> ${userText}</p>`;
    input.value = "";
  
    setTimeout(() => {
      let resposta = "";
      const texto = userText.toLowerCase();
  
      if (aguardandoContinuacao) {
        if (texto === "sim") {
          resposta = "Beleza! Vamos para a próxima pergunta! 🔥";
          aguardandoContinuacao = false;
          chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
          novaPergunta();
        } else if (texto === "não" || texto === "nao") {
          resposta = "Quiz encerrado! Valeu por jogar, FURIOSO(A)! 🖤";
          aguardandoContinuacao = false;
          perguntaAtual = null;
          chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
        } else {
          resposta = "Não entendi! Você quer continuar? (responda 'sim' ou 'não')";
          chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
        }
      } else if (perguntaAtual) {
        if (texto.includes(perguntaAtual.resposta.toLowerCase())) {
          resposta = "Boa, você acertou! 🎉<br>Quer continuar com mais perguntas? (sim/não)";
          aguardandoContinuacao = true;
        } else {
          resposta = "Hmm... não é essa a resposta. Tente novamente! 👀";
        }
        chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
      } else {
        resposta = "O quiz foi encerrado. Para recomeçar, recarregue a página!";
        chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
      }
  
      chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);
  }
  