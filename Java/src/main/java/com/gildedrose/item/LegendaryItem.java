package com.gildedrose.item;

public class LegendaryItem extends BaseItem {

    protected int MAX_QUALITY = 80;

    public LegendaryItem(Item item) {
        super(item);
    }

    @Override
    protected void updateQuality() {
        item.quality = MAX_QUALITY;
    }

    @Override
    protected void updateSellIn() {
        // No need to update sell-in for legendary items
    }

    @Override
    protected void validateQuality() {
        item.quality = MAX_QUALITY;
    }
}
