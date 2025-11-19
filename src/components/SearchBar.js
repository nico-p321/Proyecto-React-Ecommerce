import React from 'react'; 
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchBar = () => (
  <View style={styles.searchBar}>
    <Text style={styles.iconoBusqueda}>🔍</Text>
    <TextInput 
      placeholder="Buscar productos..."
      placeholderTextColor="#888"
      style={styles.inputBuscador}
    /> 
  </View>
);

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  iconoBusqueda: {
    color: '#888',
    fontSize: 18,
    marginRight: 10,
  },
  inputBuscador: {
    color: '#FFFFFF',
    flex: 1,
    height: 50,
  },
});

export default SearchBar;