import {useState} from "react";

function App() {
    const [todolist, setTodolist] = useState([]);
    const [todoValue, setTodoValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        // 함수에서 if문을 쓸 떄는 된다 / 안된다를 판별하는 과정임
        // 초보분들의 생각 흐름은 해야되는 일을 중심으로 if의 조건과 구성하게 됨
        // 아래 코드는 input의 입력값이 ""이 아닐 때에만 저장을 해달라고 해야지~
        // if (todoValue === "") {
        //     setTodolist([...todolist,todoValue]);
        //     setTodoValue("");
        // }


        // if문을 통해 된다 / 안된다를 판별할 때에는 안될 때를 탈락 시키는 코드 구성을 가져야 함
        // YES를 진행하는 과정으로 코드를 진행홰야 함
        if (todoValue === "" || todoValue === " ") {
            return;
        }
        setTodolist([...todolist, todoValue]);
        setTodoValue("");

    };

    return (
        <>
        <h1>My ToDo ({todolist.length}) </h1>
            <form onSubmit={handleSubmit}>
                <input type={"text"}
                       placeholder={"Write your to do..."}
                       onChange={(event) => { setTodoValue(event.target.value) }}
                       value={todoValue}

                />
                <button type="submit">Add To DO</button>
            </form>
            <hr />
            <ul>
                {/*
                  return 안에서 {}를 통해 map()을 사용할 대에는
                  반복되는 요소가 출력되기 때문에 그걸 리액트가 구분할 수 있도록 key(중복되지 않는 값)를 붙여줘야 함
                  key(중복되지 않는 값)를 리턴되는 최상위 요소에게 붙여줘야 함
                  (인식표 개념)
                */}
                {todolist.map((item, index) => <li key={index}>{item}</li>) }
            </ul>
        </>
    )
}


export default App;