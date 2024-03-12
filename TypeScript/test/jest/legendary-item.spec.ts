import { GildedRose } from '@/gilded-rose';
import { Item } from '@/models/item';

describe('Legendary Item', () => {
  it('should not lower sellIn and quality at the end of the day', () => {
    const itemsMock: Item[] = [new Item('Sulfuras, Hand of Ragnaros', 10, 80)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(80);
    expect(app.items[0].sellIn).toEqual(10);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(80);
    expect(app.items[0].sellIn).toEqual(10);
  });

  it('quality should always be 80', () => {
    const itemsMock: Item[] = [new Item('Sulfuras, Hand of Ragnaros', -1, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(80);
    expect(app.items[0].sellIn).toEqual(-1);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(80);
    expect(app.items[0].sellIn).toEqual(-1);
  });
});
