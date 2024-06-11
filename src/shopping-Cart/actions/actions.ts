//'use client';

import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = ():{[id:string]:number} => {
    if (hasCookie('cart')) {
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
        return cookieCart;
    }
    return{}
}

export const addProductToCart = (id:string) => {
    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        cookieCart[id] = cookieCart[id] + 1;
    }else{
        cookieCart[id]=1;
    }

    setCookie('cart', JSON.stringify(cookieCart));
}

export const removePrtoductFromCart = (id:string) => {
    const cookieCart = getCookieCart();
    delete cookieCart[id];
    setCookie('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = (id:string) => {
    const cookieCart = getCookieCart();
    if(!cookieCart[id]) return;

    const itemsInCard = cookieCart[id] - 1;
    if(itemsInCard <= 0) {
        delete cookieCart[id];
    }else{
        cookieCart[id] = itemsInCard;
    }
    setCookie('cart', JSON.stringify(cookieCart));
}