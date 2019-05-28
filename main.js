
document.addEventListener('DOMContentLoaded', function() {

    /* UpperCase */
    var UpperCase = document.querySelector('#UpperCase');
    UpperCase.addEventListener('keyup', function() {
        var t = UpperCase.value;
        document.querySelector('#UpperCase').value = t.toUpperCase();
    });

    /* LowerCase */
    var LowerCase = document.querySelector('#LowerCase');
    LowerCase.addEventListener('keyup', function() {
        var t = LowerCase.value;
        document.querySelector('#LowerCase').value = t.toLowerCase();
    });

    /* CPF checker */
    var cpf = document.querySelector('#cpfchecker');
    cpf.addEventListener('keypress', function(e) {
        if (e.keyCode == 13) {
            var valido = cpfChecker(cpf.value);
            var msg = valido  ? 'válido' : 'inválido'
            alert('O cpf é ' + msg);
        }
    });

    /* CPF generator */
    var cpfgenerator = document.querySelector('#cpfgenerator');
    cpfgenerator.addEventListener('click', function(e) {
        var cpf = cpfGenerator();
        document.querySelector('#cpfchecker').value = cpf;
    });

    /* CNPJ checker */
    var cnpj = document.querySelector('#cnpjchecker');
    cnpj.addEventListener('keypress', function(e) {
        if (e.keyCode == 13) {
            var valido = cnpjChecker(cnpj.value);
            var msg = valido  ? 'válido' : 'inválido'
            alert('O cnpj é ' + msg);
        }
    });

    /* CNPJ generator */
    var cnpjgenerator = document.querySelector('#cnpjgenerator');
    cnpjgenerator.addEventListener('click', function(e) {
        var cnpj = cnpjGenerator();
        document.querySelector('#cnpjchecker').value = cnpj;
    });

    /* GTIN checker */
    var gtin = document.querySelector('#gtinchecker');
    gtin.addEventListener('keypress', function(e) {
        if (e.keyCode == 13) {
            var valido = gtinChecker(gtin.value);
            var msg = valido  ? 'válido' : 'inválido'
            alert('O gtin é ' + msg);
        }
    });

    /* GTIN generator */
    var gtin13generator = document.querySelector('#gtin13generator');
    gtin13generator.addEventListener('click', function(e) {
        var gtin = gtin13Generator();
        document.querySelector('#gtinchecker').value = gtin;
    });

})

function cpfChecker(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

function randomiza(n) {
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}

function mod(dividendo,divisor) {
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function cpfGenerator(comPontos = true) {
    var n = 9;
    var n1 = randomiza(n);
    var n2 = randomiza(n);
    var n3 = randomiza(n);
    var n4 = randomiza(n);
    var n5 = randomiza(n);
    var n6 = randomiza(n);
    var n7 = randomiza(n);
    var n8 = randomiza(n);
    var n9 = randomiza(n);
    var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
    d1 = 11 - ( mod(d1,11) );
    if (d1>=10) d1 = 0;
    var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
    d2 = 11 - ( mod(d2,11) );
    if (d2>=10) d2 = 0;
    retorno = '';
    if (comPontos) cpf = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
    else cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;

    return cpf;
}

function cnpjGenerator(comPontos = true) {
    var n = 9;
    var n1  = randomiza(n);
     var n2  = randomiza(n);
     var n3  = randomiza(n);
     var n4  = randomiza(n);
     var n5  = randomiza(n);
     var n6  = randomiza(n);
     var n7  = randomiza(n);
     var n8  = randomiza(n);
     var n9  = 0;//randomiza(n);
     var n10 = 0;//randomiza(n);
     var n11 = 0;//randomiza(n);	
     var n12 = 1;//randomiza(n);		
    var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
     d1 = 11 - ( mod(d1,11) );
     if (d1>=10) d1 = 0;
     var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
     d2 = 11 - ( mod(d2,11) );
     if (d2>=10) d2 = 0;

    if (comPontos)
        return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
    else
        return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;
}

function cnpjChecker(cnpj) {
    var b = [6,5,4,3,2,9,8,7,6,5,4,3,2];

    if((cnpj = cnpj.replace(/[^\d]/g,"")).length != 14)
        return false;

    if(/0{14}/.test(cnpj))
        return false;

    for (var i = 0, n = 0; i < 12; n += cnpj[i] * b[++i]);
    if(cnpj[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;

    for (var i = 0, n = 0; i <= 12; n += cnpj[i] * b[i++]);
    if(cnpj[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;

    return true;
}

function gtin13Generator() {
    var n = 9;
    var n1 = randomiza(n);
    var n2 = randomiza(n);
    var n3 = randomiza(n);
    var n4 = randomiza(n);
    var n5 = randomiza(n);
    var n6 = randomiza(n);
    var n7 = randomiza(n);
    var n8 = randomiza(n);
    var n9 = randomiza(n);
    var n10 = randomiza(n);
    var n11 = randomiza(n);
    var n12 = randomiza(n);
    var g = n1+n2*3+n3+n4*3+n5+n6*3+n7+n8*3+n9+n10*3+n11+n12*3;
    var g1 = Math.floor(g/10);
    var g2 = (g1 + 1) * 10;
    var g3 = g2 - g;
    if (g3 % 10 == 0) g3 = 0;
    return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+g3;
}

// não está validando se é um tamanho de gtin válido
function gtinChecker(gtin) {
    let codigo = gtin;
    // verifica se o código existe e é um número
    if (codigo.length > 0 && !isNaN(codigo)) {                   	
        // completa o código de barras com 18 chars
        let num = codigo.padStart(18, 0);
        // pega o dígito verificador
        let dv = parseInt(num.charAt(17));
        // pega o código de barras excluíndo o dígito verificador
        num = num.substring(0, 17);

        // realiza o calculo do dígito verificador
        let sum = 0;
        num.split('').forEach(function(value) {
            // faz a soma dos dígitos do código
            sum += (factor * value);
            // atualiza o fator de multiplicação
            factor = factor == 3 ? 1 : 3;
        }, factor = 3);

        // realiza o calculo do dígito verificador
        let mmc = (Math.ceil(sum / 10)) * 10;
        mod = parseInt(mmc - sum);

        // valida se o dígito verificador informado
        // é igual ao dígito verificador calculado
        if (dv != mod) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
