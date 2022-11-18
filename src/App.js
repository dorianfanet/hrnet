import { Routes, Route } from 'react-router-dom'
import NewEmployee from './pages/NewEmployee'
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NewEmployee />}></Route>
      <Route path='/employee-list' element={<EmployeeList />}></Route>
    </Routes>
  );
}

export default App;
