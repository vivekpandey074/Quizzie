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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Main />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="analytics/:id" element={<QuizAnalysis />} />
            <Route path="create" element={<CreateQuiz />} />
          </Route>
          <Route path="quiz/:id" element={<QuizCompletion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
