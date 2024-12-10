import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Itinerary } from "./pages/Itinerary";
import { LoginForm } from "./components/LoginForm";
import { AdminDashboard } from "./components/AdminDashboard";
import { useAuthStore } from "./store/authStore";
import { Post } from "./pages/Post";

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/login" element={<LoginForm />} />
          {user?.role === "admin" ? (
            <Route path="/admin" element={<AdminDashboard />} />
          ) : null}
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
