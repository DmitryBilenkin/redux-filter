import { useDispatch } from "react-redux";
import { addFilterAction } from "../store/reducers/filterReducer";

function Filter() {
    const dispatch = useDispatch()
    const onFilterHandler = (e)=>{
        dispatch(addFilterAction(e.target.value))
    }

  return (
    <div>
        <span style={{marginRight: 10}}>Фильтр</span>
        <input type='text' style={{marginBottom: 20}} onChange={onFilterHandler}/>       
    </div>
  )
}

export default Filter;
