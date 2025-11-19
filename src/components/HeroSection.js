import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2'; 

const HeroSection = () => (
  <View style={styles.hero}>
    <View style={styles.heroTagContenedor}>
      <Text style={styles.heroTag}>TU ALIADO ENERGÉTICO</Text>
    </View>
    <Text style={styles.heroTitle}>Los Mejores Componentes de Computadora</Text>
    <Text style={styles.heroSubtitle}>Rendimiento extremo, precios imbatibles y envío gratis...</Text>
    <Shadow
      distance={8} 
      startColor={'rgba(50, 205, 50, 0.3)'} 
      endColor={'rgba(50, 205, 50, 0.01)'} 
      style={{ borderRadius: 25 }} 
    >
      <TouchableOpacity style={styles.heroButton}>
        <Text style={styles.heroButtonText}>Ver Ofertas Especiales</Text>
      </TouchableOpacity>
    </Shadow>
  </View>
);

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center', 
    marginVertical: 40,
  },
  heroTagContenedor: {
    backgroundColor: 'rgba(50, 205, 50, 0.2)', 
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  heroTag: {
    color: '#32CD32', 
    fontWeight: 'bold',
    fontSize: 12,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    color: '#B0B0B0',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },
  heroButton: {
    backgroundColor: '#32CD32', 
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
  heroButtonText: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HeroSection;