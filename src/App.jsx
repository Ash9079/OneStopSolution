import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Gallery from "./pages/Gallery";
// import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
// import ApplyForJobs from "./pages/ApplyForJobs";
// import HireEmployees from "./pages/HireEmployees";

export default function App() {
  return (
    <>
    <Header />
     <Routes>
      <Route index element={<Home />} />
      <Route path="About" element={<AboutPage />} />
      <Route path="industries" element={<Industries />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    //   {/* <Route path="/" element={<Layout />}>
       
    //    
          
  
    
    //     <Route path="faq" element={<FAQ />} />

    //     <Route path="apply-for-jobs" element={<ApplyForJobs />} />
    //     <Route path="hire-employees" element={<HireEmployees />} />
    //   </Route> */}
    </Routes>
    <Footer />
    </>
  );
}