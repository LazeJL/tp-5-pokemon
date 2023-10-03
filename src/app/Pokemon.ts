import { PokemonStats } from "./PokemonStats";

export class Pokemon implements PokemonStats {
    name!: string;
    attack!: number;
    defense!: number;
    hp!: number;
    luck!: number;
  
    constructor(stats: PokemonStats) {
      Object.assign(this, stats);
    }
  
    isLucky(): boolean {
        let luck = Math.random()
        console.log("luck :"+luck)
        if(luck <= this.luck){
            return true;
        }
        else{
            return false;
        }
    }
  
    attackPokemon(target: Pokemon): number | null {
        console.log("Avant attaque - Attaquant : "+this)
        let damage = this.attack - target.defense;
        console.log(damage)
      
        if (this.isLucky()) {
          target.hp -= damage;
          console.log(`Après attaque chanceuse - Dégâts: ${damage}, Défenseur HP : ${target.name} : ${target.hp}`);
          return damage;
        } else {
          damage = 0;
          console.log(`Après attaque non chanceuse - Dégâts: ${damage}, Défenseur HP : ${target.name} : ${target.hp}`);
          return damage;
        }
      }

      toString(): string {
        return `Nom: ${this.name}, Attaque: ${this.attack}, Défense: ${this.defense}, HP: ${this.hp}, Chance: ${this.luck}`;
      }
      
  }
  