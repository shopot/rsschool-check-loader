import { Form, InputNumber as AntdInputNumber } from 'antd';

import styles from './styles.module.scss';

export const InputNumber = ({ fieldName, max, onChange }: InputNumberProps): JSX.Element => {
  const stepValue = Math.abs(max) > 0 ? Math.abs(max) : 1;

  return (
    <Form.Item name={fieldName} className={styles.formItem} initialValue={0}>
      <AntdInputNumber
        size="small"
        min={0}
        step={stepValue}
        onChange={(value) => onChange((value || 0) * -1)}
        className={styles.inputNumber}
      />
    </Form.Item>
  );
};

interface InputNumberProps {
  fieldName: string;
  max: number;
  onChange: (value: number) => void;
}
