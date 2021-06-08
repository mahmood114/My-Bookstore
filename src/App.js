import './App.css';
import campus from "./KhaldiyaCampus.jpg";
import products from "./products";

function App() {

  const booksList = products.map((book) => (
    <div className="book">
          <img className="booksImage" src={book.image} />
          <p className="centerText">{book.name}</p>
          <p className="centerText">{book.price} KD</p>
    </div>
  ));

  return (
    <div>
      <div className="centerText">
        <h1 >Mahmood's local bookstore</h1>
        <br></br>
        <p>My name is Sayed Mahmood Almohri. I am the founder and manager of this bookstore.</p>
        <p>Soon, we will have a wide range of books in our website store.</p>
        <p>Stay tuned!</p>
        <img className="storeImage" src={campus} />
      </div>
      
      <div className="list">{booksList}</div>

    </div>
  );
}

export default App;
