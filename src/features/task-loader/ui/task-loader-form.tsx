import { Button, Form, FormInstance, Input, Space } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

import { IFormValues } from '../types.ts';

export const TaskLoaderForm = ({
  form,
  value,
  isLoading,
  onSubmit,
  onCopy,
}: IProps): JSX.Element => {
  return (
    <Form form={form} onFinish={({ url }: IFormValues) => onSubmit(url)}>
      <Space.Compact style={{ width: '100%' }}>
        <Form.Item name="example" initialValue={value} style={{ width: '100%' }}>
          <Input readOnly value={value} addonBefore="Example:" />
        </Form.Item>
        <Button type={'default'} icon={<CopyOutlined />} onClick={onCopy} />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Form.Item
          name="url"
          initialValue=""
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
  form: FormInstance<IFormValues>;
  value?: string;
  isLoading: boolean;
  onSubmit: (url: string) => void;
  onCopy: () => void;
}
