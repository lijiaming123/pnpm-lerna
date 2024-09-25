const inquirer = require('inquirer')

function inquirerPrompt(argv) {
    const { name } = argv;
    return new Promise((resolve, reject) => {
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: '模板名称',
          default: name,
          validate: function (val) {
            if (!/^[a-zA-Z]+$/.test(val)) {
              return "模板名称只能含有英文";
            }
            return true;
          },
        },
        {
          type: 'list',
          name: 'type',
          message: '使用什么框架类型开发',
          choices: ['vue2', 'vue3', 'react'],
          filter: function (value) {
            return {
              'vue2': "vue2",
              'vue3': "vue3",
              'react': "react",
            }[value];
          },
        },
        {
            type: 'list',
            name: 'UI',
            message: '使用什么UI库',
            choices: ['element-ui', 'ant-design', 'vant-ui'],
            filter: function (value) {
              return {
                'element-ui': "element-ui",
                'ant-design': "ant-design",
                'vant-ui': "vant-ui",
              }[value];
            },
          },
          {
            type: 'confirm',
            name: 'isTs',
            message: '是否使用TypeScript',
            default: true
          },
      ]).then(answers => {
        console.log(answers)
      }).catch(error => {
        reject(error)
      })
    })
  
  }
  
  exports.inquirerPrompt = inquirerPrompt;