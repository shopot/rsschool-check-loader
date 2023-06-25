import { Typography } from 'antd';

import styles from './styles.module.scss';

export const LayoutPage = ({ slotTitle, slotContent }: LayoutPageProps): JSX.Element => {
  const { Title } = Typography;

  return (
    <>
      <Title className={styles.title}>{slotTitle}</Title>
      {slotContent}
    </>
  );
};

type LayoutPageProps = {
  slotTitle: string;
  slotContent: JSX.Element;
};
