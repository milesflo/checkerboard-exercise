// Your JS goes here

function makeDiv(color) {
  var div = null;
	div = document.createElement('div');
	div.style.width = "11.1%";
	div.style.height = "width";
	div.style.float= "left";
	div.style.paddingBottom = "11.1%";
	div.style.backgroundColor = color;

  return div;
}


function checkered() {
	for (var i = 0; i < 81; i++) {
  	
  	if (i % 2 === 0){
  	  color = "black";
    } else {
  	  color = "red";
	  }

	  document.body.appendChild(makeDiv(color));
	}
}

checkered();