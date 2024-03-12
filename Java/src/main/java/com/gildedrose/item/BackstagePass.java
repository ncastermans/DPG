package com.gildedrose.item;

public class BackstagePass extends BaseItem {
    public BackstagePass(Item item) {
        super(item);
    }

    @Override
    protected void updateQuality() {
        if (item.sellIn < 0) {
            item.quality = 0;
            return;
        }

        int qualityDelta = 1;

        if (item.sellIn <= 5) {
            qualityDelta = 3;
        } else if (item.sellIn <= 10) {
            qualityDelta = 2;
        }

        item.quality = item.quality + qualityDelta;
    }
}
