import { RESTAURANTs_LIST_REQUEST, RESTAURANTs_LIST_SUCCESS, RESTAURANTs_LIST_FAIL } from '../constants/restaurantConstants'
import axios from 'axios'

export const listRestaurants = () => async (dispatch) => {
    try {
        dispatch({ type: RESTAURANTs_LIST_REQUEST })
        const { data } = await axios.get('/restaurants.json')
        dispatch({ type: RESTAURANTs_LIST_SUCCESS, payload: data.restaurants })

    }
    catch (error) {
        dispatch({type:RESTAURANTs_LIST_FAIL,payload:error})
    }
}