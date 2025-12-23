import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomeMouse";

const DefaultLayout = ({ children }) => {
  return (
    <div className="main">
      <CustomCursor />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
