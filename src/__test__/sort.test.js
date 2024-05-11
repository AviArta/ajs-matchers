import sortedHealth from '../sort';

const caracters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
]

test('sort caracters on Health', () => {
    const result = sortedHealth(caracters);
    expect(result).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]);
})
