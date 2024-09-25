#! /usr/bin/env node
// import-local 是一个 Node.js 包，专门用于在执行命令行工具时优先使用本地安装的依赖版本，而不是全局安装的版本。
// 这样可以确保在项目中的工具使用的是项目本身依赖的版本，而不是系统全局的版本，避免版本不一致导致的错误。
console.log(1)
const importLocal = require('import-local')

// 检查本地是否有这个包
if (importLocal(__filename)) {
    // 如果本地存在，则直接使用本地版本，退出全局
    console.log('Using local version of the package');
  } else {
    // 如果本地不存在，则继续执行全局安装的包
    console.log('Using global version of the package');
  }

const process = require('process');
console.log(process.argv);

const yargs = require('yargs');
console.log('name', yargs.argv.name);
const { inquirerPrompt } = require("./inquirer");
console.log(inquirerPrompt)
// 在 Node.js 中，yargs 是一个流行的命令行参数解析库，专门用来构建交互式的命令行工具。它可以帮助你轻松地处理命令行中的参数和选项，提供友好的用户体验，包括自动生成帮助信息、解析参数、支持子命令等。

// yargs 的主要功能
// 解析命令行参数：yargs 可以将复杂的命令行输入解析成 JavaScript 对象，便于处理。
// 自动生成帮助信息：yargs 可以根据定义的命令和选项自动生成 --help 信息，帮助用户了解工具的用法。
// 支持子命令：你可以使用 yargs 定义多个子命令，例如 mycli start 和 mycli stop。
// 别名支持：可以为命令行参数定义别名，比如 -v 等同于 --version。
// 默认值支持：你可以为参数设定默认值，防止用户未提供该参数时发生错误。
// 参数类型验证：确保传入的参数是预期的类型，如 number、string、boolean 等。
// 交互式提示：可以通过 yargs 集成交互式提示功能，让用户输入所需的信息。
yargs.command(['create','c'], '新建模版', function(yargs){
    return yargs.option('name', {
        alias: 'n',
        demandOption: true,
        describe: '模板名称',
        type: 'string'
    }),
    function (argv) {
        inquirerPrompt(argv).then(answers =>{
          console.log(answers)
        })
      }
}).argv

