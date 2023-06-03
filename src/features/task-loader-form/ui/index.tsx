import { Button, Form, Input, Space } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

import { TASK_JSON_URL } from '@/shared/config';

export const TaskLoaderFormUI = ({ value = '', isLoading, onSubmit }: IProps): JSX.Element => {
  const [form] = Form.useForm<IFormValues>();

  const handleCopy = () => {
    form.setFieldValue('url', TASK_JSON_URL);
    void form.validateFields();
  };

  const handleFinish = ({ url }: IFormValues) => {
    onSubmit(url);
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Space.Compact style={{ width: '100%' }}>
        <Form.Item name="example" initialValue={TASK_JSON_URL} style={{ width: '100%' }}>
          <Input readOnly value={TASK_JSON_URL} addonBefore="Example:" />
        </Form.Item>
        <Button type={'default'} icon={<CopyOutlined />} onClick={handleCopy} />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Form.Item
          name="url"
          initialValue={value}
          rules={[{ required: true, message: 'Please enter a URL to task JSON file.' }]}
          style={{ width: '100%' }}
        >
          <Input placeholder="Enter a URL  to task JSON file" name="url" allowClear />
        </Form.Item>
        <Button type={'primary'} htmlType="submit" loading={isLoading}>
          Load
        </Button>
      </Space.Compact>
    </Form>
  );
};

interface IProps {
  value?: string;
  isLoading: boolean;
  onSubmit: (url: string) => void;
}

interface IFormValues {
  example: string;
  url: string;
}
