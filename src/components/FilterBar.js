import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FilterBar = ({ onOpenModal }) => (
  <TouchableOpacity 
    style={styles.filtrosBarra}
    onPress={onOpenModal} 
  >
    <Text style={styles.filtrosBarraIcono}>🔧</Text>
    <Text style={styles.filtrosBarraTexto}>Filtros</Text>
    <Text style={styles.filtrosBarraNumero}>12</Text> 
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  filtrosBarra: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginTop: 40, // Espacio después de las categorías
  },
  filtrosBarraIcono: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 10,
  },
  filtrosBarraTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    flex: 1, 
  },
  filtrosBarraNumero: {
    color: '#1A1A1A',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default FilterBar;