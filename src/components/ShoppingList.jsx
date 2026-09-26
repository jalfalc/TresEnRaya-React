import { useState } from 'react';

const products = [
  { title: 'Col', isFruit: false, id: 1 },
  { title: 'Ajo', isFruit: false, id: 2 },
  { title: 'Manzana', isFruit: true, id: 3 },
];


export default function ShoppingList() {

  const [count, setCount] = useState(0);


  function showTitle() {
    setCount(count + 1);

    console.log("Contador alimentos: " + (count + 1));
  }

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
      count={count}
      onClick={showTitle}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}