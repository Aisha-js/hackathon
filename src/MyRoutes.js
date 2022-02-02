import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
import AdminProvider from "./contexts/AdminProvider";
import AdminPanel from "./pages/AdminPanel";
import BooksDetail from "./pages/BooksDetail";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ClientProvider from "./contexts/ClientProvider";
import BooksPage from "./pages/BooksPage";
import Authprovider from "./contexts/Authprovider";
import FavoritePage from "./pages/FavoritePage";
import Footer from "./components/Footer";

const MyRoutes = () => {
  return (
    <Authprovider>
      <AdminProvider>
        <ClientProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/add" element={<AddBook />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/books/:id" element={<BooksDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/favorite" element={<FavoritePage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ClientProvider>
      </AdminProvider>
    </Authprovider>
  );
};

export default MyRoutes;
