var titleNota = document.createElement("h2")
titleNota.innerHTML = "Nota-Fácil Bravo"

var titleFreq = document.createElement("h2")
titleFreq.innerHTML = "Freq-Fácil Bravo"

var buttonApplyNota = document.createElement("button");
buttonApplyNota.innerHTML = "Aplicar Nota Fácil";
buttonApplyNota.className = "btn btn-sm btn-facebook applyNotaFacilBravo";
buttonApplyNota.type = "button";

var buttonClearNota = document.createElement("button");
buttonClearNota.innerHTML = "Limpar todos os campos";
buttonClearNota.className = "btn btn-sm btn-facebook";
buttonClearNota.type = "button";

var buttonFrequencia = document.createElement("button");
buttonFrequencia.innerHTML = "Gerar Atalhos";
buttonFrequencia.className = "btn btn-sm btn-facebook";
buttonFrequencia.type = "button";

var buttonVisibilityNota = document.createElement("button");
buttonVisibilityNota.style = "margin: 0 3px;";
buttonVisibilityNota.innerHTML = "Mostrar NotaFácil";
buttonVisibilityNota.className = "btn btn-sm";
buttonVisibilityNota.type = "button";

var buttonVisibilityFreq = document.createElement("button");
buttonVisibilityNota.style = "margin: 0 3px;";
buttonVisibilityFreq.innerHTML = "Mostrar FreqFácil";
buttonVisibilityFreq.className = "btn btn-sm";
buttonVisibilityFreq.type = "button";


var divMainButtons = document.createElement("div");
divMainButtons.style = "text-align: center;"

var delayMsNota = document.createElement("input")
delayMsNota.type = "number"
delayMsNota.min = "50"
delayMsNota.max = "5000"
delayMsNota.step = "50"
delayMsNota.value = "100"

var delayMsFreq = document.createElement("input")
delayMsFreq.type = "number"
delayMsFreq.min = "50"
delayMsFreq.max = "5000"
delayMsFreq.step = "50"
delayMsFreq.value = "100"

var delayMsLabelNota = document.createElement("label")
delayMsLabelNota.innerHTML = "Intervalo(ms): "

var delayMsLabelFreq = document.createElement("label")
delayMsLabelFreq.innerHTML = "Intervalo(ms): "

var emptyNamesLabel = document.createElement("textarea")
emptyNamesLabel.hidden = true

var containerNota = document.createElement("ol")
containerNota.className = "centro content-container";
containerNota.hidden = true

var containerFreq = document.createElement("ol")
containerFreq.className = "centro content-container";
containerFreq.hidden = true

var line1Nota = document.createElement("li")
var line2Nota = document.createElement("li")
var line3Nota = document.createElement("li")
var line4Nota = document.createElement("li")
var line5Nota = document.createElement("li")

line1Nota.appendChild(titleNota)
line2Nota.appendChild(delayMsLabelNota)
line2Nota.appendChild(delayMsNota)
line3Nota.appendChild(buttonClearNota)
line4Nota.appendChild(buttonApplyNota)
line5Nota.appendChild(emptyNamesLabel)

containerNota.appendChild(line1Nota)
containerNota.appendChild(line2Nota)
containerNota.appendChild(line3Nota)
containerNota.appendChild(line4Nota)
containerNota.appendChild(line5Nota)


var line1Freq = document.createElement("li")
var line2Freq = document.createElement("li")
var line3Freq = document.createElement("li")
var line4Freq = document.createElement("li")

line1Freq.appendChild(titleFreq)
line2Freq.appendChild(delayMsLabelFreq)
line2Freq.appendChild(delayMsFreq)
line3Freq.appendChild(buttonFrequencia)

containerFreq.appendChild(line1Freq)
containerFreq.appendChild(line2Freq)
containerFreq.appendChild(line3Freq)
containerFreq.appendChild(line4Freq)

divMainButtons.appendChild(buttonVisibilityNota)
divMainButtons.appendChild(buttonVisibilityFreq)

document.getElementsByClassName("content-header")[0].appendChild(divMainButtons)
document.getElementsByClassName("content-header")[0].appendChild(containerNota)
document.getElementsByClassName("content-header")[0].appendChild(containerFreq)

class Studant {
  constructor(name, n1, n2, n3, rec1, rec2, rec3, rec) {
    this.name = name;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.rec1 = rec1;
    this.rec2 = rec2;
    this.rec3 = rec3;
    this.rec = rec;
  }
}

var visibilityNota = false
var visibilityFreq = false

