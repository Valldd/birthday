let cur = 0;
let name = '';

const DEFAULT_PHOTOS = ['2.jpg'];
let photoConfig = { photos: DEFAULT_PHOTOS };

async function loadPhotoConfig() {
  try {
    const res = await fetch('birthhh.json');
    const data = await res.json();
    if (Array.isArray(data.photos)) {
      photoConfig.photos = data.photos;
    }
  } catch (e) {
    console.log('JSON gagal load, pakai default');
  }
}

loadPhotoConfig();

function startGift() {
  const input = document.getElementById('nameInput');
  if (!input.value) return alert("Isi dulu!");

  name = input.value;
  go(1);
}

function go(n) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  document.getElementById('s' + n).classList.add('active');
  cur = n;

  if (n === 3) {
    document.getElementById('bdMsg').textContent =
      'Happy Birthday!\nSemoga semua harapanmu tercapai!';
  }

  if (n === 6) {
    document.getElementById('msgBox').textContent =
      'Semoga harimu menyenangkan 🎉';
  }

  if (n === 7) {
    document.getElementById('finalMsg').textContent =
      'Happy Birthday ' + name + ' 🎂';
  }
}

function prevScene() {
  if (cur > 0) go(cur - 1);
}

function restart() {
  go(0);
}