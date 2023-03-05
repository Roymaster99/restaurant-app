import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import { Booking } from './pages/Booking';
import { Menu } from './pages/Menu';
import { AddFood } from './pages/AddFood';
import { AboutUs } from './pages/AboutUs';
import { Order } from './pages/Order';
import { MessageSuccess } from './pages/MessageSuccess';
import { BookingSuccess } from './pages/BookingSuccess';
import { Admin } from './pages/Admin';
import { AdminBookings } from './pages/AdminBookings';
import { Help } from './pages/Help';
import { AdminOrders } from './pages/AdminOrders';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AboutUs />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/food/:table/:id' element={<AddFood />} /> 
          <Route path='/order' element={<Order />} />
          <Route path='/success-order' element={<MessageSuccess />} />
          <Route path='/booking-order' element={<BookingSuccess />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-bookings" element={<AdminBookings />} />
          <Route path='/help' element={<Help />} />
          <Route path='/admin-orders' element={<AdminOrders />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;