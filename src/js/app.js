

export default function start() {
  const img = document.createElement('img');
  img.src = 'img/goblin.png';
  const id = Math.floor(Math.random() * 16);
  const td = document.getElementById(`${id}`);
  td.appendChild(img);
}

export function next() {
  const lastImg = document.getElementsByTagName('img')[0];
  lastImg.remove();
  start();
}

start();
setInterval(next, 2000);
