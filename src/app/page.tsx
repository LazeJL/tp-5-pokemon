'use client'
import React, { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";

export default function Home() {
  const [battleLogs, setBattleLogs] = useState<string[]>([]);
  const [pokemon1, setPokemon1] = useState(new Pokemon({
    name: "Pikachu",
    attack: 25,
    defense: 10,
    hp: 100,
    luck: 0.5,
  }));
  
  const [pokemon2, setPokemon2] = useState(new Pokemon({
    name: "Charmander",
    attack: 30,
    defense: 15,
    hp: 100,
    luck: 0.6,
  }));

  useEffect(() => {
    const battleLoop = () => {
      while (pokemon1.hp > 0 && pokemon2.hp > 0) {
        const damage1 = pokemon1.attackPokemon(pokemon2);
        const log1 = `${pokemon1.name} attaque ${pokemon2.name} et inflige ${damage1} dégâts ${pokemon2.name} a maintenant ${pokemon2.hp} HP`;

        if (pokemon2.hp <= 0) {
          setBattleLogs(prevLogs => [...prevLogs, log1, `${pokemon2.name} est KO! ${pokemon1.name} remporte le combat.`]);
          break;
        }

        const damage2 = pokemon2.attackPokemon(pokemon1);
        const log2 = `${pokemon2.name} attaque ${pokemon1.name} et inflige ${damage2} dégâts ${pokemon1.name} a maintenant ${pokemon1.hp} HP`;

        if (pokemon1.hp <= 0) {
          setBattleLogs(prevLogs => [...prevLogs, log1, log2, `${pokemon1.name} est KO! ${pokemon2.name} remporte le combat.`]);
          break;
        }

        setBattleLogs(prevLogs => [...prevLogs, log1, log2]);
      }
    };

    battleLoop();
  }, [pokemon1, pokemon2]);

  return (
    <main>
      <div>
        {battleLogs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </main>
  );
}
