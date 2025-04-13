import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <>
      <Layout>
        <Navigation />
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Layout>
    </>
  );
}

export default App;
