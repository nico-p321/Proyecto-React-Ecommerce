import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useCart } from '../context/CartContext'; 

const PaymentScreen = ({ onBack, onEditShipping, shippingInfo, onConfirmOrder }) => {
  const { totalPrice } = useCart(); 
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' o 'transfer'
  
  // Estado para los datos de la tarjeta
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header: Volver */}
        <TouchableOpacity onPress={onBack} style={styles.headerBack}>
            <Text style={styles.backIcon}>← Volver al carrito</Text>
        </TouchableOpacity>

        {/* SECCIÓN 1: Información de envío */}
        <View style={styles.cardContainer}>
            <View style={styles.sectionHeader}>
                <View style={styles.stepCircle}><Text style={styles.stepText}>1</Text></View>
                <Text style={styles.sectionTitle}>Información de envío</Text>
            </View>
            
            <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>{shippingInfo.nombre || 'Juan Pérez'}</Text>
                <Text style={styles.infoText}>{shippingInfo.email || 'Nico@hotmail.com'}</Text>
                <Text style={styles.infoText}>{shippingInfo.telefono || '2345688807'}</Text>
                <Text style={styles.infoText}>
                    {shippingInfo.direccion ? 
                        `${shippingInfo.direccion}, ${shippingInfo.ciudad} (${shippingInfo.cp})` 
                        : '23 e 8 y 9, buenos aires, caba (1234)'}
                </Text>
                
                <TouchableOpacity style={styles.editButton} onPress={onEditShipping}>
                    <Text style={styles.editButtonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* SECCIÓN 2: Método de pago */}
        <View style={styles.cardContainer}>
            <View style={styles.sectionHeader}>
                <View style={styles.stepCircle}><Text style={styles.stepText}>2</Text></View>
                <Text style={styles.sectionTitle}>Método de pago</Text>
            </View>

            {/* Opción: Tarjeta */}
            <TouchableOpacity 
                style={[styles.paymentOption, paymentMethod === 'card' && styles.selectedOption]}
                onPress={() => setPaymentMethod('card')}
            >
                <View style={[styles.radioOuter, paymentMethod === 'card' && styles.radioOuterSelected]}>
                    {paymentMethod === 'card' && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.paymentText}>💳 Tarjeta de crédito / débito</Text>
            </TouchableOpacity>

            {/* Opción: Transferencia */}
            <TouchableOpacity 
                style={[styles.paymentOption, paymentMethod === 'transfer' && styles.selectedOption]}
                onPress={() => setPaymentMethod('transfer')}
            >
                 <View style={[styles.radioOuter, paymentMethod === 'transfer' && styles.radioOuterSelected]}>
                    {paymentMethod === 'transfer' && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.paymentText}>🏦 Transferencia bancaria</Text>
            </TouchableOpacity>

            {/* Formulario de Tarjeta (Solo si está seleccionado tarjeta) */}
            {paymentMethod === 'card' && (
                <View style={styles.cardForm}>
                    <Text style={styles.label}>Número de tarjeta *</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="1234 5678 9012 3456" 
                        placeholderTextColor="#555"
                        keyboardType="numeric"
                    />

                    <Text style={styles.label}>Nombre en la tarjeta *</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="JUAN PEREZ" 
                        placeholderTextColor="#555"
                        autoCapitalize="characters"
                    />

                    <View style={styles.row}>
                        <View style={{flex: 1, marginRight: 10}}>
                            <Text style={styles.label}>Vencimiento *</Text>
                            <TextInput 
                                style={styles.input} 
                                placeholder="MM/AA" 
                                placeholderTextColor="#555"
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.label}>CVV *</Text>
                            <TextInput 
                                style={styles.input} 
                                placeholder="123" 
                                placeholderTextColor="#555"
                                keyboardType="numeric"
                                secureTextEntry
                            />
                        </View>
                    </View>

                    {/* Botón Confirmar Compra (TARJETA) */}
                    <TouchableOpacity 
                        style={styles.confirmButton} 
                        onPress={() => onConfirmOrder(paymentMethod)} 
                    >
                        <Text style={styles.confirmButtonText}>
                            Confirmar compra - $ {totalPrice.toLocaleString('de-DE')},00
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            
            {/* Mensaje si es Transferencia */}
             {paymentMethod === 'transfer' && (
                <View style={{marginTop: 20}}>
                    <Text style={{color: '#aaa'}}>
                        Te enviaremos los datos bancarios a tu email al confirmar.
                    </Text>
                    
                    {/* Botón Confirmar Compra (TRANSFERENCIA) */}
                    <TouchableOpacity 
                        style={styles.confirmButton} 
                        onPress={() => onConfirmOrder(paymentMethod)}
                    >
                        <Text style={styles.confirmButtonText}>
                            Confirmar compra - $ {totalPrice.toLocaleString('de-DE')},00
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>

        {/* Footer Resumen */}
        <View style={[styles.cardContainer, {opacity: 0.5}]}>
             <Text style={styles.sectionTitle}>Resumen del pedido</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 50,
  },
  headerBack: {
    marginBottom: 20,
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#1A1A1A', 
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepCircle: {
    width: 20,
    height: 20,
    backgroundColor: '#333', 
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepText: {
    color: '#aaa',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContent: {
    paddingLeft: 10,
  },
  infoTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 3,
  },
  editButton: {
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedOption: {
    borderColor: '#333', 
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#555',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: '#32CD32',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#32CD32',
  },
  paymentText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardForm: {
    marginTop: 10,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#1A1A1A', 
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 6,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#32CD32',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 25,
  },
  confirmButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PaymentScreen;