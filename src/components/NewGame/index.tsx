'use client';
import * as S from './NewGame.styles';
import { Button } from '../Home/Home.styles';
import { useNewGameForm } from '../../hooks/useNewGameForm';
import { useRouter } from 'next/navigation';

interface NewGameProps {
    onBack: () => void;
}

export default function NewGame({ onBack }: NewGameProps) {

    const router = useRouter();

    const {
        countries, divisions, clubs,
        selectedCountry, setSelectedCountry,
        selectedDivision, setSelectedDivision,
        selectedClub, setSelectedClub,
        managerName, setManagerName,
        createSave
    } = useNewGameForm();

    const handleStartGame = async () => {
        try {
            const newSave = await createSave();
            router.push(`/game/${newSave.id}`);
        } catch (error) {
            console.error(error);
            alert("Não foi possível iniciar o jogo. Verifique o console do servidor.");
        }
    };

    return (
        <S.Container>
            <S.WelcomeText>
                <h2>Configurar Carreira</h2>
            </S.WelcomeText>

            <S.FieldGroup>
                <label>Nome do técnico</label>
                <input
                    type='text'
                    placeholder='Digite seu nome'
                    value={managerName}
                    onChange={(e) => setManagerName(e.target.value)}
                />
            </S.FieldGroup>

            <S.FieldGroup>
                <label>País</label>
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                    {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
            </S.FieldGroup>

            <S.FieldGroup>
                <label>Divisão</label>
                <select
                    value={selectedDivision}
                    onChange={(e) => setSelectedDivision(e.target.value)}
                    disabled={!selectedCountry}
                >
                    <option value="">Selecione uma divisão</option>
                    {divisions.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
            </S.FieldGroup>

            <S.FieldGroup>
                <label>Clube</label>
                <select
                    value={selectedClub}
                    onChange={(e) => setSelectedClub(e.target.value)}
                    disabled={!selectedDivision}
                >
                    <option value="">Selecione um clube</option>
                    {clubs.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
            </S.FieldGroup>

            <S.ButtonGroup>
                <Button $variant="secondary" onClick={onBack}>VOLTAR</Button>
                <Button disabled={!selectedClub} onClick={handleStartGame}>INICIAR</Button>
            </S.ButtonGroup>
        </S.Container>
    );
}
