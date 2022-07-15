import DesktopLayout from "./components/Layout/DesktopLayout";
import Wrapper from "./components/Wrapper/Wrapper";
import Banner from "./components/Home/Banner";
import Products from "./components/Home/Products";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <div>
         <Wrapper>
            <DesktopLayout/>
            <Banner/>
            <Products/>
            <Footer/>
         </Wrapper>
      </div>
   );
}

export default App;
