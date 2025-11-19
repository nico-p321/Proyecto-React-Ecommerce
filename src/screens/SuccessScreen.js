import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const SuccessScreen = ({ onGoHome, email, total, paymentMethod }) => {
  const orderNumber = Math.floor(Math.random() * 100000) + 10000;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Icono de Éxito */}
        <View style={styles.iconContainer}>
            <View style={styles.successCircle}>
                <Text style={styles.checkIcon}>✓</Text>
            </View>
        </View>

        <Text style={styles.title}>¡Compra realizada con éxito!</Text>
        <Text style={styles.subtitle}>Tu pedido ha sido procesado correctamente</Text>

        {/* Info Email */}
        <View style={styles.infoBox}>
            <Text style={styles.infoText}>
                Recibirás un email de confirmación en <Text style={styles.emailHighlight}>{email}</Text> con los detalles de tu pedido y el número de seguimiento.
            </Text>
        </View>

        {/* Detalles */}
        <View style={styles.detailsBox}>
            <View style={styles.row}>
                <Text style={styles.label}>Número de pedido:</Text>
                <Text style={styles.value}>#{orderNumber}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Total pagado:</Text>
                <Text style={styles.totalValue}>$ {total?.toLocaleString('de-DE')},00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Método de pago:</Text>
                <Text style={styles.value}>
                    {paymentMethod === 'card' ? 'Tarjeta de crédito/débito' : 'Transferencia'}
                </Text>
            </View>
        </View>

        {/* Botón Volver al inicio  */}
        <TouchableOpacity style={styles.homeButton} onPress={onGoHome}>
            <Text style={styles.homeButtonText}>Volver al inicio</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 50,
  },
  iconContainer: {
    marginBottom: 20,
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(50, 205, 50, 0.1)',
  },
  checkIcon: {
    color: '#32CD32',
    fontSize: 40,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#888',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  infoText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  emailHighlight: {
    color: '#fff',
    fontWeight: 'bold',
  },
  detailsBox: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    color: '#888',
    fontSize: 14,
  },
  value: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  totalValue: {
    color: '#32CD32',
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: '#32CD32',
    borderRadius: 8,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  homeButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SuccessScreen;