import { RESTAURANTs_LIST_REQUEST, RESTAURANTs_LIST_SUCCESS, RESTAURANTs_LIST_FAIL } from '../constants/restaurantConstants'

export const restaurantListReducer = (states = { restaurants: [] }, actions) => {
    switch (actions.type) {
        case RESTAURANTs_LIST_REQUEST:
            return { restaurants: [] }
        case RESTAURANTs_LIST_SUCCESS:
            return { restaurants: actions.payload }
        case RESTAURANTs_LIST_FAIL:
            return {restaurants:actions.payload}
        default:
            return states
    }
}