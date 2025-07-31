import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets, dummyAddress } from "../assets/assets";
import toast from "react-hot-toast";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    removeFromCart,
    getCartCount,
    updateCartItem,
    navigate,
    getCartAmount,
    axios,
    user,
    setCartItems
  } = useAppContext();

  const [cartArray, setCartArray] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentoption, setPaymentoption] = useState("COD");

  const getCart = () => {
    const tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);

      const productCopy = { ...product, quantity: cartItems[key] };
      tempArray.push(productCopy);
    }
    setCartArray(tempArray);
  };

  const getUserAddress = async () => {
    try {
      const { data } = await axios.get("/api/address/get");
      if (data.success) {
        setAddresses(data.addresses);
        if (data.addresses.length > 0) {
          setSelectedAddress(data.addresses[0]);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const placeOrder = async () => {
    try {
      if(!selectedAddress){
        return toast.error("Please select an address")
      }
      // Place order with COD
      if(paymentoption === "COD"){
        // const {data} = await axios.post('/api/order/cod',{
        //   userId: user._id,
        //   items: cartArray.map(item=>({product:item._id,
        //     quantity : item.quantity
        //   })),address: selectedAddress._id
        // });

        const { data } = await axios.post('/api/order/cod', {
          items: cartArray.map(item => ({
            product: item._id,
            quantity: item.quantity,
          })),
          address: selectedAddress._id,
        });

        
        if(data.success){
          toast.success(data.message);
          setCartItems({});
          navigate('/my-orders');
        }else{
          toast.error(data.message)}
        }else{
          // Place Order with Stripe

          // const { data } = await axios.post('/api/order/stripe', {
          //   items: cartArray.map(item => ({
          //     product: item._id,
          //     quantity: item.quantity,
          //   })),
          //   address: selectedAddress._id,
          // });
  
          
          if(data.success){
            window.location.replace(data.url);
          }else{
            toast.error(data.message)}
        }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  useEffect(() => {
    if (user) {
      getUserAddress();
    }
  }, [user]);

  return products.length > 0 && cartItems ? (
    <div className="container mx-auto px-4 sm:px-6 md:px-28">
      <div className="flex flex-col md:flex-row mt-8 md:mt-16 gap-8">
        <div className="flex-1 w-full md:max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6">
            Shopping Cart{" "}
            <span className="text-sm text-primary">{getCartCount()}</span>
          </h1>

          {/* Product details header - hidden on mobile */}
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] text-gray-600 text-base font-medium pb-3">
            <p className="text-left">Product Details</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Action</p>
          </div>

          {cartArray.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] text-gray-500 items-start md:items-center text-sm md:text-base font-medium pt-3 pb-4 border-b border-gray-200 md:border-none"
            >
              <div className="flex items-start md:items-center w-full gap-3 md:gap-6">
                <div
                  onClick={() => {
                    navigate(
                      `/products/${product.category.toLowerCase()}/${
                        product._id
                      }`
                    );
                    scrollTo(0, 0);
                  }}
                  className="cursor-pointer w-16 h-16 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center border border-gray-300 rounded"
                >
                  <img
                    className="max-w-full h-full object-cover"
                    src={product.image[0]}
                    alt={product.name}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold line-clamp-2">{product.name}</p>
                  <div className="font-normal text-gray-500/70 mt-1">
                    <p className="text-sm">
                      Size: <span>{product.weight || "Free Size"}</span>
                    </p>
                    <div className="flex items-center mt-1">
                      <p className="text-sm md:text-base">Qty:</p>
                      <select
                        onChange={(e) =>
                          updateCartItem(product._id, Number(e.target.value))
                        }
                        value={cartItems[product._id]}
                        className="outline-none ml-2 text-sm md:text-base border rounded px-1 py-0.5"
                      >
                        {Array(
                          cartItems[product._id] > 9
                            ? cartItems[product._id]
                            : 9
                        )
                          .fill("")
                          .map((_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between md:justify-center items-center mt-2 md:mt-0 w-full md:w-auto">
                <p className="md:hidden text-sm font-medium">Subtotal:</p>
                <p className="text-sm md:text-base">
                  {currency}
                  {product.offerPrice * product.quantity}
                </p>
              </div>

              <div className="flex justify-between md:justify-center items-center mt-2 md:mt-0 w-full md:w-auto">
                <p className="md:hidden text-sm font-medium">Action:</p>
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="cursor-pointer"
                >
                  <img
                    src={assets.remove_icon}
                    alt="remove"
                    className="inline-block w-5 h-5 md:w-6 md:h-6"
                  />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => {
              navigate("/products");
              scrollTo(0, 0);
            }}
            className="group cursor-pointer flex items-center mt-6 md:mt-8 gap-2 text-primary font-medium text-sm md:text-base"
          >
            <img
              className="group-hover:-translate-x-1 transition w-4 h-4 md:w-5 md:h-5"
              src={assets.arrow_right_icon_colored}
              alt="arrow"
            />
            Continue Shopping
          </button>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:max-w-[360px] bg-gray-100/40 p-4 md:p-7 border border-gray-300/90 rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold">Order Summary</h2>
          <hr className="border-gray-300 my-4 md:my-5" />

          <div className="mb-6 relative">
            <p className="text-xs md:text-sm uppercase font-semibold">
              Delivery Address
            </p>
            <div className="relative flex justify-between items-start mt-1 md:mt-2">
              <p className="text-gray-500 text-sm md:text-base">
                {selectedAddress ? (
                  <>
                    {selectedAddress.street}, {selectedAddress.city}
                    <span className="hidden md:inline">
                      , {selectedAddress.state}, {selectedAddress.country}
                    </span>
                  </>
                ) : (
                  "No address found"
                )}
              </p>

              <button
                onClick={() => setShowAddress(!showAddress)}
                className="text-orange-500 font-bold cursor-pointer text-sm md:text-base"
              >
                Change
              </button>
            </div>

            {showAddress && (
              <div className="absolute top-16 md:top-20 bg-white border border-gray-300 text-sm w-full z-10 max-h-60 overflow-y-auto">
                {addresses.map((address, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedAddress(address);
                      setShowAddress(false);
                    }}
                    className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer text-xs md:text-sm"
                  >
                    {address.street}, {address.city}, {address.state},{" "}
                    {address.country}
                  </p>
                ))}
                <p
                  onClick={() => {
                    navigate("/add-address");
                    setShowAddress(false);
                  }}
                  className="text-primary text-center cursor-pointer p-2 hover:bg-primary-500/10 text-xs md:text-sm"
                >
                  Add address
                </p>
              </div>
            )}

            <p className="text-xs md:text-sm font-medium uppercase mt-4 md:mt-6">
              Payment Method
            </p>
            <select
              onChange={(e) => setPaymentoption(e.target.value)}
              className="w-full border border-gray-300 bg-white px-2 py-1.5 md:px-3 md:py-2 mt-1 md:mt-2 outline-none text-sm md:text-base appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em] pr-8 cursor-pointer"
            >
              <option value="COD">Cash On Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          <hr className="border-gray-300" />

          <div className="text-gray-500 mt-4 space-y-2 text-sm md:text-base">
            <p className="flex justify-between">
              <span>Price</span>
              <span>
                {currency}
                {getCartAmount()}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-primary">Free</span>
            </p>
            <p className="flex justify-between">
              <span>Tax (2%)</span>
              <span>
                {currency}
                {(getCartAmount() * 2) / 100}
              </span>
            </p>
            <p className="flex justify-between font-medium mt-3 md:text-lg">
              <span>Total Amount:</span>
              <span>
                {currency}
                {getCartAmount() + (getCartAmount() * 2) / 100}
              </span>
            </p>
          </div>

          <button
            onClick={placeOrder}
            className="mt-8 w-full px-5 py-3 bg-neutral-900 rounded-lg text-white text-center font-medium"
          >
            {paymentoption === "COD" ? "Place Order" : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;