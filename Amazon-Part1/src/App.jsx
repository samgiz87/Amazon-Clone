import React, { useContext } from "react";
import "./App.css";
// import Header from "./Components/Header/Header";
// import Carousels from "./Components/Carousel/Carousels";
// import Category from "./Components/Category/Category";
// import Product from "./Components/Product/Product";
import Routing from "./Router";
import { useEffect } from "react";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type"
import {auth} from './Utility/firebase'

function App() {
  const { state , dispatch} = useContext(DataContext);
  const { user } =state 

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })

      }else {
        dispatch({
          type:Type.SET_USER,
          user: null,
        })
      }
    })



  },[])

  return (
    <>
      {/* <Header/> */}
      {/* <Carousels/> */}
      {/* <Category/> */}
      {/* <Product/> */}
      <Routing />
    </>
  );
}

export default App;
