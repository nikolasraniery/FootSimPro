import { execSync } from 'child_process';

async function bootstrap() {
  try {
    console.log('🚀 Iniciando FootSim Pro...');

    console.log('📦 Alimentando o banco de dados...');
    execSync('npm run db:seed', { stdio: 'inherit' });

    console.log('🌐 Subindo interface gráfica...');
    execSync('next dev', { stdio: 'inherit' });
    
  } catch (error) {
    console.error('❌ Falha ao iniciar aplicação:', error);
    process.exit(1);
  }
}

bootstrap();