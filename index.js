const cadre = document.getElementById("cadre");

let elements = {
    "H": {
        "nom": "hydrogène",
        "image": "./image/hydrogène.png"
    },
    "He": {
        "nom": "hélium",
        "image": "./image/hélium.png"
    },
    "Li": {
        "nom": "lithium",
        "image": "./image/lithium.png"
    },
    "Be": {
        "nom": "béryllium",
        "image": "./image/béryllium.png"
    },
    "B": {
        "nom": "bore",
        "image": "./image/bore.png"
    },
    "C": {
        "nom": "carbone",
        "image": "./image/carbone.png"
    },
    "N": {
        "nom": "azote",
        "image": "./image/azote.png"
    },
    "O": {
        "nom": "oxygène",
        "image": "./image/oxygène.png"
    },
    "F": {
        "nom": "fluor",
        "image": "./image/fluor.png"
    },
    "Ne": {
        "nom": "néon",
        "image": "./image/néon.png"
    },
    "Na": {
        "nom": "sodium",
        "image": "./image/sodium.png"
    },
    "Mg": {
        "nom": "magnésium",
        "image": "./image/magnésium.png"
    },
    "Al": {
        "nom": "aluminium",
        "image": "./image/aluminium.png"
    },
    "Si": {
        "nom": "silicium",
        "image": "./image/silicium.png"
    },
    "P": {
        "nom": "phosphore",
        "image": "./image/phosphore.png"
    },
    "S": {
        "nom": "soufre",
        "image": "./image/soufre.png"
    },
    "Cl": {
        "nom": "chlore",
        "image": "./image/chlore.png"
    },
    "Ar": {
        "nom": "argon",
        "image": "./image/argon.png"
    },
    "K": {
        "nom": "potassium",
        "image": "./image/potassium.png"
    },
    "Ca": {
        "nom": "calcium",
        "image": "./image/calcium.png"
    },
    "Sc": {
        "nom": "scandium",
        "image": "./image/scandium.png"
    },
    "Ti": {
        "nom": "titane",
        "image": "./image/titane.png"
    },
    "V": {
        "nom": "vanadium",
        "image": "./image/vanadium.png"
    },
    "Cr": {
        "nom": "chrome",
        "image": "./image/chrome.png"
    },
    "Mn": {
        "nom": "manganèse",
        "image": "./image/manganèse.png"
    },
    "Fe": {
        "nom": "fer",
        "image": "./image/fer.png"
    },
    "Co": {
        "nom": "cobalt",
        "image": "./image/cobalt.png"
    },
    "Ni": {
        "nom": "nickel",
        "image": "./image/nickel.png"
    },
    "Cu": {
        "nom": "cuivre",
        "image": "./image/cuivre.png"
    },
    "Zn": {
        "nom": "zinc",
        "image": "./image/zinc.png"
    },
    "Ga": {
        "nom": "gallium",
        "image": "./image/gallium.png"
    },
    "Ge": {
        "nom": "germanium",
        "image": "./image/germanium.png"
    },
    "As": {
        "nom": "arsenic",
        "image": "./image/arsenic.png"
    },
    "Se": {
        "nom": "sélénium",
        "image": "./image/sélénium.png"
    },
    "Br": {
        "nom": "brome",
        "image": "./image/brome.png"
    },
    "Kr": {
        "nom": "krypton",
        "image": "./image/krypton.png"
    },
    "Rb": {
        "nom": "rubidium",
        "image": "./image/rubidium.png"
    },
    "Sr": {
        "nom": "strontium",
        "image": "./image/strontium.png"
    },
    "Y": {
        "nom": "yttrium",
        "image": "./image/yttrium.png"
    },
    "Zr": {
        "nom": "zirconium",
        "image": "./image/zirconium.png"
    },
    "Nb": {
        "nom": "niobium",
        "image": "./image/niobium.png"
    },
    "Mo": {
        "nom": "molybdène",
        "image": "./image/molybdène.png"
    },
    "Tc": {
        "nom": "technétium",
        "image": "./image/technétium.png"
    },
    "Ru": {
        "nom": "ruthénium",
        "image": "./image/ruthénium.png"
    },
    "Rh": {
        "nom": "rhodium",
        "image": "./image/rhodium.png"
    },
    "Pd": {
        "nom": "palladium",
        "image": "./image/palladium.png"
    },
    "Ag": {
        "nom": "argent",
        "image": "./image/argent.png"
    },
    "Cd": {
        "nom": "cadmium",
        "image": "./image/cadmium.png"
    },
    "In": {
        "nom": "indium",
        "image": "./image/indium.png"
    },
    "Sn": {
        "nom": "étain",
        "image": "./image/étain.png"
    },
    "Sb": {
        "nom": "antimoine",
        "image": "./image/antimoine.png"
    },
    "Te": {
        "nom": "tellure",
        "image": "./image/tellure.png"
    },
    "I": {
        "nom": "iode",
        "image": "./image/iode.png"
    },
    "Xe": {
        "nom": "xénon",
        "image": "./image/xénon.png"
    },
    "Cs": {
        "nom": "césium",
        "image": "./image/césium.png"
    },
    "Ba": {
        "nom": "baryum",
        "image": "./image/baryum.png"
    },
    "La": {
        "nom": "lanthane",
        "image": "./image/lanthane.png"
    },
    "Ce": {
        "nom": "cérium",
        "image": "./image/cérium.png"
    },
    "Pr": {
        "nom": "praséodyme",
        "image": "./image/praséodyme.png"
    },
    "Nd": {
        "nom": "néodyme",
        "image": "./image/néodyme.png"
    },
    "Pm": {
        "nom": "prométhium",
        "image": "./image/prométhium.png"
    },
    "Sm": {
        "nom": "samarium",
        "image": "./image/samarium.png"
    },
    "Eu": {
        "nom": "europium",
        "image": "./image/europium.png"
    },
    "Gd": {
        "nom": "gadolinium",
        "image": "./image/gadolinium.png"
    },
    "Tb": {
        "nom": "terbium",
        "image": "./image/terbium.png"
    },
    "Dy": {
        "nom": "dysprosium",
        "image": "./image/dysprosium.png"
    },
    "Ho": {
        "nom": "holmium",
        "image": "./image/holmium.png"
    },
    "Er": {
        "nom": "erbium",
        "image": "./image/erbium.png"
    },
    "Tm": {
        "nom": "thulium",
        "image": "./image/thulium.png"
    },
    "Yb": {
        "nom": "ytterbium",
        "image": "./image/ytterbium.png"
    },
    "Lu": {
        "nom": "lutétium",
        "image": "./image/lutétium.png"
    },
    "Hf": {
        "nom": "hafnium",
        "image": "./image/hafnium.png"
    },
    "Ta": {
        "nom": "tantale",
        "image": "./image/tantale.png"
    },
    "W": {
        "nom": "tungstène",
        "image": "./image/tungstène.png"
    },
    "Re": {
        "nom": "rhénium",
        "image": "./image/rhénium.png"
    },
    "Os": {
        "nom": "osmium",
        "image": "./image/osmium.png"
    },
    "Ir": {
        "nom": "iridium",
        "image": "./image/iridium.png"
    },
    "Pt": {
        "nom": "platine",
        "image": "./image/platine.png"
    },
    "Au": {
        "nom": "or",
        "image": "./image/or.png"
    },
    "Hg": {
        "nom": "mercure",
        "image": "./image/mercure.png"
    },
    "Tl": {
        "nom": "thallium",
        "image": "./image/thallium.png"
    },
    "Pb": {
        "nom": "plomb",
        "image": "./image/plomb.png"
    },
    "Bi": {
        "nom": "bismuth",
        "image": "./image/bismuth.png"
    },
    "Po": {
        "nom": "polonium",
        "image": "./image/polonium.png"
    },
    "At": {
        "nom": "astate",
        "image": "./image/astate.png"
    },
    "Rn": {
        "nom": "radon",
        "image": "./image/radon.mp4"
    },
    "Fr": {
        "nom": "francium",
        "image": "./image/francium.png"
    },
    "Ra": {
        "nom": "radium",
        "image": "./image/radium.png"
    },
    "Ac": {
        "nom": "actinium",
        "image": "./image/actinium.png"
    },
    "Th": {
        "nom": "thorium",
        "image": "./image/thorium.png"
    },
    "Pa": {
        "nom": "protactinium",
        "image": "./image/protactinium.png"
    },
    "U": {
        "nom": "uranium",
        "image": "./image/uranium.png"
    },
    "Np": {
        "nom": "neptunium",
        "image": "./image/neptunium.png"
    },
    "Pu": {
        "nom": "plutonium",
        "image": "./image/plutonium.png"
    },
    "Am": {
        "nom": "américium",
        "image": "./image/américium.png"
    },
    "Cm": {
        "nom": "curium",
        "image": "./image/curium.png"
    },
    "Bk": {
        "nom": "berkélium",
        "image": "./image/berkélium.png"
    },
    "Cf": {
        "nom": "californium",
        "image": "./image/californium.png"
    },
    "Es": {
        "nom": "einsteinium",
        "image": "./image/einsteinium.png"
    },
    "Fm": {
        "nom": "fermiumn",
        "image": "./image/fermium.png"
    },
    "Md": {
        "nom": "mendélévium",
        "image": "./image/mendélévium.png"
    },
    "No": {
        "nom": "nobélium",
        "image": "./image/nobélium.png"
    },
    "Lr": {
        "nom": "lawrencium",
        "image": "./image/lawrencium.png"
    },
    "Rf": {
        "nom": "rutherfordium",
        "image": "./image/rutherfordium.png"
    },
    "Db": {
        "nom": "dubnium",
        "image": "./image/dubnium.png"
    },
    "Sg": {
        "nom": "seaborgium",
        "image": "./image/seaborgium.png"
    },
    "Bh": {
        "nom": "bohrium",
        "image": "./image/bohrium.png"
    },
    "Hs": {
        "nom": "hassium",
        "image": "./image/hassium.png"
    },
    "Mt": {
        "nom": "meitnerium",
        "image": "./image/meitnerium.png"
    },
    "Ds": {
        "nom": "darmstadtium",
        "image": "./image/darmstadtium.png"
    },
    "Rg": {
        "nom": "roentgenium",
        "image": "./image/roentgenium.png"
    },
    "Cn": {
        "nom": "copernicium",
        "image": "./image/copernicium.png"
    },
    "Nh": {
        "nom": "nihonium",
        "image": "./image/nihonium.png"
    },
    "Fl": {
        "nom": "flerovium",
        "image": "./image/flerovium.png"
    },
    "Mc": {
        "nom": "moscovium",
        "image": "./image/moscovium.png"
    },
    "Lv": {
        "nom": "livermorium",
        "image": "./image/livermorium.png"
    },
    "Ts": {
        "nom": "tennessine",
        "image": "./image/tennessine.png"
    },
    "Og": {
        "nom": "oganesson",
        "image": "./image/oganesson.png"
    }
};

console.log(elements);

function drawElement(element) {
    if (element === "Rn"){
        cadre.innerHTML = '<video controls autoplay width="600"><source src="./image/radon.mp4" type="video/mp4"></video>';
        return;
    }
    
    cadre.innerHTML = '';

    const elementName = document.createElement('h3');
    elementName.textContent = elements[element].nom;
    
    const elementImage = document.createElement('img');
    elementImage.src = elements[element].image;
    elementImage.alt = elements[element].nom;

    cadre.appendChild(elementName);
    cadre.appendChild(elementImage);
}
