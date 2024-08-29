import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
// import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

const Grocery = lazy(()=> import("./Components/Grocery"));


const AppLayout = () => {

  const [userName, setUserName] = useState();
   
  useEffect(()=> {
     const data = {
         name: "Shivam Gupta"
     };
     setUserName(data.name);
  }, []);



  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser:userName , setUserName}}> 
    <div className="app">
      <Header />
      <Outlet/>   
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
/* This Outlet component is provided by react-router-dom */

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/about",
      element: <About />,
      },
      {
        path: "/Grocery",
        element: <Suspense fallback = {<h1>Loading............</h1>}><Grocery /></Suspense>,
        },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
  ],
  errorElement: <Error />
},
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
