'use client';

import { useParams } from 'next/navigation';
import * as S from './styles';
import { useGameData } from '../../../hooks/useGameData';

export default function GameDashboard() {
    const { id } = useParams();
    const { gameData, loading, error } = useGameData(id);

    if (loading) return <S.Container>Carregando dados do clube...</S.Container>;
    if (error || !gameData) return <S.Container>Erro: {error || 'Save não encontrado'}</S.Container>;

    // Extraindo dados baseados nas associações do seu backend
    const club = gameData.selectedClub;
    const players = club?.players || [];

    return (
        <S.Container>
            <S.Sidebar>
                <S.TeamBadge>
                    {club?.name?.charAt(0) || '?'}
                </S.TeamBadge>

                <S.TeamInfo>
                    <h2>{club?.name}</h2>
                    <p>Técnico: <strong>{gameData.managerName}</strong></p>
                </S.TeamInfo>

                <S.StatsGrid>
                    <S.StatItem>
                        <span>Data Atual</span>
                        <span>{new Date(gameData.currentDate).toLocaleDateString('pt-BR')}</span>
                    </S.StatItem>

                    <S.StatItem>
                        <span>Balanço Financeiro</span>
                        <span>R$ {gameData.balance.toLocaleString('pt-BR')}</span>
                    </S.StatItem>

                    <S.StatItem>
                        <span>Total de Jogadores</span>
                        <span>{players.length}</span>
                    </S.StatItem>
                </S.StatsGrid>
            </S.Sidebar>

            <S.MainContent>
                <S.TeamInfo style={{ textAlign: 'left' }}>
                    <h2>Plantel Profissional</h2>
                </S.TeamInfo>

                <S.PlayerTable>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Posição</th>
                            <th>Nacionalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player: any) => (
                            <tr key={player.id}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>{player.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </S.PlayerTable>
            </S.MainContent>
        </S.Container>
    );
}
