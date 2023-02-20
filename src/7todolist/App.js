import { useState } from "react";

// function MyTest() {
//     return [1,2];
// }
// function MyObj() { 
//     var obj = {};
//     obj.name = "simeunji";
//     obj.age = 27;
//     return obj;
// }
// function MyMulti() {
//     var arr = [];
//     var obj1 = {};
//     var obj2 = {};
//     obj1.name = "aa";
//     obj1.age = 13;
//     obj2.name = "bb";
//     obj2.age = 23;
//     arr.push(obj1);
//     arr.push(obj2);
//     return arr;
// }
// function MyString() {
//     var str = "test-string";
//     return str;
// }
// function MySum(count) {
//     var sum =0;
//     for(var i=1; i<=count; i++){
//         sum += i;
//     }
//     return sum;
// }
function App() {
    // var myArr = MyTest();
    // console.log(myArr);
    // var myObj = MyObj();
    // console.log(myObj);
    // var myMulti = MyMulti();
    // console.log(myMulti);
    // var myString = MyString();
    // console.log(myString);
    // var mySum = MySum(100);
    // console.log(mySum);

    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };
    console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
