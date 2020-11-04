#!/usr/bin/env node
const program = require("commander")
const pkg = require("../package.json")
const inquirer = require("inquirer")
const ora = require("ora")
const chalk = require("chalk")

program.version(pkg.version, "-v, --version")

program
    .command("init <project_name>")
    .description("初始化项目")
    .action(function (project_name) {
        console.log(project_name)
    })
