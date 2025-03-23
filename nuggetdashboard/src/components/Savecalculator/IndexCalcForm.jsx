import { useDispatch, useSelector } from "react-redux";
import {
  updateSavingsParameters,
  calculateSavings,
} from "../../store/indexSlice";

function SaveCalcForm() {
  const dispatch = useDispatch();
  const { startAmount, monthlyDeposit, years, savings } = useSelector(
    (state) => state.indexSavings
  );

  const handleIndexChange = (param, value) => {
    dispatch(
      updateSavingsParameters({
        ...{ startAmount, monthlyDeposit, years },
        [param]: value,
      })
    );
    console.log("🚀 Dispatchar calculateSavings...");
    dispatch(calculateSavings());
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center mt-5 mb-5">
      <div className="flex justify-center items-center mb-4">
        <div className="text-gray-800 text-lg font-bold px-4 py-2 rounded-lg">
          Test our savings calculator
        </div>
      </div>
      <h5 className="text-3xl font-bold text-green-600">
        ${savings.toLocaleString()}
      </h5>
      <p className="text-gray-500 text-sm mb-4">
        Of which $
        {Math.round(
          savings - (startAmount + monthlyDeposit * years * 12)
        ).toLocaleString()}{" "}
        in return
      </p>

      <form className="space-y-4 mt-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Monthly Saving: ${monthlyDeposit}
          </label>
          <input
            type="range"
            min="100"
            max="1500"
            step="50"
            value={monthlyDeposit}
            onChange={(e) =>
              handleIndexChange("monthlyDeposit", Number(e.target.value))
            }
            className="w-full mt-2"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Starting Amount: ${startAmount}
          </label>
          <input
            type="range"
            min="0"
            max="100000"
            step="500"
            value={startAmount}
            onChange={(e) =>
              handleIndexChange("startAmount", Number(e.target.value))
            }
            className="w-full mt-2"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Saving Time: {years} Years
          </label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={years}
            onChange={(e) => handleIndexChange("years", Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
      </form>
      <p className="text-xs text-gray-500 mt-4">
        *We have calculated that you will get an annual increase of 7% per year.
      </p>
    </div>
  );
}

export default SaveCalcForm;
