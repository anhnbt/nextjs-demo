import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="p-6 max-w-sm- mx-auto rounded-xl">
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
