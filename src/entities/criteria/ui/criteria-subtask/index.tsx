import { Col, Form, InputNumber, Row } from 'antd';

export const CriteriaSubtask = ({ criteria, onChange }: ICriteriaSubtaskProps): JSX.Element => {
  const { id, text, max, value } = criteria;

  return (
    <Row
      key={id}
      style={{
        border: '1px solid #f0f0f0',
        borderRadius: '4px',
        padding: '6px 12px',
        marginBottom: '6px',
        borderColor: value === max ? '#f0f0f0' : 'orange',
      }}
    >
      <Col span={16}>{text}</Col>
      <Col span={8} style={{ textAlign: 'right' }}>
        <Form.Item name={`criteriaSubtask${id}`} style={{ margin: 0 }}>
          <InputNumber
            size={'small'}
            min={0}
            max={max}
            value={value}
            defaultValue={0}
            onChange={(v) => onChange(id, v || 0)}
            addonBefore={`Max points ${max}`}
            style={{ maxWidth: '180px' }}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

interface ICriteriaSubtaskProps {
  criteria: TypeCriteria;
  onChange: (id: number, value: number) => void;
}
