import fs from 'fs';
import path from 'path';
import { Club, Player, initDatabase } from '../models';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seed() {
  try {
    await initDatabase(true);

    const dataPath = path.resolve(__dirname, 'seedData.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    const clubs = JSON.parse(rawData);

    console.log(`🌱 Iniciando o seed de ${clubs.length} clubes...`);

    for (const clubData of clubs) {
      const { players, ...clubInfo } = clubData;

      const createdClub = await Club.create(clubInfo);

      if (players && players.length > 0) {
        const playersWithClubId = players.map((p: any) => ({
          ...p,
          clubId: createdClub.id,
          league: p.league || createdClub.league,
          country: p.country || createdClub.country
        }));

        await Player.bulkCreate(playersWithClubId);
      }
    }

    console.log('✅ Seed finalizado com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro durante o seed:', error);
    process.exit(1);
  }
}

seed();