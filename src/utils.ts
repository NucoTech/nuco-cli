// 常用工具函数
import fetch from "node-fetch"
import fs from "fs"
import { GithubRegEx } from "./constants"
const ora = require("ora")

/**
 * 检查是否是github的目录
 * @param link
 */
const checkIfGitHubDir = (link: string): boolean => {
    return /tree/.test(link)
}

/**
 * 下载文件
 */
export const getGitHubFiles = async (url: string, dir: string) => {
    const spinner = ora(`正在从 ${url} 获取模板信息~`).start()
    const response = await fetch(url)
    const body = response.text()
    body.then((data) => {
        spinner.succeed("获取模板信息成功~")
        const files = GithubRegEx.exec(data)
        if (!files) {
            throw new Error("匹配模板仓库文件信息失败!")
        } else {
            console.log(files[2])
            if (checkIfGitHubDir(files[2])) {
                // getGitHubFiles(`https://github.com/${files[2]}`, "")
            } else {
                // 不是目录
                console.log("不是目录")
            }
        }
    })
}
