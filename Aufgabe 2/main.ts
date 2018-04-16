
namespace Aufgabe2 {
    window.addEventListener("load", init);

    let paarzahl: number;
    let spielerzahl: number;
    



    function init(): void {
        paarzahl = parseInt(prompt("Paaranzahl eingeben", "5-10"));
        console.log(paarzahl);
        checkInput1(paarzahl);

        spielerzahl = parseInt(prompt("Spieleranzahl eingeben", "1-4"));
        checkInput2(spielerzahl);
        
        for (let i: number = 0; i < paarzahl; i++) {
            

            }


    }

    function checkInput1(_paarzahl: number): void {
        if (_paarzahl <= 5 || _paarzahl >= 10) {
            alert("Halte dich an die Regeln");
            init();
        }
    }
    
     function checkInput2(_spielerzahl: number): void {
        if (_spielerzahl <= 1 || _spielerzahl >= 4) {
            alert("Halte dich an die Regeln");
            init();
        }
    }







}