import PRICE_DATA from "../data/price";

const getPrice = (systemId: string, fabricId: string, width: any) => {
    if (width < 60) {
        width = 60
    }
    return (PRICE_DATA.get(systemId) + PRICE_DATA.get(fabricId)) * width/10000;
}

export default getPrice;