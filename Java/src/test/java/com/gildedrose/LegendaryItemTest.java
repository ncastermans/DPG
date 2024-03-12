package com.gildedrose;

import com.gildedrose.item.Item;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LegendaryItemTest {
    @Test
    void qualityRemainsUnchanged() {
        Item[] items = new Item[]{new Item("Sulfuras, Hand of Ragnaros", 10, 5)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(80, items[0].quality);
    }

    @Test
    void sellInRemainsUnchanged() {
        Item[] items = new Item[]{new Item("Sulfuras, Hand of Ragnaros", 10, 50)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(10, items[0].sellIn);
        assertEquals(80, items[0].quality);
    }
}

