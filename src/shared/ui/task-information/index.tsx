import { Typography } from 'antd';

import styles from './styles.module.scss';

export const TaskInformation = ({ children }: TaskInformationProps): JSX.Element => {
  const { Title } = Typography;

  return (
    <Title level={5} className={styles.title}>
      {children}
    </Title>
  );
};

type TaskInformationProps = {
  children: JSX.Element;
};
