import ProductModel from "./ProductModel";
import products from "./products-temporary.json";

function ProductList() {
  const data = products.map((product) => (
    <ProductModel
      id={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Functions</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
}

export default ProductList;
