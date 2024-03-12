import { Item } from '../models/item';
import { ItemVisitor } from './item-visitor';

export class ItemVisitorImpl implements ItemVisitor {
  visitBaseItem(item: Item) {
    this.updateSellIn(item);
    const qualityDelta = item.sellIn < 0 ? -2 : -1;
    this.updateQuality(item, qualityDelta);
  }

  visitAgedBrie(item: Item) {
    this.updateSellIn(item);
    const qualityDelta = item.sellIn >= 0 ? 1 : 2;
    this.updateQuality(item, qualityDelta);
  }

  visitBackstagePass(item: Item) {
    this.updateSellIn(item);
    if (item.sellIn < 0) {
      item.quality = 0;
    } else if (item.sellIn < 5) {
      this.updateQuality(item, 3);
    } else if (item.sellIn < 10) {
      this.updateQuality(item, 2);
    } else {
      this.updateQuality(item, 1);
    }
  }

  visitLegendaryItem(item: Item) {
    item.quality = 80;
  }

  visitConjuredItem(item: Item) {
    this.updateSellIn(item);
    const qualityDelta = item.sellIn < 0 ? -4 : -2;
    this.updateQuality(item, qualityDelta);
  }

  private updateSellIn(item: Item) {
    item.sellIn--;
  }

  private updateQuality(item: Item, delta: number) {
    item.quality = Math.min(50, Math.max(0, item.quality + delta));
  }
}
