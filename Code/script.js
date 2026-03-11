// ===== SCREEN NAVIGATION =====
function show(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== PREFERENCES - CHIP TOGGLE =====
function toggleChip(el) {
  el.classList.toggle('selected');
}

// ===== RECIPE RESULTS - FILTER TOGGLE =====
function toggleFilter(el) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ===== INGREDIENT INPUT - ADD TAG =====
function addIngredient() {
  const input = document.getElementById('ingr-input');
  const val = input.value.trim();
  if (!val) return;
  const tag = document.createElement('div');
  tag.className = 'tag';
  tag.innerHTML = '🥗 ' + val + ' <span class="remove" onclick="removeTag(this)">×</span>';
  document.getElementById('tags-area').appendChild(tag);
  input.value = '';
}

// ===== INGREDIENT INPUT - REMOVE TAG =====
function removeTag(el) {
  el.parentElement.remove();
}

// ===== INGREDIENT INPUT - QUICK ADD =====
function quickAdd(el, name) {
  const tag = document.createElement('div');
  tag.className = 'tag';
  tag.innerHTML = name + ' <span class="remove" onclick="removeTag(this)">×</span>';
  document.getElementById('tags-area').appendChild(tag);
  el.style.opacity = '0.4';
  el.onclick = null;
}

// ===== AI GENERATING SCREEN =====
function generateRecipes() {
  show('generating');
  setTimeout(function() { show('results'); }, 3000);
}

// ===== SAVE / BOOKMARK TOAST =====
function saveToast() {
  var t = document.getElementById('toast');
  t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 2000);
}
