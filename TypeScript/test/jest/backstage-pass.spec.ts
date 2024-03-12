import {GildedRose, Item} from '@/gilded-rose';

describe('Backstage passes', () => {
  it('should increase quality by 2 when there are 10 days or less', () => {
    const itemsMock: Item[] = [new Item('Backstage passes', 10, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(12);
    expect(app.items[0].sellIn).toEqual(9);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(14);
    expect(app.items[0].sellIn).toEqual(8);
  });

  it('should increase quality by 3 when there are 5 days or less', () => {
    const itemsMock: Item[] = [new Item('Backstage passes', 5, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(13);
    expect(app.items[0].sellIn).toEqual(4);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(16);
    expect(app.items[0].sellIn).toEqual(3);
  });

  it('should increase quality by 1 when there are more than 10 days', () => {
    const itemsMock: Item[] = [new Item('Backstage passes', 13, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(11);
    expect(app.items[0].sellIn).toEqual(12);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(12);
    expect(app.items[0].sellIn).toEqual(11);
  });

  it('should decrease quality to 0 when the event has passed', () => {
    const itemsMock: Item[] = [new Item('Backstage passes', -1, 10)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(0);
    expect(app.items[0].sellIn).toEqual(-2);
  });

  it('quality of item can not be negative', () => {
    const itemsMock: Item[] = [new Item('Backstage passes', 20, -1)];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(0);
    expect(app.items[0].sellIn).toEqual(19);
  });

  it('quality of item can not be higher than 50', () => {
    const itemsMock: Item[] = [
      new Item('Backstage passes', 2, 51),
      new Item('Backstage passes', 2, 999),
    ];
    const app: GildedRose = new GildedRose(itemsMock);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(50);
    expect(app.items[1].quality).toEqual(50);
  });
});
