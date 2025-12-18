import { Routes, Route, Navigate } from "react-router-dom";
import QAList from "../pages/qa/QAList";
import NewQuestion from "../pages/qa/NewQuestion";
import QuestionDetail from "../pages/qa/QuestionDetail";
import Moderation from "../pages/qa/Moderation";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminGuard from "../components/AdminGuard";
import Navbar from "../components/Navbar";


const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/qa" />} />

        <Route path="/qa" element={<QAList />} />
        <Route path="/qa/new" element={<ProtectedRoute><NewQuestion /></ProtectedRoute>} />
        <Route path="/qa/:id" element={<QuestionDetail />} />
        <Route path="/qa/moderation" element={
          <AdminGuard>
            <Moderation />
          </AdminGuard>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default Router
