import { log } from "console";
import inquirer from "inquirer";

let todos: string[] = [];

let loop = true;

while (loop) {
  let questions = await inquirer.prompt([
    {
      name: "todoApp",
      message: "Select the operation you want to do",
      type: "list",
      choices: ["ADD TODO", "DELETE TODO", "SHOW TODO", "EXIT"],
    },
  ]);
  if (questions.todoApp === "ADD TODO") {
    let answers: {
      TODO: string;
    } = await inquirer.prompt([
      {
        name: "TODO",
        type: "input",
        message: "Enter your Todo",
      },
    ]);
    const { TODO } = answers;
    // console.log(answers);
    if (TODO) {
      todos.push(TODO);
    } else {
      console.log("Kindly add something");
    }

    console.log(
      "__________________________Your Todos____________________________"
    );

    todos.forEach((e, i) => {
      console.log(i + 1 + ":" + e);
    });
    // console.log(todos[0]);
  } else if (questions.todoApp === "DELETE TODO") {
    let deleteValue = await inquirer.prompt([
      {
        name: "delete",
        type: "number",
        message: "Enter item number to remove",
      },
    ]);

    todos.splice(deleteValue.delete - 1, 1);
    // console.log(todos);
    console.log(
      "__________________________Your Todos____________________________"
    );
    todos.forEach((e, i) => {
      console.log(i + 1 + ":" + e);
    });

    // if (i + 1 != deleteValue.delete - 1) {
    //   console.log("Index not found");
    // }
  } else if (questions.todoApp === "SHOW TODO") {
    console.log(
      "__________________________Your Todos____________________________"
    );
    todos.forEach((e, i) => {
      console.log(i + 1 + ":" + e);
    });
  } else {
    loop = false;
  }
}
