// ─── DATA ───────────────────────────────────────────────────────────────────
// Each item: [name_en, name_fr, type, sources_string]
// sources_string: comma-separated boss keys
const SECTIONS = [
  {
    id: 'mythic',
    label: 'Mythic Items',
    theme: 'theme-mythic',
    isMythic: true,
    collapsible: true,
    items: [
      [
        "Andariel's Visage",
        "Visage d'Andariel",
        'Helmet',
        'duriel,andariel,harbinger',
      ],
      [
        'Harlequin Crest',
        "Cimier d'Arlequin",
        'Helmet',
        'duriel,andariel,harbinger',
      ],
      [
        'Melted Heart of Selig',
        'Cœur fondu de Selig',
        'Amulet',
        'duriel,andariel,harbinger',
      ],
      [
        'Ring of Starless Skies',
        'Anneau des cieux sans étoiles',
        'Ring',
        'duriel,andariel,harbinger',
      ],
      [
        'Shroud of False Death',
        'Linceul de la fausse mort',
        'Chest',
        'duriel,andariel,harbinger',
      ],
      [
        'Heir of Perdition',
        'Héritier de la perdition',
        'Chest',
        'duriel,andariel,harbinger',
      ],
      [
        "Tyrael's Might",
        'Puissance de Tyrael',
        'Chest',
        'duriel,andariel,harbinger',
      ],
      [
        'Doombringer',
        'Porteur du Destin',
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      [
        'The Grandfather',
        'Le Patriarche',
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      ['Shattered Vow', 'Vœu brisé', 'Ring', 'duriel,andariel,harbinger'],
      [
        'Ahavarion, Spear of Lycander',
        'Ahavarion, Lance de Lycander',
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      [
        'Bane of Ahjad-Den',
        "Fléau d'Ahjad-Den",
        'Weapon',
        'duriel,andariel,harbinger',
      ],
    ],
  },
  {
    id: 'all',
    label: 'All Classes',
    theme: 'theme-all',
    collapsible: true,
    items: [
      ['Frostburn', 'Brûlure givrée', 'Boots', 'varshan,urivar'],
      ["Mother's Embrace", 'Étreinte de la Mère', 'Amulet', 'varshan'],
      ["Rakanoth's Wake", 'Sillage de Rakanoth', 'Helmet', 'varshan'],
      ['Shard of Verathiel', 'Éclat de Verathiel', 'Amulet', 'varshan'],
      [
        'Craze of the Dead God',
        'Frénésie du dieu mort',
        'Amulet',
        'varshan,urivar',
      ],
      [
        'Ring of Writhing Moon',
        'Anneau de la lune torturée',
        'Ring',
        'varshan',
      ],
      ['Orsivane', 'Orsivane', 'Weapon', 'varshan'],
      ['Arcadia', 'Arcadie', 'Helmet', 'varshan,urivar'],
      [
        'Ward of the White Dove',
        'Garde de la colombe blanche',
        'Amulet',
        'varshan',
      ],
      ['Dawnfire', "Feu de l'Aube", 'Weapon', 'varshan'],
      ['Sunbrand', 'Marque solaire', 'Weapon', 'varshan'],
      ["Balazan's Maxtlatl", 'Maxtlatl de Balazan', 'Weapon', 'varshan,urivar'],
      ['Razorplate', 'Chest', 'Chest', 'lordzir'],
      ['Temerity', 'Témérité', 'Chest', 'lordzir,urivar'],
      ["Yen's Blessing", 'Bénédiction de Yen', 'Amulet', 'lordzir'],
      ['Sidhe Bindings', 'Liens des Sidhe', 'Gloves', 'lordzir,urivar'],
      ['Vox Omnium', 'Vox Omnium', 'Weapon', 'lordzir'],
      ['Jacinth Shell', 'Coquille de jacinthe', 'Amulet', 'lordzir,urivar'],
      ['Wushe Nak Pa', 'Wushe Nak Pa', 'Helmet', 'lordzir'],
      ['Band of First Breath', 'Anneau du premier souffle', 'Ring', 'lordzir'],
      ['Path of the Emissary', "Chemin de l'Émissaire", 'Amulet', 'lordzir'],
      [
        "Cathedral's Song",
        'Chant de la cathédrale',
        'Weapon',
        'lordzir,urivar',
      ],
      ['Red Sermon', 'Sermon rouge', 'Amulet', 'lordzir'],
      ['Sanctis of Kethamar', 'Sanctis de Kethamar', 'Helmet', 'lordzir'],
      ["Kessime's Legacy", 'Héritage de Kessime', 'Ring', 'lordzir'],
      [
        'Tassets of the Dawning Sky',
        'Tassettes du ciel naissant',
        'Boots',
        'beast',
      ],
      [
        "Paingorger's Gauntlets",
        "Gantelets de l'Écorcheur",
        'Gloves',
        'beast,urivar',
      ],
      ['Fists of Fate', 'Poings du Destin', 'Gloves', 'beast'],
      ['Wound Drinker', 'Buveur de blessures', 'Weapon', 'beast'],
      ['Harmony of Ebewaka', "Harmonie d'Ebewaka", 'Amulet', 'beast'],
      [
        'Ring of the Midday Hunt',
        'Anneau de la chasse de midi',
        'Ring',
        'beast',
      ],
      ['Scorn of the Earth', 'Mépris de la Terre', 'Weapon', 'beast'],
      ["The Butcher's Cleaver", 'Couperet du Boucher', 'Weapon', 'grigoire'],
      ['Penitent Greaves', 'Grèves du Pénitent', 'Boots', 'grigoire'],
      ['Endurant Faith', 'Foi endurante', 'Amulet', 'grigoire'],
      ['Hesha e Kesungi', 'Hesha e Kesungi', 'Helmet', 'grigoire,urivar'],
      ['Mantle of the Grey', 'Manteau du Gris', 'Chest', 'grigoire,urivar'],
      ['Sundered Night', 'Nuit déchirée', 'Boots', 'grigoire'],
      ['Supplication', 'Supplication', 'Amulet', 'grigoire'],
      [
        'Bands of Ichorous Rose',
        'Gantelets de la Rose Ichoreuse',
        'Gloves',
        'grigoire,urivar',
      ],
      ["Peacemonger's Signet", 'Sceau du Pacificateur', 'Ring', 'grigoire'],
      [
        'Ring of the Midnight Sun',
        'Anneau du soleil de minuit',
        'Ring',
        'grigoire,urivar',
      ],
      ["Loyalty's Mantle", 'Manteau de la Loyauté', 'Chest', 'grigoire'],
      [
        'Godslayer Crown',
        'Couronne du Tueur de Dieux',
        'Helmet',
        'lordzir,duriel,andariel',
      ],
      ['Flickerstep', 'Pas vacillant', 'Boots', 'andariel,harbinger'],
      ["Tibault's Will", 'Volonté de Tibault', 'Weapon', 'andariel,harbinger'],
      [
        "Locran's Talisman",
        'Talisman de Locran',
        'Amulet',
        'andariel,harbinger',
      ],
      ['Soulbrand', "Marque de l'âme", 'Weapon', 'andariel,duriel'],
      [
        "X'Fal's Corroded Signet",
        "Sceau corrodé de X'Fal",
        'Ring',
        'andariel,duriel',
      ],
      ['Azurewrath', 'Azurewrath', 'Weapon', 'andariel,duriel'],
      [
        "Banished Lord's Talisman",
        'Talisman du Seigneur banni',
        'Amulet',
        'duriel,harbinger',
      ],
      ['Crown of Lucion', 'Couronne de Lucion', 'Helmet', 'duriel,harbinger'],
      ['Blood-Mad Idol', 'Idole folle de sang', 'Amulet', 'butcher'],
      ['Wendigo Brand', 'Marque du Wendigo', 'Weapon', 'butcher'],
      ['Rustbitten Dirk', 'Dague rouillée', 'Weapon', 'butcher'],
      ['Thousand-Eye Reaver', 'Pilleur aux mille yeux', 'Weapon', 'butcher'],
      ['Wyrdskin', 'Wyrdskin', 'Chest', 'butcher'],
    ],
  },
  {
    id: 'barb',
    label: 'Barbarian',
    theme: 'theme-barb',
    collapsible: true,
    items: [
      ['Rage of Harrogath', 'Rage de Harrogath', 'Weapon', 'grigoire'],
      ['Battle Trance', 'Transe de combat', 'Boots', 'grigoire'],
      ['Twin Strikes', 'Coups jumelés', 'Weapon', 'grigoire,urivar'],
      ['Unbroken Chain', 'Chaîne indestructible', 'Boots', 'grigoire'],
      ['Insatiable Fury', 'Fureur insatiable', 'Gloves', 'grigoire'],
      ['Fields of Crimson', "Champs d'Écarlate", 'Boots', 'varshan'],
      ['100,000 Steps', '100 000 pas', 'Boots', 'varshan,urivar'],
      [
        "Gohr's Devastating Grips",
        'Prises dévastatrices de Gohr',
        'Gloves',
        'varshan',
      ],
      ['Ring of Red Furor', 'Anneau de la fureur rouge', 'Ring', 'varshan'],
      ['Sabre of Tsasgal', 'Sabre de Tsasgal', 'Weapon', 'varshan'],
      [
        "Ramaladni's Magnum Opus",
        'Magnum Opus de Ramaladni',
        'Weapon',
        'lordzir',
      ],
      ['Overkill', 'Excès de force', 'Weapon', 'lordzir,urivar'],
      ["Arreat's Bearing", "Port d'Arreat", 'Boots', 'lordzir'],
      ['Ugly Bastard Helm', 'Casque du Sale Bâtard', 'Helmet', 'lordzir'],
      ['Chainscourged Mail', 'Cotte de mailles tourmentée', 'Chest', 'lordzir'],
      ["Ancients' Oath", 'Serment des Anciens', 'Amulet', 'beast'],
      ['Hellhammer', 'Marteau infernal', 'Weapon', 'beast'],
      ['Ring of the Ravenous', 'Anneau du Vorace', 'Ring', 'beast,urivar'],
      [
        'Tuskhelm of Joritz the Mighty',
        'Casque à défenses de Joritz',
        'Helmet',
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
      ["Hunter's Zenith", 'Zénith du Chasseur', 'Amulet', 'grigoire'],
      ['Waxing Gibbous', 'Gibbeuse croissante', 'Weapon', 'grigoire'],
      ['Earthbreaker', 'Briseur de Terre', 'Weapon', 'grigoire,urivar'],
      [
        'Khamsin Steppewalkers',
        'Marcheurs des steppes Khamsin',
        'Boots',
        'grigoire',
      ],
      ["Mad Wolf's Glee", 'Joie du loup fou', 'Gloves', 'varshan'],
      ["Vasily's Prayer", 'Prière de Vasily', 'Helmet', 'varshan'],
      [
        'Greatstaff of the Crone',
        'Grand bâton de la Vieille',
        'Weapon',
        'varshan,urivar',
      ],
      [
        "Airidah's Inexorable Will",
        "Volonté inexorable d'Airidah",
        'Weapon',
        'varshan',
      ],
      ['Fleshrender', 'Déchireur de chair', 'Weapon', 'lordzir'],
      ['Wildheart Hunger', 'Faim du Cœur sauvage', 'Ring', 'lordzir'],
      ['Mjölnic Ryng', 'Anneau de Mjölnic', 'Ring', 'lordzir'],
      [
        "Mantle of Mountain's Fury",
        'Manteau de la Fureur des monts',
        'Chest',
        'beast',
      ],
      [
        'Hooves of the Mountain God',
        'Sabots du Dieu des montagnes',
        'Boots',
        'beast,urivar',
      ],
      [
        "Storm's Companion",
        'Compagnon de la Tempête',
        'Amulet',
        'beast,urivar',
      ],
      [
        "Unsung Ascetic's Wraps",
        "Bandelettes de l'Ascète oublié",
        'Chest',
        'beast',
      ],
      ['Stone of Vehemen', 'Pierre de Vehemen', 'Amulet', 'beast'],
      [
        "Gathlen's Birthright",
        'Droit de naissance de Gathlen',
        'Weapon',
        'beast,urivar',
      ],
      [
        'Tempest Roar',
        'Rugissement de Tempête',
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      ['Dolmen Stone', 'Pierre de Dolmen', 'Amulet', 'duriel,andariel'],
    ],
  },
  {
    id: 'necro',
    label: 'Necromancer',
    theme: 'theme-necro',
    collapsible: true,
    items: [
      ['Howl from Below', 'Hurlement des profondeurs', 'Weapon', 'grigoire'],
      [
        'Greaves of the Empty Tomb',
        'Grèves du tombeau vide',
        'Boots',
        'grigoire',
      ],
      ['Ebonpiercer', "Perceur d'ébène", 'Weapon', 'grigoire,urivar'],
      ["Path of Trag'Oul", "Chemin de Trag'Oul", 'Weapon', 'grigoire'],
      ['The Mortacrux', 'La Mortacrux', 'Weapon', 'grigoire'],
      [
        'Rotting Lightbringer',
        'Porteur de lumière en décomposition',
        'Weapon',
        'varshan,urivar',
      ],
      ['Bloodless Scream', 'Cri sans sang', 'Helmet', 'varshan,urivar'],
      ['Deathless Visage', 'Visage sans mort', 'Helmet', 'varshan'],
      [
        "Deathspeaker's Pendant",
        'Pendentif du Parleur de mort',
        'Amulet',
        'varshan',
      ],
      [
        'Ring of the Sacrilegious Soul',
        "Anneau de l'âme sacrilège",
        'Ring',
        'varshan',
      ],
      ['Malefic Crescent', 'Croissant maléfique', 'Ring', 'lordzir,urivar'],
      [
        "Blood Artisan's Cuirass",
        "Cuirasse de l'Artisan du sang",
        'Chest',
        'lordzir,urivar',
      ],
      ['Lidless Wall', 'Mur sans paupières', 'Helmet', 'lordzir'],
      ["Cruor's Embrace", 'Étreinte du Cruor', 'Boots', 'lordzir'],
      ['Ring of Mendeln', 'Anneau de Mendeln', 'Ring', 'beast'],
      ['Mutilator Plate', 'Plaque Mutilateur', 'Chest', 'beast'],
      ["Indira's Memory", "Mémoire d'Indira", 'Boots', 'beast'],
      ['The Unmaker', 'Le Défaiseur', 'Weapon', 'beast,urivar'],
      ['Gravebloom', 'Fleur de tombe', 'Amulet', 'beast'],
      ['Kilt of Blackwing', "Kilt de l'Aile noire", 'Boots', 'beast'],
      ['Black River', 'Rivière noire', 'Weapon', 'andariel,harbinger'],
      [
        'Blood Moon Breeches',
        'Culotte de la lune sanglante',
        'Boots',
        'duriel,andariel',
      ],
      [
        'Cowl of the Nameless',
        'Capuche du Sans-nom',
        'Helmet',
        'duriel,andariel',
      ],
      ["Death's Pavane", 'Pavane de la Mort', 'Boots', 'duriel,andariel'],
    ],
  },
  {
    id: 'rogue',
    label: 'Rogue',
    theme: 'theme-rogue',
    collapsible: true,
    items: [
      ['Word of Hakan', 'Parole de Hakan', 'Weapon', 'grigoire,urivar'],
      ['Grasp of Shadow', 'Emprise des Ombres', 'Gloves', 'grigoire'],
      ["Saboteur's Signet", 'Sceau du Saboteur', 'Ring', 'grigoire'],
      ['Shroud of Khanduras', 'Linceul de Khanduras', 'Chest', 'grigoire'],
      ['Condemnation', 'Condamnation', 'Weapon', 'varshan'],
      [
        'Eyes in the Dark',
        'Yeux dans les ténèbres',
        'Amulet',
        'varshan,urivar',
      ],
      ['Skyhunter', 'Chasseur céleste', 'Weapon', 'varshan'],
      [
        'Writhing Band of Trickery',
        'Anneau contorsionné de ruse',
        'Ring',
        'varshan',
      ],
      [
        'Gospel of the Devotee',
        'Évangile du Dévoué',
        'Amulet',
        'varshan,urivar',
      ],
      [
        'Sanguivor, Blade of Zir',
        'Sanguivor, Lame de Zir',
        'Weapon',
        'lordzir',
      ],
      ["Asheara's Khanjar", "Khanjar d'Asheara", 'Weapon', 'lordzir'],
      ["Scoundrel's Kiss", 'Baiser du Brigand', 'Boots', 'lordzir,urivar'],
      ["Assassin's Stride", "Foulée de l'Assassin", 'Boots', 'lordzir'],
      [
        "Pitfighter's Gull",
        'Goéland du combattant de fosse',
        'Amulet',
        'lordzir',
      ],
      ['Orphan Maker', "Faiseur d'orphelins", 'Weapon', 'lordzir'],
      ['Windforce', 'Force du vent', 'Weapon', 'beast,urivar'],
      ['Eaglehorn', "Corne d'Aigle", 'Weapon', 'beast'],
      ['Beastfall Boots', 'Bottes Chute-Bête', 'Boots', 'beast'],
      ['The Umbracrux', "L'Umbracrux", 'Amulet', 'andariel,harbinger'],
      ["Scoundrel's Leathers", 'Cuirs du Brigand', 'Chest', 'andariel,duriel'],
    ],
  },
  {
    id: 'sorc',
    label: 'Sorcerer',
    theme: 'theme-sorc',
    collapsible: true,
    items: [
      ['Staff of Lam Esen', 'Bâton de Lam Esen', 'Weapon', 'grigoire'],
      ['Iceheart Brais', 'Braies Cœur-de-Glace', 'Boots', 'grigoire,urivar'],
      ['Flameweaver', 'Tisseur de flammes', 'Gloves', 'grigoire'],
      ['Axial Conduit', 'Conduit axial', 'Amulet', 'grigoire'],
      ['Hail of Verglas', 'Grêle de Verglas', 'Weapon', 'grigoire,urivar'],
      [
        'Protection of the Prime',
        'Protection du Primordial',
        'Chest',
        'grigoire',
      ],
      [
        'Staff of Endless Rage',
        'Bâton de la Rage infinie',
        'Weapon',
        'varshan',
      ],
      ["Esu's Heirloom", "Héritage d'Esu", 'Helmet', 'varshan'],
      ['Raiment of the Infinite', "Vêtement de l'Infini", 'Chest', 'varshan'],
      [
        "Tal Rasha's Iridescent Loop",
        'Anneau iridescent de Tal Rasha',
        'Ring',
        'varshan,urivar',
      ],
      [
        "Esadora's Overflowing Cameo",
        "Camée débordant d'Esadora",
        'Amulet',
        'lordzir',
      ],
      ['Fractured Winterglass', "Verre d'hiver fracturé", 'Weapon', 'lordzir'],
      ["Okun's Catalyst", "Catalyseur d'Okun", 'Weapon', 'lordzir'],
      ['The Oculus', "L'Oculus", 'Amulet', 'beast'],
      ['Starfall Coronet', "Couronnement d'étoile filante", 'Helmet', 'beast'],
      [
        'Strike of Stormhorn',
        'Frappe de Cor-tempête',
        'Weapon',
        'beast,urivar',
      ],
      [
        'Gloves of the Illuminator',
        "Gants de l'Illuminateur",
        'Gloves',
        'beast',
      ],
      ['Blue Rose', 'Rose bleue', 'Weapon', 'duriel'],
      ['Flamescar', 'Cicatrice de flamme', 'Boots', 'harbinger'],
      ['Galvanic Azurite', 'Azurite galvanique', 'Amulet', 'harbinger'],
      ['Ophidian Iris', 'Iris ophidien', 'Amulet', 'harbinger,duriel'],
    ],
  },
  {
    id: 'spirit',
    label: 'Spiritborn',
    theme: 'theme-spirit',
    collapsible: true,
    items: [
      [
        'The Hand of Naz',
        'La Main de Naz',
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      [
        'Nesekem, The Herald',
        'Nesekem, Le Héraut',
        'Amulet',
        'duriel,andariel,harbinger',
      ],
      [
        'Rod of Kepeleke',
        'Bâton de Kepeleke',
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      ['Sepazontec', 'Sepazontec', 'Helmet', 'duriel'],
      [
        'Deathmask of Nirmitruq',
        'Masque mortuaire de Nirmitruq',
        'Helmet',
        'beast,urivar',
      ],
      [
        "Sunbird's Gorget",
        "Gorgerin de l'Oiseau solaire",
        'Amulet',
        'harbinger',
      ],
      ["Griswold's Opus", 'Opus de Griswold', 'Weapon', 'harbinger,duriel'],
      [
        "Judicant's Glaivehelm",
        'Heaume-glaive du Judicant',
        'Helmet',
        'urivar',
      ],
    ],
  },
  {
    id: 'paladin',
    label: 'Paladin',
    theme: 'theme-paladin',
    collapsible: true,
    items: [
      ['Herald of Zakarum', 'Héraut de Zakarum', 'Helmet', 'harbinger'],
      ['Argent Veil', 'Voile Argent', 'Chest', 'harbinger,duriel'],
      ['Judgment of Auriel', "Jugement d'Auriel", 'Weapon', 'harbinger'],
      ['Bastion of Sir Matthias', 'Bastion de Sir Matthias', 'Amulet', 'beast'],
      [
        'Seal of the Second Trumpet',
        'Sceau de la Deuxième Trompette',
        'Ring',
        'beast',
      ],
      ["Light's Rebuke", 'Réprimande de la Lumière', 'Weapon', 'beast,urivar'],
      [
        'Wreath of Auric Laurel',
        'Couronne de Laurier Aurique',
        'Helmet',
        'beast',
      ],
      [
        'Sunstained War-Crozier',
        'Crosse de guerre teintée de soleil',
        'Weapon',
        'varshan,urivar',
      ],
      ['Gate of the Red Dawn', "Porte de l'Aube Rouge", 'Boots', 'duriel'],
      ["Herald's Morningstar", 'Étoile du matin du Héraut', 'Weapon', 'duriel'],
    ],
  },
  {
    id: 'warlock',
    label: 'Warlock',
    theme: 'theme-warlock',
    collapsible: true,
    items: [
      ['The Third Blade', 'La Troisième Lame', 'Weapon', 'harbinger'],
      ['The Basilisk', 'Le Basilic', 'Weapon', 'andariel,harbinger'],
      ["Death's Pavane", 'Pavane de la Mort', 'Boots', 'duriel,andariel'],
      [
        'Sunstained War-Crozier',
        'Crosse de guerre teintée de soleil',
        'Weapon',
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

let showFr = false;
let searchQ = '';
let selectedType = '';
let allTypes = new Set();

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

  const badge = `<span class="section-badge" style="background:rgba(255,255,255,0.1)">${sec.items.length} items</span>`;
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
            <th>Name (EN)</th>
            <th class="col-fr ${showFr ? 'visible' : ''}">FR Names</th>
            <th>Type</th>
            <th>Drop Source</th>
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
  sec.items.forEach(([en, fr, type, sources]) => {
    allTypes.add(type);

    const tr = document.createElement('tr');
    tr.dataset.en = en.toLowerCase();
    tr.dataset.fr = fr.toLowerCase();
    tr.dataset.type = type.toLowerCase();
    const mythicStar = sec.isMythic ? '<span class="mythic-star">✦</span>' : '';
    tr.innerHTML = `
      <td class="name-en">${mythicStar}${en}</td>
      <td class="col-fr name-fr ${showFr ? 'visible' : ''}">${fr}</td>
      <td class="item-type">${type}</td>
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
  allTypes.clear();
  SECTIONS.forEach(buildSection);

  // Populate type filter dropdown
  populateTypeFilter();
  applySearch();
}

function populateTypeFilter() {
  const select = document.getElementById('typeFilter');
  const currentValue = select.value;

  const types = Array.from(allTypes).sort();

  // Clear existing options except the first one
  while (select.options.length > 1) {
    select.remove(1);
  }

  // Add type options
  types.forEach((type) => {
    const option = document.createElement('option');
    option.value = type.toLowerCase();
    option.textContent = type;
    select.appendChild(option);
  });

  select.value = currentValue;
}

function doFilter() {
  selectedType = document.getElementById('typeFilter').value;
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
      const searchMatch = !searchQ || matchEn || matchFr;

      const typeMatch = !selectedType || tr.dataset.type === selectedType;

      const match = searchMatch && typeMatch;
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
  if (searchQ || selectedType) {
    countEl.textContent = visible + ' result' + (visible !== 1 ? 's' : '');
    noRes.classList.toggle('visible', visible === 0);
  } else {
    countEl.textContent = total + ' items';
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
        'Sources: d4builds.gg · maxroll.gg · fextralife.com — Updated Season 12 - Version (' +
        data.version +
        ')';
    }
  } catch (error) {
    console.error('Error loading version:', error);
  }
}
// ─── INIT ────────────────────────────────────────────────────────────────────
renderAll();
// Initial count
applySearch();
// Load version on startup
loadVersion();
