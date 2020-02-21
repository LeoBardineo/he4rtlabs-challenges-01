const calculadoraInput = document.querySelectorAll(".input-calculadora input");
const errorMessage = document.getElementById("error-message");
calculadoraInput.forEach( (elem) => {
    elem.addEventListener("keyup", () => {
        // Conta para calcular valor da sua hora no projeto
        //
        // By: danielhe4rt

        let valorProjeto = document.getElementById("input-valor").value;
        let diasEfetivos = document.getElementById("input-tempo").value;
        let horasDiarias = document.getElementById("input-trabalho").value;
        let diasFerias = document.getElementById("input-ferias").value;

        let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )

        if( isNaN(valorHora) ){
            valorHora = 0;
        }

        valorHora = Math.round(valorHora * 100) / 100;

        let calcResult = document.getElementById("calc-result");
        calcResult.innerHTML = `R$ ${valorHora} p/ hora`;
    })
})