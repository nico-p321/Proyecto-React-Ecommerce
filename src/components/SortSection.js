import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SORT_OPTIONS } from '../constants/MockData'; // Importa las opciones

const SortSection = ({ sortOption, isSortModalVisible, onToggleSortModal, onSetSortOption }) => (
  <View style={styles.destacadosContenedor}>
    <View style={styles.destacadosBarra}>
      
      <View style={styles.sortWrapper}>
        <TouchableOpacity 
          style={styles.sortButton}
          onPress={onToggleSortModal} // Alterna visibilidad
        >
          <Text style={styles.destacadosTitulo}>{sortOption}</Text>
          <Text style={styles.sortButtonIcon}>▼</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.iconosVistaContenedor}>
        <TouchableOpacity style={[styles.iconoVistaBoton, styles.iconoVistaActivo]}>
          <Text style={[styles.iconoVistaTexto, styles.iconoVistaTextoActivo]}>⊞</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconoVistaBoton}>
          <Text style={styles.iconoVistaTexto}>☰</Text>
        </TouchableOpacity>
      </View>
    </View>

    {isSortModalVisible && (
      <View style={styles.sortDropdown}>
        {SORT_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.sortDropdownItem,
              option === sortOption && styles.sortDropdownItemActivo 
            ]}
            onPress={() => {
              onSetSortOption(option); 
            }}
          >
            <Text style={styles.sortDropdownTexto}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  destacadosContenedor: { 
    marginTop: 40, 
    marginBottom: 20,
    zIndex: 10, 
  },
  destacadosBarra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  destacadosTitulo: {
    color: '#FFFFFF',
    fontSize: 18, 
    fontWeight: 'bold',
    marginRight: 8,
  },
  iconosVistaContenedor: {
    flexDirection: 'row',
  },
  iconoVistaBoton: {
    padding: 8,
    borderRadius: 8,
    marginLeft: 10,
    backgroundColor: '#2A2A2A', 
  },
  iconoVistaActivo: {
    backgroundColor: '#32CD32', 
  },
  iconoVistaTexto: {
    color: '#FFFFFF', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconoVistaTextoActivo: {
    color: '#1A1A1A', 
  },
  sortWrapper: {
    // Este wrapper ayuda a contener el botón
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  sortButtonIcon: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  sortDropdown: {
    backgroundColor: '#1E1E1E', 
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 10, // Espacio desde el botón de "Destacados"
  },
  sortDropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  sortDropdownItemActivo: {
    backgroundColor: '#32CD32', // Fondo verde para el activo
  },
  sortDropdownTexto: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default SortSection;