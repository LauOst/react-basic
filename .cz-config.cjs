module.exports = {
  // 可选类型，和上面commitlint.config.js配置的规则一一对应
  types: [
    { value: 'feat', name: '特性:     ✨  新增功能', emoji: ':sparkles:' },
    { value: 'fix', name: '修复:     🐛  修复缺陷', emoji: ':bug:' },
    { value: 'docs', name: '文档:     📝  文档变更', emoji: ':memo:' },
    { value: 'style', name: '格式:     🌈  代码格式（不影响功能，例如空格、分号等格式修正）', emoji: ':lipstick:' },
    { value: 'refactor', name: '重构:     🔄  代码重构（不包括 bug 修复、功能新增）', emoji: ':recycle:' },
    { value: 'perf', name: '性能:     🚀  性能优化', emoji: ':zap:' },
    { value: 'test', name: '测试:     🧪  添加疏漏测试或已有测试改动', emoji: ':white_check_mark:' },
    {
      value: 'build',
      name: '构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）',
      emoji: ':package:',
    },
    { value: 'ci', name: '集成:     ⚙️  修改 CI 配置、脚本', emoji: ':ferris_wheel:' },
    { value: 'revert', name: '回退:     ↩️  回滚 commit', emoji: ':rewind:' },
    {
      value: 'chore',
      name: '其他:     🛠️  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
      emoji: ':hammer:',
    },
  ],
  // 消息步骤，正常只需要选择
  messages: {
    type: '选择一种你的提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '短说明:',
    body: '长说明，使用"|"换行(可选)：',
    footer: '关联关闭的issue，例如：#31, #34(可选):',
    confirmCommit: '确定提交说明?',
  },
  useEmoji: true,
  emojiAlign: 'center',
  allowCustomScopes: true,

  skipQuestions: ['scope', 'customScope', 'breaking', 'footer'],
  allowEmptyScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
}
