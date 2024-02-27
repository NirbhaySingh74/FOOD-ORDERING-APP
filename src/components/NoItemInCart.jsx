import { Link } from "react-router-dom";
const NoItemInCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="image"
        className="w-1/4"
      />
      <h3 className="text-2xl text-zinc-500 my-2">Your cart is empty</h3>
      <p>You can go to home page to view more restaurants</p>
      <Link to="/">
        <button className="py-2 px-5 bg-orange-500 mt-4 text-white">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
};
export default NoItemInCart;
