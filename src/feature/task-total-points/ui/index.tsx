import { Typography } from 'antd';

export const TaskTotalPointsUI = ({ points }: IProps): JSX.Element => {
  const { Title } = Typography;

  return (
    <Title level={4} style={{ textAlign: 'right' }}>
      Total points {points}
    </Title>
  );
};

interface IProps {
  points: number;
}
