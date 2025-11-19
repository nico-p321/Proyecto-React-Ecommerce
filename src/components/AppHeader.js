import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext'; 

const AppHeader = ({ onOpenCart }) => {
  const { totalItems } = useCart(); 

  return (
    <View style={styles.headerContainer}>
      
      {/* Logo */}
      <Text style={styles.logoText}>TecnoComp</Text>

      {/* Botón Carrito */}
      <TouchableOpacity style={styles.cartContainer} onPress={onOpenCart}>
        <Text style={{fontSize: 28}}>🛒</Text> 
        {}
        
        {totalItems > 0 && (
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>
                  {totalItems > 99 ? '99+' : totalItems}
                </Text>
            </View>
        )}
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#1A1A1A',
    elevation: 5,
  },
  logoText: {
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#32CD32',
    letterSpacing: 1,
  },
  cartContainer: {
    position: 'relative',
    padding: 5,
  },
  badgeContainer: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default AppHeader;