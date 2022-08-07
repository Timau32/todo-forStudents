import AppHeader from "../app-header";
import TodoList from "../todo-list";

const Janysh = "Dalbaeb";

const App = ({ userName }) => {
  //   const { userName } = props;

  const todoData = [
    <b>Drink Coffee</b>,
    "Make morning exercise",
    "Read Book",
    "Make awesome React App",
  ];

  console.log(userName);
  return (
    <div>
      <AppHeader userName={userName} Janysh={Janysh} />
      <TodoList />

      <p>{todoData}</p>
    </div>
  );
};

export default App;
