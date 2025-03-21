import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/dbSlice";

const TestComponent = () => {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.savingGoals);
  const { savings } = useSelector((state) => state.bitcoinSavings); 


  const handleFetchItems = () => {
    dispatch(fetchItems()); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const affordableItems = items.filter(item => item.amount <= savings);

  return (
    <div>
      <h2>Savings Goals:</h2>
      <button
        onClick={handleFetchItems}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
      >
        Fetch Savings Goals
      </button>
      <ul>
        {affordableItems.length > 0 ? (
          affordableItems.map(item => (
            <li key={item.name} className="mb-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.amount}</p> 
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mt-2" />
            </li>
          ))
        ) : (
          <p>No savings goals within your budget.</p>
        )}
      </ul>
    </div>
  );
};

export default TestComponent;