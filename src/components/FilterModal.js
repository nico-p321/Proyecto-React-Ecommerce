import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { FILTROS_CATEGORIAS, FILTROS_MARCAS } from '../constants/MockData'; 

const FilterModal = ({ visible, onClose, onApply }) => {
  // Estados locales del modal
  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Función para marcar/desmarcar Categorías
  const toggleCategory = (cat) => {
    if (selectedCats.includes(cat)) {
      setSelectedCats(selectedCats.filter(c => c !== cat));
    } else {
      setSelectedCats([...selectedCats, cat]);
    }
  };

  // Función para marcar/desmarcar Marcas
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Enviar los datos al Home
  const handleApply = () => {
    onApply({
      categories: selectedCats,
      brands: selectedBrands,
      // Enviamos un rango infinito para que no filtre por precio
      min: 0,
      max: 999999999,
    });
    onClose();
  };

  // Componente visual del Checkbox
  const Checkbox = ({ label, isSelected, onPress }) => (
    <TouchableOpacity style={styles.checkboxRow} onPress={onPress}>
      <View style={[styles.checkboxBox, isSelected && styles.checkboxSelected]}>
        {isSelected && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Filtros</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={{paddingBottom: 20}}>
            
            {/* 1. Categorías */}
            <Text style={styles.sectionTitle}>Categorías</Text>
            {FILTROS_CATEGORIAS.map(cat => (
              <Checkbox 
                key={cat} 
                label={cat} 
                isSelected={selectedCats.includes(cat)} 
                onPress={() => toggleCategory(cat)}
              />
            ))}

            {/* 2. Marcas */}
            <Text style={styles.sectionTitle}>Marcas</Text>
            {FILTROS_MARCAS.map(brand => (
              <Checkbox 
                key={brand} 
                label={brand} 
                isSelected={selectedBrands.includes(brand)} 
                onPress={() => toggleBrand(brand)}
              />
            ))}

          </ScrollView>

          {/* Botón Aplicar */}
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center', 
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#0F0F0F',
    borderRadius: 15,
    padding: 20,
    maxHeight: '80%', 
    borderWidth: 1,
    borderColor: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeIcon: {
    color: '#888',
    fontSize: 24,
  },
  sectionTitle: {
    color: '#32CD32', 
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  // Checkbox Styles
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#32CD32', 
    borderColor: '#32CD32',
  },
  checkmark: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 14,
  },
  // Botón Aplicar
  applyButton: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default FilterModal;