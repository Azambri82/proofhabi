import { types } from "../app/types/types";
const initialState = {
    name:'',
    mail:'',
    address:'',
    floor:'',
    bbq:'',
    socialroom:'',
    park:'',
    step:0
}

export const dataReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.name:
            return {
                ...state,
                name:action.payload.userName
            }
        case types.mail:
            return {
                ...state,
                mail:action.payload.mail
            }
        case types.address:
            return {
                ...state,
                address:action.payload.address
            }
        case types.floor:
            return {
                ...state,
                floor:action.payload.floor
            }
        case types.bbq:
            return {
                ...state,
                bbq:action.payload.bbq?"Zona BBQ":""
            }
        case types.socialroom:
            return {
                ...state,
                socialroom:action.payload.socialroom?"Salon social":""
            }
        case types.park:
            return {
                ...state,
                park:action.payload.park?"Parque de niños":""
            }
        default:
            return state;
    }
}