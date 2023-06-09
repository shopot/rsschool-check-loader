import { Col, Row } from 'antd';

import styles from './styles.module.scss';

export const Subtask = ({ isDone, textSlot, inputSlot }: SubtaskProps): JSX.Element => {
  const backgroundColor = isDone ? '#fff' : '#fff7e6';

  return (
    <Row className={styles.row} style={{ backgroundColor: backgroundColor }}>
      <Col span={20} className={styles.textSlot}>
        <span dangerouslySetInnerHTML={{ __html: textSlot }} />
      </Col>
      <Col span={4} className={styles.col}>
        {inputSlot}
      </Col>
    </Row>
  );
};

interface SubtaskProps {
  isDone: boolean;
  textSlot: string;
  inputSlot: JSX.Element;
}
