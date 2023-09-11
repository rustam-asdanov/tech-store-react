import data from "../products-temporary.json";
import styles from "./ProductInfo.module.css";

const ProductInfo = ({ id, toggleMoreInfo }) => {
  const product = data.find((item) => item.id === id);
  const entries = Object.entries(product);
  let productName = "";
  let image = "";

  const productsInfo = entries.map(([key, value]) => {
    if (key === "image") {
      // Do something special when the key is "image"
      image = value;
      return null;
    }
    if (key === "name") {
      productName = value;
      return null;
    } else {
      // Render a regular table row for other keys
      return (
        <tr>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      );
    }
  });

  return (
    <div className={styles["box"]}>
      <span>
        <button onClick={() => toggleMoreInfo(false)}>X</button>
      </span>
      <div>
        <img src={image} alt={productName} className={styles["image-box"]} />
      </div>
      <table>
        <caption>{productName}</caption>
        <tbody>{productsInfo}</tbody>
      </table>
    </div>
  );
};

export default ProductInfo;
