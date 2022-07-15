import DesktopLayout from "./components/Layout/DesktopLayout";
import Wrapper from "./components/Wrapper/Wrapper";
import Banner from "./components/Home/Banner";
import Products from "./components/Home/Products";
import Footer from "./components/Footer/Footer";
import Shop from './components/Shop/shop'
import Blog from './components/Blog/Blog'
import OurStory from "./components/Layout/OurStory";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
   return (
      <div>
         <Wrapper>
            <DesktopLayout />
            <Router>
            <Routes>
               <Route path="/shop" element={<Shop/>}/>
               <Route path="/blog" element={<Blog/>}/>
               <Route path="/ourstory" element={<OurStory/>}/>

            </Routes>
            </Router>
            <Banner />
            <Products />
            <Footer />
         </Wrapper>
      </div>
   );
}

export default App;
