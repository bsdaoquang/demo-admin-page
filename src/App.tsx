import './App.css'
import { Dashboard, Login } from './pages'
import 'antd/dist/antd.css'
import { useState } from 'react'
import { Layout } from 'antd'
import { HeaderComponent, SiderComponent } from './components'

const { Header, Content } = Layout

function App() {
  const [isLogin, setIsLogin] = useState(false)

  //this function to check user login
  const handleLogin = () => {
    setIsLogin(true)
  }

  return (
    <>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content>
            {/* This is a router */}
            {isLogin ? <Dashboard /> : <Login isLogin={handleLogin} />}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
