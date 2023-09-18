import { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductEdit from "../ProductEdit/ProductEdit";
import ProductDelete from "../ProductDelete/ProductDelete";

const ProductModel = ({ id, name, price, image }) => {
  const [showProductDeleteWindow, setProductDeleteWindow] = useState(false);
  const [showProductInfoWindow, setShowProductInfoWindow] = useState(false);
  const [showProductEditWindow, setShowProductEditWindow] = useState(false);

  const imageStyle = {
    width: "100px",
  };

  const toggleDeleteProductWindow = (show) => {
    setProductDeleteWindow(show);
  };

  const toggleMoreInfoWindow = (show) => {
    setShowProductInfoWindow(show);
  };

  const toggleProductEditWindow = (show) => {
    setShowProductEditWindow(show);
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
        <button type="button" onClick={() => toggleDeleteProductWindow(true)}>
          Delete
        </button>
        <button type="button" onClick={() => toggleProductEditWindow(true)}>
          Edit
        </button>
        <button type="button" onClick={() => toggleMoreInfoWindow(true)}>
          More Info
        </button>
        {showProductDeleteWindow && (
          <ProductDelete
            key={id}
            id={id}
            toggleDeleteProductWindow={toggleDeleteProductWindow}
          />
        )}
        {showProductInfoWindow && (
          <ProductInfo
            key={id}
            id={id}
            toggleMoreInfoWindow={toggleMoreInfoWindow}
          />
        )}
        {showProductEditWindow && (
          <ProductEdit
            key={id}
            id={id}
            toggleProductEditWindow={toggleProductEditWindow}
          />
        )}
      </td>
    </tr>
  );
};

export default ProductModel;
