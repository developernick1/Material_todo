import React, { useState } from 'react';
import './material_todo.css'
// import './todo.css'
import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
import ListTodo from './ListTodo';

const TodoMaterial = () =>
{
    const [list, setList] = useState();
    const [item, setItem] = useState([]);

    const inValue = (events) =>
    {
        return(
            setList(events.target.value)
        );
    }

    const butnPress = () => {
            setItem((arra) => {
                return[...arra,list]
            }
            );
            setList("")
        }

        const DeItem = (id) =>
        {
            setItem((itemDel) => {
                return itemDel.filter((arrDel, index) => 
                {
                   return index !== id; 
                }
                )
            }
            );
        }

    return(
        <>
            {/* <div className="list">
                <div>
                        <h1>TODO LIST</h1>
                        <input type="text" className="enterInput" value={list} onChange={inValue} placeholder="Enter The Task" />
                        <AddIcon className="newBtn" onClick={butnPress} />
                    <br />
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox"/>
                                    <p>Work</p>
                                    <span></span>
                                </label>
                            </li>
                        </ul>
                    <br />
                </div>
            </div> */}

            <div className="main_div">
                <div className="center-div">
                    <br />
                        <h1>TODO LIST</h1>
                    <br />
                        <input type="text" value={list} onChange={inValue} placeholder="Enter The Task" />
                        <AddIcon className="newBtn" onClick={butnPress} />
                    <br />
                        <ul>
                            {item.map( (val, index) => 
                            {
                                return (
                                    <ListTodo texert={val} key={index} id={index} deleteList={DeItem}/>
                                ); 
                            })   
                            }
                        </ul>
                    <br />
                </div>
            </div>
        </>
    );
}

export default TodoMaterial;