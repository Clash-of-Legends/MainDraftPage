
teams.forEach(team => {
  const cap = team.captain;
  if (cap && team.players[cap.role] && team.players[cap.role].price) {
    team.budget -= team.players[cap.role].price;
  }
});


    let currentTeam = 0;
	let direction = 1; // 1 = dopředu, -1 = dozadu
	let pickOrder = [];
	let pickIndex = 0;
	let phase = "assign"; // nebo "next", podle toho kde začínáš
	
function updateSelectOptions() {
  const team = pickOrder[pickIndex];
  const availableRoles = getUnfilledNonCaptainRoles(team);

  for (let i = 0; i < 4; i++) {
    const select = document.getElementById(`select-dynamic${i + 1}`);
    const label = document.getElementById(`dynamic-label${i + 1}`);

    if (i < availableRoles.length) {
      const role = availableRoles[i];
      select.style.display = "block";
      label.style.display = "block";
      select.dataset.role = role;
      label.textContent = role.toUpperCase();

      // Vyplnit hráče pouze podle role
      select.innerHTML = "";
      players.forEach((player, idx) => {
        if (player.role === role) {
          const option = document.createElement("option");
          option.value = idx;
          option.textContent = `${player.name} (${player.price} BE)`;
          select.appendChild(option);
        }
      });
    } else {
      select.style.display = "none";
      label.style.display = "none";
      select.innerHTML = "";
      label.textContent = "---";
    }
  }
}


function updateUI() {
  const team = pickOrder[pickIndex];
  const current = team.players;

  // Nastavit logo týmu
  document.getElementById("team-logo").src = team.logo;

  // Aktualizovat budget
  const budgetDisplay = document.getElementById("team-budget");
  if (budgetDisplay) {
	budgetDisplay.innerHTML = `<span class="budget-box"> Budget: ${team.budget} <img src="icons/be.webp" alt="BE" style="height: 30px; vertical-align: middle;"> </span>`;
  }

  // Zobrazit jména hráčů a ceny v jednotlivých rolích
  const roles = ["top", "jg", "mid", "adc", "sup"];
  roles.forEach(role => {
    const player = current[role];
    const nameElement = document.getElementById(`${role}-name`);
    const priceElement = document.getElementById(`${role}-price`);

    if (player && player.name) {
      nameElement.textContent = player.name;
      priceElement.innerHTML = `${player.price} <img src="icons/be.webp" alt="BE" style="height: 22px; vertical-align: middle;">`;
    } else {
      nameElement.textContent = role.toUpperCase();
      priceElement.textContent = "---";
    }
  });
}


function initializeSnakeOrder(teams) {
  const sorted = [...teams].sort((a, b) => a.order - b.order);
  const snake = [];
  const length = sorted.length;
  const rounds = 4; // počet draftovacích kol (např. 5 hráčů)

  for (let i = 0; i < rounds; i++) {
    const round = i % 2 === 0 ? sorted : [...sorted].reverse();
    round.forEach(team => snake.push(team));
  }

  pickOrder = snake;
}


function updateInitialBudgetDisplay() {
  const team = pickOrder[pickIndex];
  const budgetDisplay = document.getElementById("team-budget");
  if (budgetDisplay && team) {
    budgetDisplay.innerHTML = ` <span class="budget-box"> Budget: ${team.budget} <img src="icons/be.webp" alt="BE" style="height: 30px; vertical-align: middle;"> </span>`;

  }
}





function getUnfilledNonCaptainRoles(team) {
  const allRoles = ['top', 'jg', 'mid', 'adc', 'sup'];
  return allRoles.filter(role => {
    return role !== team.captain.role && (!team.players[role] || !team.players[role].name);
  });
}



function assignPlayer() {
  if (phase === "next") {
    // Pokud jsme na konci, spustíme recap
    if (pickIndex >= pickOrder.length || teams.every(t => Object.values(t.players).every(p => p && p.name))) {
      //showRecap();
      return;
    }

    // Jinak pokračujeme ve vybírání
    phase = "assign";
    document.getElementById("message").textContent = "";
    document.querySelector("#controls button").textContent = "Přiřadit hráče";
    updateSelectOptions();
    updateUI();
    return;
  }

  if (phase !== "assign") return;

  const team = pickOrder[pickIndex];

  const selects = [
    { id: "select-dynamic1", role: document.getElementById("select-dynamic1")?.dataset.role },
    { id: "select-dynamic2", role: document.getElementById("select-dynamic2")?.dataset.role },
    { id: "select-dynamic3", role: document.getElementById("select-dynamic3")?.dataset.role },
    { id: "select-dynamic4", role: document.getElementById("select-dynamic4")?.dataset.role }
  ];

  let selected = null;
  for (let s of selects) {
    const el = document.getElementById(s.id);
    if (el && el.selectedIndex >= 0) {
      selected = {
        index: parseInt(el.value),
        role: s.role
      };
      break;
    }
  }

  if (!selected) {
    document.getElementById("message").textContent = "❌ Vyber hráče z jednoho seznamu.";
    return;
  }

  const player = players[selected.index];

  if (team.players[selected.role] && team.players[selected.role].name) {
    document.getElementById("message").textContent = `❌ Pozice ${selected.role.toUpperCase()} už je obsazena.`;
    return;
  }

  // Přidej hráče do týmu a odečti z budgetu
  team.players[selected.role] = { name: player.name, price: player.price, justAdded: true };
  team.budget -= player.price;
  players.splice(selected.index, 1);

  updateSelectOptions();
  updateUI();
  document.getElementById("message").textContent = "";

  pickIndex++;

  // Vždy nastav "Další", i když jsme na konci
  phase = "next";
  const isFinalPick = pickIndex >= pickOrder.length || teams.every(t => Object.values(t.players).every(p => p && p.name));
  document.querySelector("#controls button").textContent = isFinalPick ? "Dokonči draft" : "Další";
}


function showRecap() {
  // Skryj původní sekce
  document.querySelector(".container").style.display = "none";
  document.getElementById("controls").style.display = "none";
  document.getElementById("team-logo-container").style.display = "none";
  document.getElementById("scrollbox-wrapper").style.display = "none";

  const recap = document.getElementById("recap");
  recap.style.display = "flex";
  recap.innerHTML = "<h2 style='color:white; width: 100%; text-align: center;'>Stahuji JSON soubory...</h2>";

  // 1. Vybraní hráči
  const selectedPlayers = [];
  teams.forEach(team => {
    for (let role of ['top', 'jg', 'mid', 'adc', 'sup']) {
      const p = team.players[role];
      if (p && p.name) {
        selectedPlayers.push({
          name: p.name,
          role: role,
          price: p.price,
          team: team.name
        });
      }
    }
  });

  // 2. Nevybraní hráči
  const remainingPlayers = [...players];

  // 3. Pomocná funkce pro stažení JSONu
  function downloadJSON(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = "none";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }

  // 4. Stáhni oba JSON soubory
  downloadJSON(selectedPlayers, "draftovani_hraci.json");
  downloadJSON(remainingPlayers, "zbyli_hraci.json");

  }

initializeSnakeOrder(teams);
updateSelectOptions();
updateUI();

updateInitialBudgetDisplay();

