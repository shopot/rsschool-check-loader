import { Typography } from 'antd';

export const TotalPoints = ({ points }: IProps): JSX.Element => {
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
