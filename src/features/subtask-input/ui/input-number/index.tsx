import { Form, Space, InputNumber as AntdInputNumber } from 'antd';

import styles from './styles.module.scss';

export const InputNumber = ({ fieldName, buttonBefore, max, onChange }: IProps): JSX.Element => {
  return (
    <Space.Compact size="small" className={styles.spaceCompact}>
      {buttonBefore}
      <Form.Item name={fieldName} className={styles.formItem} initialValue={0}>
        <AntdInputNumber
          size="small"
          min={0}
          max={max}
          onChange={onChange}
          className={styles.inputNumber}
        />
      </Form.Item>
    </Space.Compact>
  );
};

interface IProps {
  fieldName: string;
  buttonBefore: JSX.Element;
  max: number;
  onChange: (value: number | null) => void;
}
