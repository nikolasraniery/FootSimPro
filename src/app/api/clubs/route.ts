import { NextResponse } from "next/server";
import { Club } from "../../../backend/models/Club";

export async function GET(request: Request) {
  console.log('DEBUG: O Model do Club é:', Club);

  const { searchParams } = new URL(request.url);
  const divisionId = searchParams.get('divisionId');

  console.log('Buscando clubes para a divisão:', divisionId);

  try {
    const whereClause = divisionId ? { divisionId: Number(divisionId) } : {};
    const clubs = await Club.findAll({
      where: whereClause,
      order: [["name", "ASC"]],
    });
    return NextResponse.json(clubs);
  } catch (error) {
    console.error("Erro no servidor:", error);
    return NextResponse.json(
      { error: "Erro ao buscar clubes" },
      { status: 500 },
    );
  }
}
