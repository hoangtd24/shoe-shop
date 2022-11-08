import className from "classnames/bind";
import images from "../../assets/images";
import Button from "../Button/Button";
import styles from "./CartItem.module.scss";

const cx = className.bind(styles);

function CartItem({ shoes }) {
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
          <Button small outline src={images.minus}></Button>
          <p className={cx("cart-item-quantity")}>1</p>
          <Button small outline src={images.plus}></Button>
          <button className={cx("remove")}>
            <img src={images.trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
