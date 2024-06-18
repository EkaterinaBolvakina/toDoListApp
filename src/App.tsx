import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PhotoList from './components/PhotoList'
import TaskList from './components/TaskList'
import UserList from './components/UserList'
import Layout from './layout/Layout'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TaskList />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/photos' element={<PhotoList />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
