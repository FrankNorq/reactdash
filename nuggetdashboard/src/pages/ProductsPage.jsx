import RenderItems from "../components/renderItems";
import HeroVideo from "../components/Herovideo/HeroVideo";
import BitCoinCalc from "../components/Savecalculator/BitcoinCalc";
function ProductPage() {
  return (
    <div>
      <HeroVideo />
      <BitCoinCalc />
      <RenderItems savingsSource="bitcoinSavings"></RenderItems>
    </div>
  );
}

export default ProductPage;
