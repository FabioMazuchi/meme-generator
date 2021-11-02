const inputFile = document.querySelector('#meme-insert');

inputFile.addEventListener('onchange', function (event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
});

function trocaImagemMeme(e) {
  var image = document.getElementById('meme-image');
  let selecionado = e.target.getAttribute('src');

  image.setAttribute('src', selecionado);
  
}

window.onload = function () {
  const input = document.querySelector('#text-input');
  const p = document.querySelector('#meme-text');
  const pai = document.querySelector('#meme-image-container');
  const fireBtn = document.querySelector('#fire');
  const waterBtn = document.querySelector('#water');
  const earthBtn = document.querySelector('#earth');
  const memesDiv = document.querySelector('.memes');

  let memes = memesDiv.children;
  for (let i = 0; i < memes.length; i++) {
    memes[i].addEventListener('click', trocaImagemMeme);
  }

  fireBtn.addEventListener('click', function () {
    pai.classList.remove('water');
    pai.classList.remove('earth');
    pai.classList.add('fire');
  });

  waterBtn.addEventListener('click', function () {
    pai.classList.remove('earth');
    pai.classList.remove('fire');
    pai.classList.add('water');
  });

  earthBtn.addEventListener('click', function () {
    pai.classList.remove('water');
    pai.classList.remove('fire');
    pai.classList.add('earth');
  });

  input.addEventListener('keyup', function () {
    let frase = input.value;
    p.innerHTML = frase;
  });
};

var loadFile = function (event) {
  var image = document.getElementById('meme-image');
  image.removeAttribute('src');
  image.src = URL.createObjectURL(event.target.files[0]);
  
};
