import { Space } from 'antd';

import rsschool from '@/assets/rs_school.svg';
import jsLogo from '@/assets/javascript-icon.svg';
import angularLogo from '@/assets/angular-icon.svg';
import reactLogo from '@/assets/react-icon.svg';
import nodejsLogo from '@/assets/nodejs-icon.svg';

export const LayoutFooter = (): JSX.Element => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <a href="https://github.com/shopot/rsschool-check-loader" target="_blank" rel="noreferrer">
        <img
          src="https://img.shields.io/badge/GitHub--fff?style=social&logo=github"
          height="24"
          alt="GitHub link repository to this project board"
        />
      </a>
      <Space wrap>
        <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
          <img
            src={jsLogo}
            height="40"
            alt="JavaScript/Front-end Course"
            title="JavaScript/Front-end Course"
          />
        </a>
        <a href="https://rs.school/angular/" target="_blank" rel="noreferrer">
          <img src={angularLogo} height="40" alt="Angular Course" title="Angular Course" />
        </a>
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <img src={reactLogo} height="40" alt="React Course" title="React Course" />
        </a>
        <a href="https://rs.school/nodejs/" target="_blank" rel="noreferrer">
          <img src={nodejsLogo} height="40" alt="Node.js Course" title="Node.js Course" />
        </a>
      </Space>

      <a href="https://rs.school/" target="_blank" rel="noreferrer">
        <img src={rsschool} height="40" alt="The Rolling Scopes School" />
      </a>
    </Space>
  );
};
