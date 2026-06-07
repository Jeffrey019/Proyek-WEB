// ── FORMAT TANGGAL ──
function fmtTgl(str) {
  if (!str) return '—';
  const d = new Date(str + 'T00:00:00');
  return d.toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
}

// ── BADGE STATUS ──
function badgeHtml(status) {
  const map = {
    'Hilang':    'badge-hilang',
    'Ditemukan': 'badge-ditemukan',
    'Diklaim':   'badge-diklaim',
  };
  return `<span class="badge ${map[status] || ''}">${status}</span>`;
}

// ── TOAST ──
function showToast(msg, type = 'ok') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  document.getElementById('toasts').appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ── FORM ERROR ──
function showErr(inputId, errId) {
  document.getElementById(inputId)?.classList.add('invalid');
  document.getElementById(errId)?.classList.add('show');
}
function clearErrors() {
  document.querySelectorAll('.err').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.invalid').forEach(e => e.classList.remove('invalid'));
}

// ── NAVBAR ──
function initNav() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (btn && links) btn.addEventListener('click', () => links.classList.toggle('open'));
}
