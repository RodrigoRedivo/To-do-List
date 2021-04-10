import React from 'react';
import Card from './Card';
import * as Icon from 'react-feather';

function DoneImg(props) {
    if(props.done) {
           
        return (<Icon.CheckSquare/>)
        
    } else {
        
        return (<Icon.Square />)
        
    }
}

function ListItem(props) {

    return(
        <li>
            <Card className={props.item.done ? "done item" : "item"} >
                {props.item.text}
                <div>
                    <button onClick={()=>{ props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={()=>{ props.onItemDeleted(props.item)}}><Icon.Trash2 /></button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem;