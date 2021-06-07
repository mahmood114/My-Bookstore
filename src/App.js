import './App.css';
import campus from "./KhaldiyaCampus.jpg"

function App() {
  return (
    <div>
      <div className="centerText">
        <h1 >Mahmood's local bookstore</h1>
        <br></br>
        <p>My name is Sayed Mahmood Almohri. I am the founder and manager of this bookstore.</p>
        <p>Soon, we will have a wide range of books in our website store.</p>
        <p>Stay tuned!</p>
        <img src={campus} />
      </div>
      
    </div>
  );
}

export default App;
