// @ts-ignore
import { AdScheduleView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adScheduleViews'
const GET_METHOD = 'getAdScheduleView'
const GET_REQUEST = 'GetAdScheduleViewRequest'

export default class AdScheduleViewService extends Service {
    public async get(id: number | string): Promise<AdScheduleView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdScheduleView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_schedule_view: AdScheduleView }>> {
        return this.getListResults('ad_schedule_view', options)
    }
}
