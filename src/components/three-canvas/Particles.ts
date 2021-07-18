import * as THREE from "three";

const TEXTURE_LOADER = new THREE.TextureLoader();

interface IParticle {
  fileName: string;
  size: number;
  color: string | number | THREE.Color;
  count: number;
}
const PARTICLE_CONFIG: IParticle[] = [
  {
    fileName: "bolt",
    size: 0.3,
    color: 0xf0f000,
    count: 7,
  },
  {
    fileName: "cloud",
    size: 0.5,
    color: 0xffffff,
    count: 13,
  },
  {
    fileName: "heart",
    size: 0.4,
    color: 0xf01313,
    count: 7,
  },
  {
    fileName: "paw",
    size: 0.5,
    color: 0x1313f0,
    count: 13,
  },
  {
    fileName: "star",
    size: 0.4,
    color: 0x13f013,
    count: 17,
  },
];

/**
 * Get the web path to the particle texture with the given name.
 * These are hosted in the GitHub repo for the portfolio.
 *
 * @param name The name of the file to use, within 'assets/particles'.
 * @returns The fully qualified path to the particle texture.
 */
const getParticlePath = (name: string) =>
  `https://raw.githubusercontent.com/jjones-99/jaredcj-portfolio/34637256ec0e8638d7d4b3be3c6ffc862bfe40c1/assets/particles/${name}.png`;

/**
 * Generate random BufferGeometry with the given number of particles.
 *
 * @param count The number of particles to generate.
 * @returns The geometry object.
 */
const generateParticleGeometry = (count: number): THREE.BufferGeometry => {
  const arr = new Float32Array(count * 3); // Three points per particle.
  for (let i = 0; i < count * 3; i++) {
    arr[i] = (Math.random() - 0.5) * 10;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  return geometry;
};

/**
 * Generate three.js objects representing particles based on our configuration.
 *
 * @returns The three.js particle objects.
 */
export const generateParticles = (): THREE.Points[] => {
  return PARTICLE_CONFIG.map((config) => {
    const geometry = generateParticleGeometry(config.count);
    const material = new THREE.PointsMaterial({
      size: config.size,
      color: config.color,
      map: TEXTURE_LOADER.load(getParticlePath(config.fileName)),
      transparent: true,
      // depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    return new THREE.Points(geometry, material);
  });
};
