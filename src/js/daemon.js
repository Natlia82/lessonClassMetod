class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }

    levelUp() {
        this.level = 100;
    }

    damage(points) {
        super.damage(points);
    }

}