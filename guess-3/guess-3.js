const canvas = document.querySelector('#scene');
const ctx = canvas.getContext('2d');
const W = canvas.width;
const H = canvas.height;
const Q = "[] == ![]";
let answer;
const show = (v) => { answer = v; };

show([] == ![]);

function frame() {
  ctx.fillStyle = '#0b0d1a';
  ctx.fillRect(0, 0, W, H);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#c0caf5';
  ctx.font = `bold ${Math.min(110, 1450 / Q.length)}px Menlo, monospace`;
  ctx.fillText(Q, W / 2, H / 2 - 90);
  const out = answer === undefined ? '= ?' : '= ' + JSON.stringify(answer);
  ctx.fillStyle = answer === undefined ? '#ff8a6b' : '#9ece6a';
  ctx.font = `bold ${Math.min(96, 1450 / out.length)}px Menlo, monospace`;
  ctx.fillText(out, W / 2, H / 2 + 90);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
