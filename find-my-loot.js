import * as DB from './data/find-my-loot-db.js';

const SECTIONS = DB.dbItems;

const BOSS_LABELS = DB.dbBoss;

// Map IDs for purediablo.com/diablo4/map/
const BOSS_MAP_IDS = DB.dbLocation;

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
  sec.items.forEach((item) => {
    allTypes.add(item.type);

    const tr = document.createElement('tr');
    tr.dataset.en = item.englishName.toLowerCase();
    tr.dataset.fr = item.frenchName.toLowerCase();
    tr.dataset.type = item.type.toLowerCase();
    const mythicStar = sec.isMythic ? '<span class="mythic-star">✦</span>' : '';
    tr.innerHTML = `
      <td class="name-en">${mythicStar}${item.englishName}</td>
      <td class="col-fr name-fr ${showFr ? 'visible' : ''}">${item.frenchName}</td>
      <td class="item-type">${item.type}</td>
      <td><div class="source-list">${buildPills(item.locations)}</div></td>
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
      const matchEn =
        tr.dataset.en &&
        tr.dataset.en.toLowerCase().includes(searchQ.toLowerCase());
      const matchFr =
        tr.dataset.fr &&
        tr.dataset.fr
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(
            searchQ
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase(),
          );
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

// expose to global for inline handlers
window.toggleFrench = toggleFrench;
window.doSearch = doSearch;
window.doFilter = doFilter;
window.toggleSection = toggleSection;
