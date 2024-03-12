package com.gildedrose;

import com.gildedrose.item.Item;
import com.gildedrose.factory.ItemFactory;

public class GildedRose {
    public Item[] items;

    public GildedRose(Item[] items) {
        this.items = items;
    }

    public void updateQuality() {
        for (Item item : items) {
            ItemFactory.create(item).update();
        }
    }
}
