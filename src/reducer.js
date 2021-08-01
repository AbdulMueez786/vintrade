export const initialState={
basket:[],
user:null,
usertype:"",
selectedProduct:"Select User Type",
};

export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);

const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_USER':
              return{...state,user:action.user}
        break;
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state ,
                basket:[...state.basket,action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket
           let newBasket=[...state.basket];
           
           
           const index=state.basket.findIndex((basketItem)=> basketItem.id === action.id);
           
           console.log(index);

           if(index>=0){
            newBasket.splice(index,1);
            
           }else{

           }
            return {...state,basket:newBasket};
            break;

        case 'SET_USER_TYPE':
            return{...state,usertype:action.usertype}
            break;
        case 'SET_SELECTED_PRODUCT':
            state.selectedProduct=null;
            return{...state,selectedProduct:action.selectedProduct}
            break;
        default:
            return state;

    }
}

export default reducer;