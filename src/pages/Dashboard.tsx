import { Button, message, Modal, Space, Table } from 'antd'
import { HeaderContent } from '../components'
import { Order } from '../models'

const Dashboard = () => {
  const showAlert = () => {
    Modal.confirm({
      title: 'Info',
      content: 'customer choice a production to at list',
    })
  }

  const orders: Order[] = [
    {
      id: '1',
      name: 'IPhone 11 Pro Max',
      ordering: '',
      status: 'pending',
      createAt: '05/08/2022 23:07',
      createBy: 'user123',
    },

    {
      id: '2',
      name: 'IPhone 11 Pro Max',
      ordering: '',
      status: 'pending',
      createAt: '05/08/2022 23:07',
      createBy: 'user123',
    },

    {
      id: '3',
      name: 'IPhone 11 Pro Max',
      ordering: '',
      status: 'pending',
      createAt: '05/08/2022 23:07',
      createBy: 'user123',
    },

    {
      id: '4',
      name: 'IPhone 11 Pro Max',
      ordering: '',
      status: 'pending',
      createAt: '05/08/2022 23:07',
      createBy: 'user123',
    },
  ]

  const columns = [
    {
      title: 'Create At',
      key: 'createAt',
      dataIndex: 'createAt',
    },
    {
      title: 'Produce',
      key: 'produce',
      dataIndex: 'name',
    },
    {
      title: 'Create by',
      key: 'createBy',
      dataIndex: 'createBy',
    },

    {
      title: '',
      key: 'buttonContain',
      dataIndex: '',
      render: (item: Order) => (
        <Space>
          <Button
            type="text"
            onClick={() => message.info(`Change item ${item.name}`)}
            icon={<i className="fas fa-edit text-success"></i>}
          />
          <Button
            type="text"
            onClick={() => message.warning(`delete item ${item.name}`)}
            icon={<i className="fas fa-trash text-danger"></i>}
          />
        </Space>
      ),
    },
  ]

  return (
    <div className="container">
      <HeaderContent
        title="Post"
        button={
          <button className="btn btn-sm btn-success" onClick={showAlert}>
            <i className="fas fa-plus"></i> Add new
          </button>
        }
      />

      <Table dataSource={orders} columns={columns} />
    </div>
  )
}

export default Dashboard
