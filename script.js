document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado");

  const chatbox = document.getElementById("chatbox");
  const input = document.getElementById("userInput");

  if (!chatbox) {
    console.error("Elemento chatbox não encontrado!");
    return;
  }
  if (!input) {
    console.error("Elemento userInput não encontrado!");
    return;
  }

  const mensagemInicial = `FAAALA FURIOSO(A)… aqui você pode saber tudo sobre a maior organização brasileira de esportes eletrônicos. Fundada na cidade de Uberlândia, a equipe tem como objetivo representar o Brasil em competições de esports e expandir suas ligas, conquistando títulos e objetivos maiores. Unimos pessoas e alimentamos sonhos dentro e fora dos jogos. O que deseja saber hoje?`;
  chatbox.innerHTML += `<p><strong>FURIAbot:</strong> ${mensagemInicial}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  const userText = input.value.trim();
  if (userText === "") return;

  chatbox.innerHTML += `<p><strong>Você:</strong> ${userText}</p>`;
  input.value = "";

  setTimeout(async () => {
    let resposta = "";
    const texto = userText.toLowerCase();

    switch (true) {
      case texto.includes("jogadores"):
        const respostasJogadores = [
          "No CS:GO nossos jogadores são: Andrei “arT” Piovezan (capitão), Yuri “yuurih” Gomes (rifler), Vinicius “VINI” Figueiredo (rifler), Kaike “KSCERATO” Cerato (rifler), Henrique “HEN1” Teles (AWPer), Nicholas “guerri” Nogueira (técnico).",
          "No LOL nossos jogadores da temporada de 2025 são: Guigo (Top), Tatu (Jungler), Tutsz (Mid), Ayu (ADC) e JoJo (Support)."
        ];
        resposta = respostasJogadores[Math.floor(Math.random() * respostasJogadores.length)];
        break;

      case texto.includes("curiosidades") || texto.includes("curiosidade"):
        const respostaCuriosidades = [
          "O numero de titulos vencidos pela FURIA no CS:GO soma em 17 titulos, sendo eles:" +
        "Aorus League – Brazil: Finals – Season 1 (2018)"  +
        "ESL LA League Season 1 (2018)" + 
        "Gamers Club Liga Profissional: Abril (2018)" +
        "GG.BET Ascensão (2018)" + 
        "Aorus League – Invitational (2018)" +
        "Gamers Club Liga Profissional: Maio (2018)" +
        "ESL Brasil Premier League Season 5 (2018)" +
        "ESEA Season 30: Premier Division – NA (2019)" +
        "ESEA Season 31: Premier Division – NA (2019)" +
        "ESEA Season 31: Global Challenge (2019)" +
        "EMF CS:GO World Invitational (2019)" +
        "Arctic Invitational 2019 (2019)" +
        "BLAST Premier: Spring 2020 American Showdown (2020)" +
        "DreamHack Masters Spring NA (2020)" +
        "DreamHack Open Summer NA (2020)" +
        "ESL Pro League Season NA (2020)" +
        "IEM New York NA (2020)",

        "A pantera é o simbolo da organização, representando força e determinação.",

        "A equipe possui um documentário chamado Road To Legends que destaca sua história e conquistas."
        ];
        resposta = respostaCuriosidades[Math.floor(Math.random()*respostaCuriosidades.length)];
        break;

      case texto.includes("quiz"):
        resposta = "Você está sendo direcionado para o quiz da FURIA!";
        window.location.href = "quiz.html";
        return;

      case texto.includes("produtos") || texto.includes("loja"):
        resposta = "Confira os produtos oficiais da FURIA em: https://www.furia.gg/";
        break;

      case texto.includes("redes sociais") || texto.includes("instagram") || texto.includes("twitter"):
        resposta = "Siga a FURIA nas redes sociais: Instagram: @furia | Twitter: @FURIA | YouTube: FURIA";
        break;

      case texto.includes("notícias") || texto.includes("ultimos jogos") || texto.includes("resultados"):
        resposta = "Buscando notícias dos últimos jogos da FURIA...";
        chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;

        await sleep(2000); // pausa de 2 segundos

        resposta = "Pode até bater pênalti: Neymar é anunciado como presidente da FURIA na Kings League.<br>" +
        "Leia mais em: <a href='https://www.infomoney.com.br/business/pode-ate-bater-penalti-neymar-e-anunciado-como-presidente-da-furia-na-kings-league/' target='_blank'>Infomoney</a>";
        chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;

        await sleep(1500); // pausa de 1.5 segundos

        resposta = "OU confia resumo da equipe, resultados, últimos campeonatos e as próximas partidas em:<br>" +
        "<a href='https://draft5.gg/equipe/330-FURIA' target='_blank'>Draft5 - FURIA</a>";
        chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
        return;

      default:
        resposta = "Desculpe, ainda estou aprendendo. Tente digitar: jogadores, curiosidade, quiz ou notícias.";
    }

    chatbox.innerHTML += `<p><strong>FURIABot:</strong> ${resposta}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 500);
}

