
//  PASO 2: DATOS DE CATEGORÍAS (Para la grilla del Home) 
export const CATEGORIES = [
  { 
    id: '1', 
    nombre: 'Placas de Video', 
    productos: 2, 
    imagen: require('../assets/placa_video.png')
  },
  { 
    id: '2', 
    nombre: 'Procesadores', 
    productos: 2, 
    imagen: require('../assets/procesador.png')
  },
  { 
    id: '3', 
    nombre: 'Memorias RAM', 
    productos: 4, 
    imagen: require('../assets/ram.png')
  },
  { 
    id: '4', 
    nombre: 'Fuentes',
    productos: 3, 
    imagen: require('../assets/fuente.png') 
  },
];

// --- PASO 3: DATOS DE PRODUCTOS (Inventario) ---
export const PRODUCTS = [
  {
    id: 'prod-1',
    nombre: 'NVIDIA GeForce RTX 4080 SUPER 16GB GDDR6X',
    categoria: 'Placas de Video', 
    marca: 'NVIDIA',
    imagen: require('../assets/RTX4080.png'),
    descuento: '-10%',
    precioAnterior: 999000,
    precioActual: 899000,
    rating: 4.8,
    ratingCount: 45   
  },
  {
    id: 'prod-2',
    nombre: 'AMD Ryzen 5 7950X 16-core',
    categoria: 'Procesadores',
    marca: 'AMD', 
    imagen: require('../assets/procesador.png'),
    descuento: '-15%',
    precioAnterior: 750000,
    precioActual: 637500,
    rating: 4.9,
    ratingCount: 32   
  },
  {
    id: 'prod-3',
    nombre: 'ASUS ROG Strix X870-E',
    categoria: 'Motherboards',
    marca: 'ASUS', 
    imagen: require('../assets/PlacaMadre.png'),
    descuento: '-5%',
    precioAnterior: 450000,
    precioActual: 427500,
    rating: 4.7,
    ratingCount: 28   
  },
  {
    id: 'prod-4',
    nombre: 'MEMORIA RAM ADATA XPG  16GB DDR5 6000MHz',
    categoria: 'Memorias RAM',
    marca: 'MSI', 
    imagen: require('../assets/ram.png'),
    descuento: '-20%',
    precioAnterior: 300000,
    precioActual: 240000,
    rating: 4.6,
    ratingCount: 52   
  },
  {
    id: 'prod-5',
    nombre: 'XPG PYLON 850W 80+',
    categoria: 'Fuentes',
    marca: 'ADATA', 
    imagen: require('../assets/fuenteXPG.png'),
    descuento: '-10%',
    precioAnterior: 280000,
    precioActual: 252000,
    rating: 4.5,
    ratingCount: 38   
  },
  {
    id: 'prod-6',
    nombre: 'FUENTE ASROCK 750W 80+ BRONZE',
   categoria: 'Placas de Video', 
    marca: 'AMD', 
    imagen: require('../assets/FuenteASROCK.png'),
    descuento: '-12%',
    precioAnterior: 220000,
    precioActual: 193600,
    rating: 4.4,
    ratingCount: 22   
  }
];

// --- PASO 4: LISTAS PARA LOS FILTROS ---
export const FILTROS_CATEGORIAS = [
  'Placas de Video', 'Procesadores', 'Motherboards', 'Memorias RAM', 'Gabinetes', 'Fuentes'
];

export const FILTROS_MARCAS = [
  'NVIDIA', 'AMD', 'Intel', 'ASUS', 'MSI', 'Gigabyte', 'Corsair'
];

export const SORT_OPTIONS = [
  'Destacados',
  'Precio: Menor a mayor',
  'Precio: Mayor a menor',
  'Mejor valorados',
  'Nombre: A-Z'
];