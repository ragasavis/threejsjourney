import * as three from 'three';

const element = document.querySelector<HTMLCanvasElement>('#app');

const scene = new three.Scene();

let geometry = new three.BoxGeometry(1, 1, 1);
const material = new three.MeshBasicMaterial({ color: 'red' });

geometry = new three.BoxGeometry(1, 1, 1);
const mesh = new three.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};
const camera = new three.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new three.WebGLRenderer({
  canvas: element!,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

export default {};
