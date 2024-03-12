import { GildedRose } from '@/gilded-rose';
import { Item } from '@/models/item';

describe('GildedRose', () => {
  it('should match snapshot', () => {
    console.log = jest.fn(); // Mock console.log to prevent output during test

    const items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      new Item('Conjured Mana Cake', 3, 6),
    ];

    const gildedRose = new GildedRose(items);

    let days = 30;

    for (let i = 0; i < days + 1; i++) {
      gildedRose.updateQuality();
    }

    // Compare the console.log output with the snapshot
    expect(console.log).toMatchSnapshot();
  });
});
