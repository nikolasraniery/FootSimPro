import { useState, useEffect } from 'react';

export function useNewGameForm() {
    const [countries] = useState([{ id: 1, name: 'Brasil' }]);
    const [divisions, setDivisions] = useState<{ id: number, name: string }[]>([]);
    const [clubs, setClubs] = useState<{ id: number, name: string }[]>([]);

    const [selectedCountry, setSelectedCountry] = useState('1');
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedClub, setSelectedClub] = useState('');
    const [managerName, setManagerName] = useState('');

    const createSave = async () => {
        if (!selectedClub) throw new Error("Clube não selecionado");
        if (managerName === '') throw new Error("Nome do treinador é obrigatório");

        const response = await fetch('/api/saves', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clubId: selectedClub,
                managerName
            }),
        });
        if (!response.ok) throw new Error('Falha ao criar o save na API');

        return await response.json();
    }

    useEffect(() => {
        if (selectedCountry === '1') {
            setDivisions([
                { id: 1, name: 'Série A' },
                { id: 2, name: 'Série B' }
            ]);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedDivision) {
            fetch(`/api/clubs?divisionId=${selectedDivision}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setClubs(data);
                    } else {
                        console.error("A API retornou um objeto de erro:", data);
                        setClubs([]);
                    }
                })
                .catch(() => setClubs([]));
        } else {
            setClubs([]);
        }
    }, [selectedDivision]);

    return {
        countries, divisions, clubs,
        selectedCountry, setSelectedCountry,
        selectedDivision, setSelectedDivision,
        selectedClub, setSelectedClub,
        managerName, setManagerName,
        createSave
    };
}
