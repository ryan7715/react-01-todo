import {useState} from "react";

function App() {
    const [todolist, setTodolist] = useState([]);
    const [todoValue, setTodoValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        if (todoValue === "" || todoValue === " ") {
            return;
        }
        setTodolist([...todolist, todoValue]);
        setTodoValue("");

    };

    const handleDeleteTodo = (target) => {
        // todoList에서 지우는 것
        // 지우는 대상을 특정하려면?
        // 클릭을 한 대상, event가 일어난 대상은 button임, "밥먹기"라는 글자도 아니고, li도 아님

        // 버튼을 통해서는 우리가 삭제해야 하는 "밥먹기"라는 그 대상 자체, 인덱스 번호를 가져올 수 있는 방법이 없음

        // 아래에 onClick에 부분에 함수 안의 함수 형태로 바꾸어, index번호를 받는 handleDeleteTodo로 바꿨음
        // 결론 :handleDeleteTodo 함수가 해야하는 일을 들어온 index번호를 받아 todoList의 값을 변경하는 일을 해야함

        // filter (o)  =>  걸러낸다  index가 아닌, 애들만 남기면 됨
        const result = todolist.filter((item, index) => {return target !== index });
        // 1순회 때 : "밥먹기" -> index : 0   -> 조건의 1 !== 0  -> result에 "밥먹기"포함됨
        // 2순회 때 : "잠자기" -> index : 0   -> 조건의 1 !== 1  -> false -> 걸러짐
        // 3순회 때 : "공부하기" -> index : 0   -> 조건의 1 !== 2  -> result에 "공부하기"포함됨

        // 결론인 ["밥먹기", "공부하기"] 새로운 array가 result에 저장됨
        setTodolist(result);
        // React는 todoList state의 값이 바뀌었으니 화면을 리렌더링함
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
                {todolist.map((item, index) => <li key={index}>
                    {item}
                    <button onClick={() =>{
                        return handleDeleteTodo(index)

                        // onClick이든 onSubmit, onChange에 제공되야 하는 함수 설계도엔 event만 제공
                        //
                        // event 뿐만 아니라, 다른 데이터도 필요하다면 그 함수 설계도만으로 불가능
                        //     => 함수 안의 함수를 새로 만들어서 내가 원하는 데이터를 집어넣어서 함수를 실행

                        // onClick이 실행되면 () => 가 실행되는 데
                        // 그 안에 handleDeleteTodo(index)가 실행됨
                    }}>❌</button>
                </li>) }
            </ul>
        </>
    )
}

export default App;