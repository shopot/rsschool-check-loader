import { Layout } from '@/shared/ui';
import { LayoutFooter } from '@/widgets/layout-footer';

export const BaseLayout = () => <Layout slotFooter={<LayoutFooter />} />;
