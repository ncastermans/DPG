package com.gildedrose.item;

public class BaseItem {
    protected final int MAX_QUALITY = 50;
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
        int qualityDelta = item.sellIn >= 0 ? QUALITY_DELTA : QUALITY_DELTA * 2;
        item.quality = Math.min(Math.max(item.quality - qualityDelta, MIN_QUALITY), MAX_QUALITY);
    }

    protected void updateSellIn() {
        item.sellIn -= SELL_IN_DELTA;
    }

    protected void validateQuality() {
        item.quality = Math.min(Math.max(item.quality, MIN_QUALITY), MAX_QUALITY);
    }
}
