import { lazy } from "react";

export const SignUp = lazy(() => import(/* webpackChunkName: "signUp" */ "../modules/signUp/SignUp"));
export const SignIn = lazy(() => import(/* webpackChunkName: "signIn" */ "../modules/signIn/SignIn"));
export const Home = lazy(() => import(/* webpackChunkName: "home" */ "../modules/home/Home"));
export const MenFashion = lazy(() => import(/* webpackChunkName: "MenFashion" */ "../modules/MenFashion/MenFashion"));
export const WominFashion = lazy(() => import(/* webpackChunkName: "WominFashion" */ "../modules/WomenFashion/WominFashion"));
export const Electronics = lazy(() => import(/* webpackChunkName: "Electronics" */ "../modules/Electronics/Electronics"));
export const LatestProduct = lazy(() => import(/* webpackChunkName: "LatestProduct" */ "../modules/LatestProducts/LatestProduct"));
export const ProductScreen = lazy(() => import(/* webpackChunkName: "LatestProduct" */ "../modules/ProductDetail/ProductScreen"));
export const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ "../modules/Cart"));
export const ordersDetailAndPayment = lazy(() => import(/* webpackChunkName: "Cart" */ "../modules/ordersDetailAndPayment/Order"));
export const checkout = lazy(() => import(/* webpackChunkName: "Cart" */ "../modules/checkoutProcess/CheckoutProcess"));

// profile protected routes----------------------------------------------------->
export const Profile = lazy(() => import(/* webpackChunkName: "home" */ "../modules/dashboard/profile"));
export const userOrder = lazy(() => import(/* webpackChunkName: "home" */ "../modules/dashboard/Order/Index"));

// admin routes----------------------------------------------------->
export const Users = lazy(() => import(/* webpackChunkName: "home" */ "../modules/Admin/Users"));
export const Product = lazy(() => import(/* webpackChunkName: "home" */ "../modules/Admin/Product"));
export const AdminOrder = lazy(() => import(/* webpackChunkName: "home" */ "../modules/Admin/AdminOrder/Index"));

// other routes---------------------------------------------------->
export const NotFound = lazy(() => import(/* webpackChunkName: "home" */ "../modules/notFound/NotFound"));
export const UnAuthorized = lazy(() => import(/* webpackChunkName: "home" */ "../modules/UnAuthorized/UnAuthorized"));

