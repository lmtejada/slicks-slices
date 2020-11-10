import React from 'react';
import Img from 'gatsby-image';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import MenuItemStyles from '../styles/MenuItemStyles';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((item, index) => {
        const pizza = pizzas.find((singlePizza) => singlePizza.id === item.id);

        return (
          <MenuItemStyles key={`${item.id}-${index}`}>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, item.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${item.size} ${pizza.name} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
