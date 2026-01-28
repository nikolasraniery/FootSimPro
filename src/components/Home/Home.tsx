"use client";
import NewGame from "../NewGame/index";
import * as S from "./Home.styles";
import Settings from "./Settings/Settings";
import { useState } from "react";

export default function HomeComponent() {
  const [view, setView] = useState<"menu" | "settings" | "newGame">("menu");


  return (
    <S.Container>
      <S.Card>
        {view === "menu" && (
          <>
            <S.Title>FOOTSIM PRO</S.Title>

            <S.Button onClick={() => setView("newGame")}>NOVO JOGO</S.Button>

            <S.Button $variant="secondary" disabled>
              CARREGAR JOGO
            </S.Button>

            <S.Button $variant="secondary" onClick={() => setView("settings")}>
              CONFIGURAÇÕES
            </S.Button>

            <S.FooterText>Versão 1.0.0 Alpha - 2026</S.FooterText>
          </>
        )} 
        
        {view === "settings" && (
          <Settings onBack={() => setView("menu")} />
        )}

        {view === "newGame" && (
          <NewGame onBack={() => setView("menu")}/>
        )}
      </S.Card>
    </S.Container>
  );
}
