import Footer from "../Footer/Footer"
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: "url('https://demoapus1.com/boxcar/wp-content/uploads/2023/10/slider1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Adjust height as needed
        }}
      ></div>
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;
