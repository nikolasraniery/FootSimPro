import { NextResponse } from "next/server";
import Club from "../../../backend/models/Club";
import Save from "../../../backend/models/Save";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { saveName, managerName, clubId, isNewClub, clubData } = body;

    let finalClubId = clubId;

    if (isNewClub) {
      const newClub = await Club.create({
        name: clubData.name,
        stadiumName: clubData.stadiumName,
        league: clubData.league,
        country: "Brasil",
        budget: 5000000,
        reputation: 50,
      });
      finalClubId = newClub.id;
    }

    const newSave = await Save.create({
      saveName,
      managerName,
      clubId: finalClubId,
    });
    return NextResponse.json({ message: "Jogo iniciado!", save: newSave });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao iniciar jogo" }, { status: 500 });
  }
}
