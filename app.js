#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const runQuiz = async () => {
    const quiz = await inquirer.prompt([
        {
            name: "question_1",
            type: "list",
            message: "Q1: What component is often referred to as the brain of the computer?",
            choices: [
                "A. Hard Drive",
                "B. Central Processing Unit (CPU)",
                "C. Random Access Memory (RAM)",
                "D. Graphics Card"
            ]
        },
        {
            name: "question_2",
            type: "list",
            message: "Q2: Which type of memory is used for temporary storage and quick access by the CPU?",
            choices: [
                "A. Hard Drive",
                "B. ROM",
                "C. Random Access Memory (RAM)",
                "D. Cache Memory"
            ]
        },
        {
            name: "question_3",
            type: "list",
            message: "Q3: What does the acronym OS stand for in computer terminology?",
            choices: [
                "A. Optical Storage",
                "B. Operating System",
                "C. Online Service",
                "D. Output Source"
            ]
        },
        {
            name: "question_4",
            type: "list",
            message: "Q4: Which of the following is an example of system software?",
            choices: [
                "A. Microsoft Word",
                "B. Google Chrome",
                "C. Windows 10",
                "D. Adobe Photoshop"
            ]
        },
        {
            name: "question_5",
            type: "list",
            message: "Q5: What is the primary function of a computer network?",
            choices: [
                "A. To play video games",
                "B. To connect and communicate between computers",
                "C. To run software applications",
                "D. To display graphics"
            ]
        }
    ]);
    let score = 0;
    const checkAnswer = (question, answer, correctAnswer) => {
        if (answer === correctAnswer) {
            console.log(chalk.green(`${question} correct!`));
            ++score;
        }
        else {
            console.log(chalk.red(`${question} incorrect`));
        }
    };
    checkAnswer("Q1", quiz.question_1, "B. Central Processing Unit (CPU)");
    checkAnswer("Q2", quiz.question_2, "C. Random Access Memory (RAM)");
    checkAnswer("Q3", quiz.question_3, "B. Operating System");
    checkAnswer("Q4", quiz.question_4, "C. Windows 10");
    checkAnswer("Q5", quiz.question_5, "B. To connect and communicate between computers");
    console.log(chalk.blue(`Your total score is: ${score} out of 5`));
};
runQuiz();
