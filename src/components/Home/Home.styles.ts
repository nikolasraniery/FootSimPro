import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: hsl(${defaultTheme.colors.background});
  color: hsl(${defaultTheme.colors.foreground});
  font-family: ${defaultTheme.fonts.main};
`;

export const Card = styled.div`
  background-color: hsl(${defaultTheme.colors.card});
  border: 1px solid hsl(${defaultTheme.colors.border});
  padding: 2.5rem;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  text-align: center;
  color: hsl(${defaultTheme.colors.primary});
  letter-spacing: -0.05em;
  margin-bottom: 1rem;
`;

export const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  ${({ $variant, theme }) =>
    $variant === "secondary"
      ? `
        background-color: hsl(${defaultTheme.colors.secondary});
        color: hsl(${defaultTheme.colors.secondaryForeground});
        &:hover { opacity: 0.9; }
      `
      : `
        background-color: hsl(${defaultTheme.colors.primary});
        color: hsl(${defaultTheme.colors.primaryForeground});
        &:hover { filter: brightness(1.1); }
      `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: hsl(${defaultTheme.colors.mutedForeground});
  text-align: center;
  margin-top: 1rem;
`;
