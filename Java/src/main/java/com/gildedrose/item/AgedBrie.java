package com.gildedrose.item;

public class AgedBrie extends BaseItem {
    public AgedBrie(Item item) {
        super(item);
    }

    @Override
    protected void updateQuality() {
        int qualityDelta = (item.sellIn > 0) ? QUALITY_DELTA : QUALITY_DELTA * 2;
        item.quality = item.quality + qualityDelta;
    }
}
