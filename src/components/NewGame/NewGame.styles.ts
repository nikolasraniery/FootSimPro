import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
`;

export const WelcomeText = styled.div`
    text-align: center;
    margin-bottom: 0.5rem;

    h2 {
        color: hsl(${defaultTheme.colors.primary});
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
    }

    p {
        color: hsl(${defaultTheme.colors.mutedForeground});
        font-size: 0.875rem;
    }
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 700;
        color: hsl(${defaultTheme.colors.mutedForeground});
    }

    input, select {
        background-color: hsl(${defaultTheme.colors.secondary});
        border: 1px solid hsl(${defaultTheme.colors.border});
        color: hsl(${defaultTheme.colors.foreground});
        padding: 0.75rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        outline: none;

        &:focus {
            border-color: hsl(${defaultTheme.colors.primary});
        }
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;
