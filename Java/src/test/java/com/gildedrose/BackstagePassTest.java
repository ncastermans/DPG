package com.gildedrose;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BackstagePassTest {

    @Test
    void qualityIncreasesByOneWhenMoreThanTenDaysLeft() {
        Item[] items = new Item[]{new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(11, items[0].quality);
        assertEquals(14, items[0].sellIn);
    }

    @Test
    void qualityIncreasesByTwoWhenTenDaysOrLessLeft() {
        Item[] items = new Item[]{new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(12, items[0].quality);
        assertEquals(9, items[0].sellIn);
    }

    @Test
    void qualityIncreasesByThreeWhenFiveDaysOrLessLeft() {
        Item[] items = new Item[]{new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(13, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }

    @Test
    void qualityDropsToZeroAfterConcert() {
        Item[] items = new Item[]{new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)};
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(0, items[0].quality);
        assertEquals(-1, items[0].sellIn);
    }
}
