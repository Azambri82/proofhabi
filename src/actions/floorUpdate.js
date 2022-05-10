import{types} from '../app/types/types'
export const floor = (floor)=>{
    return{
        type:types.floor,
        payload:{
            floor,
        }
    }
}