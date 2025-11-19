import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Checkbox = ({ label, isChecked, onToggle }) => {
  return (
    <TouchableOpacity style={styles.checkboxContenedor} onPress={onToggle}>
      <View style={[
          styles.checkboxCuadro, 
          isChecked && styles.checkboxCuadroActivo 
      ]}>
        {isChecked && <Text style={styles.checkboxCheck}>✓</Text>}
      </View>
      <Text style={styles.checkboxEtiqueta}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxCuadro: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#32CD32', 
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCuadroActivo: {
    backgroundColor: '#32CD32', // Fondo verde cuando está activo
  },
  checkboxCheck: {
    color: '#1A1A1A', 
    fontWeight: 'bold',
    fontSize: 12,
  },
  checkboxEtiqueta: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Checkbox;