const root = document.getElementById('sol-crusher');
const pixels = [];

for (let index = 0; index < solCrusher.coords.length; index++) {
  const [x, y, z] = solCrusher.coords[index];
  const sphere = document.createElement('a-sphere');
  const scale = 1e5;
  sphere.setAttribute('radius', 0.01);
  sphere.setAttribute('position', {
    x: x / scale,
    y: y / scale,
    z: z / scale,
  });
  root.appendChild(sphere);
  pixels[solCrusher.assignments[index]] = sphere;
}

const colors = ['red', 'green', 'blue'];
let lightIndex = 0;
let colorIndex = 0;
setInterval(() => {
  pixels[lightIndex++].setAttribute('color', colors[colorIndex]);
  if (lightIndex >= pixels.length) {
    colorIndex++;
    lightIndex = 0;
    if (colorIndex >= colors.length) {
      colorIndex = 0;
    }
  }
}, 1);
