import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  // console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="">
  {
    cart.length > 0  ? 
    (<div className="flex justify-center ">


      <div className="h-full w-fit">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="ml-5">

        <div className="flex flex-col ">
          <div className="text-green-500 text-4xl font-semibold mt-16">Your Cart</div>
          <div className="text-green-500 text-7xl font-semibold mt-2">Summary</div>
          <p>
            <span className="text-indigo-950 text-3xl mt-5">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="mt-16 text-3xl">
          <p>Total Amount: <span className="text-indigo-950 font-bold">${totalAmount}</span></p>
          <button className="w-full bg-green-500 text-xl font-bold text-white rounded-md p-2 "> 
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="h-screen flex flex-col justify-center items-center my-auto">
      <h1 className="text-4xl">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-500 m-2 rounded-xl p-3">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
