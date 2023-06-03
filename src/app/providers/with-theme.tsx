import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

import { componentsOverrides } from '@/shared/config';

export const withTheme = (component: () => ReactNode) => () =>
  (
    <ConfigProvider
      theme={{
        components: { ...componentsOverrides },
      }}
    >
      {component()}
    </ConfigProvider>
  );
