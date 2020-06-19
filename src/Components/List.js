import React from 'react';
import { Button, TextField } from '@material-ui/core';
import firebase from "../Firebase";

import '../Components/List.css';


function List() {
    const [todos, setTodos] = React.useState([])

    const [todo, setTodo] = React.useState("");

    React.useEffect(() => {
        const db = firebase.firestore();

        const unsubscribe = db.collection("Todos").onSnapshot((snapshot) => {
            const todosData = []
            snapshot.forEach(doc => todosData.push(({ ...doc.data(), id: doc.id })));
            setTodos(todosData);
        });
        return unsubscribe;
    }, [])

    const AddData = () => {
        const db = firebase.firestore();
        if (todo === "" || todo===" "){
            console.log("null");
            return
        }
        db.collection("Todos").add({ todo: todo })
        setTodo("");
    }
    function deleteData(id) {
        const db = firebase.firestore();
        db.collection("Todos").doc(id).delete();
    }

    return (
        <div className="body">

            <div className="input">
                <TextField required={true} onChange={(e) => setTodo(e.target.value)} value={todo} id="outlined-basic" label="Add new Task" variant="outlined" />
                <Button className="button" onClick={AddData} variant="contained" color="primary" href="#contained-buttons">
                    Add
                </Button>
            </div>

            <div className="todoContainer">
                {
                    todos.map(doc =>
                        <ul>
                            <div className="todo">
                                <div className="liContainr">
                                    <li key={doc.id}>{doc.todo}</li>
                                </div>
                                <div className="deleteBtn">
                                    <Button className="dbutton" onClick={() => deleteData(doc.id)} variant="contained" color="secondary">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </ul>
                    )
                }
            </div>
        </div>
    )

}



export default List