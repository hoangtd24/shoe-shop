import className from "classnames/bind";
import images from "../../assets/images";
import Button from "../Button/Button";
import styles from "./ProductItem.module.scss";

const cx = className.bind(styles);

function ProductItem({ shoes }) {
  return (
    <div className={cx("product-item")}>
      <div className={cx("wrapper-img")} style={{backgroundColor: `${shoes.color}`}}>
        <img src={shoes.image} alt="" className={cx("product-img")} />
      </div>
      <p className={cx("product-name")}>{shoes.name}</p>
      <p className={cx("product-desc")}>{shoes.description}</p>
      <div className={cx("action")}>
        <p className={cx("product-price")}>${shoes.price}</p>
        <button className={cx("action-btn")}>ADD TO CART</button>
        {/* <Button large primary disable src={images.check}></Button> */}
      </div>
    </div>
  );
}

export default ProductItem;
