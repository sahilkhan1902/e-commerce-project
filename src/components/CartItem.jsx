
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";



const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();




  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    // <div>

      <div className="flex h-5/6  p-3 w-[43rem] border-b-4 border-indigo-950">

        <div>
          <img className="h-52 w-72" src={item.image} />
        </div>
        <div className="ml-10">
          <h1 className="font-extrabold text-2xl">{item.title}</h1>
          <p className="my-5">{item.description.substring(0, 100) + '...'}</p>
          <div className="relative">
            <p className="text-2xl text-green-500 font-bold">${item.price}</p>
            <div className="absolute right-3  top-1.5 bg-red-400 p-2 rounded-full cursor-pointer"
              onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>

        </div>


     
      </div>

    // </div>
  );
};

export default CartItem;
