import PRICE_DATA from "../data/price";

const getPrice = (systemArticle: any, fabricArticle: any, width: any) => {
    if (width < 60) {
        width = 60
    }
    return (PRICE_DATA.get(systemArticle) as any + PRICE_DATA.get(fabricArticle)) * width / 10000;
}

export default getPrice;