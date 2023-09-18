import { useState } from "react";
import data from "../products-temporary.json";
import styles from "./ProductEdit.module.css";

const ProductEdit = ({ id, toggleProductEditWindow }) => {
  const product = data.find((item) => item.id === id);
  const [formData, setFormData] = useState(product);
  const entries = Object.entries(product);

  let productName = "";
  let image = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: add save function
    // send request to server to save product
    toggleProductEditWindow(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const productsInfo = entries.map(([key, value], index) => {
    if (key === "image") {
      image = value;
      return null;
    }
    if (key === "name") {
      productName = value;
      return null;
    } else {
      // Render a regular table row for other keys
      return (
        <tr key={index}>
          <td>
            <label htmlFor={key}>{key}</label>
          </td>
          <td>
            {key === "description" ? (
              <textarea
                type="text"
                defaultValue={value}
                rows="10"
                cols="51"
                name={key}
                id={key}
                onChange={handleInputChange}
              />
            ) : (
              <input
                type="text"
                defaultValue={value}
                size="50"
                name={key}
                id={key}
                onChange={handleInputChange}
              />
            )}
          </td>
        </tr>
      );
    }
  });

  return (
    <div className={styles["box"]}>
      <span>
        <button onClick={() => toggleProductEditWindow(false)}>X</button>
      </span>
      <form onSubmit={handleSubmit}>
        <div>
          <img src={image} alt={productName} className={styles["image-box"]} />
        </div>
        <table>
          <caption>{productName}</caption>
          <tbody>{productsInfo}</tbody>
        </table>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductEdit;
