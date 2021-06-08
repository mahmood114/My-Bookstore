import campus from "../KhaldiyaCampus.jpg";

const Home = () => (
    <div className="centerText">
        <h1 >Mahmood's local bookstore</h1>
        <br></br>
        <h4>My name is Sayed Mahmood Almohri. I am the founder and manager of this bookstore.</h4>
        <h4>Soon, we will have a wide range of books in our website store.</h4>
        <h4>Stay tuned!</h4>
        <img className="storeImage" src={campus} />
      </div>
);

export default Home;