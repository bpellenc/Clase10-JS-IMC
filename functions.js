var IMC = {
    tagPeso: "imcPeso",
    tagEstatura: "imcEstatura",
    tagResultado: "imcResultado",
    mensaje: {
        pesoIncorrecto: "Peso incorrecto",
        alturaIncorrecta: "Altura incorrecta",
        bajo: "Peso inferior al normal.",
        normal: "Normal.",
        sobrepeso: "Peso superior al normal",
        obesidad_g_1: "Obesidad",
    },

    limpiar: function () {
        $("#" + this.tagPeso).val('');
        $("#" + this.tagEstatura).val('');
        $("#" + this.tagResultado).html('');
    },

    calcular: function () {
        var imc = 0;

        var peso = $("#" + this.tagPeso).val();
        var estatura = $("#" + this.tagEstatura).val();
        var tagResultado = $("#" + this.tagResultado);
        var objResultado = {};

        if (!isNaN(peso) && !isNaN(estatura)) {
            var estaturaMts = estatura / 100;
            console.log(peso, estaturaMts)
            imc = peso / Math.pow(estaturaMts, 2);
        }
        else {
            imc = 0;
        }
        if (!isNaN(peso) && (peso >= 544 || peso < 2)) {
            objResultado = { valor: 0, mensaje: this.mensaje.pesoIncorrecto, clase: 'alert-danger' };
        }
        else if (!isNaN(estatura) && (estatura >= 272 || estatura < 10)) {
            objResultado = { valor: 0, mensaje: this.mensaje.alturaIncorrecta, clase: 'alert-danger' };
        }
        else if (imc < 18.5) {

            objResultado = { valor: imc.toFixed(2), mensaje: this.mensaje.bajo, clase: 'alert-warning' };

        } else if (imc < 24.9) {

            objResultado = { valor: imc.toFixed(2), mensaje: this.mensaje.normal, clase: 'alert-success' };

        } else if (imc < 29.9) {

            objResultado = { valor: imc.toFixed(2), mensaje: this.mensaje.sobrepeso, clase: 'alert-warning' };

        } else {

            objResultado = { valor: imc.toFixed(2), mensaje: this.mensaje.obesidad_g_1, clase: 'alert-warning' };

        }

        tagResultado.html(
            '<div class="alert ' + objResultado.clase + '">' +
            'Tu IMC es <strong>' + objResultado.valor + ' ' + objResultado.mensaje +
            '</strong>' +
            '</div>');

    }
};

$(document).ready(function () {
    IMC.limpiar();
});