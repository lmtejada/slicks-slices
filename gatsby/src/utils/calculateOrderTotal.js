import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((total, singleItem) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleItem.id
    );
    return total + calculatePizzaPrice(pizza.price, singleItem.size);
  }, 0);
}
