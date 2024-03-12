package com.gildedrose;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BaseItemTest {

    @Test
    void qualityDecreaseByOneBeforeSellByDate() {
        Item[] items = new Item[]{new Item("Normal Item", 5, 10)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(9, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }

    @Test
    void qualityDecreaseByTwoAfterSellInLowerThanZero() {
        Item[] items = new Item[]{new Item("Normal Item", -1, 10)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(8, items[0].quality);
        assertEquals(-2, items[0].sellIn);
    }

    @Test
    void qualityDoesNotGoNegative() {
        Item[] items = new Item[]{new Item("Normal Item", 5, 0)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(0, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }

    @Test
    void qualityDoesNotExceedFifty() {
        Item[] items = new Item[]{new Item("Normal Item", 5, 50)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(49, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }

    @Test
    void qualityDecreasesTwiceAsFastAfterSellByDate() {
        Item[] items = new Item[]{new Item("Normal Item", -1, 50)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(48, items[0].quality);
        assertEquals(-2, items[0].sellIn);
    }
}
