import { useState } from "react";

const ProductDelete = ({ id, toggleDeleteProductWindow }) => {
  const [confirmationShow, setConfirmationShow] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault();
    console.log("element with id " + id + "deleted");

    // TODO: add delete request with id to delete product
    // if it returns ture do things bellow
    setConfirmationShow(true);
    toggleDeleteProductWindow(false);
  };

  return (
    <div>
      {confirmationShow && <span>Element deleted successfully</span>}
      {!confirmationShow && (
        <>
          <span>Are you sure you want to delete this product?</span>
          <button type="button" onClick={clickHandler}>
            Ok
          </button>
          <button
            type="button"
            onClick={() => {
              toggleDeleteProductWindow(false);
            }}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default ProductDelete;
