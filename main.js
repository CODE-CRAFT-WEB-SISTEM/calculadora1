const nmA = document.getElementById("nmA");
const nmB = document.getElementById("nmB");
const sum = document.getElementById("sum");
const error = document.getElementById("error");
const versionInfo = document.querySelector(".versionInfo");
const modalShow = document.getElementById("modalShow");
const modalClose = document.getElementById("modalClose");
const closeError = document.getElementById("closeError");
const options = document.getElementById("options");
const soma = document.getElementById("soma");
const subtracao = document.getElementById("subtracao");
const multiplicacao = document.getElementById("multiplicacao");
const divisao = document.getElementById("divisao");


//Funcão de mostrar Atualizacoes no modal
versionInfo.addEventListener('click', () => {
  modalShow.classList.add("modalOn")
});

//Funcão de mostrar Atualizacoes no modal
modalClose.addEventListener('click', () => {
  modalShow.classList.remove("modalOn")
});


//Função de limpar campos
function ClearFields() {
  document.getElementById("btnDelete").addEventListener("click", () => {
    nmA.value = "";
    nmB.value = "";
    soma.textContent = "_/_";
    subtracao.textContent = "_/_";
    multiplicacao.textContent = "_/_";
    divisao.textContent = "_/_";
    nmA.focus();
  });
}

//Função de copiar resultados
function CopyList(numA, numB) {
  document.getElementById("btnCopy").addEventListener("click", () => {
    const listCopy = `
📄 *Resultado dos cálculos de ${numA} e ${numB}:* 

=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=
      
*Soma:* ${numA + numB}
*Subtração:* ${numA - numB}
*Multiplicação:* ${numA * numB}
*Divisão:* ${numA / numB}

=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=


☆ _Developed by CodeCraft_
`;

    navigator.clipboard.writeText(listCopy)
      .then(() => {
        console.log("Copiado com sucesso!");
      })
      .catch(err => {
        console.error(
          "Erro ao copiar para a área de transferência:",
          err
        );
      });
  });
}

//Função de realizar operações
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
    options.classList.add("func");

    CopyList(C, D);
    ClearFields();
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
