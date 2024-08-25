import type {Guide} from "@/types/guide";
import ApiClient from "@/api/ApiClient";

const miscPath = '/misc'
export default class MiscApi {
    static async getGuides(): Promise<Guide[]> {
        return ApiClient.get(`${miscPath}/guide`).then(response => response.data)
    }
}