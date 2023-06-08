import { Typography } from 'antd';

import styles from './styles.module.scss';

export const TotalPoints = ({ points }: IProps): JSX.Element => {
  const { Title } = Typography;

  const pointsClass = points > 0 ? styles.fill : styles.empty;

  return (
    <Title level={4} style={{ textAlign: 'right' }}>
      <span className={pointsClass}>Total points {points}</span>
    </Title>
  );
};

interface IProps {
  points: number;
}
