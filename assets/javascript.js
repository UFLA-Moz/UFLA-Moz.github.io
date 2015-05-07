/* Relógio simples com JS*/
function relogio() {

	// tipo de dado que armazena a data referente ao sistema operacional do usuario
	var data = new Date();
	// extrai as horas
	var horas = data.getHours();
	// extrai os minutos
	var minutos = data.getMinutes();
	// extrai os segundos
	var segundos = data.getSeconds();

	// contatena o zero as variaveis para manter sempre dois digitos 
	if(horas < 10){
		horas = "0" + horas;
	}
	if(minutos < 10){
		minutos = "0" + minutos;
	}
	if(segundos < 10){
		segundos = "0" + segundos;
	}

	// escreve as variaveis dentro da div com id relogio
	document.getElementById("relogio").innerHTML = horas + ":" + minutos + ":" + segundos;

}

// recarrega o script relogio a cada 1 segundo
window.setInterval("relogio()", 1000);

