var lista = [
  "Casual",
  "Humano",
  "Astro",
  "Vidente",
  "Alien",
  "5ª Dimensão",
  "11ª Dimensão",
  "Hasta la Vista",
  "Infinito"
];

var secreto = parseInt(Math.random() * 21);
var cnt = 1;
var max = 20;
var tent = 20;
var st = lista[0];
var theme = "#cc2a40";
var fnt = "";

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var res = document.getElementById("resultado");

  if (!chute && chute != 0) {
    res.innerHTML = `Entre com uma tentativa!`;
    return;
  }

  document.getElementById("valor").value = "";

  if (chute > max || chute < 0) {
    res.innerHTML = `Entre com um número de 0 a ${max}!`;
    return;
  }

  document.getElementById("tent").innerHTML = tent - cnt;

  if (chute == secreto) {
    res.innerHTML = `<label style="color: #00ff55">Você acertou o número ${chute}. Tente outro!</label>`;
    document.getElementById(
      "st"
    ).innerHTML = `<label style="color: ${theme}; ${fnt}">${st}</label>`;
    Redefine();
    return;
  }

  if (cnt < tent) {
    if (chute < secreto)
      res.innerHTML = `Você errou, o número é maior do que ${chute}!`;
    else if (chute > secreto)
      res.innerHTML = `Você errou, o número é menor do que ${chute}!`;
    cnt++;
  } else {
    if (tent == 1)
      res.innerHTML = `<label style="color: #cc2a40">Você errou, o número era ${secreto}. Tente denovo!</label>`;
    else
      res.innerHTML = `<label style="color: #cc2a40">Tentativas esgotadas, o número era ${secreto}. Tente denovo!</label>`;
    Redefine();
  }
}

function Redefine() {
  secreto = parseInt(Math.random() * (max + 1));
  document.getElementById("tent").innerHTML = tent;
  cnt = 1;
}

function obtemAtributo() {
  var radio = document.getElementsByName("atributo");
  var value = "";

  for (var i = 0; i < radio.length; i++)
    if (radio[i].checked == true) value = radio[i].value;
  return value;
}

function Dificuldade() {
  var sel = parseInt(obtemAtributo());

  if (sel == 0) {
    //casual
    max = 20;
    tent = 20;
  } else if (sel == 1) {
    //humano
    max = 10;
    tent = 5;
  } else if (sel == 2) {
    //astro
    max = 15;
    tent = 4;
  } else if (sel == 3) {
    //vidente
    max = 20;
    tent = 3;
  } else if (sel == 4) {
    //alien
    max = 25;
    tent = 2;
  } else if (sel == 5) {
    //5 dimensao
    max = 50;
    tent = 1;
  } else if (sel == 6) {
    //11 dimensao
    max = 100;
    tent = 1;
  } else if (sel == 7) {
    //hasta la vista
    max = 500;
    tent = 1;
  } else if (sel == 8) {
    //infinito
    max = 1000;
    tent = 1;
  }

  if (sel > 7) fnt = "font-size: 20px;";

  if (sel > 4) theme = "#665aff";
  else if (sel > 0) theme = "#55aaff";

  st = lista[sel];
  document.getElementById("modify").innerHTML = max;
  document.getElementById(
    "resultado"
  ).innerHTML = `Nível de dificuldade alterado!`;
  Redefine();
}

function Descobre(code) {
  if (code == "13") Chutar();
}
