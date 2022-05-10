import{types} from '../app/types/types'
export const mail = (mail)=>{
    return{
        type:types.mail,
        payload:{
            mail,
        }
    }
}