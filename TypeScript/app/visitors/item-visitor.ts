import { Item } from '../models/item';

export interface ItemVisitor {
  visitBaseItem(item: Item): void;
  visitAgedBrie(item: Item): void;
  visitBackstagePass(item: Item): void;
  visitLegendaryItem(item: Item): void;
  visitConjuredItem(item: Item): void;
}
