import { useEffect, useState } from 'react';

export function useGameData(saveId: string | string[]) {
    const [gameData, setGameData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!saveId) return;

        const loadData = async () => {
            try {
                const response = await fetch(`/api/saves/${saveId}`);
                if (!response.ok) throw new Error("Não foi possível carregar o save");

                const data = await response.json();
                setGameData(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [saveId]);

    return { gameData, loading, error };
}
