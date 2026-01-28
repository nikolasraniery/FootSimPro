"use client";
import * as S from "./Home.styles";
import Settings from "./Settings/Settings";
import { useState } from "react";

export default function HomeComponent() {
  const [view, setView] = useState<"menu" | "settings">("menu");
  const handleNewGame = () => {
    console.log("Iniciando novo jogo...");
  };

  return (
    <S.Container>
      <S.Card>
        {view === "menu" ? (
          <>
            <S.Title>FOOTSIM PRO</S.Title>

            <S.Button onClick={handleNewGame}>NOVO JOGO</S.Button>

            <S.Button $variant="secondary" disabled>
              CARREGAR JOGO
            </S.Button>

            <S.Button $variant="secondary" onClick={() => setView("settings")}>
              CONFIGURAÇÕES
            </S.Button>

            <S.FooterText>Versão 1.0.0 Alpha - 2026</S.FooterText>
          </>
        ) : (
          <Settings onBack={() => setView("menu")} />
        )}
      </S.Card>
    </S.Container>
  );
}
