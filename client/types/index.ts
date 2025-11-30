export interface CartItem {
    id: number;
    name: string;
    price: number;
    discountPrice?: number;
    image: string;
    quantity: number;
    category?: string;
    size?: string;
    color?: string;
    availableSizes?: string[];
    availableColors?: string[];
}