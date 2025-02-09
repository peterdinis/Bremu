import type { SchemaTypeDefinition } from "sanity";
import { order, orderItem, shippingAddress } from "./order";
import { product } from "./product";
import { productCategory } from "./product-category";
import { promotionCampaign } from "./promotion-campaign";
import { promotionCode } from "./promotion-codes";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		promotionCode,
		promotionCampaign,
		productCategory,
		product,
		shippingAddress,
		orderItem,
		order,
	],
};
