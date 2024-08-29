import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items,dummy}) => {
  // console.log(items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => ( 
        <div
          key={item.card.info.id}
          className=" m-2 p-2  border-gray-200 border-b-2 text-left flex  justify-between "
        >
          <div className=" w-9/12 py-2">
            <span>{item.card.info.name}</span>
            <span>- ₹{item.card.info.price / 100}</span>
          </div>
          <div className=" w-3/12 p-4">
            <div className="absolute">
              <button
                className=" p-2 rounded-lg bg-black text-white shadow-lg mx-11"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-28"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
