import React from 'react'

import firebase from "../Firebase";


function List() {

    const [todos, setTodos] = React.useState([])

    const [todo, setTodo] = React.useState();

    React.useEffect(() => {
        const getData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("Todos").get();
            setTodos(data.docs.map(doc => doc.data()));
        }
        getData();
    })

    const AddData = () => {
        const db = firebase.firestore();
        db.collection("Todos").add({ todo: todo })
    }

    function checkId(id) {
        console.log({id})
    }
    return (
        <div>
            <div>
                <input onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button onClick={AddData}>Add</button>
            </div>
            <div>
                <ul>
                    {
                        todos.map(doc => (
                            <div>
                                <div>
                                    <li>{doc.todo}</li>
                                </div>
                                <div>
                                    <button onClick={() => checkId(doc)}>Delete</button>

                                </div>
                            </div>

                        ))
                    }
                </ul>
            </div>
        </div>
    )

}



export default List