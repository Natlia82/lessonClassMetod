class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
        this.health = 80;
        this.level = 50;
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