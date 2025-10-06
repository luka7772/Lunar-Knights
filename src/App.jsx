import { Route, Routes } from 'react-router-dom';  // Ensure correct import
import { Header } from './pages/header';  // Ensure path is correct
import './App.css'; 
import HomePage from './pages/Homepage';  
import ServicePage from './pages/Servicepage'; 
import WorkoutsPage from './pages/Workoutspage';
import ContactPage from './pages/Contactpage';
import { ChestExercises } from './pages/chestpage';
import { AbsExercises } from './pages/exercisepages/abs';
import { Login } from './pages/contnents/login';
import { Register } from './pages/contnents/register';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      
        <Route path="/workouts/chest" element={<ChestExercises />} />
          <Route path="/workouts/abs" element={<AbsExercises />} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
