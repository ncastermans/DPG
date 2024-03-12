package com.gildedrose.item;

public class BaseItem {
    protected int MAX_QUALITY = 50;
    protected final int MIN_QUALITY = 0;
    protected final int SELL_IN_DELTA = 1;
    protected final int QUALITY_DELTA = 1;

    protected Item item;

    public BaseItem(Item item) {
        this.item = item;
    }

    public void update() {
        updateSellIn();
        updateQuality();
        validateQuality();
    }

    protected void updateQuality() {
        int qualityDelta = item.sellIn > 0 ? QUALITY_DELTA : QUALITY_DELTA * 2;
        item.quality = item.quality - qualityDelta;
    }

    protected void updateSellIn() {
        item.sellIn = item.sellIn - SELL_IN_DELTA;
    }

    protected void validateQuality() {
        if (item.quality > MAX_QUALITY) {
            item.quality = MAX_QUALITY;
        }

        if (item.quality < MIN_QUALITY) {
            item.quality = MIN_QUALITY;
        }
    }
}
