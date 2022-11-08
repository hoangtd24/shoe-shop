import className from "classnames/bind";
import { useSelector } from "react-redux";
import images from "../../assets/images";
import CartItem from "../CartItem/CartItem";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./Poper.module.scss";

const cx = className.bind(styles);
function Poper({ shoesList, title, price }) {
  const { cart } = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((result, item) => (result = result + item.price * item.count),0);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box")}></div>
      <img src={images.nike} alt="logo-nike" className={cx("logo-brand")} />
      <div className={cx("cart-wrapper")}>
        <p className={cx("cart-title")}>{title}</p>
        {price && <p className={cx("cart-total-price")}>${totalPrice.toFixed(2)}</p>}
      </div>
      {shoesList.length === 0 ? (
        <p className={cx("no-cart")}>Your cart is empty.</p>
      ) : (
        <div className={cx("cart-info")}>
          {price ? (
            <>
              {!!shoesList &&
                shoesList.map((shoes, index) => (
                  <CartItem shoes={shoes} key={index} />
                ))}
            </>
          ) : (
            <>
              {!!shoesList &&
                shoesList.map((shoes, index) => (
                  <ProductItem shoes={shoes} key={index} />
                ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Poper;
