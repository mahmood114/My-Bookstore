import campus from "../KhaldiyaCampus.jpg";
import {Title, Description, ShopImage} from "../styles.js";
import { Helmet } from "react-helmet";

const Home = () => (
  <div className="centerText">
    <Helmet>
      <title>Mahmood's Local Bookstore</title>
    </Helmet>
    <Title >Mahmood's local bookstore</Title>
    <br></br>
    <Description>My name is Sayed Mahmood Almohri. I am the founder and manager of this bookstore.</Description>
    <Description>Soon, we will have a wide range of books in our website store.</Description>
    <Description>Stay tuned!</Description>
    <ShopImage src={campus} />
  </div>
);

export default Home;