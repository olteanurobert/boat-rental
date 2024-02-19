// Components
import AddToCart from "../clientComponents/AddToCart";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
