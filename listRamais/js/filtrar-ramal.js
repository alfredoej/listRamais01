var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  var ramais = document.querySelectorAll(".ramal");

  if (this.value.length > 0) {
    for (var i = 0; ramais.length; i++) {
      var ramal = ramais[i];
      var tdNome = ramal.querySelector(".info-nome");
      var tdDep = ramal.querySelector(".info-departamento");
      var nome = tdNome.textContent + tdDep.textContent;
      var expressao = new RegExp(this.value, "i");

      // console.log(nome);

      if (!expressao.test(nome)) {
        ramal.classList.add("invisivel");
      } else {
        ramal.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < ramais.length; i++) {
      var ramal = ramais[i];
      ramal.classList.remove("invisivel");
    }
  }
});
