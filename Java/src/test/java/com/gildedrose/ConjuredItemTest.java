package com.gildedrose;

import com.gildedrose.item.Item;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ConjuredItemTest {
    @Test
    void qualityDecreasesTwiceAsFast() {
        Item[] items = new Item[] { new Item("Conjured Mana Cake", 5, 10) };
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(8, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }


    @Test
    void qualityDecreasesTwiceAsFastAfterSellInSmallerThanZero() {
        Item[] items = new Item[] { new Item("Conjured Mana Cake", -1, 10) };
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(6, items[0].quality);
        assertEquals(-2, items[0].sellIn);
    }

    @Test
    void qualityNeverNegative() {
        Item[] items = new Item[] { new Item("Conjured Mana Cake", 5, 0) };
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(0, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }

    @Test
    void qualityNeverExceeds50() {
        Item[] items = new Item[] { new Item("Conjured Mana Cake", 5, 50) };
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(48, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }

    @Test
    void qualityDecreasesTwiceAsFastForLowQualityValues() {
        Item[] items = new Item[] { new Item("Conjured Mana Cake", 5, 1) };
        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertEquals(0, items[0].quality);
        assertEquals(4, items[0].sellIn);
    }
}
