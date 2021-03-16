var ramal = [
  //[1750, "VANIA", "SECRETARIA"],
  [1801, "VANIA", "SECRETARIA"],
  [1777, "PABX", "SECRETARIA"],
  [1800, "PABX", "SECRETARIA"],
  [1760, "SALA REUNIAO", "SECRETARIA"],
  [1750, "CARLOS CLEMENTINO", "DIRETOR PRESIDENTE"],
  [1884, "MARCO MOREIRA", "DIRETOR GERAL"],
  [1752, "RAFAEL ARNALDI", "DIRETOR FINANCEIRO"],
  [1818, "HENRIQUE VAL", "DIRETOR OBRAS"],
  [1767, "FERNANDO BEZERRA", "DIRETOR INCORPORAÇÃO"],
  [1764, "DARIO", "JURIDICO"],
  [1756, "MARCILIO", "FINANCEIRO"],
  [1758, "RODNEY", "FINANCEIRO"],
  [1802, "MEIRE", "FINANCEIRO"],
  [1755, "FERNANDA", "CONTAS RECEBER"],
  [1761, "NAYARA", "CONTAS RECEBER"],
  [1807, "NADIA", "CONTAS RECEBER"],
//  [1761, "RAIANI", "CONTAS RECEBER"],
  [1766, "ALFREDO", "INFORMATICA"],
  [1808, "BRUNO", "INFORMATICA"],
  [1766, "MATHEUS", "INFORMATICA"],
  [1754, "JEFERSON", "CONTABILIDADE"],
  [1805, "CREUZA", "CONTABILIDADE"],
  [1805, "REJANE", "CONTABILIDADE"],
  [1804, "VALDIRENE", "CONTABILIDADE"],
  [1798, "JULIANA", "DOCUMENTACAO"],
  [1821, "JESSIKA", "DOCUMENTACAO"],
  [1773, "KAMILA", "ORCAMENTO"],
  [1815, "FERNANDO", "ORCAMENTO"],
  [1763, "DAYSE", "ORCAMENTO"],
  [1762, "RICARDO PETTNEGILL", "PROJETOS"],
  [1765, "FERNANDO LEITE", "PROJETOS"],
  [1765, "GABRIEL", "PROJETOS"],
  [1765, "AUGUSTO", "PROJETOS"],
  [1768, "RICKSON / RHAUANE / PAULO / BRUNO", "PROJETOS"],
  [1753, "RUI", "QSMS"],
  [1772, "KELLY", "QSMS"],
  [1820, "ALEX", "QSMS"],
  [1759, "THIAGO / EDSON / MARIA", "PLANEJAMENTO"],
  [1781, "ANTONIO GIL", "SUPRIMENTOS"],
  [1778, "AUGUSTO", "SUPRIMENTOS"],
  [1780, "OSVALDO", "SUPRIMENTOS"],
  [1809, "JULIO SANABRIA", "SUPRIMENTOS"],
  [1771, "LEANDRO ZANDONA", "SUPRIMENTOS"],
  [1814, "FABIO FEDRIZZI", "SUPRIMENTOS"],
  [1794, "ELI", "CONTROLADORIA"],
  [1788, "ISABELA", "CONTROLADORIA"],
  [1796, "LEONICE", "CONTROLADORIA"],
  [1811, "ALZIRA", "DEPTO. PESSOAL"],
  [1791, "VANDERSON", "DEPTO. PESSOAL"],
  [1790, "WELLINGTON", "DEPTO. PESSOAL"],
  [1793, "NATALIA", "DEPTO. PESSOAL"],
  [1786, "CELSO / NATAL", "ALMOXARIFADO"],
  [1817, "GILTON", "ALMOXARIFADO"],
  [1787, "RICARDO MARTINEZ", "TRANSPORTE / MANUT"],
  [1774, "POINARA", "TRANSPORTE / MANUT"],
  [1797, "FRANCIANE / DANIELE", "TRANSPORTE / MANUT"],
  [1785, "CARLOS BRONZE", "TRANSPORTE / MANUT"],
  [1819, "JULIO CESAR", "AUDITORIA"],
  [1775, "COPA	", "COPA"],
  [1789, "GUARITA", "GUARITA"]
];

adicionaRamalNaTabela(ramal);

function montaTr(ramal, i) {
  var ramalTr = document.createElement("tr");
  ramalTr.classList.add("ramal");

  ramalTr.appendChild(montaTd(ramal[i][0], "info-ramal"));
  ramalTr.appendChild(montaTd(ramal[i][1], "info-nome"));
  ramalTr.appendChild(montaTd(ramal[i][2], "info-departamento"));

  return ramalTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function adicionaRamalNaTabela(ramal) {
  for (var i = 0; i < ramal.length; i++) {
    var ramalTr = montaTr(ramal, i);
    var tabela = document.querySelector("#tabela-ramais");
    tabela.appendChild(ramalTr);
  }
}
