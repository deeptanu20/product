
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
// import { PrivateRoute } from './components/PrivateRoute';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { BookingPage } from './pages/BookingPage';
import { Bookings } from './pages/Bookings';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminServices } from './pages/admin/Services';
import { AdminBookings } from './pages/admin/Bookings';
<<<<<<< HEAD
import { ContactPage } from './pages/contact/ContactPage';
import { PaymentPage } from './pages/payments/PaymentPage';
=======
>>>>>>> 7c0fb2fb64e86a60a1867dbfd07fe6b0067767d1

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
<<<<<<< HEAD
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          
=======
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin Routes */}
>>>>>>> 7c0fb2fb64e86a60a1867dbfd07fe6b0067767d1
          <Route
            path="/admin"
            element={
              
                <AdminDashboard />
              
            }
          >
            <Route path="services" element={<AdminServices />} />
            <Route path="bookings" element={<AdminBookings />} />
          </Route>

<<<<<<< HEAD
          
=======
          {/* User Routes */}
>>>>>>> 7c0fb2fb64e86a60a1867dbfd07fe6b0067767d1
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route
                    path="/book/:serviceId"
                    element={
                      
                        <BookingPage />
                      
                    }
                  />
                  <Route
<<<<<<< HEAD
                    path="/payment/:bookingId"
                    element={
                      
                        <PaymentPage />
                      
                    }
                  />



                  <Route
=======
>>>>>>> 7c0fb2fb64e86a60a1867dbfd07fe6b0067767d1
                    path="/bookings"
                    element={
                      
                        <Bookings />
                      
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      
                        <Profile />
<<<<<<< HEAD
                       
                      
                    }
                  />
                   <Route path="/contact" element={<ContactPage />} />
=======
                      
                    }
                  />
>>>>>>> 7c0fb2fb64e86a60a1867dbfd07fe6b0067767d1
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