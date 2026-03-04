import readline from 'readline-sync';
import heroesData from "./heroes.json";
import { Heroes } from "./interfaces";

const heroes: Heroes[] = heroesData;

function showHero(hero: Heroes) {
    console.log(`
${hero.name} (${hero.id})
Description: ${hero.description}
Age        : ${hero.age}
Active     : ${hero.isActive}
Birth Date : ${hero.birthDate}
Nationality: ${hero.nationality}
Difficulty : ${hero.difficulty}
Abilities  : ${hero.abilities.join(", ")}
Role       : ${hero.role.name}
Role Desc  : ${hero.role.description}
Frontline  : ${hero.role.isFrontline}
Icon URL   : ${hero.role.iconUrl}
Image URL  : ${hero.imageUrl}
`);
}

function showMenu() {
    let choices : string[] = ["View all data", "Filter by ID"]
    console.log("Welcome to the JSON data viewer!\n");
    let index : number = readline.keyInSelect(choices, "Please enter your choice: ");
    
    switch (index) {
        case 0:
            heroes.forEach((hero: Heroes) => {
                console.log(`- ${hero.name} (${hero.id})`);
            });
            break;
    
        case 1:
            let answer : string = readline.question("Please enter the ID you want to filter by: ");
            const result = heroes.find((hero: Heroes) => hero.id === answer)

            if (result) {
                showHero(result)
            }
            else {
                console.log("No hero found with that ID.");
            }
        default:
            break;
    }
}

showMenu();