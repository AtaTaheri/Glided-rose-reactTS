import {useState, createContext} from 'react';
import {NormalProduct, ProductModel} from "../model/ProductModels";

interface IShopContext {
    items: NormalProduct[],
    date: Date,
    addItem: (item: NormalProduct) => void,
    restart: () => void,
    updateQuality: () => void
}

export const ShopContext = createContext<IShopContext>({
    items: [],
    date: new Date(),
    addItem: (item) => {
    },
    restart: () => {
    },
    updateQuality: () => {
    }
});


export const ShopContextProvider = (props: any) => {
    const [items, setItems] = useState<NormalProduct[]>([]);
    const [currentDate, setDate] = useState<Date>(new Date());


    const context = {
        items: items,
        date: currentDate,
        addItem: (item: NormalProduct) => {

            setItems((prev) => {
                prev.push(item);
                return prev;
            })
        },
        restart: () => {
            setItems([])
            setDate(new Date())
        },
        updateQuality: () => {
            items.map((item) => item.tickForward())
            setItems(items);
            setDate((prev) => {
                var ms = prev.getTime() + 86400000;
                return new Date(ms);
            })
        }
    }

    return (<ShopContext.Provider value={context}>
        {props.children}
    </ShopContext.Provider>);
}

