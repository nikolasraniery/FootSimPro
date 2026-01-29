import { NextResponse } from "next/server";
import { Club, Player, Save } from "../../../../backend/models";


export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const save = await Save.findByPk(params.id, {
            include: [
                {
                    model: Club,
                    as: 'selectedClub',
                    include: [{ model: Player, as: 'players' }]
                }
            ]
        });
        if (!save) return;
        NextResponse.json({ error: "Save não encontrado" }, { status: 404 });
        return NextResponse.json(save);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}