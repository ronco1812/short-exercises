const nameReducer = (state="", action) => {
    const {type, name} = action
    switch (type) {
        case "SET_NAME":
            return name
            break;
    
        default: return state
            break;
    }
}
export default nameReducer