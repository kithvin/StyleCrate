import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// Create a context for managing global state
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // Retrieve the currency value from environment variables
  const currency = import.meta.env.VITE_CURRENCY;

  // Hook for navigation
  const navigate = useNavigate();

  // State for managing user authentication (true means user is logged in, false means not)
  const [user, setUser] = useState(null);

  // State for checking if the current user is a seller
  const [isSeller, setIsSeller] = useState(false);

  // State to manage visibility of user login form
  const [showUserLogin, setshowUserLogin] = useState(false);

  // State to manage the products (you can later update this with actual product data)
  const [products, setProducts] = useState([]);

  // State to manage cart items
  const [cartItems, setCartItems] = useState({});

  // State to manage search query input
  const [searchQuery, setSearchQuery] = useState({});

  // Fetch Seller Status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false);
    }
  };

  // Fetch User Auth Status , user Data and Cart Items

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("api/user/is-auth");
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems);
      }
    } catch (error) {
      setUser(null);
    }
  };

  // Fetch All product

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  /* Function to add product to the cart */
  const addToCart = (itemId) => {
    // Clone the current cart items to avoid directly mutating state
    let cartData = structuredClone(cartItems);

    // Check if the item is already in the cart
    if (cartData[itemId]) {
      cartData[itemId] += 1; // If yes, increase the quantity
    } else {
      cartData[itemId] = 1; // If no, add the item with a quantity of 1
    }

    // Update the cart state with the new cart data
    setCartItems(cartData);
    toast.success("Added to Cart"); // Show success toast notification
  };

  /* Update cart item quantity */
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems); // Clone the current cart items to avoid directly mutating state
    cartData[itemId] = quantity; // Update the quantity of the specified item
    setCartItems(cartData); // Update the cart state with the new cart data
    toast.success("Cart Updated"); // Show success toast notification
  };

  /* Remove Product from Cart */
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems); // Clone the cart data
    if (cartData[itemId]) {
      // Check if the item exists in the cart
      cartData[itemId] -= 1; // Decrease the quantity of the item
      if (cartData[itemId] === 0) {
        delete cartData[itemId]; // Remove item from cart if quantity is 0
      }
    }

    // Show success toast notification
    toast.success("Removed from Cart");

    // Update the cart state with the new data
    setCartItems(cartData);
  };

  /* Function to get total number of items in the cart */

  const getCartCount = () => {
    let totalCount = 0;
    // Loop through all cart items and add up their quantities
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    // Return the total count of items in the cart
    return totalCount;
  };

  /* Get Cart Total Amount */
  // this have some issue i provide below some code.if below oce not woking uncomment given code and use this
  // const getCartAmount = () =>{
  //   let totalAmount = 0;
  //   for (const items in cartItems){
  //     let itemInfo = products.find((product)=> product._id === items); // Find product info by ID
  //     if(cartItems[items] > 0){
  //       totalAmount += itemInfo.offerPrice * cartItems[items]; // Calculate total price
  //     }
  //   }
  //   return Math.floor(totalAmount * 100) / 100; // Round to two decimal places
  // }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items); // Find product info by ID
      if (itemInfo && cartItems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[items]; // Calculate total price
      }
    }
    return Math.floor(totalAmount * 100) / 100; // Round to two decimal places
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchUser();
    fetchSeller();
    fetchProducts(); // Call the function to fetch products
  }, []);

  // Update Database Cart Items
  useEffect (()=>{
    const updateCart = async ()=>{
      try {
        const {data} = await axios.post('/api/cart/update',{cartItems});
        if (!data.success){
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    if(user) {
      updateCart();
    }
  },[cartItems]);

  // The context value that will be provided to children components
  const value = {
    navigate, // to navigate between pages
    user, // stores the user state (logged in or not)
    setUser, // function to update the user state
    setIsSeller, // function to set whether the user is a seller or not
    isSeller, // stores whether the user is a seller
    showUserLogin, // controls visibility of the login form
    setshowUserLogin, // function to show/hide login form
    products, // stores product data
    setProducts, // function to set product data
    currency, // Current currency value
    cartItems, // Stores items in the cart
    addToCart, // Function to add an item to the cart
    updateCartItem, // Function to update the quantity of an item in the cart
    removeFromCart, // Function to remove an item from the cart
    searchQuery, // Stores the search query
    setSearchQuery, // Function to set the search query
    getCartAmount, // Function to get total cart amount
    getCartCount, // Function to get total item count in cart
    axios, // import axios from api call
    fetchProducts, // import fetchProducts from api call
    setCartItems // import setCartItems from api call
  };

  // Providing the context to children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to access AppContext values
export const useAppContext = () => {
  return useContext(AppContext); // Return the context value
};
