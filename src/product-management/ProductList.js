function ProductList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Functions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>image</td>
          <td>Acer Predator</td>
          <td>512$</td>
          <td>
            <button type="button">Delete</button>
            <button type="button">Edit</button>
            <button type="button">More Info</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductList;
