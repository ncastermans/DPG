package com.gildedrose;

import com.gildedrose.item.Item;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AgedBrieTest {
    @Test
    void qualityIncreasesByOneBeforeSellByDate() {
        Item[] items = new Item[]{new Item("Aged Brie", 5, 10)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(11, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }

    @Test
    void qualityIncreasesByTwoWhenSellInLowerThanZero() {
        Item[] items = new Item[]{new Item("Aged Brie", -1, 10)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(12, items[0].quality);
        assertEquals(-2, items[0].sellIn);
    }

    @Test
    void qualityDoesNotExceedFifty() {
        Item[] items = new Item[]{new Item("Aged Brie", 5, 50)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(50, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }

    @Test
    void qualityIncreasesByOneAtMaximumQuality() {
        Item[] items = new Item[]{new Item("Aged Brie", 5, 50)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(50, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }
}
