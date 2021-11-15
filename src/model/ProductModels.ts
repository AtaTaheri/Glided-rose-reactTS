
export enum ProductTypes {

    Normal= 'Normal',
    AgedBrie= 'AgedBrie',
    Sulfuras= 'Sulfuras',
    BackstagePass= 'BackstagePass',
    Conjured = 'Conjured'

}

export interface IProductItem {
    name: string;
    sellIn: number;
    quality: number;
}

export class ProductModel implements IProductItem {
    name: string;
    quality: number;
    sellIn: number;

    constructor(name: string, quality: number, sellIn: number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }
}

export class NormalProduct extends ProductModel {


    tickForward(): void {
        this.sellIn = this.tomorrowSellIn();
        this.quality = Math.max(this.tomorrowQuality(), 0);
        this.quality = Math.min(this.quality, 50);
    }

    tomorrowSellIn(): number {
        return this.sellIn - 1;
    }

    tomorrowQuality(): number {
        let outPut: number = this.quality - 1;
        if (this.sellIn <= 0) {
            //degrade twice
            outPut--;
        }

        return outPut;
    }

    productType(): string{
        return ProductTypes.Normal;
    }
}

export class AgedBrieProduct extends NormalProduct {

    tomorrowQuality(): number {
        //upgrade
        return this.quality + 1;
    }

    productType(): string{
        return ProductTypes.AgedBrie;
    }

}

export class SulfurasProduct extends NormalProduct {

    tomorrowQuality(): number {
        return this.quality;
    }

    tomorrowSellIn(): number {
        return this.sellIn;
    }

    productType(): string{
        return ProductTypes.Sulfuras;
    }
}

export class BackstagePassProduct extends NormalProduct {
    tomorrowQuality(): number {
        if (this.sellIn < 0)
            return 0;

        let output: number = this.quality + 1;

        if (this.sellIn <= 10) {
            output++;
        }

        if (this.sellIn <= 5) {
            output++;
        }

        return output;

    }

    productType(): string{
        return ProductTypes.BackstagePass;
    }
}

export class ConjuredProduct extends NormalProduct {
    tomorrowQuality(): number {
        let outPut: number = this.quality - 2;

        if (this.sellIn <= 0) {
            //degrade twice
            outPut-= 2;
        }

        return outPut;

    }

    productType(): string{
        return ProductTypes.Conjured;
    }
}



