class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
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