buttonVisibilityNota.addEventListener("click", function () {
  visibilityNota = !visibilityNota
  visibilityFreq = false
  containerFreq.hidden = true
  buttonVisibilityFreq.innerHTML = "Mostrar FFBravo"
  if (visibilityNota) {
    containerNota.hidden = false
    buttonVisibilityNota.innerHTML = "Ocultar NFBravo"
  } else {
    containerNota.hidden = true
    buttonVisibilityNota.innerHTML = "Mostrar NFBravo"
  }
})
buttonVisibilityFreq.addEventListener("click", function () {
  visibilityFreq = !visibilityFreq
  visibilityNota = false
  containerNota.hidden = true
  buttonVisibilityNota.innerHTML = "Mostrar NFBravo"
  if (visibilityFreq) {
    containerFreq.hidden = false
    buttonVisibilityFreq.innerHTML = "Ocultar FFBravo"
  } else {
    containerFreq.hidden = true
    buttonVisibilityFreq.innerHTML = "Mostrar FFBravo"
  }
})

buttonClearNota.addEventListener("click", function () {
  const allFields = []

  var table = document.getElementById("table-list-alu-nota-geral");
  var rows = table.getElementsByTagName("tr")

  for (var i = 0; i < rows.length - 1; i += 2) {
    const line = rows[i].getElementsByTagName("td");
    var i2 = i
    const line2 = rows[i2 + 1].getElementsByTagName("td");
    if (line.length >= 5) {
      const n1 = line[3].getElementsByTagName("input")[0]
      const n2 = line[4].getElementsByTagName("input")[0]
      const n3 = line[5].getElementsByTagName("input")[0]
      const rec = line[6].getElementsByTagName("input")[0]

      const rec1 = line2[1].getElementsByTagName("input")[0]
      const rec2 = line2[2].getElementsByTagName("input")[0]
      const rec3 = line2[3].getElementsByTagName("input")[0]

      n1.value = ""
      n2.value = ""
      n3.value = ""
      rec.value = ""
      rec1.value = ""
      rec2.value = ""
      rec3.value = ""

      allFields.push(n1)
      allFields.push(n2)
      allFields.push(n3)
      allFields.push(rec)
      allFields.push(rec1)
      allFields.push(rec2)
      allFields.push(rec3)
    }
  }

  delayedUpdates(allFields, delayMsNota.value)
})

buttonFrequencia.addEventListener("click", function () {
  chrome.storage.local.get(["key"], function (result) {
    line4Freq.replaceChildren()
    var count = result.key.split("\n")[0].split("\t").length-1
    var lines = result.key.split("\n")
    let hasHeader = true

    if(lines[0].includes("FALSO") || lines[0].includes("VERDADEIRO")){
      hasHeader = false
    }

    if(count > 0){
      for(let i = 0; i< count; i++){
        var b = document.createElement("button");
        b.style = "margin: 0 3px;"
        if(hasHeader){
          b.innerHTML = lines[0].split("\t")[i+1]
        }else{
          b.innerHTML = "Dia "+(i+1);
        }
        b.className = "btn btn-sm";
        b.type = "button";
        b.addEventListener("click", function(){

          var falseNames = []
          let clicks = []
          lines.forEach(function(line){
            if(line.split("\t")[i+1] == "FALSO"){
              falseNames.push(line.split("\t")[0])
            }
          })

          let a = document.getElementById("lista-alunos").getElementsByTagName("a")
          falseNames.forEach(function(name){
            Array.from(a).forEach(function(innerA){
              var innerButton = simplifyName(innerA.innerHTML.toLowerCase())
              var innerName = simplifyName(name.toLowerCase())
              if(innerButton.includes(innerName)){
                clicks.push(innerA)
              }
            })
          })
          delayedClicks(clicks, delayMsFreq.value)
        })
        line4Freq.appendChild(b)
      }
    }


  });
});

