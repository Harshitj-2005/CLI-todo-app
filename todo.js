import Readline from "readline";

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = [];


const ShowMenu = () => {
    console.log("\n1:add your task");
    console.log("2:view task");
    console.log("3:remove task");
    console.log("4:Exit");
    rl.question("choose an option: ", handletask)
}
const handletask = (option) => {
    if (option === "1") {
        rl.question("Enter your task: ", (task) => {
            todos.push(task)
            console.log("task added");
            ShowMenu();
        });
    }
    else if (option === "2"){
        console.log("\nyour To-Do list\n");
        todos.forEach((task, index) => {
            console.log(`${index+1}. ${task}`);
        });
        ShowMenu();
    }
    else if (option === "3"){
        rl.question("enter task no. which you want to remove: ", (tasknumber) =>{
            const index = parseInt(tasknumber) - 1;
            todos.splice(index, 1);
            console.log("remove successfully")
            ShowMenu();
        })
    }
    else if (option === "4"){
        console.log("Good bye");
        rl.close();
    }
    else {
        console.log("enter a valid option");
        ShowMenu();
    }

};
ShowMenu();