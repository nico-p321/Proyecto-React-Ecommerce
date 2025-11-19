import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
// Importamos el Provider Y el hook useCart
import { CartProvider, useCart } from './src/context/CartContext'; 

import AppHeader from './src/components/AppHeader';
import HomeScreen from './src/screens/HomeScreen'; 
import CartScreen from './src/screens/CartScreen'; 
import CheckoutScreen from './src/screens/CheckoutScreen'; 
import PaymentScreen from './src/screens/PaymentScreen'; 
import SuccessScreen from './src/screens/SuccessScreen'; // <--- Importamos la pantalla final

// 1. Creamos un componente interno que SI puede usar el hook useCart
const AppContent = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [shippingInfo, setShippingInfo] = useState({});
  
  // Estados para manejar la pantalla de éxito
  const [finalPaymentMethod, setFinalPaymentMethod] = useState('card');
  const [lastOrderTotal, setLastOrderTotal] = useState(0);

  // Aquí usamos el contexto para obtener totalPrice y clearCart
  const { totalPrice, clearCart } = useCart(); 

  const renderScreen = () => {
    switch (currentScreen) {
      case 'cart':
        return (
          <CartScreen 
             onClose={() => setCurrentScreen('home')} 
             onCheckout={() => setCurrentScreen('checkout')} 
          />
        );
      case 'checkout':
        return (
          <CheckoutScreen 
             onBack={() => setCurrentScreen('cart')} 
             onContinue={(data) => {
                setShippingInfo(data); 
                setCurrentScreen('payment');
             }}
          />
        );
      case 'payment':
        return (
          <PaymentScreen 
             onBack={() => setCurrentScreen('checkout')} 
             onEditShipping={() => setCurrentScreen('checkout')}
             shippingInfo={shippingInfo} 
             onConfirmOrder={(method) => {
                // Lógica mágica antes de mostrar el éxito:
                setLastOrderTotal(totalPrice); // 1. Guardamos el precio total
                setFinalPaymentMethod(method); // 2. Guardamos el método
                clearCart();                   // 3. Vaciamos el carrito
                setCurrentScreen('success');   // 4. Cambiamos de pantalla
             }}
          />
        );
      case 'success': // <--- Pantalla Final
          return (
            <SuccessScreen 
                email={shippingInfo.email}
                total={lastOrderTotal} // Usamos el precio guardado (porque el carrito ya está vacío)
                paymentMethod={finalPaymentMethod}
                onGoHome={() => setCurrentScreen('home')}
            />
          );
      case 'home':
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      {/* El Header solo se muestra en Home */}
      {currentScreen === 'home' && (
          <AppHeader onOpenCart={() => setCurrentScreen('cart')} />
      )}
      
      {renderScreen()}
    </SafeAreaView>
  );
};

// 2. El componente principal solo envuelve todo con el Provider
export default function App() {
  return (
    <CartProvider>
       <AppContent />
    </CartProvider>
  );
}