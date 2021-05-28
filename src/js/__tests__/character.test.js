import Character from '../character';

test('characterBowman', () => {
    var result = new Character('Kirill', 'Bowman');

    expect(result).toEqual({
        health: 100,
        level: 1,
        name: new String('Kirill'),
        type: 'Bowman',
        defence: 25,
        attac: 25
    });
});

test('characterSwordsman', () => {
    var result = new Character('Ivan', 'Swordsman');

    expect(result).toEqual({ health: 100, level: 1, name: new String("Ivan"), type: "Swordsman", defence: 10, attac: 40 });
});

test('characterMagician', () => {
    var result = new Character('Kirill', 'Magician');

    expect(result).toEqual({
        health: 100,
        level: 1,
        name: new String('Kirill'),
        type: 'Magician',
        defence: 40,
        attac: 10
    });
});

test('characterUndead', () => {
    var result = new Character('Kirill', 'Undead');

    expect(result).toEqual({
        health: 100,
        level: 1,
        name: new String('Kirill'),
        type: 'Undead',
        defence: 25,
        attac: 25
    });
});

test('characterZombie', () => {
    var result = new Character('Kirill', 'Zombie');

    expect(result).toEqual({
        health: 100,
        level: 1,
        name: new String('Kirill'),
        type: 'Zombie',
        defence: 10,
        attac: 40
    });
});

test('characterDaemon', () => {
    var result = new Character('Kirill', 'Daemon');

    expect(result).toEqual({
        health: 100,
        level: 1,
        name: new String('Kirill'),
        type: 'Daemon',
        defence: 40,
        attac: 10
    });
});

test('characterlevelUp', () => {
    var result = new Character('Kirill', 'Magician');
    result.levelUp();
    expect(result).toEqual({
        health: 100,
        level: 2,
        name: new String('Kirill'),
        type: 'Magician',
        defence: 48,
        attac: 12
    });
});

test('characterdamage', () => {
    var result = new Character('Kirill', 'Magician');
    result.damage(20);
    expect(result).toEqual({
        health: 88,
        level: 1,
        name: new String('Kirill'),
        type: 'Magician',
        defence: 40,
        attac: 10
    });
});

test('characterNotDamage', () => {
    var result = new Character('Kirill', 'Magician');
    result.health = -1;
    result.damage(20);
    expect(result).toEqual({
        health: -1,
        level: 1,
        name: new String('Kirill'),
        type: 'Magician',
        defence: 40,
        attac: 10
    });
});