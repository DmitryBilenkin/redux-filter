import { useDispatch } from "react-redux";
import { deleteItemListAction, currentIdAction } from "../store/reducers/listReducer";
import { setUserServiceNameAction, setUserPriceAction, setUserCancelAction} from "../store/reducers/serviceReducer";


export default function ListItem(props) {
    const dispatch = useDispatch();

    const onEditHandler =()=>{
        dispatch(setUserServiceNameAction(props.nameOfService));
        dispatch(setUserPriceAction(props.price));        
        dispatch(setUserCancelAction(true));
        dispatch(currentIdAction(props.id));
    }

    const onDeleteHandler =()=>{        
        dispatch(deleteItemListAction(props.id));
    }

  return (
    <div style={{display:'flex'}}>
        <div style={{marginRight: 10}}>Услуга: {props.nameOfService}, цена: {props.price}</div>
        <button onClick={onEditHandler}>Edit</button>
        <button onClick={onDeleteHandler}>&times;</button>
    </div>
  )
}
