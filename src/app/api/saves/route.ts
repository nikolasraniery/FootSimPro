import { NextResponse } from "next/server";
import { Save } from "../../../backend/models";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { clubId, managerName } = body;

        console.log("Recebido clubId:", clubId);

        const newSave = await Save.create({
            clubId: Number(clubId), 
            managerName: managerName || "Treinador",
            saveName: `Jogo de ${managerName || 'Treinador'}`,
            balance: 1000000,
            currentDate: new Date('2026-01-28'),
        });

        return NextResponse.json(newSave);
    } catch (error: any) {
        console.error(" ERRO NO BANCO AO CRIAR SAVE:", error.message);

        return NextResponse.json(
            { error: "Erro ao criar save", message: error.message },
            { status: 500 }
        );
    }
}
