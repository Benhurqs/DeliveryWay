export default function(state = null, action) {
	switch (action.type) {
		case 'GOOGLE_DISTANCE': 
			return action.payload
	}
	return state
}