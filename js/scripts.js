var classButton =document.getElementsByClassName('button');
  for (var i = 0 ; i <= classButton.length; i++) {
    var btn = classButton[i].innerText;
    console.log(btn);
    alert(btn);
}
