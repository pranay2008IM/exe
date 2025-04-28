var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter ='';
function generate () {
  for (i = 0; i < 10; i++) {
    randomLetter += arr[Math.floor(arr.length * Math.random())];
  
  }
   document.getElementById("password").innerHTML= randomLetter;
  randomLetter ='';
}

var numberslist = ["1","2","3","4","5","6","7","8","9","0"];
var space ='';
function generatenumbers() {
  for (i = 0; i < 10; i++) {
    space += numberslist[Math.floor(numberslist.length * Math.random())];
  
  }
   document.getElementById("numbers").innerHTML = space;
  space ='';
}
var list1 = ["1","2","3","4","5","6","7","8","9","0","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","/","?","(",")","*","&","%","$","#","@"];
var spac ='';
function generatealpha() {
  for (i = 0; i < 10; i++) {
    spac += list1[Math.floor(list1.length * Math.random())];
  
  }
   document.getElementById("numbersandalpha").innerHTML = spac;
  spac ='';
}
function copyEvent(id)
{
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
}
