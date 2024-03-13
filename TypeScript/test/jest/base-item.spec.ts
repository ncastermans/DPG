import { GildedRose } from '@/gilded-rose';
import { Item } from '@/models/item';

describe('Base Item', () => {
  it('should lower sellIn and quality at the end of the day', () => {
    const itemsMock: Item[] = [new Item('Base Item', 10, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(9);
    expect(app.items[0].sellIn).toEqual(9);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(8);
    expect(app.items[0].sellIn).toEqual(8);
  });

  it('should lower quality twice as fast when sellIn < 0', () => {
    const itemsMock: Item[] = [new Item('Base Item', -1, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(8);
    expect(app.items[0].sellIn).toEqual(-2);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(6);
    expect(app.items[0].sellIn).toEqual(-3);
  });

  it('quality of item can not be negative', () => {
    const itemsMock: Item[] = [new Item('Base Item', 2, 0)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(0);
    expect(app.items[0].sellIn).toEqual(1);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(0);
    expect(app.items[0].sellIn).toEqual(0);
  });

  it('quality of item can not be higher than 50', () => {
    const itemsMock: Item[] = [
      new Item('Base Item', 2, 51),
      new Item('Base Item 2', 2, 999),
    ];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(50);
    expect(app.items[1].quality).toEqual(50);
  });
});
