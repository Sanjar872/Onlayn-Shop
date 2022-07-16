import DesktopLayout from "./components/Layout/DesktopLayout";
import Wrapper from "./components/Wrapper/Wrapper";
import Banner from "./components/Home/Banner";
import Products from "./components/Home/Products";
import Footer from "./components/Footer/Footer";
import Shop from './components/Shop/shop'
import Blog from './components/Blog/Blog'
import OurStory from "./components/OurStory/ourstory";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
   return (
      <div>
         <Wrapper>
            <DesktopLayout />
            
            <Routes>
               <Route path="/home" element={<Home/>}/>
               <Route path="/shop" element={<Shop/>}/>
               <Route path="/blog" element={<Blog/>}/>
               <Route path="/ourstory" element={<OurStory/>}/>

            </Routes>
            
            {/* <Banner /> */}
            {/* <Products /> */}
            <Footer />
         </Wrapper>
      </div>
   );
}

export default App;
