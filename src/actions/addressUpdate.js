import{types} from '../app/types/types'
export const address = (address)=>{
    return{
        type:types.address,
        payload:{
            address,
        }
    }
}