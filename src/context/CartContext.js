import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto (o aumentar cantidad si ya existe)
  const addToCart = (product) => {
    setCart(currentCart => {
      const exists = currentCart.find(item => item.id === product.id);
      if (exists) {
        return currentCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
     
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  // Disminuir cantidad
  const decreaseQuantity = (id) => {
    setCart(currentCart => {
      return currentCart.map(item => {
        if (item.id === id) {
         
          return { ...item, quantity: Math.max(1, item.quantity - 1) }; 
        }
        return item;
      });
    });
  };

  // Eliminar producto
  const removeFromCart = (id) => {
    setCart(currentCart => currentCart.filter(item => item.id !== id));
  };

  // --- NUEVA FUNCIÓN: Vaciar el carrito al finalizar compra ---
  const clearCart = () => {
    setCart([]); 
  };

  // Calcular total precio
  const totalPrice = cart.reduce((acc, item) => acc + (item.precioActual * item.quantity), 0);
  
  // Calcular total items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
        cart, 
        addToCart, 
        decreaseQuantity, 
        removeFromCart, 
        clearCart, 
        totalPrice,
        totalItems 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);