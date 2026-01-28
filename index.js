const express = require('express');
const { resolve } = require('path');
const Club = require('./src/models/Club');
const Player = require('./src/models/Player');
const sequelize = require('./src/config/database');
const seedData = require('./src/data/seedData');
const Save = require('./src/models/Save');

const app = express();
const port = 3010;

app.use(express.json());

app.use(express.static('static'));

Club.hasMany(Player);
Player.belongsTo(Club);

const startApp = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados resetado e pronto!');

    for (const leagueName in seedData) {
      const clubs = seedData[leagueName];

      for (const clubInfo of clubs) {
        const createdClub = await Club.create({
          name: clubInfo.name,
          country: clubInfo.country,
          league: clubInfo.league,
          budget: clubInfo.budget,
        });

        for (const playerInfo of clubInfo.players) {
          await Player.create({
            name: playerInfo.name,
            age: playerInfo.age,
            position: playerInfo.position,
            skill: playerInfo.skill,
            clubId: createdClub.id,
          });
        }
      }
    }
    console.log('Banco populado com sucesso!');

    app.get('/api/clubes', async (req, res) => {
      try {
        const clubes = await Club.findAll({
          attributes: ['id', 'name'],
          order: [['name', 'ASC']],
        });
        res.json(clubes);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clubes' });
      }
    });

    app.post('/start-game', async (req, res) => {
      try {
        const { saveName, managerName, clubId, isNewClub, clubData } = req.body;

        let finalClubId = clubId;

        if (isNewClub) {
          const newClub = await Club.create({
            name: clubData.name,
            country: clubData.country,
            league: clubData.league,
            stadiumName: clubData.stadiumName,
            budget: 2000000,
          });
          finalClubId = newClub.id;
        }

        const newSave = await Save.create({
          saveName,
          managerName,
          clubId: finalClubId,
        });

        res.status(201).json({ message: 'Jogo iniciado!', save: newSave });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao iniciar novo jogo' });
      }
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a aplicação', error);
  }
};
startApp();

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
