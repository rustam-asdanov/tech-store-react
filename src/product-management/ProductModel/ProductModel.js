import { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductEdit from "../ProductEdit/ProductEdit";

const ProductModel = ({ id, name, price, image }) => {
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showProductEdit, setShowProductEdit] = useState(false);

  const imageStyle = {
    width: "100px",
  };

  const toggleMoreInfo = (show) => {
    setShowProductInfo(show);
  };

  const toggleProductEdit = (show) => {
    setShowProductEdit(show);
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
        <button type="button" onClick={() => toggleProductEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => toggleMoreInfo(true)}>
          More Info
        </button>
        {showProductInfo && (
          <ProductInfo key={id} id={id} toggleMoreInfo={toggleMoreInfo} />
        )}
        {showProductEdit && (
          <ProductEdit id={id} toggleProductEdit={toggleProductEdit} />
        )}
      </td>
    </tr>
  );
};

export default ProductModel;
