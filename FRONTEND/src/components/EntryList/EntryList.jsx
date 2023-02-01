import { FC, useContext, useMemo, DragEvent } from 'react';
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EntryCard } from '../EntryCard/EntryCard';
import './EntryList.css'
import { ISDRAGGING ,STATEENTRY } from '../../redux/actions'

export const EntryList = ({ status }) => {

    //const { entries, updateEntry } = useContext( EntriesContext );
    //const { isDragging, endDragging } = useContext( UIContext );

    const dispatch=useDispatch()

    let entries=useSelector((state)=>state.rootReducer.entries)
    let isDragging=useSelector((state)=>state.rootReducer.isDragging)

    const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ]);
    console.log('entries',entries)

    const allowDrop = ( event ) => {
        event.preventDefault();
    }

    const onDropEntry = ( event ) => {
        const id = event.dataTransfer.getData('text');
        console.log("id:",id)
        dispatch(ISDRAGGING(false))
       //console.log('isDragging no: ',isDragging)
        const entry = entries.filter( e => e._id === id );
        console.log('entry es1:',entry);
        let input = {}
        input.status = status;
        input._id=id;
        console.log('input es2:',input);
        //dispatch( UPDATEENTRY(entry) );
        dispatch( STATEENTRY(input) );
    }

      
    return (
        //   TODO: aquí haremos drop
        <div
            className={isDragging?'EntryList isdragging':'EntryList'}
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
        >
            <div>
                {/* <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px'  }}> */}
                    {/* <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>  */}
                        <div>
                            {
                                entriesByStatus.map( entry => (
                                    <EntryCard key={ entry._id } entry={ entry } />
                                ))
                            }
                        </div>
                
            </div>

            
        </div>
    )
};