import Product from "./Product/Product";
import LoginForm from "./LoginForm/LoginForm";

const App = () => {
  const handleLogin = (userData) => {
    console.log(userData);
  };
  return (
    <>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      {/* // =========================================  */}
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product />
    </>
  );
};

export default App;
