import { Col, Row } from 'antd';

import styles from './styles.module.scss';

export const Penalty = ({ isDone, textSlot, inputSlot }: PenaltyProps): JSX.Element => {
  const backgroundColor = isDone ? '#fff1f0' : '#fff';

  const borderColor = isDone ? '#ffccc7' : '#f0f0f0';

  return (
    <Row
      className={styles.row}
      style={{ backgroundColor: backgroundColor, borderColor: borderColor }}
    >
      <Col xs={24} sm={20}>
        <span dangerouslySetInnerHTML={{ __html: textSlot }} />
      </Col>
      <Col xs={24} sm={4} className={styles.col}>
        {inputSlot}
      </Col>
    </Row>
  );
};

type PenaltyProps = {
  isDone: boolean;
  textSlot: string;
  inputSlot: JSX.Element;
};
