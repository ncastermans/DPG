import { GildedRose } from '@/gilded-rose';
import { Item } from '@/models/item';

describe('Aged Brie', () => {
  it('should lower sellIn and increase quality at the end of the day', () => {
    const itemsMock: Item[] = [new Item('Aged Brie', 10, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(11);
    expect(app.items[0].sellIn).toEqual(9);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(12);
    expect(app.items[0].sellIn).toEqual(8);
  });

  it('should increase quality twice as fast when sellIn < 0', () => {
    const itemsMock: Item[] = [new Item('Aged Brie', -1, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(12);
    expect(app.items[0].sellIn).toEqual(-2);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(14);
    expect(app.items[0].sellIn).toEqual(-3);
  });

  it('quality of item can not be negative', () => {
    const itemsMock: Item[] = [new Item('Aged Brie', 2, -10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(0);
    expect(app.items[0].sellIn).toEqual(1);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(1);
    expect(app.items[0].sellIn).toEqual(0);
  });

  it('quality of item can not be higher than 50', () => {
    const itemsMock: Item[] = [
      new Item('Aged Brie', 2, 51),
      new Item('Aged Brie', 2, 999),
    ];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(50);
    expect(app.items[1].quality).toEqual(50);
  });
});
