import { Item } from '../models/item';
import { ItemVisitor } from './item-visitor';

export class ItemVisitorImpl implements ItemVisitor {
  private readonly MIN_QUALITY = 0;
  private readonly MAX_QUALITY = 50;
  private readonly LEGENDARY_QUALITY = 80;

  visitBaseItem(item: Item): void {
    this.decrementSellIn(item);
    const qualityDelta = item.sellIn < 0 ? -2 : -1;
    this.updateQuality(item, qualityDelta);
  }

  visitAgedBrie(item: Item): void {
    this.decrementSellIn(item);
    const qualityDelta = item.sellIn >= 0 ? 1 : 2;
    this.updateQuality(item, qualityDelta);
  }

  visitBackstagePass(item: Item): void {
    this.decrementSellIn(item);
    if (item.sellIn < 0) {
      item.quality = this.MIN_QUALITY;
    } else if (item.sellIn < 5) {
      this.updateQuality(item, 3);
    } else if (item.sellIn < 10) {
      this.updateQuality(item, 2);
    } else {
      this.updateQuality(item, 1);
    }
  }

  visitLegendaryItem(item: Item): void {
    item.quality = this.LEGENDARY_QUALITY;
  }

  visitConjuredItem(item: Item): void {
    this.decrementSellIn(item);
    const qualityDelta = item.sellIn < 0 ? -4 : -2;
    this.updateQuality(item, qualityDelta);
  }

  private decrementSellIn(item: Item): void {
    item.sellIn--;
  }

  private updateQuality(item: Item, delta: number): void {
    item.quality = Math.min(
      this.MAX_QUALITY,
      Math.max(this.MIN_QUALITY, item.quality + delta)
    );
  }
}
