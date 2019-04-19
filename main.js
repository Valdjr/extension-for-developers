
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

})