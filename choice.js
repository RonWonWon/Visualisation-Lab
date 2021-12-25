function load() {
	var e = document.getElementById("dropdown");
  var val = e.value;
  if(val=="heap"){
  	display("1");
  }
  else if(val=="heap1"){
  	display("2");
  }
  else if(val=="bst"){
  	display("3");
  }
  else{
    display("4");
  }
}