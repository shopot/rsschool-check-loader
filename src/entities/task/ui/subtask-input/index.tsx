import { Col, Form, InputNumber, Row } from 'antd';
import { DeleteTwoTone, LikeTwoTone } from '@ant-design/icons';

import { rowStyles } from '@/shared/config';
import { TypeCriteria } from '../../model';

export const SubtaskInput = ({ criteria, onChange }: ICriteriaSubtaskProps): JSX.Element => {
  const form = Form.useFormInstance();

  const { id, text, max, value } = criteria;

  const valueMax = max || 0;

  const isValueMax = valueMax === value;

  const fieldName = `criteriaSubtask${id}`;

  const handleResetValue = () => {
    onChange(id, 0);

    form.setFieldValue(fieldName, 0);
  };

  const handleSetMaxValue = () => {
    onChange(id, valueMax);

    form.setFieldValue(fieldName, valueMax);
  };

  const toggle = isValueMax ? (
    <DeleteTwoTone onClick={handleResetValue} style={{ fontSize: '12px' }} twoToneColor="#FF0000" />
  ) : (
    <LikeTwoTone onClick={handleSetMaxValue} style={{ fontSize: '12px' }} twoToneColor="#52c41a" />
  );

  return (
    <Row
      key={id}
      style={{
        ...rowStyles,
        borderColor: '#f0f0f0',
        backgroundColor: value === valueMax ? '#fff' : '#fff7e6',
      }}
    >
      <Col span={16}>{text}</Col>
      <Col span={8} style={{ textAlign: 'right' }}>
        {`Max points ${valueMax}`}
        <Form.Item name={fieldName} style={{ margin: 0 }} initialValue={0}>
          <InputNumber
            size={'small'}
            min={0}
            max={max}
            onChange={(v) => onChange(id, v || 0)}
            addonBefore={toggle}
            style={{ maxWidth: '90px' }}
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
