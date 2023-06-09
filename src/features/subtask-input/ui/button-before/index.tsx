import { DeleteTwoTone, LikeTwoTone } from '@ant-design/icons';
import { Button } from 'antd';

import styles from './styles.module.scss';

export const ButtonBefore = ({ variant, onClick }: IProps): JSX.Element => {
  const color = variant === 'like' ? '#52c41a' : '#FF0000';

  const ButtonIcon = variant === 'like' ? LikeTwoTone : DeleteTwoTone;

  return (
    <Button
      onClick={onClick}
      icon={<ButtonIcon className={styles.buttonIcon} twoToneColor={color} />}
    />
  );
};

interface IProps {
  variant: string;
  onClick: () => void;
}
