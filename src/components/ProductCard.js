import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useCart } from '../context/CartContext'; // 1. Importamos el hook del contexto


const ProductCard = ({ item }) => {
  
  // 2. Usamos el hook para obtener la función
  const { addToCart } = useCart(); 

  return (
    <View style={styles.productoCard}>
      {/* Tag de Descuento */}
      <View style={styles.productoDescuentoTag}>
        <Text style={styles.productoDescuentoTexto}>{item.descuento}</Text>
      </View>

      {/* Imagen */}
      <Image source={item.imagen} style={styles.productoImagen} />

      {/* Info del Producto */}
      <View style={styles.productoInfo}>
        <Text style={styles.productoCategoria}>{item.categoria}</Text>
        <Text style={styles.productoNombre}>{item.nombre}</Text>
        
        <View style={styles.productoRatingContenedor}>
          <Text style={styles.productoRatingEstrellas}>★★★★★</Text> 
          <Text style={styles.productoRatingCount}>({item.ratingCount})</Text>
        </View>
        
        <View style={styles.productoPrecioContenedor}>
          <Text style={styles.productoPrecioAnterior}>
            $ {item.precioAnterior?.toLocaleString('de-DE')},00
          </Text>
          <Text style={styles.productoPrecioActual}>
            $ {item.precioActual?.toLocaleString('de-DE')},00
          </Text>
        </View>
      </View>

      {/* 3. Botón Añadir al Carrito con la lógica conectada */}
      <TouchableOpacity 
        style={styles.productoBoton}
        onPress={() => addToCart(item)} 
      >
        <Text style={styles.productoBotonIcono}>🛒</Text>
        <Text style={styles.productoBotonTexto}>Añadir al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productoCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    marginBottom: 20, 
    overflow: 'hidden', 
  },
  productoDescuentoTag: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#32CD32',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    zIndex: 1, 
  },
  productoDescuentoTexto: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 12,
  },
  productoImagen: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover',
  },
  productoInfo: {
    padding: 15,
  },
  productoCategoria: {
    color: '#888',
    fontSize: 12,
    marginBottom: 5,
  },
  productoNombre: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productoRatingContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productoRatingEstrellas: {
    color: '#f0c000', 
    fontSize: 16,
    marginRight: 5,
  },
  productoRatingCount: {
    color: '#888',
    fontSize: 12,
  },
  productoPrecioContenedor: {
    marginBottom: 15,
  },
  productoPrecioAnterior: {
    color: '#888',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  productoPrecioActual: {
    color: '#32CD32', 
    fontSize: 22,
    fontWeight: 'bold',
  },
  productoBoton: {
    backgroundColor: '#32CD32',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
  },
  productoBotonIcono: {
    color: '#1A1A1A',
    fontSize: 18,
    marginRight: 10,
  },
  productoBotonTexto: {
    color: '#1A1A1A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductCard;