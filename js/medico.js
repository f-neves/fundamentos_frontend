const medicoList = document.getElementById("medicoList");

function renderMedicos() {
  const medicos = JSON.parse(localStorage.getItem("medicos")) || [];
  medicoList.innerHTML = "";
  medicos.forEach((medico, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${medico.name} - ${medico.specialty}
      <button onclick="editMedico(${index})">Editar</button>
      <button onclick="deleteMedico(${index})">Deletar</button>`;
    medicoList.appendChild(li);
  });
}

function addMedico() {
  const name = prompt("Nome do Médico:");
  const specialty = prompt("Especialidade do Médico:");
  const medicos = JSON.parse(localStorage.getItem("medicos")) || [];
  medicos.push({ name, specialty });
  localStorage.setItem("medicos", JSON.stringify(medicos));
  renderMedicos();
}

function editMedico(index) {
  const medicos = JSON.parse(localStorage.getItem("medicos"));
  medicos[index].name = prompt("Novo nome do Médico:", medicos[index].name);
  medicos[index].specialty = prompt("Nova especialidade:", medicos[index].specialty);
  localStorage.setItem("medicos", JSON.stringify(medicos));
  renderMedicos();
}

function deleteMedico(index) {
  const medicos = JSON.parse(localStorage.getItem("medicos"));
  medicos.splice(index, 1);
  localStorage.setItem("medicos", JSON.stringify(medicos));
  renderMedicos();
}

// Inicializa a lista ao carregar
renderMedicos();
