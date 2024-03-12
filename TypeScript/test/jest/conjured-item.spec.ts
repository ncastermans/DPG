import { GildedRose } from '@/gilded-rose';
import { Item } from '@/models/item';

describe('Conjured Items', () => {
  it('should degrade in quality twice as fast as normal items', () => {
    const items = [new Item('Conjured Mana Cake', 5, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
  });

  it('should degrade in quality twice as fast as normal items after sell by date', () => {
    const items = [new Item('Conjured Mana Cake', -1, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(6);
  });

  it('should never have negative quality', () => {
    const items = [new Item('Conjured Mana Cake', 5, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(0); // Quality should not go below 0
  });

  it('should never exceed quality of 50 (except for Sulfuras)', () => {
    const items = [new Item('Conjured Mana Cake', 5, 50)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(48);
  });

  it('should degrade in quality twice as fast as normal items even for low quality values', () => {
    const items = [new Item('Conjured Mana Cake', 5, 1)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });
});
