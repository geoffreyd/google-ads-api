// @ts-ignore
import { MobileAppCategoryConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'mobileAppCategoryConstants'
const GET_METHOD = 'getMobileAppCategoryConstant'
const GET_REQUEST = 'GetMobileAppCategoryConstantRequest'

export default class MobileAppCategoryConstantService extends Service {
    public async get(id: number | string): Promise<MobileAppCategoryConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as MobileAppCategoryConstant
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ mobile_app_category_constant: MobileAppCategoryConstant }>> {
        return this.getListResults('mobile_app_category_constant', options)
    }
}
