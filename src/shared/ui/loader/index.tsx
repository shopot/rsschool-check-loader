import { Space, Spin } from 'antd';

export const Loader = (): JSX.Element => (
  <Space direction="vertical" style={{ width: '100%', marginTop: '60px' }}>
    <Spin tip="Loading..." size="large">
      <div className="content" />
    </Spin>
  </Space>
);
