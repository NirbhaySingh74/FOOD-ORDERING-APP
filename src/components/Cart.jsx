import { useDispatch } from "react-redux";
import { addItem, removeItem, updateItemQuantity } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import NoItemInCart from "./NoItemInCart";
import { CDN_IMAGE } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.info.id === item.info.id
    );

    if (existingItem) {
      dispatch(
        updateItemQuantity(existingItem.info.id, existingItem.quantity + 1)
      );
    } else {
      dispatch(addItem(item));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  if (cartItems.length === 0) return <NoItemInCart />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.info.id}
          className="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <div className="flex items-center">
            <img
              src={CDN_IMAGE + item.info.imageId}
              alt={item.info.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4">
              <h3 className="font-semibold">{item.info.name}</h3>
              <p className="text-gray-600">
                ₹ {(item.info.price / 100).toFixed(2)}
              </p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">
                  {[...Array(item.info.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1l2.5 5.5h6L14 9l1 5-5-2-5 2 1-5-4.5-2H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </span>
                <span className="ml-2">{item.info.rating}</span>
              </div>
            </div>
          </div>
          <div>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-md mr-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => handleRemoveItem(item.info.id)}
            >
              Remove
            </button>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
