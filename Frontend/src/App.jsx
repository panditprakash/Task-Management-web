import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// import LoginPage from "./pages/auth/LoginPage";
// import RegisterPage from "./pages/auth/RegisterPage";
// import DashboardPage from "./pages/dashbord/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";

const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/auth/RegisterPage"));
const DashboardPage = lazy(() => import("./pages/dashbord/DashboardPage"));
const ChangePasswordPage = lazy(
  () => import("./pages/profile/ChangePasswordPage"),
);
/**
 * Main Application Routes
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <ChangePasswordPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import Loader from "./components/ui/Loader";

// // Lazy load pages to improve application performance
// const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/auth/RegisterPage"));
// const DashboardPage = lazy(() => import("./pages/dashbord/DashboardPage"));

// function App() {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Routes>
//         {/* Login Page */}
//         <Route path="/" element={<LoginPage />} />

//         {/* Register Page */}
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/DashboardPage" element={<DashboardPage />} />
//       </Routes>
//     </Suspense>
//   );
// }
// export default App;
