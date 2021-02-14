import chalk from "chalk"
import inquirer from "inquirer"

// 初始化项目
const newProject = () => {
    const questions = [
        {
            type: "input",
            name: "projName",
            message: "请输入项目名称",
            default: "awesomeNucoProject",
        },
        {
            type: "list",
            name: "projTemp",
            message: "请输入项目模板类型",
            choices: ["raw-react", "easy-react"],
        },
        {
            type: "confirm",
            name: "projSure",
            message: "是否确认创建项目",
        },
    ]
    inquirer
        .prompt(questions)
        .then((answers: any) => {
            // 中断项目创建
            if (!answers.projSure) {
                console.log(
                    chalk.bgRed("Tips: "),
                    chalk.red("用户手动终止了项目创建")
                )
                return
            }

            // 判断项目创建位置
            if (answers.projName.length === 0) {
                // 当前目录创建
                console.log(chalk.green("正在当前目录下创建新的项目~"))
            } else {
                console.log(
                    chalk.green(
                        `正在子目录 ${answers.projName} 下创建新的项目~`
                    )
                )
            }

            // 开始创建
            console.log(chalk.yellow(`项目模板为: ${answers.projTemp}`))

        })
        .catch((error: any) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(chalk.bgRed("当前环境不能加载此命令行"))
            } else {
                // Something else went wrong
            }
        })
}

export default newProject
