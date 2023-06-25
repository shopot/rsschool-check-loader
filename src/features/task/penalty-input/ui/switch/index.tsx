import { Form, Switch as AntdSwitch } from 'antd';

import styles from './styles.module.scss';

export const Switch = ({ fieldName, value, onChange }: SwitchProps): JSX.Element => {
  return (
    <Form.Item name={fieldName} className={styles.formItem}>
      <AntdSwitch size="small" checked={value !== 0} onChange={onChange} />
    </Form.Item>
  );
};

type SwitchProps = {
  fieldName: string;
  value: number;
  onChange: (checked: boolean) => void;
};
