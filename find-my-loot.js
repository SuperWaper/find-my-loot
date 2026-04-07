// ─── DATA ───────────────────────────────────────────────────────────────────
// Each item: [name_en, name_fr, sources_string]
// sources_string: comma-separated boss keys
const SECTIONS = [
  {
    id: 'mythic',
    label: 'Mythiques',
    theme: 'theme-mythic',
    isMythic: true,
    collapsible: true,
    items: [
      ["Andariel's Visage", "Visage d'Andariel", 'duriel,andariel,harbinger'],
      ['Harlequin Crest', "Cimier d'Arlequin", 'duriel,andariel,harbinger'],
      [
        'Melted Heart of Selig',
        'Cœur fondu de Selig',
        'duriel,andariel,harbinger',
      ],
      [
        'Ring of Starless Skies',
        'Anneau des cieux sans étoiles',
        'duriel,andariel,harbinger',
      ],
      [
        'Shroud of False Death',
        'Linceul de la fausse mort',
        'duriel,andariel,harbinger',
      ],
      [
        'Heir of Perdition',
        'Héritier de la perdition',
        'duriel,andariel,harbinger',
      ],
      ["Tyrael's Might", 'Puissance de Tyrael', 'duriel,andariel,harbinger'],
      ['Doombringer', 'Porteur du Destin', 'duriel,andariel,harbinger'],
      ['The Grandfather', 'Le Patriarche', 'duriel,andariel,harbinger'],
      ['Shattered Vow', 'Vœu brisé', 'duriel,andariel,harbinger'],
      [
        'Ahavarion, Spear of Lycander',
        'Ahavarion, Lance de Lycander',
        'duriel,andariel,harbinger',
      ],
      ['Bane of Ahjad-Den', "Fléau d'Ahjad-Den", 'duriel,andariel,harbinger'],
    ],
  },
  {
    id: 'all',
    label: 'Toutes classes',
    theme: 'theme-all',
    collapsible: true,
    items: [
      ['Frostburn', 'Brûlure givrée', 'varshan,urivar'],
      ["Mother's Embrace", 'Étreinte de la Mère', 'varshan'],
      ["Rakanoth's Wake", 'Sillage de Rakanoth', 'varshan'],
      ['Shard of Verathiel', 'Éclat de Verathiel', 'varshan'],
      ['Craze of the Dead God', 'Frénésie du dieu mort', 'varshan,urivar'],
      ['Ring of Writhing Moon', 'Anneau de la lune torturée', 'varshan'],
      ['Orsivane', 'Orsivane', 'varshan'],
      ['Arcadia', 'Arcadie', 'varshan,urivar'],
      ['Ward of the White Dove', 'Garde de la colombe blanche', 'varshan'],
      ['Dawnfire', "Feu de l'Aube", 'varshan'],
      ['Sunbrand', 'Marque solaire', 'varshan'],
      ["Balazan's Maxtlatl", 'Maxtlatl de Balazan', 'varshan,urivar'],
      ['Razorplate', 'Plaque tranchante', 'lordzir'],
      ['Temerity', 'Témérité', 'lordzir,urivar'],
      ["Yen's Blessing", 'Bénédiction de Yen', 'lordzir'],
      ['Sidhe Bindings', 'Liens des Sidhe', 'lordzir,urivar'],
      ['Vox Omnium', 'Vox Omnium', 'lordzir'],
      ['Jacinth Shell', 'Coquille de jacinthe', 'lordzir,urivar'],
      ['Wushe Nak Pa', 'Wushe Nak Pa', 'lordzir'],
      ['Band of First Breath', 'Anneau du premier souffle', 'lordzir'],
      ['Path of the Emissary', "Chemin de l'Émissaire", 'lordzir'],
      ["Cathedral's Song", 'Chant de la cathédrale', 'lordzir,urivar'],
      ['Red Sermon', 'Sermon rouge', 'lordzir'],
      ['Sanctis of Kethamar', 'Sanctis de Kethamar', 'lordzir'],
      ["Kessime's Legacy", 'Héritage de Kessime', 'lordzir'],
      ['Tassets of the Dawning Sky', 'Tassettes du ciel naissant', 'beast'],
      ["Paingorger's Gauntlets", "Gantelets de l'Écorcheur", 'beast,urivar'],
      ['Fists of Fate', 'Poings du Destin', 'beast'],
      ['Wound Drinker', 'Buveur de blessures', 'beast'],
      ['Harmony of Ebewaka', "Harmonie d'Ebewaka", 'beast'],
      ['Ring of the Midday Hunt', 'Anneau de la chasse de midi', 'beast'],
      ['Scorn of the Earth', 'Mépris de la Terre', 'beast'],
      ["The Butcher's Cleaver", 'Couperet du Boucher', 'grigoire'],
      ['Penitent Greaves', 'Grèves du Pénitent', 'grigoire'],
      ['Endurant Faith', 'Foi endurante', 'grigoire'],
      ['Hesha e Kesungi', 'Hesha e Kesungi', 'grigoire,urivar'],
      ['Mantle of the Grey', 'Manteau du Gris', 'grigoire,urivar'],
      ['Sundered Night', 'Nuit déchirée', 'grigoire'],
      ['Supplication', 'Supplication', 'grigoire'],
      [
        'Bands of Ichorous Rose',
        'Gantelets de la Rose Ichoreuse',
        'grigoire,urivar',
      ],
      ["Peacemonger's Signet", 'Sceau du Pacificateur', 'grigoire'],
      [
        'Ring of the Midnight Sun',
        'Anneau du soleil de minuit',
        'grigoire,urivar',
      ],
      ["Loyalty's Mantle", 'Manteau de la Loyauté', 'grigoire'],
      [
        'Godslayer Crown',
        'Couronne du Tueur de Dieux',
        'lordzir,duriel,andariel',
      ],
      ['Flickerstep', 'Pas vacillant', 'andariel,harbinger'],
      ["Tibault's Will", 'Volonté de Tibault', 'andariel,harbinger'],
      ["Locran's Talisman", 'Talisman de Locran', 'andariel,harbinger'],
      ['Soulbrand', "Marque de l'âme", 'andariel,duriel'],
      ["X'Fal's Corroded Signet", "Sceau corrodé de X'Fal", 'andariel,duriel'],
      ['Azurewrath', 'Azurewrath', 'andariel,duriel'],
      [
        "Banished Lord's Talisman",
        'Talisman du Seigneur banni',
        'duriel,harbinger',
      ],
      ['Crown of Lucion', 'Couronne de Lucion', 'duriel,harbinger'],
      ['Blood-Mad Idol', 'Idole folle de sang', 'butcher'],
      ['Wendigo Brand', 'Marque du Wendigo', 'butcher'],
      ['Rustbitten Dirk', 'Dague rouillée', 'butcher'],
      ['Thousand-Eye Reaver', 'Pilleur aux mille yeux', 'butcher'],
      ['Wyrdskin', 'Wyrdskin', 'butcher'],
    ],
  },
  {
    id: 'barb',
    label: 'Barbarian',
    theme: 'theme-barb',
    collapsible: true,
    items: [
      ['Rage of Harrogath', 'Rage de Harrogath', 'grigoire'],
      ['Battle Trance', 'Transe de combat', 'grigoire'],
      ['Twin Strikes', 'Coups jumelés', 'grigoire,urivar'],
      ['Unbroken Chain', 'Chaîne indestructible', 'grigoire'],
      ['Insatiable Fury', 'Fureur insatiable', 'grigoire'],
      ['Fields of Crimson', "Champs d'Écarlate", 'varshan'],
      ['100,000 Steps', '100 000 pas', 'varshan,urivar'],
      ["Gohr's Devastating Grips", 'Prises dévastatrices de Gohr', 'varshan'],
      ['Ring of Red Furor', 'Anneau de la fureur rouge', 'varshan'],
      ['Sabre of Tsasgal', 'Sabre de Tsasgal', 'varshan'],
      ["Ramaladni's Magnum Opus", 'Magnum Opus de Ramaladni', 'lordzir'],
      ['Overkill', 'Excès de force', 'lordzir,urivar'],
      ["Arreat's Bearing", "Port d'Arreat", 'lordzir'],
      ['Ugly Bastard Helm', 'Casque du Sale Bâtard', 'lordzir'],
      ['Chainscourged Mail', 'Cotte de mailles tourmentée', 'lordzir'],
      ["Ancients' Oath", 'Serment des Anciens', 'beast'],
      ['Hellhammer', 'Marteau infernal', 'beast'],
      ['Ring of the Ravenous', 'Anneau du Vorace', 'beast,urivar'],
      [
        'Tuskhelm of Joritz the Mighty',
        'Casque à défenses de Joritz',
        'duriel,andariel',
      ],
    ],
  },
  {
    id: 'druid',
    label: 'Druid',
    theme: 'theme-druid',
    collapsible: true,
    items: [
      ["Hunter's Zenith", 'Zénith du Chasseur', 'grigoire'],
      ['Waxing Gibbous', 'Gibbeuse croissante', 'grigoire'],
      ['Earthbreaker', 'Briseur de Terre', 'grigoire,urivar'],
      ['Khamsin Steppewalkers', 'Marcheurs des steppes Khamsin', 'grigoire'],
      ["Mad Wolf's Glee", 'Joie du loup fou', 'varshan'],
      ["Vasily's Prayer", 'Prière de Vasily', 'varshan'],
      [
        'Greatstaff of the Crone',
        'Grand bâton de la Vieille',
        'varshan,urivar',
      ],
      ["Airidah's Inexorable Will", "Volonté inexorable d'Airidah", 'varshan'],
      ['Fleshrender', 'Déchireur de chair', 'lordzir'],
      ['Wildheart Hunger', 'Faim du Cœur sauvage', 'lordzir'],
      ['Mjölnic Ryng', 'Anneau de Mjölnic', 'lordzir'],
      ["Mantle of Mountain's Fury", 'Manteau de la Fureur des monts', 'beast'],
      [
        'Hooves of the Mountain God',
        'Sabots du Dieu des montagnes',
        'beast,urivar',
      ],
      ["Storm's Companion", 'Compagnon de la Tempête', 'beast,urivar'],
      ["Unsung Ascetic's Wraps", "Bandelettes de l'Ascète oublié", 'beast'],
      ['Stone of Vehemen', 'Pierre de Vehemen', 'beast'],
      ["Gathlen's Birthright", 'Droit de naissance de Gathlen', 'beast,urivar'],
      ['Tempest Roar', 'Rugissement de Tempête', 'duriel,andariel,harbinger'],
      ['Dolmen Stone', 'Pierre de Dolmen', 'duriel,andariel'],
    ],
  },
  {
    id: 'necro',
    label: 'Necromancer',
    theme: 'theme-necro',
    collapsible: true,
    items: [
      ['Howl from Below', 'Hurlement des profondeurs', 'grigoire'],
      ['Greaves of the Empty Tomb', 'Grèves du tombeau vide', 'grigoire'],
      ['Ebonpiercer', "Perceur d'ébène", 'grigoire,urivar'],
      ["Path of Trag'Oul", "Chemin de Trag'Oul", 'grigoire'],
      ['The Mortacrux', 'La Mortacrux', 'grigoire'],
      [
        'Rotting Lightbringer',
        'Porteur de lumière en décomposition',
        'varshan,urivar',
      ],
      ['Bloodless Scream', 'Cri sans sang', 'varshan,urivar'],
      ['Deathless Visage', 'Visage sans mort', 'varshan'],
      ["Deathspeaker's Pendant", 'Pendentif du Parleur de mort', 'varshan'],
      ['Ring of the Sacrilegious Soul', "Anneau de l'âme sacrilège", 'varshan'],
      ['Malefic Crescent', 'Croissant maléfique', 'lordzir,urivar'],
      [
        "Blood Artisan's Cuirass",
        "Cuirasse de l'Artisan du sang",
        'lordzir,urivar',
      ],
      ['Lidless Wall', 'Mur sans paupières', 'lordzir'],
      ["Cruor's Embrace", 'Étreinte du Cruor', 'lordzir'],
      ['Ring of Mendeln', 'Anneau de Mendeln', 'beast'],
      ['Mutilator Plate', 'Plaque Mutilateur', 'beast'],
      ["Indira's Memory", "Mémoire d'Indira", 'beast'],
      ['The Unmaker', 'Le Défaiseur', 'beast,urivar'],
      ['Gravebloom', 'Fleur de tombe', 'beast'],
      ['Kilt of Blackwing', "Kilt de l'Aile noire", 'beast'],
      ['Black River', 'Rivière noire', 'andariel,harbinger'],
      [
        'Blood Moon Breeches',
        'Culotte de la lune sanglante',
        'duriel,andariel',
      ],
      ['Cowl of the Nameless', 'Capuche du Sans-nom', 'duriel,andariel'],
      ["Death's Pavane", 'Pavane de la Mort', 'duriel,andariel'],
    ],
  },
  {
    id: 'rogue',
    label: 'Rogue',
    theme: 'theme-rogue',
    collapsible: true,
    items: [
      ['Word of Hakan', 'Parole de Hakan', 'grigoire,urivar'],
      ['Grasp of Shadow', 'Emprise des Ombres', 'grigoire'],
      ["Saboteur's Signet", 'Sceau du Saboteur', 'grigoire'],
      ['Shroud of Khanduras', 'Linceul de Khanduras', 'grigoire'],
      ['Condemnation', 'Condamnation', 'varshan'],
      ['Eyes in the Dark', 'Yeux dans les ténèbres', 'varshan,urivar'],
      ['Skyhunter', 'Chasseur céleste', 'varshan'],
      ['Writhing Band of Trickery', 'Anneau contorsionné de ruse', 'varshan'],
      ['Gospel of the Devotee', 'Évangile du Dévoué', 'varshan,urivar'],
      ['Sanguivor, Blade of Zir', 'Sanguivor, Lame de Zir', 'lordzir'],
      ["Asheara's Khanjar", "Khanjar d'Asheara", 'lordzir'],
      ["Scoundrel's Kiss", 'Baiser du Brigand', 'lordzir,urivar'],
      ["Assassin's Stride", "Foulée de l'Assassin", 'lordzir'],
      ["Pitfighter's Gull", 'Goéland du combattant de fosse', 'lordzir'],
      ['Orphan Maker', "Faiseur d'orphelins", 'lordzir'],
      ['Windforce', 'Force du vent', 'beast,urivar'],
      ['Eaglehorn', "Corne d'Aigle", 'beast'],
      ['Beastfall Boots', 'Bottes Chute-Bête', 'beast'],
      ['The Umbracrux', "L'Umbracrux", 'andariel,harbinger'],
      ["Scoundrel's Leathers", 'Cuirs du Brigand', 'andariel,duriel'],
    ],
  },
  {
    id: 'sorc',
    label: 'Sorcerer',
    theme: 'theme-sorc',
    collapsible: true,
    items: [
      ['Staff of Lam Esen', 'Bâton de Lam Esen', 'grigoire'],
      ['Iceheart Brais', 'Braies Cœur-de-Glace', 'grigoire,urivar'],
      ['Flameweaver', 'Tisseur de flammes', 'grigoire'],
      ['Axial Conduit', 'Conduit axial', 'grigoire'],
      ['Hail of Verglas', 'Grêle de Verglas', 'grigoire,urivar'],
      ['Protection of the Prime', 'Protection du Primordial', 'grigoire'],
      ['Staff of Endless Rage', 'Bâton de la Rage infinie', 'varshan'],
      ["Esu's Heirloom", "Héritage d'Esu", 'varshan'],
      ['Raiment of the Infinite', "Vêtement de l'Infini", 'varshan'],
      [
        "Tal Rasha's Iridescent Loop",
        'Anneau iridescent de Tal Rasha',
        'varshan,urivar',
      ],
      ["Esadora's Overflowing Cameo", "Camée débordant d'Esadora", 'lordzir'],
      ['Fractured Winterglass', "Verre d'hiver fracturé", 'lordzir'],
      ["Okun's Catalyst", "Catalyseur d'Okun", 'lordzir'],
      ['The Oculus', "L'Oculus", 'beast'],
      ['Starfall Coronet', "Couronnement d'étoile filante", 'beast'],
      ['Strike of Stormhorn', 'Frappe de Cor-tempête', 'beast,urivar'],
      ['Gloves of the Illuminator', "Gants de l'Illuminateur", 'beast'],
      ['Blue Rose', 'Rose bleue', 'duriel'],
      ['Flamescar', 'Cicatrice de flamme', 'harbinger'],
      ['Galvanic Azurite', 'Azurite galvanique', 'harbinger'],
      ['Ophidian Iris', 'Iris ophidien', 'harbinger,duriel'],
    ],
  },
  {
    id: 'spirit',
    label: 'Spiritborn',
    theme: 'theme-spirit',
    collapsible: true,
    items: [
      ['The Hand of Naz', 'La Main de Naz', 'duriel,andariel,harbinger'],
      [
        'Nesekem, The Herald',
        'Nesekem, Le Héraut',
        'duriel,andariel,harbinger',
      ],
      ['Rod of Kepeleke', 'Bâton de Kepeleke', 'duriel,andariel,harbinger'],
      ['Sepazontec', 'Sepazontec', 'duriel'],
      [
        'Deathmask of Nirmitruq',
        'Masque mortuaire de Nirmitruq',
        'beast,urivar',
      ],
      ["Sunbird's Gorget", "Gorgerin de l'Oiseau solaire", 'harbinger'],
      ["Griswold's Opus", 'Opus de Griswold', 'harbinger,duriel'],
      ["Judicant's Glaivehelm", 'Heaume-glaive du Judicant', 'urivar'],
    ],
  },
  {
    id: 'paladin',
    label: 'Paladin',
    theme: 'theme-paladin',
    collapsible: true,
    items: [
      ['Herald of Zakarum', 'Héraut de Zakarum', 'harbinger'],
      ['Argent Veil', 'Voile Argent', 'harbinger,duriel'],
      ['Judgment of Auriel', "Jugement d'Auriel", 'harbinger'],
      ['Bastion of Sir Matthias', 'Bastion de Sir Matthias', 'beast'],
      ['Seal of the Second Trumpet', 'Sceau de la Deuxième Trompette', 'beast'],
      ["Light's Rebuke", 'Réprimande de la Lumière', 'beast,urivar'],
      ['Wreath of Auric Laurel', 'Couronne de Laurier Aurique', 'beast'],
      [
        'Sunstained War-Crozier',
        'Crosse de guerre teintée de soleil',
        'varshan,urivar',
      ],
      ['Gate of the Red Dawn', "Porte de l'Aube Rouge", 'duriel'],
      ["Herald's Morningstar", 'Étoile du matin du Héraut', 'duriel'],
    ],
  },
  {
    id: 'warlock',
    label: 'Warlock',
    theme: 'theme-warlock',
    collapsible: true,
    items: [
      ['The Third Blade', 'La Troisième Lame', 'harbinger'],
      ['The Basilisk', 'Le Basilic', 'andariel,harbinger'],
      ["Death's Pavane", 'Pavane de la Mort', 'duriel,andariel'],
      [
        'Sunstained War-Crozier',
        'Crosse de guerre teintée de soleil',
        'varshan,urivar',
      ],
    ],
  },
];

