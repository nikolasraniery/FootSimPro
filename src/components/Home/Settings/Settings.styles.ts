import styled from 'styled-components';
import { defaultTheme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const Title = styled.h2`
  color: hsl(${defaultTheme.colors.primary});
  text-align: center;
  margin-bottom: 1rem;
`;

export const SettingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    color: hsl(${defaultTheme.colors.mutedForeground});
  }

  input, select {
    background: hsl(${defaultTheme.colors.secondary});
    border: 1px solid hsl(${defaultTheme.colors.border});
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  background-color: hsl(${defaultTheme.colors.secondary});
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    filter: brightness(1.2);
  }
`;