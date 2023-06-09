import { Layout as AntdLayout } from 'antd';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export const Layout = ({ slotFooter }: LayoutProps) => (
  <AntdLayout className={styles.layout}>
    <AntdLayout.Content className={styles.content}>
      <Outlet />
    </AntdLayout.Content>
    <AntdLayout.Footer className={styles.footer}>{slotFooter}</AntdLayout.Footer>
  </AntdLayout>
);

interface LayoutProps {
  slotFooter: JSX.Element;
}
