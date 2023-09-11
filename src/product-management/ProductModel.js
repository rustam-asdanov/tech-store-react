function ProductModel(props) {
  const imageStyle = {
    width: "100px",
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <img src={props.image} alt={props.name} style={imageStyle} />
      </td>
      <td>{props.name}</td>
      <td>{props.price}$</td>
      <td>
        <button type="button">Delete</button>
        <button type="button">Edit</button>
        <button type="button">More Info</button>
      </td>
    </tr>
  );
}

export default ProductModel;
