import { DragEvent, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './EntryCard.css'
import { ISDRAGGING } from '../../redux/actions'

export const EntryCard= ({ entry }) => {

    const dispatch=useDispatch()

    let startDragging=useSelector((state)=>state.rootReducer.startDragging)
    let endDragging=useSelector((state)=>state.rootReducer.endDragging)
    let isDragging=useSelector((state)=>state.rootReducer.isDragging)
    
    
    const onDragStart = ( event ) => {
        console.log(event);
        event.dataTransfer.setData('text', entry._id );
        dispatch(ISDRAGGING(true))
        console.log('isDragging si: ',isDragging);
       // startDragging();
    }

    const onDragEnd = () => {
        //endDragging();
    }

    const onClick=()=>{
    }


  return (
    <div
    onClick={onClick}
        // Eventos de drag
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
    >
        <div className='EntryCard'>
            <div>
                <h2>Nombre:</h2>
                <h1>{ entry.nombre }</h1>
            </div>

            <div >
                <h2>Teléfono:</h2>
                <h1>{ entry.telefono }</h1>
            </div>
        </div>
    </div>
    
  )
};