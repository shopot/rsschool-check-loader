import { Col, Form, Row, Switch } from 'antd';
import { CSSProperties } from 'react';

const rowStyles: CSSProperties = {
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
  padding: '6px 12px',
  marginBottom: '6px',
};

export const CriteriaPenalty = ({ criteria, onChange }: ICriteriaPenaltyProps): JSX.Element => {
  const { id, text, max, value } = criteria;

  return (
    <Row
      key={id}
      style={{
        ...rowStyles,
        borderColor: value === max ? 'red' : '#f0f0f0',
      }}
    >
      <Col span={20}>
        {text} (<strong>{max} points</strong>)
      </Col>
      <Col span={4} style={{ textAlign: 'right' }}>
        <Form.Item name={`criteriaPenalty${id}`} style={{ margin: 0 }}>
          <Switch
            size={'small'}
            defaultChecked={false}
            onChange={(checked) => onChange(checked, id, max)}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

interface ICriteriaPenaltyProps {
  criteria: TypeCriteria;
  onChange: (checked: boolean, id: number, max: number) => void;
}
