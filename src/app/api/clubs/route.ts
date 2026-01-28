import { NextResponse } from "next/server";
import Club from "../../../backend/models/Club";

export async function GET() {
  try {
    const clubs = await Club.findAll({
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
    });
    return NextResponse.json(clubs);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar clubes" },
      { status: 500 },
    );
  }
}
