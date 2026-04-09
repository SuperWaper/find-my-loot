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
        'Helmet',
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
      ['Shattered Vow', 'Vœu brisé', 'Weapon', 'duriel,andariel,harbinger'],
      [
        'Ahavarion, Spear of Lycander',
        'Ahavarion, Lance de Lycander',
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      [
        'Nesekem, The Herald',
        'Nesekem, Le Héraut',
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
      ['Ring of Misfortune', 'Anneau de la mésaventure', 'Ring', 'random'],
      ['Frostburn', 'Engeleurs', 'Gloves', 'varshan,urivar'],
      ["Mother's Embrace", 'Étreinte Maternelle', 'Ring', 'varshan'],
      ["Rakanoth's Wake", 'Veillée de Rakanoth', 'Boots', 'varshan'],
      ['Shard of Verathiel', 'Fragment de Vérathielle', 'Weapon', 'varshan'],
      ['Razorplate', 'Cotte-de-Rasoir', 'Chest', 'lordzir'],
      ['Temerity', 'Témérité', 'Pants', 'lordzir,urivar'],
      ["Yen's Blessing", 'Bénédiction de Yen', 'Boots', 'lordzir'],
      ['Tassets of the Dawning Sky', "Tassettes de l'Aube", 'Pants', 'beast'],
      [
        "Paingorger's Gauntlets",
        'Gantelets du Dévoreur de Souffrance',
        'Gloves',
        'beast,urivar',
      ],
      ['Fists of Fate', 'Poings du Destin', 'Gloves', 'beast'],
      ["The Butcher's Cleaver", 'Fendoir du Boucher', 'Weapon', 'grigoire'],
      ['Penitent Greaves', 'Grèves de la Pénitence', 'Boots', 'grigoire'],
      ['Endurant Faith', 'Foi endurante', 'Gloves', 'grigoire'],
      [
        'Godslayer Crown',
        'Couronne du Tueur de Divinités',
        'Helmet',
        'lordzir,duriel,andariel',
      ],
      ['Flickerstep', 'Pas Vacillant', 'Boots', 'andariel,harbinger'],
      ["Tibault's Will", 'Volonté de Tibault', 'Pants', 'andariel,harbinger'],
      [
        "Locran's Talisman",
        'Talisman de Locran',
        'Amulet',
        'andariel,harbinger',
      ],
      ['Soulbrand', "Marque de l'âme", 'Chest', 'andariel,duriel'],
      [
        "X'Fal's Corroded Signet",
        "Chevalière Corrodée d'X'fal",
        'Ring',
        'andariel,duriel',
      ],
      ['Azurewrath', 'Irebleue', 'Weapon', 'andariel,duriel'],
      [
        "Banished Lord's Talisman",
        'Talisman du Seigneur Banni',
        'Amulet',
        'duriel,harbinger',
      ],
      ['Crown of Lucion', 'Couronne de Lucion', 'Helmet', 'duriel,harbinger'],
      ['Blood-Mad Idol', 'Idole folle de sang', 'Amulet', 'butcher'],
      ['Wendigo Brand', 'Marque du Wendigo', 'Ring', 'butcher'],
      ['Rustbitten Dirk', 'Dague rouillée', 'Weapon', 'butcher'],
      ['Thousand-Eye Reaver', 'Pilleur aux mille yeux', 'Weapon', 'butcher'],
      ['Wyrdskin', 'Wyrdskin', 'Gloves', 'butcher'],
    ],
  },
  {
    id: 'barb',
    label: 'Barbarian',
    theme: 'theme-barb',
    collapsible: true,
    items: [
      ['Bane of Ahjed-Den', "Fléau d'Ahjad-Den", 'Gloves', 'lordzir,urivar'],
      ['Rage of Harrogath', 'Rage de Harrogath', 'Chest', 'grigoire'],
      ['Battle Trance', 'Transe de combat', 'Amulet', 'grigoire'],
      ['Twin Strikes', 'Coups jumelés', 'Gloves', 'grigoire,urivar'],
      ['Unbroken Chain', 'Chaîne indestructible', 'Amulet', 'grigoire'],
      [
        "Mantle of the Mountain's Fury",
        'Manteau de la Fureur des monts',
        'Chest',
        'beast',
      ],
      ['Fields of Crimson', "Champs d'Écarlate", 'Weapon', 'varshan'],
      ['100,000 Steps', '100 000 pas', 'Boots', 'varshan,urivar'],
      [
        "Gohr's Devastating Grips",
        'Prises dévastatrices de Gohr',
        'Gloves',
        'varshan',
      ],
      [
        'Hooves of the Mountain God',
        'Sabots du Dieu des montagnes',
        'Boots',
        'beast,urivar',
      ],
      ['Ring of Red Furor', 'Anneau de la fureur rouge', 'Ring', 'varshan'],
      ['Sabre of Tsasgal', 'Sabre de Tsasgal', 'Weapon', 'varshan'],
      ['The Third Blade', 'La Troisième Lame', 'Weapon', 'harbinger'],
      [
        "Ramaladni's Magnum Opus",
        'Magnum Opus de Ramaladni',
        'Weapon',
        'lordzir',
      ],
      ['Overkill', 'Excès de force', 'Weapon', 'lordzir,urivar'],
      ["Arreat's Bearing", "Port d'Arreat", 'Pants', 'lordzir,grigoire'],
      ['Ugly Bastard Helm', 'Casque du Sale Bâtard', 'Helmet', 'lordzir'],
      ['Chainscourged Mail', 'Cotte de mailles tourmentée', 'Pants', 'lordzir'],
      ["Ancients' Oath", 'Serment des Anciens', 'Weapon', 'beast'],
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
      ['The Basilisk', 'Le Basilic', 'Weapon', 'andariel,harbinger'],
      ["Hunter's Zenith", 'Zénith du Chasseur', 'Ring', 'grigoire'],
      ['Waxing Gibbous', 'Gibbeuse croissante', 'Weapon', 'grigoire'],
      ['Earthbreaker', 'Briseur de Terre', 'Ring', 'grigoire,urivar'],
      ['Kilt of Blackwing', "Kilt de l'Aile noire", 'Pants', 'beast'],
      ['Malefic Crescent', 'Croissant maléfique', 'Amulet', 'lordzir,urivar'],
      [
        'Rotting Lightbringer',
        'Porteur de lumière en décomposition',
        'Weapon',
        'varshan,urivar',
      ],
      [
        'Khamsin Steppewalkers',
        'Marcheurs des steppes Khamsin',
        'Boots',
        'grigoire',
      ],
      ["Mad Wolf's Glee", 'Joie du loup fou', 'Chest', 'varshan'],
      ["Vasily's Prayer", 'Prière de Vasily', 'Helmet', 'varshan,lordzir'],
      ['Insatiable Fury', 'Fureur insatiable', 'Chest', 'grigoire'],
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
      ['Mjölnic Ryng', 'Anneau de Mjölnic', 'Ring', 'lordzir,grigoire'],
      ["Storm's Companion", 'Compagnon de la Tempête', 'Pants', 'beast,urivar'],
      [
        "Unsung Ascetic's Wraps",
        "Bandelettes de l'Ascète oublié",
        'Gloves',
        'beast',
      ],
      ['Stone of Vehemen', 'Pierre de Vehemen', 'Weapon', 'beast'],
      [
        "Gathlen's Birthright",
        'Droit de naissance de Gathlen',
        'Helmet',
        'beast,urivar',
      ],
      [
        'Tempest Roar',
        'Rugissement de Tempête',
        'Helmet',
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
      ["Kessime's Legacy", 'Héritage de Kessime', 'Pants', 'lordzir'],
      ['Howl from Below', 'Hurlement des profondeurs', 'Gloves', 'grigoire'],
      [
        'Sanguivor, Blade of Zir',
        'Sanguivor, Lame de Zir',
        'Weapon',
        'lordzir,beast,andariel,urivar',
      ],
      [
        'Gospel of the Devotee',
        'Évangile du Dévoué',
        'Weapon',
        'varshan,urivar',
      ],
      [
        'Greaves of the Empty Tomb',
        'Grèves du tombeau vide',
        'Boots',
        'grigoire',
      ],
      ['Ebonpiercer', "Perceur d'ébène", 'Amulet', 'grigoire,urivar'],
      ["Path of Trag'Oul", "Chemin de Trag'Oul", 'Boots', 'grigoire'],
      ['The Mortacrux', 'La Mortacrux', 'Weapon', 'grigoire'],
      ['Bloodless Scream', 'Cri sans sang', 'Weapon', 'varshan,urivar'],
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
      [
        "Blood Artisan's Cuirass",
        "Cuirasse de l'Artisan du sang",
        'Chest',
        'lordzir,urivar',
      ],
      ['Lidless Wall', 'Mur sans paupières', 'Weapon', 'lordzir'],
      ["Cruor's Embrace", 'Étreinte du Cruor', 'Gloves', 'lordzir'],
      ['Ring of Mendeln', 'Anneau de Mendeln', 'Ring', 'beast'],
      ['Mutilator Plate', 'Plaque Mutilateur', 'Chest', 'beast'],
      ["Indira's Memory", "Mémoire d'Indira", 'Pants', 'beast'],
      ['The Unmaker', 'Le Défaiseur', 'Helmet', 'beast,urivar'],
      ['Gravebloom', 'Fleur de tombe', 'Weapon', 'beast'],
      ['Black River', 'Rivière noire', 'Weapon', 'andariel,harbinger'],
      [
        'Blood Moon Breeches',
        'Culotte de la lune sanglante',
        'Pants',
        'duriel,andariel',
      ],
      ["Death's Pavane", 'Pavane de la Mort', 'Pants', 'duriel,andariel'],
      ['The Hand of Naz', 'La Main de Naz', 'Gloves', 'duriel'],
    ],
  },
  {
    id: 'rogue',
    label: 'Rogue',
    theme: 'theme-rogue',
    collapsible: true,
    items: [
      [
        'Deathmask of Nirmitruq',
        'Masque mortuaire de Nirmitruq',
        'Helmet',
        'beast,urivar',
      ],
      ["Death's Pavane", 'Pavane de la Mort', 'Boots', 'duriel,andariel'],
      [
        'Cowl of the Nameless',
        'Capuche du Sans-nom',
        'Helmet',
        'duriel,andariel',
      ],
      [
        'Bands of Ichorous Rose',
        'Gantelets de la Rose Ichoreuse',
        'Gloves',
        'grigoire,urivar',
      ],
      ['Word of Hakan', 'Parole de Hakan', 'Amulet', 'grigoire,urivar'],
      ['Grasp of Shadow', 'Emprise des Ombres', 'Gloves', 'grigoire'],
      ["Saboteur's Signet", 'Sceau du Saboteur', 'Ring', 'grigoire'],
      ['Shroud of Khanduras', 'Linceul de Khanduras', 'Chest', 'grigoire'],
      ['Condemnation', 'Condamnation', 'Weapon', 'varshan,beast'],
      ['Eyes in the Dark', 'Des yeux dans la nuit', 'Pants', 'varshan,urivar'],
      ['Skyhunter', 'Chasseur céleste', 'Weapon', 'varshan'],
      [
        'Writhing Band of Trickery',
        'Anneau contorsionné de ruse',
        'Ring',
        'varshan,harbinger',
      ],
      ["Asheara's Khanjar", "Khanjar d'Asheara", 'Weapon', 'lordzir'],
      ["Scoundrel's Kiss", 'Baiser du Brigand', 'Ring', 'lordzir,urivar'],
      ["Assassin's Stride", "Foulée de l'Assassin", 'Boots', 'lordzir'],
      [
        "Pitfighter's Gull",
        'Goéland du combattant de fosse',
        'Ring',
        'lordzir',
      ],
      ['Orphan Maker', "Faiseur d'orphelins", 'Weapon', 'lordzir'],
      ['Windforce', 'Force du vent', 'Weapon', 'beast,urivar'],
      ['Eaglehorn', "Corne d'Aigle", 'Weapon', 'beast,andariel,urivar'],
      ['Beastfall Boots', 'Bottes Chute-Bête', 'Boots', 'beast'],
      ['The Umbracrux', "L'Umbracrux", 'Weapon', 'lordzir'],
      [
        "Scoundrel's Leathers",
        'Cuirs du Brigand',
        'Chest',
        'andariel,duriel,harbinger',
      ],
    ],
  },
  {
    id: 'sorc',
    label: 'Sorcerer',
    theme: 'theme-sorc',
    collapsible: true,
    items: [
      ['Orsivane', 'Orsivane', 'Weapon', 'varshan'],
      ['Vox Omnium', 'Vox Omnium', 'Weapon', 'lordzir,duriel'],
      ['Sidhe Bindings', 'Liens des Sidhe', 'Gloves', 'lordzir,urivar'],
      ['Staff of Lam Esen', 'Bâton de Lam Esen', 'Weapon', 'grigoire,beast'],
      [
        'Iceheart Brais',
        'Braies Cœur-de-Glace',
        'Pants',
        'lordzir,beast,grigoire,urivar',
      ],
      ['Flameweaver', 'Tisseur de flammes', 'Gloves', 'grigoire'],
      ['Axial Conduit', 'Conduit axial', 'Pants', 'lordzir,grigoire,urivar'],
      ['Hail of Verglas', 'Grêle de Verglas', 'Helmet', 'grigoire,urivar'],
      [
        'Protection of the Prime',
        'Protection du Primordial',
        'Pants',
        'varshan,grigoire,harbinger',
      ],
      [
        'Staff of Endless Rage',
        'Bâton de la Rage infinie',
        'Weapon',
        'varshan,lordzir,duriel,harbinger',
      ],
      ["Esu's Heirloom", "Héritage d'Esu", 'Boots', 'varshan'],
      [
        'Raiment of the Infinite',
        "Vêtement de l'Infini",
        'Chest',
        'varshan,lordzir,duriel',
      ],
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
        'lordzir,duriel',
      ],
      [
        'Fractured Winterglass',
        "Verre d'hiver fracturé",
        'Amulet',
        'lordzir,duriel,beast',
      ],
      ["Okun's Catalyst", "Catalyseur d'Okun", 'Weapon', 'lordzir,butcher'],
      ['The Oculus', "L'Oculus", 'Weapon', 'beast,duriel,varshan,harbinger'],
      [
        'Starfall Coronet',
        "Couronnement d'étoile filante",
        'Helmet',
        'beast,duriel,urivar,varshan',
      ],
      [
        'Strike of Stormhorn',
        'Frappe de Cor-tempête',
        'Weapon',
        'beast,urivar,varshan',
      ],
      [
        'Gloves of the Illuminator',
        "Gants de l'Illuminateur",
        'Gloves',
        'beast,grigoire,varshan',
      ],
      ['Blue Rose', 'Rose bleue', 'Ring', 'andariel,duriel,harbinger'],
      [
        'Flamescar',
        'Cicatrice de flamme',
        'Weapon',
        'andariel,duriel,grigoire',
      ],
      [
        'Galvanic Azurite',
        'Azurite galvanique',
        'Ring',
        'andariel,butcher,duriel,harbinger',
      ],
      ['Ophidian Iris', 'Iris ophidien', 'Amulet', 'andariel,harbinger,duriel'],
    ],
  },
  {
    id: 'spirit',
    label: 'Spiritborn',
    theme: 'theme-spirit',
    collapsible: true,
    items: [
      [
        'Sunstained War-Crozier',
        'Crosse de guerre teintée de soleil',
        'Weapon',
        'varshan,urivar',
      ],
      ["Balazan's Maxtlatl", 'Maxtlatl de Balazan', 'Pants', 'varshan,urivar'],
      ['Band of First Breath', 'Anneau du premier souffle', 'Ring', 'lordzir'],
      ['Harmony of Ebewaka', "Harmonie d'Ebewaka", 'Helmet', 'beast'],
      ['Hesha e Kesungi', 'Hesha e Kesungi', 'Gloves', 'grigoire,urivar'],
      ['Jacinth Shell', 'Coquille de jacinthe', 'Chest', 'lordzir,urivar'],
      ["Loyalty's Mantle", 'Manteau de la Loyauté', 'Helmet', 'grigoire'],
      ['Path of the Emissary', "Chemin de l'Émissaire", 'Boots', 'lordzir'],
      ["Peacemonger's Signet", 'Sceau du Pacificateur', 'Ring', 'grigoire'],
      [
        'Ring of Writhing Moon',
        'Anneau de la lune torturée',
        'Ring',
        'varshan',
      ],
      [
        'Ring of the Midnight Sun',
        'Anneau du soleil de minuit',
        'Ring',
        'grigoire,urivar',
      ],
      [
        'Ring of the Midday Hunt',
        'Anneau de la chasse de midi',
        'Ring',
        'beast',
      ],
      [
        'Craze of the Dead God',
        'Frénésie du dieu mort',
        'Gloves',
        'varshan,urivar',
      ],
      ['Scorn of the Earth', 'Mépris de la Terre', 'Boots', 'beast'],
      [
        'Sunstained War-Crozier',
        'Crosse de guerre teintée de soleil',
        'Weapon',
        'varshan,urivar',
      ],
      ['Wound Drinker', 'Buveur de blessures', 'Ring', 'beast'],
      ['Wushe Nak Pa', 'Wushe Nak Pa', 'Weapon', 'lordzir'],
      [
        'Rod of Kepeleke',
        'Bâton de Kepeleke',
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      [
        'Sepazontec',
        'Sepazontec',
        'Weapon',
        'duriel,andariel,harbinger,butcher',
      ],
      [
        "Sunbird's Gorget",
        "Gorgerin de l'Oiseau solaire",
        'Amulet',
        'harbinger',
      ],
    ],
  },
  {
    id: 'paladin',
    label: 'Paladin',
    theme: 'theme-paladin',
    collapsible: true,
    items: [
      [
        'Ward of the White Dove',
        'Garde de la colombe blanche',
        'Weapon',
        'varshan',
      ],
      ['Supplication', 'Supplication', 'Weapon', 'grigoire'],
      ['Sundered Night', 'Nuit déchirée', 'Weapon', 'grigoire'],
      ['Sunbrand', 'Marque solaire', 'Weapon', 'varshan'],
      ['Sanctis of Kethamar', 'Sanctis de Kethamar', 'Amulet', 'lordzir'],
      ['Red Sermon', 'Sermon rouge', 'Weapon', 'lordzir'],
      ['Arcadia', 'Arcadie', 'Pants', 'grigoire,urivar'],
      [
        'March of the Stalwart Soul',
        'Marche de l’âme indéfectible',
        'Boots',
        'grigoire,varshan',
      ],
      [
        "Cathedral's Song",
        'Chant de la cathédrale',
        'Weapon',
        'lordzir,urivar',
      ],
      [
        "Griswold's Opus",
        'Opus de Griswold',
        'Weapon',
        'andariel,harbinger,duriel',
      ],
      [
        "Judicant's Glaivehelm",
        'Heaume-glaive du Judicant',
        'Helmet',
        'lordzir,duriel,andariel,urivar,harbinger',
      ],
      [
        'Mantle of the Grey',
        'Manteau du Gris',
        'Chest',
        'lordzir,grigoire,urivar',
      ],
      ['Dawnfire', "Feu de l'Aube", 'Gloves', 'varshan'],
      ['Herald of Zakarum', 'Héraut de Zakarum', 'Weapon', 'harbinger'],
      ['Argent Veil', 'Voile Argent', 'Ring', 'harbinger,duriel'],
      ['Judgment of Auriel', "Jugement d'Auriel", 'Amulet', 'harbinger'],
      ['Bastion of Sir Matthias', 'Bastion de Sir Matthias', 'Weapon', 'beast'],
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
        'Ring',
        'beast',
      ],
      [
        'Gate of the Red Dawn',
        "Porte de l'Aube Rouge",
        'Weapon',
        'duriel,andariel,harbinger',
      ],
      ["Herald's Morningstar", 'Étoile du matin du Héraut', 'Weapon', 'duriel'],
    ],
  },
  {
    id: 'warlock',
    label: 'Warlock',
    theme: 'theme-warlock',
    collapsible: true,
    items: [],
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
