import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { BookingPage } from './pages/BookingPage';
import { Bookings } from "./pages/Bookings";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminServices } from "./pages/admin/Services";
import { AdminBookings } from "./pages/admin/Bookings";
import { ContactPage } from "./pages/contact/ContactPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="services" element={<AdminServices />} />
            <Route path="bookings" element={<AdminBookings />} />
          </Route>

          {/* Main Routes */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/book/:serviceId" element={<BookingPage />} />
                  <Route path="/bookings" element={<Bookings />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </>
            }
          />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
