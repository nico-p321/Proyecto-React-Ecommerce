import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const CheckoutScreen = ({ onBack, onContinue }) => {
  // Guardamos los datos del formulario
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    cp: ''
  });

  // Función para actualizar los datos al escribir
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Encabezado simple */}
        <View style={styles.header}>
            <TouchableOpacity onPress={onBack}>
                <Text style={styles.backIcon}>← Volver</Text>
            </TouchableOpacity>
        </View>

        {/* Título de la sección */}
        <View style={styles.titleContainer}>
            <Text style={styles.titleIcon}>📍</Text> 
            <Text style={styles.titleText}>Información de envío</Text>
        </View>

        {/* Campos del Formulario */}
        <View style={styles.formContainer}>
            
            <Text style={styles.label}>Nombre completo *</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Juan Pérez" 
                placeholderTextColor="#666"
                value={form.nombre}
                onChangeText={(text) => handleChange('nombre', text)}
            />

            <Text style={styles.label}>Email *</Text>
            <TextInput 
                style={styles.input} 
                placeholder="juan@ejemplo.com" 
                placeholderTextColor="#666"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}
            />

            <Text style={styles.label}>Teléfono *</Text>
            <TextInput 
                style={styles.input} 
                placeholder="11 2345-6789" 
                placeholderTextColor="#666"
                keyboardType="phone-pad"
                value={form.telefono}
                onChangeText={(text) => handleChange('telefono', text)}
            />

            <Text style={styles.label}>Dirección *</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Calle 123, Piso 4, Depto B" 
                placeholderTextColor="#666"
                value={form.direccion}
                onChangeText={(text) => handleChange('direccion', text)}
            />

            <Text style={styles.label}>Ciudad *</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Buenos Aires" 
                placeholderTextColor="#666"
                value={form.ciudad}
                onChangeText={(text) => handleChange('ciudad', text)}
            />

             <Text style={styles.label}>Provincia *</Text>
            <TextInput 
                style={styles.input} 
                placeholder="CABA" 
                placeholderTextColor="#666"
                value={form.provincia}
                onChangeText={(text) => handleChange('provincia', text)}
            />

            <Text style={styles.label}>Código postal *</Text>
            <TextInput 
                style={styles.input} 
                placeholder="1234" 
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={form.cp}
                onChangeText={(text) => handleChange('cp', text)}
            />

        </View>

        {/* Botón de Continuar */}
        <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
            <Text style={styles.continueText}>Continuar al pago</Text>
        </TouchableOpacity>

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
    padding: 20,
    paddingBottom: 50,
  },
  header: {
    marginBottom: 20,
  },
  backIcon: {
    color: '#888',
    fontSize: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  titleIcon: {
    fontSize: 24,
    marginRight: 10,
    color: '#32CD32',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 12,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#32CD32',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  continueText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CheckoutScreen;