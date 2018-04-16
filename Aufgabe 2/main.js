var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", init);
    let paarzahl;
    let spielerzahl;
    function init() {
        paarzahl = parseInt(prompt("Paaranzahl eingeben", "5-10"));
        console.log(paarzahl);
        checkInput1(paarzahl);
        spielerzahl = parseInt(prompt("Spieleranzahl eingeben", "1-4"));
        checkInput2(spielerzahl);
        for (let i = 0; i < paarzahl; i++) {
        }
    }
    function checkInput1(_paarzahl) {
        if (_paarzahl <= 5 || _paarzahl >= 10) {
            alert("Halte dich an die Regeln");
            init();
        }
    }
    function checkInput2(_spielerzahl) {
        if (_spielerzahl <= 1 || _spielerzahl >= 4) {
            alert("Halte dich an die Regeln");
            init();
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=main.js.map