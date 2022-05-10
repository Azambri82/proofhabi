import{types} from '../app/types/types'
export const name = (userName)=>{
    return{
        type:types.name,
        payload:{
            userName,
        }
    }
}