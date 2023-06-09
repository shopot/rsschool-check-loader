import { Layout as AntdLayout } from 'antd';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export const Layout = ({ slotFooter }: LayoutProps) => {
  const { Content, Footer } = AntdLayout;

  return (
    <AntdLayout className={styles.layout}>
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>{slotFooter}</Footer>
    </AntdLayout>
  );
};

interface LayoutProps {
  slotFooter: JSX.Element;
}
