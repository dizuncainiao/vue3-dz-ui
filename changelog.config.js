// eslint-disable-next-line no-undef
module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'test',
    'feat',
    'fix',
    'revert',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf'
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna'
  ],
  scopes: [],
  types: {
    chore: {
      description: '构建过程或辅助工具更改',
      emoji: '🤖',
      value: 'chore'
    },
    ci: {
      description: 'CI 相关更改',
      emoji: '🎡',
      value: 'ci'
    },
    docs: {
      description: '仅文档相关的更改',
      emoji: '📝',
      value: 'docs'
    },
    feat: {
      description: '写了一个新功能',
      emoji: '✨',
      value: 'feat'
    },
    fix: {
      description: '修复了一个 bug',
      emoji: '🐛',
      value: 'fix'
    },
    perf: {
      description: '提高性能的代码更改',
      emoji: '🚀',
      value: 'perf'
    },
    refactor: {
      description: '既不修复错误也不添加功能的代码更改',
      emoji: '💡',
      value: 'refactor'
    },
    release: {
      description: '创建发布提交',
      emoji: '🏹',
      value: 'release'
    },
    style: {
      description: '标记、空格、格式、缺少分号...',
      emoji: '🎨',
      value: 'style'
    },
    test: {
      description: '添加测试相关',
      emoji: '🚨',
      value: 'test'
    },
    revert: {
      description: '恢复之前的提交',
      emoji: '↪️',
      value: 'revert'
    },
    messages: {
      type: '选择您要提交的更改类型：',
      customScope: '选择这个组件影响的范围:',
      subject: '写一个简短的、命令式的变化描述:\n',
      body: '提供更详细的更改描述:\n ',
      breaking: '列出所有重大更改:\n',
      footer: '这个提交关闭的问题，例如 #123:',
      confirmCommit: '这个提交影响的包\n'
    }
  }
}
