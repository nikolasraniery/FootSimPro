'use client';
import * as S from './NewGame.styles';
import { Button } from '../Home/Home.styles';
import { useNewGameForm } from '../../hooks/useNewGameForm';

interface NewGameProps {
    onBack: () => void;
}

export default function NewGame({ onBack }: NewGameProps) {
    const {
        countries, divisions, clubs,
        selectedCountry, setSelectedCountry,
        selectedDivision, setSelectedDivision,
        selectedClub, setSelectedClub
    } = useNewGameForm();

    return (
        <S.Container>
            <S.WelcomeText>
                <h2>Configurar Carreira</h2>
            </S.WelcomeText>

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
                    {Array.isArray(clubs) && clubs.map((c: any) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
            </S.FieldGroup>

            <S.ButtonGroup>
                <Button $variant="secondary" onClick={onBack}>VOLTAR</Button>
                <Button disabled={!selectedClub}>INICIAR</Button>
            </S.ButtonGroup>
        </S.Container>
    );
}
