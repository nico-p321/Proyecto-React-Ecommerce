import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';
import FilterModal from '../components/FilterModal'; // <--- 1. IMPORTAMOS EL MODAL
import { PRODUCTS } from '../constants/MockData'; 

const CATEGORIES = [
  { id: 'video', name: 'Placas de Video', image: require('../assets/placa_video.png') },
  { id: 'cpu', name: 'Procesadores', image: require('../assets/procesador.png') },
  { id: 'ram', name: 'Memorias RAM', image: require('../assets/ram.png') },
  { id: 'psu', name: 'Fuentes', image: require('../assets/fuenteXPG.png') },
];

const HomeScreen = () => {
  // Estado para controlar si se ve el modal
  const [modalVisible, setModalVisible] = useState(false);
  
  // Estado para guardar LOS FILTROS APLICADOS
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    brands: [],
    min: 0,
    max: 99999999
  });

  // Función que recibe los datos desde el Modal
  const applyFilters = (filters) => {
    setActiveFilters(filters);
  };

  // --- LÓGICA DE FILTRADO AVANZADO ---
  const filteredProducts = PRODUCTS.filter(item => {
    // 1. Chequeo Categoría (si el array está vacío, pasan todas)
    const catMatch = activeFilters.categories.length === 0 || activeFilters.categories.includes(item.categoria);
    
    // 2. Chequeo Marca 
    const brandMatch = activeFilters.brands.length === 0 || activeFilters.brands.includes(item.marca);
    
    // 3. Chequeo Precio
    const priceMatch = item.precioActual >= activeFilters.min && item.precioActual <= activeFilters.max;

    return catMatch && brandMatch && priceMatch;
  });

  return (
    <View style={{ flex: 1 }}> {/* Envuelvo en View para que el Modal cubra todo */}
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        
        {/* Header de la sección con botón FILTROS */}
        <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Categorías Principales</Text>
            
            {/* BOTÓN QUE ABRE EL MODAL */}
            <TouchableOpacity style={styles.filterBtn} onPress={() => setModalVisible(true)}>
                <Text style={{fontSize: 16}}>🔧 Filtros</Text> 
            </TouchableOpacity>
        </View>

        {/* Grilla de Categorías (Acceso rápido) */}
        <View style={styles.categoriesGrid}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity 
              key={cat.id} 
              style={styles.categoryCard}
              // Al tocar una tarjeta rápida, aplicamos solo ese filtro
              onPress={() => applyFilters({ categories: [cat.name], brands: [], min: 0, max: 99999999 })}
            >
              <Image source={cat.image} style={styles.catImage} />
              <Text style={styles.catName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Barra de Resultados */}
        <View style={styles.filterBar}>
          <Text style={styles.filterTitle}>
              Productos encontrados: {filteredProducts.length}
          </Text>
          {/* Botón para limpiar todo si hay filtros activos */}
          {(activeFilters.categories.length > 0 || activeFilters.brands.length > 0) && (
             <TouchableOpacity onPress={() => applyFilters({categories:[], brands:[], min:0, max:99999999})}>
                 <Text style={{color: '#32CD32', fontSize: 12}}>Borrar filtros</Text>
             </TouchableOpacity>
          )}
        </View>

        {/* Lista de Productos */}
        <View style={styles.productsList}>
          {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
          ))}
        </View>
        
        {filteredProducts.length === 0 && (
            <Text style={styles.noResultsText}>No se encontraron productos con esos filtros.</Text>
        )}

      </ScrollView>

      {}
      <FilterModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        onApply={applyFilters}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterBtn: {
    backgroundColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%', 
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  catImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  catName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  filterTitle: {
    color: 'white',
    fontSize: 14,
  },
  productsList: {
    marginTop: 5,
  },
  noResultsText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
  }
});

export default HomeScreen;