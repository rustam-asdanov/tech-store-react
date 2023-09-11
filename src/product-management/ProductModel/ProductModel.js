import { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";

const ProductModel = ({ id, name, price, image }) => {
  const [showProductInfo, setShowProductInfo] = useState(false);

  const imageStyle = {
    width: "100px",
  };

  const toggleMoreInfo = (show) => {
    setShowProductInfo(show);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        <img src={image} alt={name} style={imageStyle} />
      </td>
      <td>{name}</td>
      <td>{price}$</td>
      <td>
        <button type="button">Delete</button>
        <button type="button">Edit</button>
        <button type="button" onClick={() => toggleMoreInfo(true)}>
          More Info
        </button>
        {showProductInfo && (
          <ProductInfo id={id} toggleMoreInfo={toggleMoreInfo} />
        )}
      </td>
    </tr>
  );
};

export default ProductModel;
