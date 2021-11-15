import {
    AgedBrieProduct,
    BackstagePassProduct, ConjuredProduct,
    NormalProduct,
    ProductModel,
    ProductTypes,
    SulfurasProduct
} from '../model/ProductModels'


export const getProductType = (name: string) => {
    let loweredName = name.toLowerCase();

    if (loweredName.includes('aged brie')) {
        return ProductTypes.AgedBrie;
    } else if (loweredName.includes('sulfuras')) {
        return ProductTypes.Sulfuras;
    } else if (loweredName.includes('backstage pass')) {
        return ProductTypes.BackstagePass;
    } else if (loweredName.includes('conjured')) {
        return ProductTypes.Conjured;
    } else {
        return ProductTypes.Normal;
    }
}

export const instantiateProduct = (name: string, quality: number, sellIn: number, type: string): NormalProduct => {
    quality = parseInt(quality+'');
    sellIn = parseInt(sellIn+'');

    switch (type) {

        case ProductTypes.AgedBrie:
            return new AgedBrieProduct(name, quality, sellIn);
        case ProductTypes.Sulfuras:
            return new SulfurasProduct(name, quality, sellIn);
        case ProductTypes.BackstagePass:
            return new BackstagePassProduct(name, quality, sellIn);
        case ProductTypes.Conjured:
            return new ConjuredProduct(name, quality, sellIn);
        default:
            return new NormalProduct(name, quality, sellIn);
    }
};