function display(choice){	
	if(choice=="1"){
		document.getElementById("body").src = "inLineMinHeap.html";
	}
	else if(choice=="2"){
		document.getElementById("body").src = "inLineMaxheap.html";
	}
	else if(choice=="3"){
		document.getElementById("body").src = "inLineBST.html";
	}
	else{
		document.getElementById("body").src = "inLineSegTree.html";
	}
}