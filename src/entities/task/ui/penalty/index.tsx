import { Col, Row } from 'antd';

import styles from './styles.module.scss';

export const Penalty = ({ isDone, textSlot, inputSlot }: IProps): JSX.Element => {
  const backgroundColor = isDone ? '#fff1f0' : '#fff';

  const borderColor = isDone ? '#ffccc7' : '#f0f0f0';

  return (
    <Row
      className={styles.row}
      style={{ backgroundColor: backgroundColor, borderColor: borderColor }}
    >
      <Col span={20}>{textSlot}</Col>
      <Col span={4} className={styles.col}>
        {inputSlot}
      </Col>
    </Row>
  );
};

interface IProps {
  isDone: boolean;
  textSlot: string;
  inputSlot: JSX.Element;
}
