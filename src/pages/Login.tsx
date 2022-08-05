import { Button, Card, Form, Input, message } from 'antd'

interface Props {
  isLogin: () => void
}

const Login = (props: Props) => {
  const [form] = Form.useForm()

  const { isLogin } = props

  //get value in check correct in here
  const handleLogin = (values: any) => {
    if (values.username === '123' && values.password === '123') {
      isLogin()
    } else {
      message.warning('Username or password is not correct')
    }
  }

  const showMes = () => {
    message.info('cooming soon')
  }

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 mt-5">
        <Card className="card">
          <div className="text-center">
            <h1>Login</h1>
          </div>

          <Form form={form} layout="vertical" onFinish={handleLogin}>
            <Form.Item
              name="username"
              label="User name"
              rules={[
                {
                  required: true,
                  message: 'Please type username',
                },
              ]}
            >
              <Input
                placeholder="username"
                size="large"
                type="text"
                maxLength={100}
                showCount
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please type your password',
                },
              ]}
            >
              <Input.Password
                placeholder="password"
                size="large"
                minLength={6}
                maxLength={18}
                showCount
              />
            </Form.Item>
          </Form>

          <div className="row d-flex justify-content-between">
            <Button onClick={showMes} type="link">
              Register
            </Button>
            <Button onClick={showMes} type="link">
              Forgot pass
            </Button>
          </div>

          <div className="text-center mt-3">
            <button
              onClick={() => form.submit()}
              className="btn btn-success btn-fullwidth"
            >
              Login
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Login
