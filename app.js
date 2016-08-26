window.alert ("Comprobaremos si el numero ingresado tiene un mensaje para ti. EMPEZAMOS!")
var numero1 = parseInt(prompt("Ingresa cualquier numero"));

if (numero1>0 && numero1 <101) {

	if (numero1 % 2 == 0) {
	
		if(numero1>1 && numero1<5) {
    	document.write ("Este numero es Good. Alucina!!!!");
  		}

  		else if (numero1>5 && numero1<21 ) {
		document.write ("Este numero es Great!!!.");
		}
		
		else if (numero1>20) {
		document.write ("Este numero es Perfect!!!.");
		}
	}

	else {
	document.write ("Este numero es Odd!!!.");
	}
}





	
	
