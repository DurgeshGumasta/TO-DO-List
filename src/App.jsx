import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'
import ToDoList from './components/to-do-list'
import Login from './auth/Login'

function App() {
  const [isLogin, setIslogin] = useState(false)

  return (

    <>
      <Layout>
        {/* consditional randring  */}
        {isLogin ?

          <ToDoList />
          :
          <>
            <h1>Login</h1>
            <Login onLogin={() => setIslogin(true)} />
          </>
        }
      </Layout>
    </>
  )
}

export default App
