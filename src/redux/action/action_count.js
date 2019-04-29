import * as types from "../type/type_count.js"


function increase(num){
	return {
		type:types.INCREMENT,
		num
	}
}

function deincrease(num){
	return {
		type:types.DECREMENT,
		num
	}
}

function reset() {
    return { type: types.RESET }
}

export {
    increase,
    deincrease,
    reset
}