const BOSS_LABELS = {
  grigoire: { label: 'Grigoire', cls: 'pill-grigoire' },
  varshan: { label: 'Varshan', cls: 'pill-varshan' },
  lordzir: { label: 'Lord Zir', cls: 'pill-lordzir' },
  beast: { label: 'Beast in the Ice', cls: 'pill-beast' },
  urivar: { label: 'Urivar', cls: 'pill-urivar' },
  harbinger: { label: 'Harbinger of Hatred', cls: 'pill-harbinger' },
  duriel: { label: 'Duriel', cls: 'pill-duriel' },
  andariel: { label: 'Andariel', cls: 'pill-andariel' },
  butcher: { label: 'The Butcher', cls: 'pill-butcher' },
  random: { label: 'Random', cls: 'pill-random' },
};

// Map IDs for purediablo.com/diablo4/map/
const BOSS_MAP_IDS = {
  grigoire: 'marker_1728386483806',
  varshan: 'marker_1728386482525',
  lordzir: 'marker_1728386482838',
  beast: 'marker_1728386482534',
  urivar: 'marker_1742076395404',
  harbinger: 'marker_1742075954481',
  duriel: 'marker_1728386483281',
  andariel: 'marker_1728386482739',
  butcher: 'marker_1728386483112',
  random: '',
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let showFr = false;
let searchQ = '';

// ─── RENDER ──────────────────────────────────────────────────────────────────
function buildPills(sourcesStr) {
  return sourcesStr
    .split(',')
    .map((key) => {
      key = key.trim();
      const b = BOSS_LABELS[key] || { label: key, cls: 'pill-random' };
      const mapId = BOSS_MAP_IDS[key];
      const mapUrl = mapId
        ? `https://www.purediablo.com/diablo4/map/?markerId=${mapId}`
        : '';

      if (mapUrl && mapId !== 'random') {
        return `<a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;"><span class="source-pill ${b.cls}" style="cursor:pointer;">${b.label}</span></a>`;
      } else {
        return `<span class="source-pill ${b.cls}">${b.label}</span>`;
      }
    })
    .join('');
}

function buildSection(sec) {
  const div = document.createElement('div');
  div.className = `section theme-${sec.theme.replace('theme-', '')} ${!sec.collapsible ? '' : ''}`;
  div.id = 'sec-' + sec.id;

  const badge = `<span class="section-badge" style="background:rgba(255,255,255,0.1)">${sec.items.length} objets</span>`;
  const mythicIcon = sec.isMythic
    ? '<span style="font-size:0.9rem;">⚡</span>'
    : '';

  div.innerHTML = `
    <div class="section-header" onclick="toggleSection('${sec.id}')">
      <div class="section-title">
        ${mythicIcon}
        ${sec.label}
        ${badge}
      </div>
      ${sec.collapsible ? '<svg class="section-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>' : ''}
    </div>
    <div class="section-body">
      <table>
        <thead>
          <tr>
            <th>Nom (EN)</th>
            <th class="col-fr ${showFr ? 'visible' : ''}">Nom (FR)</th>
            <th>Source de drop</th>
          </tr>
        </thead>
        <tbody id="tbody-${sec.id}">
        </tbody>
      </table>
    </div>
  `;

  // Set initial max-height for animation
  const container = document.getElementById('sections-container');
  container.appendChild(div);

  // Fill rows
  const tbody = document.getElementById('tbody-' + sec.id);
  sec.items.forEach(([en, fr, sources]) => {
    const tr = document.createElement('tr');
    tr.dataset.en = en.toLowerCase();
    tr.dataset.fr = fr.toLowerCase();
    const mythicStar = sec.isMythic ? '<span class="mythic-star">✦</span>' : '';
    tr.innerHTML = `
      <td class="name-en">${mythicStar}${en}</td>
      <td class="col-fr name-fr ${showFr ? 'visible' : ''}">${fr}</td>
      <td><div class="source-list">${buildPills(sources)}</div></td>
    `;
    tbody.appendChild(tr);
  });

  // Set body height
  const body = div.querySelector('.section-body');
  body.style.maxHeight = body.scrollHeight + 'px';
}

function renderAll() {
  const container = document.getElementById('sections-container');
  container.innerHTML = '';
  SECTIONS.forEach(buildSection);
  applySearch();
}

// ─── COLLAPSE ────────────────────────────────────────────────────────────────
function toggleSection(id) {
  const sec = SECTIONS.find((s) => s.id === id);
  if (!sec || !sec.collapsible) return;
  const div = document.getElementById('sec-' + id);
  const body = div.querySelector('.section-body');
  if (div.classList.contains('collapsed')) {
    div.classList.remove('collapsed');
    body.style.maxHeight = body.scrollHeight + 'px';
  } else {
    body.style.maxHeight = body.scrollHeight + 'px';
    requestAnimationFrame(() => {
      div.classList.add('collapsed');
    });
  }
}

// ─── FRENCH TOGGLE ───────────────────────────────────────────────────────────
function toggleFrench() {
  showFr = !showFr;
  const btn = document.getElementById('toggleFr');
  btn.classList.toggle('active', showFr);

  document.querySelectorAll('.col-fr').forEach((el) => {
    el.classList.toggle('visible', showFr);
  });

  // Recalculate heights for open sections
  document
    .querySelectorAll('.section:not(.collapsed) .section-body')
    .forEach((body) => {
      body.style.maxHeight = 'none';
      const h = body.scrollHeight;
      body.style.maxHeight = h + 'px';
    });
}

// ─── SEARCH ──────────────────────────────────────────────────────────────────
function doSearch() {
  searchQ = document.getElementById('search').value.toLowerCase().trim();
  applySearch();
}

function applySearch() {
  let total = 0;
  let visible = 0;

  SECTIONS.forEach((sec) => {
    const tbody = document.getElementById('tbody-' + sec.id);
    if (!tbody) return;
    let secVisible = 0;
    tbody.querySelectorAll('tr').forEach((tr) => {
      total++;
      const matchEn = tr.dataset.en && tr.dataset.en.includes(searchQ);
      const matchFr = tr.dataset.fr && tr.dataset.fr.includes(searchQ);
      const match = !searchQ || matchEn || matchFr;
      tr.classList.toggle('hidden', !match);
      if (match) {
        visible++;
        secVisible++;
      }
    });

    // Show/hide section if all rows hidden
    const div = document.getElementById('sec-' + sec.id);
    if (div) {
      div.style.display = secVisible === 0 ? 'none' : '';
    }

    // Recalculate height
    const body = div ? div.querySelector('.section-body') : null;
    if (body && !div.classList.contains('collapsed')) {
      body.style.maxHeight = 'none';
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });

  const countEl = document.getElementById('resultCount');
  const noRes = document.getElementById('noResults');
  if (searchQ) {
    countEl.textContent = visible + ' résultat' + (visible !== 1 ? 's' : '');
    noRes.classList.toggle('visible', visible === 0);
  } else {
    countEl.textContent = total + ' objets';
    noRes.classList.remove('visible');
  }
}

// ─── VERSION ─────────────────────────────────────────────────────────────────
async function loadVersion() {
  try {
    const response = await fetch('version.json');
    const data = await response.json();
    const footerToDisplay = document.getElementById('footerToDisplay');
    if (footerToDisplay) {
      footerToDisplay.textContent =
        'Sources : d4builds.gg · maxroll.gg · fextralife.com — Mise à jour Season 12 - Version (' +
        data.version +
        ')';
    }
  } catch (error) {
    console.error('Erreur lors du chargement de la version:', error);
  }
}
// ─── INIT ────────────────────────────────────────────────────────────────────
renderAll();
// Initial count
applySearch();
// Charger la version au démarrage
loadVersion();
