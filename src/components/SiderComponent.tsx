import { Layout } from 'antd'

const { Sider } = Layout
const SiderComponent = () => {
  return (
    <Sider
      width={300}
      style={{
        height: '100vh',
        padding: 10,
      }}
    >
      <h1 className="text-light">Sider</h1>
    </Sider>
  )
}

export default SiderComponent
