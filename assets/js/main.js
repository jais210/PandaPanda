var imagenes = ["assets/img/panda1.jpg","assets/img/panda2.jpg","assets/img/panda3.jpg","assets/img/panda4.jpg"];
var imgPanditas = document.getElementById("pandasImg");

for (var i = 0; i < imagenes.length; i++) {
	var myDiv = document.createElement('div');
		myDiv.setAttribute('class','imgPanda')
	var myImg = document.createElement('img');
		myImg.src = imagenes[i];
		myImg.setAttribute ('class','editPandas')
	var myBtn = document.createElement('button');
		myBtn.setAttribute ('class','btn');
		myBtn.setAttribute('onclick', 'eliminar(this)')
   var cerrar = document.createTextNode('x');
		myBtn.appendChild(cerrar);
		myDiv.appendChild(myBtn);
		myDiv.appendChild(myImg);
		imgPanditas.appendChild(myDiv);
}

document.getElementById("btnRes").addEventListener("click", restaurarImagen);
document.getElementById("btnExt").addEventListener("click", extincionText);
document.getElementById("btnOrigin").addEventListener("click", origenText);
var extincion = document.getElementById('btnExt');
var origen = document.getElementById('btnOrigin');

function eliminar(event) {

	event.parentNode.style.display = "none";
 }

 function restaurarImagen () {
 	var pictures = document.getElementsByClassName('imgPanda');
	for (var i = 0; i < pictures.length; i++) {
		pictures[i].style.display = 'inline-block';
	}
 }
function origenText() {
	if(origen.style.display=='none'){
		origen.style.display='block';
	} else {
		origen.style.display='none';
	}
}
 function extincionText (){
	if(extincion.style.display=='none'){
		extincion.style.display='block';
	} else {
		extincion.style.display='none';
	}
}
