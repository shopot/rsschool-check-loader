import styles from './styles.module.scss';
import { Layout as AntdLayout } from 'antd';
import { Outlet } from 'react-router-dom';

export const Layout = ({ slotFooter }: IProps) => (
  <AntdLayout className={styles.layout}>
    <AntdLayout.Content className={styles.content}>
      <Outlet />
    </AntdLayout.Content>
    <AntdLayout.Footer className={styles.footer}>{slotFooter}</AntdLayout.Footer>
  </AntdLayout>
);

interface IProps {
  slotFooter: JSX.Element;
}
