import { Item } from './models/item';
import { ItemVisitor } from './visitors/item-visitor';
import { ItemVisitorImpl } from './visitors/item-visitor-impl';

export class GildedRose {
  items: Item[];
  private visitor: ItemVisitor;

  constructor(items: Item[]) {
    this.items = items;
    this.visitor = new ItemVisitorImpl();
  }

  updateQuality(): Item[] {
    for (const item of this.items) {
      switch (item.name) {
        case 'Aged Brie':
          this.visitor.visitAgedBrie(item);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.visitor.visitBackstagePass(item);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          this.visitor.visitLegendaryItem(item);
          break;
        case 'Conjured Mana Cake':
          this.visitor.visitConjuredItem(item);
          break;
        default:
          this.visitor.visitBaseItem(item);
      }
    }

    return this.items;
  }
}