buttonApplyNota.addEventListener("click", function () {
  chrome.storage.local.get(["key"], function (result) {
    emptyNamesLabel.innerHTML = ""
    emptyNamesLabel.hidden = true
    const studants = []
    const studantsElements = []

    for (var i = 0; i < result.key.split("\n").length; i++) {
      var line = result.key.split("\n")[i]

      const name = line.split("\t")[0]
      const n1 = line.split("\t")[1]
      const n2 = line.split("\t")[2]
      const n3 = line.split("\t")[3]
      const rec1 = line.split("\t").length > 4 ? line.split("\t")[4] : ""
      const rec2 = line.split("\t").length > 5 ? line.split("\t")[5] : ""
      const rec3 = line.split("\t").length > 6 ? line.split("\t")[6] : ""
      const rec = line.split("\t").length > 7 ? line.split("\t")[7] : ""

      var studant = new Studant(name, n1, n2, n3, rec1, rec2, rec3, rec)
      studants.push(studant)
    }

    var table = document.getElementById("table-list-alu-nota-geral");
    var rows = table.getElementsByTagName("tr")
    for (var i = 0; i < rows.length - 1; i += 2) {
      const line = rows[i].getElementsByTagName("td");
      var i2 = i
      const line2 = rows[i2 + 1].getElementsByTagName("td");
      if (line.length >= 5) {
        const name = line[1].title;
        const n1 = line[3].getElementsByTagName("input")[0]
        const n2 = line[4].getElementsByTagName("input")[0]
        const n3 = line[5].getElementsByTagName("input")[0]
        const rec1 = line2[1].getElementsByTagName("input")[0]
        const rec2 = line2[2].getElementsByTagName("input")[0]
        const rec3 = line2[3].getElementsByTagName("input")[0]
        const rec = line[6].getElementsByTagName("input")[0]

        const studant = new Studant(name, n1, n2, n3, rec1, rec2, rec3, rec)
        studantsElements.push(studant);
      }
    }

    var updateElements = []
    var emptyNames = []
    for (var i = 0; i < studants.length; i++) {
      var empty = true
      var studant = studants[i]
      for (var j = 0; j < studantsElements.length; j++) {
        var studantElement = studantsElements[j]
        if (checkNames(studant.name, studantElement.name)) {
          studantElement.n1.value = studant.n1
          studantElement.n2.value = studant.n2
          studantElement.n3.value = studant.n3
          studantElement.rec1.value = studant.rec1
          studantElement.rec2.value = studant.rec2
          studantElement.rec3.value = studant.rec3
          studantElement.rec.value = studant.rec

          updateElements.push(studantElement.n1);
          updateElements.push(studantElement.n2);
          updateElements.push(studantElement.n3);
          updateElements.push(studantElement.rec1);
          updateElements.push(studantElement.rec2);
          updateElements.push(studantElement.rec3);
          updateElements.push(studantElement.rec);

          empty = false
        }
      }
      if (empty) {
        emptyNames.push(studant.name)
      }
    }

    var outputNames = ""
    if (emptyNames.length > 0) {
      outputNames = "Nomes não encontrados:\n"
      for (var i = 0; i < emptyNames.length; i++) {
        var name = emptyNames[i]
        outputNames += name + "\n"
      }
      emptyNamesLabel.innerHTML = outputNames
    }
    emptyNamesLabel.hidden = outputNames == ""
    delayedUpdates(updateElements, delayMsNota.value);

  });
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const changeEvent = new Event('change', {
  isTrusted: true,
  bubbles: true,
  cancelBubble: false,
  cancelable: false,
  composed: false,
  currentTarget: null,
  defaultPrevented: false,
  eventPhase: 0,
  returnValue: true,
  type: "change"
})

const clickEvent = new Event('click', {
  isTrusted: true,
  bubbles: true,
  cancelBubble: false,
  cancelable: false,
  composed: false,
  currentTarget: null,
  defaultPrevented: false,
  eventPhase: 0,
  returnValue: true,
  type: "click"
})

async function delayedUpdates(updateElements, delay) {
  setEnabledAll(false)

  for (let i = 0; i < updateElements.length; i++) {
    updateElements[i].dispatchEvent(changeEvent); await sleep(parseInt(delay));
    buttonApplyNota.innerHTML = "Aguarde... (" + i + "/" + updateElements.length + ")";
  }

  buttonApplyNota.innerHTML = "Aplicar Nota Fácil";
  setEnabledAll(true)
}

async function delayedClicks(updateElements, delay) {
  setEnabledAll(false)

  for (let i = 0; i < updateElements.length; i++) {
    updateElements[i].dispatchEvent(clickEvent); await sleep(parseInt(delay));
    buttonApplyNota.innerHTML = "Aguarde... (" + i + "/" + updateElements.length + ")";
  }

  buttonApplyNota.innerHTML = "Aplicar Nota Fácil";
  setEnabledAll(true)
}

function checkNames(name1, name2) {
  return simplifyName(name1) == simplifyName(name2)
}

function setEnabledAll(enabled) {
  buttonApplyNota.disabled = !enabled
  delayMsNota.disabled = !enabled
  delayMsFreq.disabled = !enabled
  buttonClearNota.disabled = !enabled
  buttonFrequencia.disabled = !enabled
}

function simplifyName(name) {
  return name.trim()
    .toLowerCase()
    .replace("á", "a")
    .replace("â", "a")
    .replace("à", "a")
    .replace("ã", "a")
    .replace("é", "e")
    .replace("ê", "e")
    .replace("è", "e")
    .replace("ẽ", "e")
    .replace("í", "i")
    .replace("î", "i")
    .replace("ĩ", "i")
    .replace("ì", "i")
    .replace("ó", "o")
    .replace("ò", "o")
    .replace("õ", "o")
    .replace("ô", "o")
    .replace("ú", "u")
    .replace("ù", "u")
    .replace("ũ", "u")
    .replace("û", "u")
    .replace("-", " ")
}
