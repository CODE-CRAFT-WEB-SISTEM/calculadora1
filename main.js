const nmA = document.getElementById("nmA");
const nmB = document.getElementById("nmB");
const sum = document.getElementById("sum");
const error = document.getElementById("error");

const closeError = document.getElementById("closeError");

const soma = document.getElementById("soma");
const subtracao = document.getElementById("subtracao");
const multiplicacao = document.getElementById("multiplicacao");
const divisao = document.getElementById("divisao");

sum.addEventListener("click", ev => {
    ev.preventDefault();

    let A = parseFloat(nmA.value);
    let B = parseFloat(nmB.value);

    if (!isNaN(A) && !isNaN(B)) {
        const C = parseInt(A);
        const D = parseInt(B);

        soma.textContent = C + D;
        subtracao.textContent = C - D;
        multiplicacao.textContent = C * D;
        divisao.textContent = C / D;
    } else {
        error.classList.add("alert");
        nmA.focus();
        closeError.addEventListener("click", () => {
            error.classList.remove("alert");
        });

        setInterval(() => {
            error.classList.remove("alert");
        }, 1000 * 8);
    }
});
