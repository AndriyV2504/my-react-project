import Product from "./Product/Product";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import { useState } from "react";
import { Formik, Form, Field } from "formik";

const App = () => {
  const initialValues = {
    username: "",
    email: "",
  };

  const FeedbackForm = () => {
    const handleSubmit = (values, actions) => {
      console.log(values);
      actions.resetForm();
    };

    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="username" />
          <Field type="email" name="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  };

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const [lang, setLang] = useState("ua");

  return (
    <>
      <p>FeedbackForm</p>
      <FeedbackForm />
      {/* ============================================= */}
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      {/* ============================================= */}
      <SearchBar />
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
