import styled from 'styled-components';
import { defaultTheme } from '../../../styles/theme';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 20px;
    padding: 20px;
    height: 100vh;
    background-color: #f4f4f4; // Um cinza claro para o fundo geral
`;

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-top: 5px solid ${defaultTheme.colors.primary};
`;

export const TeamBadge = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: ${defaultTheme.colors.primary}; // Círculo da cor do time
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
`;

export const TeamInfo = styled.div`
    text-align: center;

    h2 { 
        margin: 10px 0 5px; 
        color: #333; 
    }
    p { 
        color: #666; 
        font-size: 0.9rem; 
    }
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 10px;
    padding-top: 15px;
    border-top: 1px solid #eee;
`;

export const StatItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;

    span:last-child { 
        font-weight: bold; 
        color: ${defaultTheme.colors.secondary}}; 
    }
`;

export const MainContent = styled.section`
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow-y: auto;
`;

export const PlayerTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        text-align: left;
        padding: 12px;
        border-bottom: 2px solid ${defaultTheme.colors.primary};
        color: #444;
    }

    td {
        padding: 10px;
        border-bottom: 1px solid #eee;
        font-size: 0.9rem;
    }

    tr:hover { 
        background-color: #f9f9f9; 
    }
`;
