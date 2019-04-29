import * as types from "../type/type_count.js"

var defaultstate={
	count:0
}

export default function count(state=defaultstate,action){
	switch (action.type){
		case types.RESET:
			return {
				...state,
				count:0
			}
		case types.INCREMENT:
			return {
				...state,
				count:state.count + action.num
			}
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - action.num
            }           
        default:
            return state;			
	}
		
}
