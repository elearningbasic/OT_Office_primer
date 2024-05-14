function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iuPw6In0p9":
        Script1();
        break;
      case "6fl569hX41W":
        Script2();
        break;
      case "5zpcrN4ahev":
        Script3();
        break;
      case "6mf3mGfJ81H":
        Script4();
        break;
      case "5yvCi0AoYHr":
        Script5();
        break;
      case "6RMzU3CaU1I":
        Script6();
        break;
      case "5nLpzTUJSrk":
        Script7();
        break;
      case "6NcOWnXC6S5":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function modifyArrSlides() {
  var player = GetPlayer(),
    currentSlide = player.GetVar("curSlide"),
    strokeArrSlides = player.GetVar("arrSlides"),
    arrayArrSlides = strokeArrSlides.split("_"),
    newStrokeArrSlides = "";

  arrayArrSlides[currentSlide] = "1";
  newStrokeArrSlides = arrayArrSlides.join("_");
  player.SetVar("arrSlides", newStrokeArrSlides);
}

modifyArrSlides();
}

window.Script2 = function()
{
  function modifyArrSlides() {
  var player = GetPlayer(),
    currentSlide = player.GetVar("curSlide"),
    strokeArrSlides = player.GetVar("arrSlides"),
    arrayArrSlides = strokeArrSlides.split("_"),
    newStrokeArrSlides = "";

  arrayArrSlides[currentSlide] = "1";
  newStrokeArrSlides = arrayArrSlides.join("_");
  player.SetVar("arrSlides", newStrokeArrSlides);
}

modifyArrSlides();
}

window.Script3 = function()
{
  function modifyArrSlides() {
  var player = GetPlayer(),
    currentSlide = player.GetVar("curSlide"),
    strokeArrSlides = player.GetVar("arrSlides"),
    arrayArrSlides = strokeArrSlides.split("_"),
    newStrokeArrSlides = "";

  arrayArrSlides[currentSlide] = "1";
  newStrokeArrSlides = arrayArrSlides.join("_");
  player.SetVar("arrSlides", newStrokeArrSlides);
}

modifyArrSlides();
}

window.Script4 = function()
{
  function modifyArrSlides() {
  var player = GetPlayer(),
    currentSlide = player.GetVar("curSlide"),
    strokeArrSlides = player.GetVar("arrSlides"),
    arrayArrSlides = strokeArrSlides.split("_"),
    newStrokeArrSlides = "";

  arrayArrSlides[currentSlide] = "1";
  newStrokeArrSlides = arrayArrSlides.join("_");
  player.SetVar("arrSlides", newStrokeArrSlides);
}

modifyArrSlides();
}

window.Script5 = function()
{
  function modifyArrSlides() {
  var player = GetPlayer(),
    currentSlide = player.GetVar("curSlide"),
    strokeArrSlides = player.GetVar("arrSlides"),
    arrayArrSlides = strokeArrSlides.split("_"),
    newStrokeArrSlides = "";

  arrayArrSlides[currentSlide] = "1";
  newStrokeArrSlides = arrayArrSlides.join("_");
  player.SetVar("arrSlides", newStrokeArrSlides);
}

modifyArrSlides();
}

window.Script6 = function()
{
  function modifyArrSlides() {
  var player = GetPlayer(),
    currentSlide = player.GetVar("curSlide"),
    strokeArrSlides = player.GetVar("arrSlides"),
    arrayArrSlides = strokeArrSlides.split("_"),
    newStrokeArrSlides = "";

  arrayArrSlides[currentSlide] = "1";
  newStrokeArrSlides = arrayArrSlides.join("_");
  player.SetVar("arrSlides", newStrokeArrSlides);
}

modifyArrSlides();
}

window.Script7 = function()
{
  function modifyArrSlides() {
  var player = GetPlayer(),
    currentSlide = player.GetVar("curSlide"),
    strokeArrSlides = player.GetVar("arrSlides"),
    arrayArrSlides = strokeArrSlides.split("_"),
    newStrokeArrSlides = "";

  arrayArrSlides[currentSlide] = "1";
  newStrokeArrSlides = arrayArrSlides.join("_");
  player.SetVar("arrSlides", newStrokeArrSlides);
}

modifyArrSlides();
}

window.Script8 = function()
{
  function modifyArrSlides() {
  var player = GetPlayer(),
    currentSlide = player.GetVar("curSlide"),
    strokeArrSlides = player.GetVar("arrSlides"),
    arrayArrSlides = strokeArrSlides.split("_"),
    newStrokeArrSlides = "";

  arrayArrSlides[currentSlide] = "1";
  newStrokeArrSlides = arrayArrSlides.join("_");
  player.SetVar("arrSlides", newStrokeArrSlides);
}

modifyArrSlides();
}

};
