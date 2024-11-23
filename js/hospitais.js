const hospitalTableBody = document.getElementById("hospitalTableBody");

function renderHospitais() {
  const hospitais = JSON.parse(localStorage.getItem("hospitais")) || [];
  hospitalTableBody.innerHTML = "";

  hospitais.forEach((hospital) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${hospital.nome}</td>
      <td>${hospital.endereco.rua}, ${hospital.endereco.bairro}, ${hospital.endereco.cidade}, ${hospital.endereco.estado}</td>
      <td>${hospital.disponibilidadeLeitos}</td>
      <td>${hospital.temUTI ? "Sim" : "Não"}</td>
    `;

    hospitalTableBody.appendChild(row);
  });
}

renderHospitais();
