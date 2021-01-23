var ni;
var nj;
var acum = 0;

function init() {

    /*----Operations----*/
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var more = document.getElementById("more");
    var minus = document.getElementById("minus");
    var mult = document.getElementById("mult");
    var div = document.getElementById("div");
    var equal = document.getElementById("equal");
    /*----Numbers----*/
    var zero = document.getElementById("zero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");

    /*---- Ponemos el numero en la pantalla ----*/
    one.onclick = function (e) {
        result.textContent = result.textContent + "1";
    }
    two.onclick = function (e) {
        result.textContent = result.textContent + "2";
    }
    three.onclick = function (e) {
        result.textContent = result.textContent + "3";
    }
    four.onclick = function (e) {
        result.textContent = result.textContent + "4";
    }
    five.onclick = function (e) {
        result.textContent = result.textContent + "5";
    }
    six.onclick = function (e) {
        result.textContent = result.textContent + "6";
    }
    seven.onclick = function (e) {
        result.textContent = result.textContent + "7";
    }
    eight.onclick = function (e) {
        result.textContent = result.textContent + "8";
    }
    nine.onclick = function (e) {
        result.textContent = result.textContent + "9";
    }
    zero.onclick = function (e) {
        result.textContent = result.textContent + "0";
    }

    /*--------*/
    reset.onclick = function (e) {
        clear_reset();
    }
    more.onclick = function (e) {
        ni = result.textContent;
        opc = 1;
        result.textContent = "";
        clear();
    }
    minus.onclick = function (e) {
        ni = result.textContent;
        opc = 2;
        clear();
    }
    div.onclick = function (e) {
        ni = result.textContent;
        opc = 3;
        clear();
    }
    mult.onclick = function (e) {
        ni = result.textContent;
        opc = 4;
        clear();
    }

    equal.onclick = function (e) {

        var save = 0;
        nj = result.textContent;
        acum = operations(opc, ni, nj);
        result.textContent = acum;
    }

}

function clear_reset() {
    result.textContent = "";
    ni = "";
    nj = "";
    acum = 0;
}

function clear() {
    result.textContent = "";
}

function operations(a, n1, n2) {
    var res = 0;
    switch (a) {
        case 1:
            res = parseFloat(n1) + parseFloat(n2);
            break;
        case 2:
            res = parseFloat(n1) - parseFloat(n2);
            break;
        case 3:
            res = parseFloat(n1) / parseFloat(n2);
            break;
        case 4:
            res = parseFloat(n1) * parseFloat(n2);
            break;
        default:
            //nothing
            break;

    }

    return res;
}