import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CategoryCard = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={item.imagen} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.nombre}</Text>
    <Text style={styles.cardSubtitle}>{item.productos} productos</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flex: 1, 
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    padding: 15,
    margin: 8,
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#888',
    fontSize: 12,
  },
});

export default CategoryCard;