import className from "classnames/bind";
import Poper from "../../components/Poper/Poper";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";

const cx = className.bind(styles);

function Cart() {
  const { productList, cart } = useSelector((state) => state.cart);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("background")}></div>
      <Poper shoesList={productList} title="Our Products" />
      <Poper title="Your Cart" price shoesList={cart} />
    </div>
  );
}

export default Cart;
