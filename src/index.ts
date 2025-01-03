import inquirer from "inquirer";
import { exec } from "child_process";

const commands: { [key: string]: string } = {
  day1: "npm run day1",
  day2: "npm run day2",
  day3: "npm run day3",
  day4: "npm run day4",
  day5: "npm run day5",
  day6: "npm run day6",
  day7: "npm run day7",
  day8: "npm run day8",
};

inquirer
  .prompt([
    {
      type: "list",
      name: "command",
      message: "Choice a command to execute:",
      choices: Object.keys(commands),
    },
  ])
  .then((answers) => {
    const command = commands[answers.command as string];
    console.log(`Executing: ${command}`);
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${err.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Envoironment does not support TTY");
    } else {
      console.error(`Error: ${error.message}`);
    }
  });
