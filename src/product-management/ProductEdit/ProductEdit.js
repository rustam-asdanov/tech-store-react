import data from "../products-temporary.json";
import styles from "./ProductEdit.module.css";

const ProductEdit = ({ id, toggleProductEdit }) => {
  const product = data.find((item) => item.id === id);
  const entries = Object.entries(product);
  let productName = "";
  let image = "";

  const productsInfo = entries.map(([key, value], index) => {
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
        <tr key={index}>
          <td>{key}</td>
          <td>
            {key === "description" ? (
              <textarea type="text" defaultValue={value} />
            ) : (
              <input type="text" name="key" defaultValue={value} />
            )}
          </td>
        </tr>
      );
    }
  });

  return (
    <div className={styles["box"]}>
      <span>
        <button onClick={() => toggleProductEdit(false)}>X</button>
      </span>
      <form>
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
