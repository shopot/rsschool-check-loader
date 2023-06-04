import { Col, Form, Row, Switch } from 'antd';

import { rowStyles } from '@/shared/config';
import { TypeCriteria } from '../../model';

export const PenaltySwitch = ({ criteria, onChange }: IProps): JSX.Element => {
  const { id, text, max, value } = criteria;

  const fieldName = `criteriaPenalty${id}`;

  return (
    <Row
      key={id}
      style={{
        ...rowStyles,
        backgroundColor: value === max ? '#fff1f0' : '#fff',
        borderColor: value === max ? '#ffccc7' : '#f0f0f0',
      }}
    >
      <Col span={20}>
        {text} (<strong>{max} points</strong>)
      </Col>
      <Col span={4} style={{ textAlign: 'right' }}>
        <Form.Item name={fieldName} style={{ margin: 0 }}>
          <Switch
            size="small"
            checked={value !== 0}
            onChange={(checked) => onChange(checked, id, max || 0)}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

interface IProps {
  criteria: TypeCriteria;
  onChange: (checked: boolean, id: number, max: number) => void;
}
