document.getElementById("cadastroPacienteForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const paciente = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    dataNascimento: document.getElementById("dataNascimento").value || null,
    sexo: document.getElementById("sexo").value,
  };

  const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
  pacientes.push(paciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));

  alert("Paciente cadastrado com sucesso!");
});
