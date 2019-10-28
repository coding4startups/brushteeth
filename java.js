var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength(){
	return input.value.length;
}

function ListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""
}


button.addEventListener("click",function(){
	if (inputLength() >0 ) 
		ListElement()
})

input.addEventListener("keypress",function(event){
	if (inputLength() >0 && event.keyCode ===13) 
	ListElement()
})