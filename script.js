// Selecionar todos os itens do menu
let menuitems = document.querySelectorAll(".item-menu");

function selectLink() {
  menuitems.forEach((item) => item.classList.remove("ativo")); // Remove "ativo" de todos os itens
  this.classList.add("ativo"); // Adiciona "ativo" ao item clicado
}

// Adicionar evento de clique a todos os itens do menu
menuitems.forEach((item) => item.addEventListener("click", selectLink));
// Selecionar o botão de expansão
let btnexp = document.querySelector("#botao-menu");

// Selecionar o menu
let menusite = document.querySelector(".menufechado");

// Adicionar evento de clique ao botão para expandir/retrair o menu
btnexp.addEventListener("click", function () {
  menusite.classList.toggle("aberto"); // Alterna a classe 'aberto' no menu
});

function mostrarImagem(numero) {
  // Seleciona todas as imagens
  const imagens = document.querySelectorAll(".imagem img");

  // Remove a classe ativo das imagens
  imagens.forEach((img) => {
    img.classList.remove("ativo");
  });

  // Adiciona a classe ativo à imagem correspondente
  imagens[numero - 1].classList.add("ativo");
}

const apiKey = "f15a6dd7dd6151e20f004a130d960b3f";
function getWeather() {
  // Pegando o valor da cidade selecionada
  const city = document.getElementById("city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        document.getElementById("weather-info").innerHTML =
          "Cidade não encontrada!";
      } else {
        const weather = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        document.getElementById("weather-info").innerHTML = `
          <h3>Previsão para: ${city}</h3>
          <p>Tempo: ${weather}</p>
          <p>Temperatura: ${temp}°C</p>
          <p>Umidade: ${humidity}%</p>
          <p>Vento: ${wind} km/h</p>
        `;
      }
    })
    .catch((error) => {
      console.error("Erro ao pegar dados da API:", error);
      document.getElementById("weather-info").innerHTML =
        "Erro ao buscar a previsão.";
    });
}
