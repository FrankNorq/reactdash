import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/dbSlice";

const RenderItems = ({ savingsSource }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.savingGoals);
  const savings = useSelector((state) => state[savingsSource]?.savings || 0);
  const handleFetchItems = () => {
    dispatch(fetchItems());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const affordableItems = items.filter((item) => item.amount <= savings);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Render Items to get with your savings
      </h2>
      <button
        onClick={handleFetchItems}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6"
      >
        Fetch Savings Goals
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {affordableItems.length > 0 ? (
          affordableItems.map((item) => (
            <div key={item.name} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-green-600 font-semibold">
                Price: ${item.amount}
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover mt-2 rounded-lg"
              />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No savings goals within your budget.
          </p>
        )}
      </div>
    </div>
  );
};

export default RenderItems;
