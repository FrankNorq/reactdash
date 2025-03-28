import HeroComponent from "../components/Herovideo/Hero";
import SavingCalculator from "../components/Savecalculator/SaveCalculator";
import RenderItems from "../components/renderItems";
function SavingsPage() {
  return (
    <div>
      <HeroComponent />
      <SavingCalculator />
      <RenderItems savingsSource="indexSavings" />
    </div>
  );
}

export default SavingsPage;
