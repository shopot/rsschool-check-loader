import { Space, Spin } from 'antd';

import styles from './styles.module.scss';

export const Loader = (): JSX.Element => (
  <Space direction="vertical" className={styles.space}>
    <Spin tip="Loading..." size="large">
      <div className="content" />
    </Spin>
  </Space>
);
