document.getElementById("cadastroHospitalForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const hospital = {
    nome: document.getElementById("nome").value,
    telefone: document.getElementById("telefone").value || null,
    email: document.getElementById("email").value || null,
    endereco: {
      rua: document.getElementById("rua").value,
      bairro: document.getElementById("bairro").value,
      cidade: document.getElementById("cidade").value,
      estado: document.getElementById("estado").value,
    },
    disponibilidadeLeitos: parseInt(document.getElementById("disponibilidadeLeitos").value) || 0,
    temUTI: document.getElementById("temUTI").value === "true",
  };

  const hospitais = JSON.parse(localStorage.getItem("hospitais")) || [];
  hospitais.push(hospital);
  localStorage.setItem("hospitais", JSON.stringify(hospitais));

  alert("Hospital cadastrado com sucesso!");
});
