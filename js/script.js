window.onload = function () {
	$('select').material_select();

	document.getElementById('form')
		.addEventListener('submit', calcImc);
}

var config = {
	classes: {
		bom: 'teal-text text-lighten-1',
		cuidado: 'yellow-text text-darken-3',
		ruim: 'red-text text-darken-4'
	},
	description: {
		muitoAbaixo: "Muito abaixo do peso (16 a 16,9 kg/m2)",
		abaixo: "Abaixo do peso (17 a 18,4 kg/m2)",
		normal: "Peso normal (18,5 a 24,9 kg/m2)",
		acima: "Acima do peso (25 a 29,9 kg/m2)",
		obesidade1: "Obesidade Grau I (30 a 34,9 kg/m2)",
		obesidade2: "Obesidade Grau II (35 a 40 kg/m2)",
		obesidade3: "Obesidade Grau III (maior que 40 kg/m2)"
	}
}

function calcImc(event) {
	event.preventDefault();

	// Calculo
	var altura = document.getElementById('altura').value.replace(',', '.');
	var peso = document.getElementById('peso').value;

	altura > 4 ? altura = altura / 100 : null;
	peso > 200 ? peso = peso / 1000 : null;

	var imc = (peso / (altura * altura)).toFixed(1);

	// Classe
	var className = '', description = '';
	if (imc < 16) {}
	else if (imc < 17) {
		className = config.classes.ruim;
		description = config.description.muitoAbaixo;
	}
	else if (imc < 18.5) {
		className = config.classes.cuidado;
		description = config.description.abaixo;
	}
	else if (imc < 25) {
		className = config.classes.bom;
		description = config.description.normal;
	}
	else if (imc < 30) {
		className = config.classes.cuidado;
		description = config.description.acima;
	}
	else if (imc < 35) {
		className = config.classes.ruim;
		description = config.description.obesidade1;
	}
	else if (imc <= 40) {
		className = config.classes.ruim;
		description = config.description.obesidade2;
	}
	else if (imc > 40) {
		className = config.classes.ruim;
		description = config.description.obesidade3;
	}

	var resultado = document.getElementById('resultado');

	resultado.innerText = imc;
	resultado.className = className;
	document.getElementById('descricao').innerText = description;
	document.getElementById('openReveal').click();
}