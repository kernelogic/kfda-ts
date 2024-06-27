import axios from "axios";

/**
 * Various service functions regarding pricing and max dc
 */

export async function getMaxDataCap(amountInTiB: number) {
    try {
        const balanceRes = await axios.get(`${process.env.BACKEND_URL}/allocator-balance`);
        const balanceInTiB = balanceRes.data.balance / (1024 ** 4);

        if(balanceInTiB < 100) {
            if(balanceInTiB >= amountInTiB) {
                return amountInTiB;
            } else {
                throw new Error(`Allocator balance not enough to cover amount requested (${balanceInTiB} vs ${amountInTiB} TiB)`);
            }
        } else {
            if(balanceInTiB *2 >= amountInTiB) {
                return amountInTiB
            } else {
                throw new Error(`Requested amount is more than 50% of allocator balance (${balanceInTiB} vs ${amountInTiB} TiB)`)
            }
        }
    } catch (error) {
        console.error(`Allocator balance retrieval failure`, error);
        throw new Error(`Allocator balance retrieval failed`);
    }
}

export async function getPricing(dataset: string) {
    return process.env.FIL_DC_PRICE;
}