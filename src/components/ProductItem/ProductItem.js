import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import images from "../../assets/images";
import { addProductToCart } from "../../features/cart/cartSlice";
import Button from "../Button/Button";
import styles from "./ProductItem.module.scss";

const cx = className.bind(styles);

function ProductItem({ shoes }) {
  const dispatch = useDispatch();
  const { productList, cart } = useSelector((state) => state.cart);
  const isAdded = cart.find((item) => item.id === shoes.id);
  return (
    <div className={cx("product-item")}>
      <div
        className={cx("wrapper-img")}
        style={{ backgroundColor: `${shoes.color}` }}
      >
        <img src={shoes.image} alt="" className={cx("product-img")} />
      </div>
      <p className={cx("product-name")}>{shoes.name}</p>
      <p className={cx("product-desc")}>{shoes.description}</p>
      <div className={cx("action")}>
        <p className={cx("product-price")}>${shoes.price}</p>
        {!!isAdded ? (
          <Button large primary disable src={images.check}></Button>
        ) : (
          <button
            className={cx("action-btn")}
            onClick={() => {
              dispatch(addProductToCart(shoes));
            }}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
