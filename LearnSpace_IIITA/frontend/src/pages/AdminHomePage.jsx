import React from "react";
import AdminNavbar from "./AdminNavbar";

const AdminHomePage = () => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('/admin.jpg')` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content container with relative positioning so it appears above the overlay */}
      <div className="relative z-10 overflow-auto">
        <AdminNavbar />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Welcome to Admin</h1>
        </main>
      </div>
    </div>
  );
};

export default AdminHomePage;
