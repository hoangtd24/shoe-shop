import className from "classnames/bind";
import styles from "./Button.module.scss";

const cx = className.bind(styles);
function Button({ large, small, primary, outline, src,disable}) {
  const classes = cx("wrapper", {
    large,
    small,
    primary,
    outline,
    disable
  });
  return (
    <button className={classes}>
      <img  src={src} alt="" className={cx("img")} />
    </button>
  );
}

export default Button;
