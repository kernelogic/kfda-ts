import axios from "axios";

/**
 * Various service functions regarding pricing and max dc
 */
const bytesToSize = (bytes: number): string => {
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];
    if (bytes === 0) return '0 Byte';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};

export async function getReadableBalance() {
    try {
        const balanceRes = await axios.get(`${process.env.BACKEND_URL}/allocator-balance`);
        return bytesToSize(balanceRes.data.balance);
    } catch (error) {
        console.error(`Allocator balance retrieval failure`, error);
        throw new Error(`Allocator balance retrieval failed`);
    }
}

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