import { Button, Form, Input } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

export const TaskForm = ({ onSubmit }: ITaskFormProps): JSX.Element => {
  const [form] = Form.useForm();

  const handleFinish = ({ url }: IFormValues) => {
    onSubmit(url);
  };

  return (
    <Form form={form} layout="inline" onFinish={handleFinish}>
      <Form.Item
        name="url"
        rules={[{ required: true, message: 'Please enter a URL to task JSON file.' }]}
      >
        <Input prefix={<LinkOutlined />} placeholder="" />
      </Form.Item>
      <Form.Item>
        <Button type={'primary'} htmlType="submit">
          Load
        </Button>
      </Form.Item>
    </Form>
  );
};

interface ITaskFormProps {
  onSubmit: (url: string) => void;
}

interface IFormValues {
  url: string;
}
