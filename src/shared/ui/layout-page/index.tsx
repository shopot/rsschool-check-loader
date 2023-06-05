import styles from './styles.module.scss';
import { Typography } from 'antd';

export const LayoutPage = ({ slotTitle, slotContent }: IProps): JSX.Element => {
  return (
    <>
      <Typography.Title className={styles.title}>{slotTitle}</Typography.Title>
      {slotContent}
    </>
  );
};

interface IProps {
  slotTitle: string;
  slotContent: JSX.Element;
}
