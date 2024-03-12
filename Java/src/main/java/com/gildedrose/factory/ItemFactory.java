package com.gildedrose.factory;

import com.gildedrose.item.*;

public class ItemFactory {
    public static BaseItem create(Item item) {
        switch (item.name) {
            case "Aged Brie":
                return new AgedBrie(item);
            case "Sulfuras, Hand of Ragnaros":
                return new LegendaryItem(item);
            case "Backstage passes to a TAFKAL80ETC concert":
                return new BackstagePass(item);
            default:
                return new BaseItem(item);
        }
    }
}
