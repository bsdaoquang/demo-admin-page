import { Form, Input, Modal } from 'antd'

interface Props {
  isVisible: boolean
  onCancel: () => void
  getOrders: () => void
}

const AddNewOrder = (props: Props) => {
  const { isVisible, onCancel, getOrders } = props

  return (
    <Modal
      title="Add new order"
      onCancel={onCancel}
      footer={null}
      visible={isVisible}
    >
      <Form layout="vertical">
        <Form.Item name="name" label="name">
          <Input placeholder="name productions" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddNewOrder
