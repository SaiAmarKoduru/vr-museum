export interface Exhibit {
  id: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  history: string;
  type: 'sculpture' | 'painting';
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
  color: string;
  geometry: string;
}

export const exhibits: Exhibit[] = [
  {
    id: 'exhibit-1',
    title: 'Ethereal Form I',
    artist: 'Marcus Vael',
    year: '2019',
    description: 'A towering toroidal sculpture exploring the cyclical nature of existence. The smooth curves invite contemplation on infinity and renewal.',
    history: 'Commissioned for the Venice Biennale 2019, this piece was inspired by the artist\'s meditation practice and the concept of eternal return in Nietzsche\'s philosophy.',
    type: 'sculpture',
    position: { x: -6, y: 1.5, z: -8 },
    rotation: { x: 0, y: 45, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    color: '#C0C0C0',
    geometry: 'torus',
  },
  {
    id: 'exhibit-2',
    title: 'Monolith Rising',
    artist: 'Yuki Tanaka',
    year: '2021',
    description: 'A minimalist obelisk in polished obsidian black, standing as a meditation on human ambition and the aspiration to transcend earthly limits.',
    history: 'First exhibited at the Tate Modern, London. The work references both ancient Egyptian obelisks and Kubrick\'s monolith, bridging millennia of human wonder.',
    type: 'sculpture',
    position: { x: 6, y: 2, z: -8 },
    rotation: { x: 0, y: -30, z: 0 },
    scale: { x: 0.8, y: 2.5, z: 0.8 },
    color: '#2A2A2A',
    geometry: 'box',
  },
  {
    id: 'exhibit-3',
    title: 'Celestial Sphere',
    artist: 'Aria Fontaine',
    year: '2020',
    description: 'A perfectly proportioned sphere in warm gold, suspended in space. It represents the sun, knowledge, and the perfection sought in classical art.',
    history: 'Part of the "Cosmic Bodies" series shown at the Guggenheim Museum. The golden ratio is embedded in its pedestal proportions.',
    type: 'sculpture',
    position: { x: -6, y: 1.8, z: -20 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1.2, y: 1.2, z: 1.2 },
    color: '#D4AF37',
    geometry: 'sphere',
  },
  {
    id: 'exhibit-4',
    title: 'Fractured Harmony',
    artist: 'Lena Strauss',
    year: '2022',
    description: 'An angular dodecahedron exploring the tension between mathematical order and organic chaos. Each face reflects light differently throughout the day.',
    history: 'Winner of the Turner Prize 2022. Strauss spent two years developing the precise angle relationships using computational geometry.',
    type: 'sculpture',
    position: { x: 6, y: 1.5, z: -20 },
    rotation: { x: 15, y: 30, z: 10 },
    scale: { x: 1.3, y: 1.3, z: 1.3 },
    color: '#8B7D6B',
    geometry: 'dodecahedron',
  },
  {
    id: 'exhibit-5',
    title: 'The Infinite Column',
    artist: 'Dmitri Volkov',
    year: '2018',
    description: 'A slender cylinder reaching toward the ceiling, inspired by Brâncuși\'s Endless Column. Its polished surface mirrors the viewer, making them part of the work.',
    history: 'Created for the Museum of Modern Art, New York. Volkov studied under Romanian sculptors who preserved Brâncuși\'s traditions.',
    type: 'sculpture',
    position: { x: 0, y: 2.5, z: -32 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 0.5, y: 3, z: 0.5 },
    color: '#E8E0D4',
    geometry: 'cylinder',
  },
  {
    id: 'exhibit-6',
    title: 'Crimson Veil',
    artist: 'Sofia Moretti',
    year: '2023',
    description: 'A painting-like wall piece in deep crimson, exploring the boundary between two and three dimensions. The surface texture shifts with the viewer\'s angle.',
    history: 'Debuted at Art Basel 2023. Moretti\'s chromatic studies pushed the boundaries of pigment technology, creating colors that appear to glow from within.',
    type: 'painting',
    position: { x: -9.9, y: 2.5, z: -14 },
    rotation: { x: 0, y: 90, z: 0 },
    scale: { x: 3, y: 2, z: 0.1 },
    color: '#8B2500',
    geometry: 'box',
  },
  {
    id: 'exhibit-7',
    title: 'Azure Depths',
    artist: 'Kai Nakamura',
    year: '2021',
    description: 'A deep blue panel evoking the infinite depth of the ocean. Viewers report a meditative calm when standing before this work for extended periods.',
    history: 'Inspired by Yves Klein\'s International Klein Blue, Nakamura developed a proprietary blue pigment with 40% more depth than any previously available.',
    type: 'painting',
    position: { x: 9.9, y: 2.5, z: -26 },
    rotation: { x: 0, y: -90, z: 0 },
    scale: { x: 3.5, y: 2.2, z: 0.1 },
    color: '#1a3a5c',
    geometry: 'box',
  },
  {
    id: 'exhibit-8',
    title: 'Cone of Silence',
    artist: 'Elara Chen',
    year: '2020',
    description: 'A pristine white cone pointing skyward, symbolizing the focused nature of contemplation and the narrowing of attention toward truth.',
    history: 'Part of Chen\'s "Geometric Meditations" series. The white surface is achieved through a 47-layer application process developed over 5 years.',
    type: 'sculpture',
    position: { x: -6, y: 1.2, z: -32 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1.8, z: 1 },
    color: '#F0EDE8',
    geometry: 'cone',
  },
];
