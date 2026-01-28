'use client';
import * as S from './Settings.styles';

interface SettingsProps {
  onBack: () => void;
}

export default function Settings({ onBack }: SettingsProps) {
  return (
    <S.Container>
      <S.Title>CONFIGURAÇÕES</S.Title>
      
      <S.SettingGroup>
        <label>Volume da Música</label>
        <input type="range" />
      </S.SettingGroup>

      <S.SettingGroup>
        <label>Idioma</label>
        <select>
          <option>Português</option>
          <option>English</option>
        </select>
      </S.SettingGroup>

      <S.Button onClick={onBack}>VOLTAR</S.Button>
    </S.Container>
  );
}