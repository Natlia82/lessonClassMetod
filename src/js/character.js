export default class Character {


    constructor(name, type) {
        let nameString = new String(name);
        if (nameString.length >= 2 && nameString.length <= 10) {
            this.name = nameString;
        } else throw new Error("Не верный формат имени");
        this.health = 100;
        this.level = 1;
        let mass = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        if (mass.includes(type)) {
            this.type = type;
        } else throw new Error("Не верный формат типа");
        switch (this.type) {
            case "Bowman":
                this.defence = 25;
                this.attac = 25;
                break;
            case "Swordsman":
                this.defence = 10;
                this.attac = 40;
                break;
            case "Magician":
                this.defence = 40;
                this.attac = 10;
                break;
            case "Undead":
                this.defence = 25;
                this.attac = 25;
                break;
            case "Zombie":
                this.defence = 10;
                this.attac = 40;
                break;
            case "Daemon":
                this.defence = 40;
                this.attac = 10;
                break;

        }
    }

    levelUp() {
        if (this.health != 0) {
            this.level++;
            this.attac = this.attac + (this.attac * 20 / 100);
            this.defence = this.defence + (this.defence * 20 / 100);
            this.health = 100;
        } else throw new Error("нельзя повысить левел умершего");

    }


    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }

    }


}