import { useState } from 'react';

export default function usePizza({ pizzas, input }) {
  const [order, setOrder] = useState([]);

  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
