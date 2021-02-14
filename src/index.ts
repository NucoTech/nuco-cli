import { Command } from "commander"

import pkg from "../package.json"
import newProject from "./lib/new"

const program = new Command()

// 链接版本
program.version(pkg.version)

// 初始化命令
program
    .command("new")
    .description("新建项目工程")
    .action(() => {
        newProject()
    })

// API文档生成命令
// 需要输入文件夹和输出文件夹
program
    .command("api")
    .description("生成API文档")
    .action(() => {
        console.log("API文档生成")
    })

// 文档生成命令
program
    .command("docs")
    .description("生成项目文档")
    .action(() => {
        console.log("生成项目文档")
    })

program.parse(process.argv)
