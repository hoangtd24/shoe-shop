import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import images from "../../assets/images";
import { decreseQuantity, increseQuantity, removeProductFromCart } from "../../features/cart/cartSlice";
import Button from "../Button/Button";
import styles from "./CartItem.module.scss";

const cx = className.bind(styles);

function CartItem({ shoes }) {
  const dispatch = useDispatch();
  const { productList, cart } = useSelector((state) => state.cart);
  console.log(cart)
  return (
    <div className={cx("cart-item")}>
      <div>
        <div
          className={cx("wrapper-img")}
          style={{ backgroundColor: `${shoes.color}` }}
        >
          <img src={shoes.image} alt="" className={cx("cart-img")} />
        </div>
      </div>
      <div className={cx("cart-item-info")}>
        <p className={cx("cart-item-name")}>{shoes.name}</p>
        <p className={cx("cart-item-price")}>${shoes.price}</p>
        <div className={cx("action")}>
          <Button small outline src={images.minus} onClick = {() => dispatch(decreseQuantity(shoes))}></Button>
          <p className={cx("cart-item-quantity")}>{shoes.count}</p>
          <Button small outline src={images.plus} onClick = {() => dispatch(increseQuantity(shoes))}></Button>
          <button
            className={cx("remove")}
            onClick={() => {
              console.log(shoes)
              dispatch(removeProductFromCart(shoes));
            }}
          >
            <img src={images.trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
