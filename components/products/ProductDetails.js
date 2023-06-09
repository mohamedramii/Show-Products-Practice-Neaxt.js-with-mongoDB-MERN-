import Card from "../ui/Card";
import styles from "./ProductDetail.module.css";
import Image from "next/image";
function ProductDetails(props) {
  return (
    <section className={styles.detail}>
      <Card>
        <div className={styles.image}>
          <Image src={props.image} alt={props.name} fill={true} />
        </div>
        <h1>{props.name}</h1>
        <span>${props.price}</span>
        <p>{props.desc}</p>
      </Card>
    </section>
  );
}
export default ProductDetails;