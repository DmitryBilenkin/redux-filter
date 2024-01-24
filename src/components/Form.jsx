import { useSelector, useDispatch } from 'react-redux';
import { addItemToListAction, editItemListAction } from '../store/reducers/listReducer';
import { setUserPriceAction , setUserServiceNameAction, setUserIdAction, setUserCancelAction} from '../store/reducers/serviceReducer';

function Form() {
    const { price, nameOfService, cancel, id } = useSelector(state => state.service);
    const { currentId } = useSelector(state => state.list)
    const dispatch = useDispatch();    

    const setUserPriceHandler = (e)=>{
        dispatch(setUserPriceAction(e.target.value));
    }

    const setUserServiceNameHandler = (e)=>{
        dispatch(setUserServiceNameAction( e.target.value));
    }

    const onSaveDataHandler =(e)=>{ 
        e.preventDefault()

        dispatch(addItemToListAction({ id, nameOfService, price }));
        dispatch(setUserServiceNameAction(''));
        dispatch(setUserPriceAction(0));
        dispatch(setUserIdAction(1));            
    }

    const onCancelHandler = (e) => {
        e.preventDefault()

        dispatch(setUserServiceNameAction(''));
        dispatch(setUserPriceAction(0));
        dispatch(setUserCancelAction(false)) ;        
    }

    const onEditDataHandler=()=>{
        dispatch(editItemListAction({ id: currentId, nameOfService, price }))        
        dispatch(setUserServiceNameAction(''));
        dispatch(setUserPriceAction(0));
        dispatch(setUserCancelAction(false));
    }    

  return (
    <form style={{marginBottom: 20}}>
        <input type='text' onChange={setUserServiceNameHandler} value={nameOfService} required/>
        <input type='number' onChange={setUserPriceHandler} value={price} required/>
        {!cancel && <button onClick={onSaveDataHandler}>Save</button>}
        {cancel && <button onClick={onEditDataHandler}>Save</button>}
        {cancel && <button onClick={onCancelHandler}>Cancel</button>}
  </form>
  )
}

export default Form;
