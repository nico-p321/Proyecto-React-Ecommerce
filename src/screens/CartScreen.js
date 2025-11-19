import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useCart } from '../context/CartContext';


const CartScreen = ({ onClose, onCheckout }) => { 
  const { cart, addToCart, decreaseQuantity, removeFromCart, totalPrice } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.imagen} style={styles.itemImage} />
      
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle} numberOfLines={1}>{item.nombre}</Text>
        <Text style={styles.itemBrand}>{item.categoria}</Text>
        <Text style={styles.itemPrice}>$ {item.precioActual?.toLocaleString('de-DE')},00</Text>
      </View>

      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.deleteBtn}>
             <Text style={{fontSize: 18}}>🗑️</Text> 
        </TouchableOpacity>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.qtyBtn}>
            <Text style={styles.qtyBtnText}>-</Text>
          </TouchableOpacity>
          
          <View style={styles.qtyNumberBox}>
             <Text style={styles.qtyText}>{item.quantity}</Text>
          </View>

          <TouchableOpacity onPress={() => addToCart(item)} style={styles.qtyBtn}>
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Carrito de compras</Text>
        <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
            <Text style={styles.emptyText}>Tu carrito está vacío :(</Text>
        }
      />

      <View style={styles.footer}>
        <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalAmount}>$ {totalPrice.toLocaleString('de-DE')},00</Text>
        </View>

        {/* 2. CAMBIO AQUÍ: Conectamos el botón para ir al Checkout */}
        <TouchableOpacity 
            style={styles.checkoutButton} 
            onPress={onCheckout}
        >
            <Text style={styles.checkoutText}>Proceder al pago</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={onClose}>
            <Text style={styles.continueText}>Continuar comprando</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeIcon: {
    color: '#888',
    fontSize: 24,
  },
  listContent: {
    padding: 15,
  },
  emptyText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemBrand: {
    color: '#888',
    fontSize: 12,
    marginBottom: 4,
  },
  itemPrice: {
    color: '#32CD32', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 70,
  },
  deleteBtn: {
    padding: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 6,
    marginTop: 5,
  },
  qtyBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  qtyBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyNumberBox: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
  },
  qtyText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    backgroundColor: '#1A1A1A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  totalLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    color: '#32CD32',
    fontSize: 22,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#32CD32',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  checkoutText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  continueButton: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default CartScreen;