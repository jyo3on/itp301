document.getElementById("bgred").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bgblue").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bgamber").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bgpink").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bgpurple").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bgindigo").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bgteal").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bglime").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bgorange").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}
document.getElementById("bgyellow").onclick = function() {
    var bgInput = this.value;
    changeBg(bgInput);
}

document.getElementById("textred").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textblue").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textamber").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textpink").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textpurple").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textindigo").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textteal").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textlime").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textorange").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}
document.getElementById("textyellow").onclick = function() {
    var textInput = this.value;
    changeText(textInput);
}

  var texts = document.getElementsByClassName("textcolor");
  var inputText;
  for (var i = 0; i < texts.length; i++) {
      if (texts[i].checked) {
          inputText = texts[i].value;
          changeText(inputText);
      }
  }

  function changeBg (userBg){
    document.getElementById("right").style.backgroundColor= userBg;
  }
  function changeText(userText){
    document.getElementById("right").style.color= userText;
  }
