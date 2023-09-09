import inquirer from "inquirer";
import "colors";

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you wanna do?",
    choices: [
      { value: "1", name: `${"1.".green} Use the directoryToTree function` },
      { value: "0", name: `${"0.".green} Exit` },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("Select an option".green);
  console.log("===========================\n".green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

export const stop = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `\nPress ${"ENTER".green} to continue\n`,
    },
  ];
  await inquirer.prompt(question);
};

export const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message: message,
      validate(value) {
        if (value.length === 0) {
          return "Please submit a value";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};
