import logo from './logo.svg';
import './App.css';
import Portfolio from "./Page/Portolio";
import {useEffect} from "react";


function App() {
  useEffect(() => {
    document.title = "DeraiZ Portfolio";
  }, []);
  return (
    <Portfolio/>
  );
}

export default App;
