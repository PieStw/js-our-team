
function addMember(){

  const name = document.getElementById("name");
  const role = document.getElementById("role");
  const email = document.getElementById("email");

  if (name.value == "" || role.value == "" || email.value == "") return alert("compila i campi per aggiungere un nuovo membro");

  const newMember = {
      nome: name.value,
      ruolo: role.value,
      email: email.value,
      img: "./img/default.jpg"
  };

  team.push(newMember);

  document.getElementById("card-div").innerHTML += `
      <div class="card d-flex flex-row">
          <img src="${newMember.img}" class="img">
          <div class="card-body mt-1">
              <p class="card-text fs-5 text"><b>${newMember.nome.toUpperCase()}</b></p>
              <p class="card-text">${newMember.ruolo}</p>
              <p class="card-text text-primary">${newMember.email}</p>
          </div>
      </div>`;

  name.value = "";
  role.value = "";
  email.value = "";
}


let team = [];


team.push(member = {nome:`Marco Bianchi`, ruolo: "Designer", email: "marcobianchi@team.com", img: "./img/male1.png"});
team.push(member = {nome:`Laura Rossi: `, ruolo: "Front-end Developer", email: "laurarossi@team.com", img: "./img/female1.png"});
team.push(member = {nome:`Giorgio Verdi`, ruolo: "Back-end Developer", email: "giorgioverdi@team.com", img: "./img/male2.png"});
team.push(member = {nome:`Marta Ipsum`, ruolo: "Seo Specialist", email: "martaipsum@team.com", img: "./img/female2.png"});
team.push(member = {nome:`Roberto Lorem`, ruolo: "Seo Specialist", email: "robertolorem@team.com", img: "./img/male3.png"});
team.push(member = {nome:`Daniela Amet`, ruolo: "Analyst", email: "danielaamet@team.com", img: "./img/female3.png"});


for(let i = 0; i < team.length; i++){
  document.getElementById("card-div").innerHTML += `<div class="card d-flex flex-row">
                                                      <img src="${team[i].img}" class="img">
                                                      <div class="card-body mt-1 ">
                                                        <p class="card-text fs-5 text"><b>${team[i].nome.toUpperCase()}</b></p>
                                                        <p class="card-text">${team[i].ruolo}</p>
                                                        <p class="card-text text-primary">${team[i].email}</p>
                                                      </div>
                                                    </div>`;
}


document.getElementById("add-member").addEventListener("click", addMember);