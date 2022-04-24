window.onload = function(evt) {
    var btn = document.querySelector(".form button");
    var alturaEl = document.querySelector('#altura');
    var pesoEl = document.querySelector('#peso');
    btn.addEventListener("click", function() { calculateImc(alturaEl, pesoEl) });
}

function calculateImc(alturaEl, pesoEl) {
    var height = parseFloat(alturaEl.value);
    var weight = parseFloat(pesoEl.value);
    document.querySelector('#imc').innerHTML = new Dietician(height, weight, 1234).calculateImc();
}

function Person(height, weight) {
    if (typeof(height) !== 'number' || isNaN(height))
        throw Error('height not a number');

    if (typeof(weight) !== 'number' || isNaN(weight))
        throw Error('weight not a number');

    this.height = height;
    this.weight = weight;
}

function Dietician(height, weight, crn) {
    Person.call(this, height, weight);
    this.crn = crn;
    this.calculateImc = function() {       

        var imc = this.weight / Math.pow(this.height, 2);
        var message = "";

        if(imc < 18.5) message = "Magreza - Seu IMC: " + imc;  
        else if (imc >= 18.5 && imc < 24.9)  message = "Normal - Seu IMC: " + imc;
        else if (imc >= 24.9 && imc < 30.0)  message = "Sobrepeso - Seu IMC: " + imc;
        else if (imc > 30.0)  message = "Obesidade - Seu IMC: " + imc;

        return message;

    }
}
Dietician.prototype = Object.create(Person.prototype);
Dietician.prototype.constructor = Dietician;







