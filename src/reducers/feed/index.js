import { Map } from 'immutable';

const initialState = Map({
    currentPhoto: null
})

export default function feedReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}