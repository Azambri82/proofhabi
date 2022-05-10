import{types} from '../app/types/types'
export const bbq = (bbq)=>{
    return{
        type:types.bbq,
        payload:{
            bbq,
        }
    }
}
export const socialroom = (socialroom)=>{
    return{
        type:types.socialroom,
        payload:{
            socialroom,
        }
    }
}
export const park = (park)=>{
    return{
        type:types.park,
        payload:{
            park,
        }
    }
}