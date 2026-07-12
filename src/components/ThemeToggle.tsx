import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'hooks/useTheme';

const Toggle = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return <Toggle onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</Toggle>;
};

export { ThemeToggle };
