import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Main from "./pages/Main/Main";
import Dashboard from "./pages/Dashboard/Dashboard";
import Analytics from "./pages/Analytics/Analytics";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";
import QuizAnalysis from "./pages/QuizAnalysis/QuizAnalysis";
import Quiz from "./pages/Quiz/Quiz";
import QuizCompletion from "./pages/QuizCompletion/QuizCompletion";
import PollCompletion from "./pages/PollCompletion/PollCompletion";
import Notfound from "./pages/Notfound/Notfound";
import { ToastContainer } from "react-toastify";
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Main />}>
            <Route
              path="dashboard"
              element={
                <ProtectedPage>
                  <Dashboard />
                </ProtectedPage>
              }
            />

            <Route
              path="analytics"
              element={
                <ProtectedPage>
                  <Analytics />
                </ProtectedPage>
              }
            />

            <Route
              path="analytics/:id"
              element={
                <ProtectedPage>
                  <QuizAnalysis />
                </ProtectedPage>
              }
            />

            <Route
              path="create"
              element={
                <ProtectedPage>
                  <CreateQuiz />
                </ProtectedPage>
              }
            />
          </Route>

          <Route
            path="quiz/:id"
            element={
              <ProtectedPage>
                <PollCompletion />
              </ProtectedPage>
            }
          />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
