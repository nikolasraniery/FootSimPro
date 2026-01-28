import sequelize from '../config/database';
import Club from './Club';
import Player from './Player';
import Save from './Save';

// --- DEFINIÇÃO DAS ASSOCIAÇÕES (Relacionamentos) ---

// 1. Um Clube tem muitos Jogadores (1:N)
Club.hasMany(Player, {
  foreignKey: 'clubId',
  as: 'players',
});

// 2. Um Jogador pertence a um Clube (N:1)
Player.belongsTo(Club, {
  foreignKey: 'clubId',
  as: 'club',
});

// 3. Um Save está vinculado a um Clube (N:1)
Save.belongsTo(Club, {
  foreignKey: 'clubId',
  as: 'selectedClub',
});

// 4. Um Clube pode estar presente em vários Saves (1:N)
Club.hasMany(Save, {
  foreignKey: 'clubId',
});

export const initDatabase = async (force = false) => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com SQLite estabelecida com sucesso.');
    
    // sync({ force: true }) recria as tabelas (cuidado: apaga os dados!)
    await sequelize.sync({ force });
    console.log('✅ Tabelas sincronizadas e associações configuradas.');
  } catch (error) {
    console.error('❌ Erro ao inicializar o banco de dados:', error);
  }
};

export { sequelize, Club, Player, Save };