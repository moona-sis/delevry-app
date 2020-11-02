
const initialState={
    pickup:{
        firstname: '',
        lastname: '',
        compagny: '',
        address: '',
        phone: '',
        email: '',
        details:'',
        savedToAddressBook: false
    },
    dropOff:[{
        firstname: '',
        lastname: '',
        compagny: '',
        phone: '',
        address: '',
        email: '',
        details:'',
        savedToAddressBook: false,
        orderId: '',
        orderInformations: '',
        imageDisplayed: true
      }],
    vehicule: 3,
    when:1,
    date: null,
    time:null
}

const DelevryReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'SET_STATE':
            return {...state, ...action.payload}
            default:
                return state
    }
}

export default DelevryReducer