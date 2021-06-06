class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
        this.health = 80;
        this.level = 2;
        this.attack = 34;
        this.defence = 43;

    }

    levelUp() {
        super.levelUp();
    }

    damage(points) {
        super.damage(points);
    }
}