import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  background: transparent;
  border-right: 0;
`;

export const MenuItem = styled(Menu.Item)`
  color: ${(props) => props.theme.colors.secondary};

  & a {
    color: inherit;
  }
`;