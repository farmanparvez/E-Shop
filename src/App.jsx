import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom"
import LayoutContainer from "./layout/Layout";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import * as Routing from './pages';
import Notification from "./components/Notification/Notification"
import ProtectRoute from "./utils/ProtectRoute";
import { USER, ADMIN } from "./utils/enviroment";

const App = () => {
  return (
    <Fragment>
      <Notification />
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route index element={<Routing.Home />} />
          <Route path='/signup' element={<Routing.SignUp />} />
          <Route path='/signin' element={<Routing.SignIn />} />
          <Route path='/latest-product' element={<Routing.LatestProduct />} />
          <Route path='/mens-fashion' element={<Routing.MenFashion />} />
          <Route path='/womens-fashion' element={<Routing.WominFashion />} />
          <Route path='/electronics' element={<Routing.Electronics />} />
          <Route path='/product/:id' element={<Routing.ProductScreen />} />
          <Route path='/cart' element={<Routing.Cart />} />
          <Route path='/cart/checkout' element={<Routing.checkout />} />
          <Route path='/order/:id' element={<Routing.ordersDetailAndPayment />} />
          <Route path="/" element={<ProtectRoute role={[USER, ADMIN]} />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route path='/profile' element={<Routing.Profile />} />
              <Route path='/user/order' element={<Routing.userOrder />} />
            </Route>
          </Route>
          <Route path="/" element={<ProtectRoute role={[ADMIN]} />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route path='/user' element={<Routing.Users />} />
              <Route path='/product' element={<Routing.Product />} />
              <Route path='/admin/order' element={<Routing.AdminOrder />} />
            </Route>
          </Route>
          <Route path='/UnAuthorized' element={<Routing.UnAuthorized />} />
          <Route path='*' element={<Routing.NotFound />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App