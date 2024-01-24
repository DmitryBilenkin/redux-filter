import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import Filter from './Filter';

export default function List() {
  const { list } = useSelector(state => state.list) 
  const { filterValue } = useSelector(state => state.filter)

  const filtredList = list.filter((listItem => listItem.nameOfService.match(filterValue) !== null))

  return (
    <>
        <Filter />
        {filtredList.map(listItem => <ListItem key={listItem.id} nameOfService={listItem.nameOfService} price={listItem.price} id={listItem.id} />)}
    </>
    
    
  )
}
