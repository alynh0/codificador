initialTexts();
hideCopyButton();

function verificarCampo() {
  let inputValue = getInputValue();
  if (inputValue === "") {
    console.log("Campo vazio");
  } else {
    encryptText();
  }
}

function getInputValue() {
  return document.getElementById("phrase").value;
}

function showFields(field, text) {
  let elemento = document.querySelector(field);
  elemento.innerHTML = text;
}

function initialTexts() {
  showFields("h2", "Nenhuma mensagem foi encontrada");
  showFields(
    "p",
    "Digite um texto que você deseja criptografar ou descriptografar."
  );
}

function encryptText() {
  let phrase = getInputValue();
  let replacedPhrase = phrase.replace(/[aeiou]/gi, function (match) {
    switch (match.toLowerCase()) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return match;
    }
  });

  showFields("h2", "Texto criptografado");
  showFields("p", replacedPhrase);
  showCopyButton();
}

function decryptText() {
  let phrase = getInputValue();
  let replacedPhrase = phrase.replace(
    /(ai|enter|imes|ober|ufat)/gi,
    function (match) {
      switch (match.toLowerCase()) {
        case "ai":
          return "a";
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ober":
          return "o";
        case "ufat":
          return "u";
        default:
          return match;
      }
    }
  );

  showFields("h2", "Texto descriptografado");
  showFields("p", replacedPhrase);
  hideCopyButton();
}

function copyText() {
  let text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text);
  alert("Texto copiado!");
}

function hideCopyButton() {
  let copyButton = document.getElementById("btn_copy");
  copyButton.style.display = "none";
}

function showCopyButton() {
  let copyButton = document.getElementById("btn_copy");
  copyButton.style.display = "block";
}
