const teams = [
  {
    name: "ARCANA",
	order: 2,
    logo: "TEAM_LOGOS/Arcana.png",
	budget: 2100,
    captain: { name: "DAO", role: "jg" },
    players: {
      top: "",
      jg: { name: "DAO (CPT)", price: 700 }, mid: "", adc: "", sup: ""
    }
  },
  {
    name: "PILTOVER",
	order: 1,
    logo: "TEAM_LOGOS/Piltover.png",
	budget: 2100,
    captain: { name: "TOMOMASO", role: "top" },
    players: {
      top: { name: "TOMOMASO (CPT)", price: 700 }, jg: "",
      mid: "", adc: "", sup: ""
    }
  },
  {
    name: "NINJAS",
	order: 3,
    logo: "TEAM_LOGOS/Ninjas.png",
	budget: 2100,
    captain: { name: "NECRO", role: "mid" },
    players: {
      top: "", jg: "", mid: { name: "NECRO  (CPT)", price: 680 },
      adc: "", sup: ""
    }
  },
  {
    name: "NOXUS",
	order: 4,
    logo: "TEAM_LOGOS/Noxus.png",
	budget: 2100,
    captain: { name: "PITH16E", role: "adc" },
    players: {
      top: "", jg: "", mid: "", adc: { name: "PITH16E  (CPT)", price: 600 },
      sup: ""
    }
  },
  {
    name: "BILGEWATER",
	order: 5,
    logo: "TEAM_LOGOS/Bilgewater.png",
	budget: 2100,
    captain: { name: "SPRINGY", role: "sup" },
    players: {
      top: "", jg: "", mid: "", adc: "", sup: { name: "SPRINGY  (CPT)", price: 520 }
    }
  },
  {
    name: "DARKINS",
	order: 6,
    logo: "TEAM_LOGOS/Darkins.png",
	budget: 2100,
    captain: { name: "PISLOU", role: "mid" },
    players: {
      top: "", jg: "", mid: { name: "POSLOU (CPT)", price: 620 },
      adc: "", sup: ""
    }
  },
  {
    name: "CAMAVOR",
	order: 7,
    logo: "TEAM_LOGOS/Camavor.png",
	budget: 2100,
    captain: { name: "NUGY", role: "mid" },
    players: {
      top: "", jg: "", mid: { name: "NUGY (CPT)", price: 600 },
      adc: "", sup: ""
    }
  },
  {
    name: "FRELJORD",
	order: 8,
    logo: "TEAM_LOGOS/Freljord.png",
	budget: 2100,
    captain: { name: "TOMI", role: "top" },
    players: {
      top: { name: "TOMI (CPT)", price: 540 }, jg: "",
      mid: "", adc: "", sup: ""
    }
  },
  {
    name: "Shadow Isles",
	order: 9,
    logo: "TEAM_LOGOS/ShadowIsles.png",
	budget: 2100,
    captain: { name: "ERNIE", role: "adc" },
    players: {
      top: "", jg: "", mid: "", adc: { name: "ERNIE (CPT)", price: 500 },
      sup: ""
    }
  },
  {
    name: "BLACK ROSES",
	order: 10,
    logo: "TEAM_LOGOS/BlackRoses.png",
	budget: 2100,
    captain: { name: "LENNY", role: "adc" },
    players: {
      top: "", jg: "", mid: "", adc: { name: "LENNY (CPT)", price: 500 },
      sup: ""
    }
  },
  {
    name: "VOID",
	order: 11,
    logo: "TEAM_LOGOS/Void.png",
	budget: 2100,
    captain: { name: "TARKY", role: "jg" },
    players: {
      top: "",
      jg: { name: "TARKY (CPT)", price: 450 }, mid: "", adc: "", sup: ""
    }
  },
  {
    name: "SHURIMA",
	order: 12,
    logo: "TEAM_LOGOS/Shurima.png",
	budget: 2100,
    captain: { name: "WINNIK", role: "jg" },
    players: {
      top: "",
      jg: { name: "WINNIK (CPT)", price: 440 }, mid: "", adc: "", sup: ""
    }
  },
  {
    name: "IONIA",
	order: 13,
    logo: "TEAM_LOGOS/Ionia.png",
	budget: 2100,
    captain: { name: "JANCEXOXO", role: "top" },
    players: {
      top: { name: "JANCEXOXO (CPT)", price: 430 }, jg: "",
      mid: "", adc: "", sup: ""
    }
  },
  {
    name: "CELESTIALS",
	order: 14,
    logo: "TEAM_LOGOS/Celestials.png",
	budget: 2100,
    captain: { name: "YELLOWNUGGY (CPT)", role: "mid" },
    players: {
      top: "", jg: "", mid: { name: "YELLOWNUGGY (CPT)", price: 600 },
      adc: "", sup: ""
    }
  },
  {
    name: "DEMACIA",
	order: 15,
    logo: "TEAM_LOGOS/Demacia.png",
	budget: 2100,
    captain: { name: "CHALEC", role: "jg" },
    players: {
      top: "",
      jg: { name: "CHALEC (CPT)", price: 350 }, mid: "", adc: "", sup: ""
    }
  },
  {
    name: "IXTAL",
	order: 16,
    logo: "TEAM_LOGOS/Ixtal.png",
	budget: 2100,
    captain: { name: "MATO", role: "top" },
    players: {
      top: { name: "MATO (CPT)", price: 340 }, jg: "",
      mid: "", adc: "", sup: ""
    }
  },
  {
    name: "ZAUN",
	order: 17,
    logo: "TEAM_LOGOS/Zaun.png",
	budget: 2100,
    captain: { name: "CLER", role: "adc" },
    players: {
      top: "", jg: "", mid: "", adc: { name: "CLER (CPT)", price: 310 },
      sup: ""
    }
  },
  {
    name: "TARGON",
	order: 18,
    logo: "TEAM_LOGOS/Targon.png",
	budget: 2100,
    captain: { name: "DEDA", role: "sup" },
    players: {
      top: "", jg: "", mid: "", adc: "", sup: { name: "DEDA  (CPT)", price: 300 }
    }
  },
  {
    name: "DEMONS",
	order: 19,
    logo: "TEAM_LOGOS/Demons.png",
	budget: 2100,
    captain: { name: "NATYNA", role: "sup" },
    players: {
      top: "", jg: "", mid: "", adc: "", sup: { name: "NATYNA  (CPT)", price: 200 }
    }
  },
  {
    name: "BANDLE CITY",
	order: 20,
    logo: "TEAM_LOGOS/BandleCity.png",
	budget: 2100,
    captain: { name: "MUFFI", role: "sup" },
    players: {
      top: "", jg: "", mid: "", adc: "", sup: { name: "MUFFI  (CPT)", price: 150 }
    }
  }
];