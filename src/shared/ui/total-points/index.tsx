import { Typography } from 'antd';

import styles from './styles.module.scss';

export const TotalPoints = ({ points }: TotalPointsProps): JSX.Element => {
  const { Title } = Typography;

  const pointsClass = points > 0 ? styles.fill : styles.empty;

  return (
    <Title level={4} className={styles.title}>
      <span className={pointsClass}>Total points {points}</span>
    </Title>
  );
};

type TotalPointsProps = {
  points: number;
};
