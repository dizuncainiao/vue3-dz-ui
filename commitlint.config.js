// eslint-disable-next-line no-undef
module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
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
      ]
    ]
  },
  prompt: {
    questions: {
      type: {
        description: '选择您要提交的更改类型',
        enum: {
          chore: {
            description: '构建过程或辅助工具更改',
            emoji: '🤖',
            title: 'chore'
          },
          ci: {
            description: 'CI 相关更改',
            emoji: '🎡',
            title: 'ci'
          },
          docs: {
            description: '仅文档相关的更改',
            emoji: '📝',
            title: 'docs'
          },
          feat: {
            description: '写了一个新功能',
            emoji: '✨',
            title: 'feat'
          },
          fix: {
            description: '修复了一个 bug',
            emoji: '🐛',
            title: 'fix'
          },
          perf: {
            description: '提高性能的代码更改',
            emoji: '🚀',
            title: 'perf'
          },
          refactor: {
            description: '既不修复错误也不添加功能的代码更改',
            emoji: '💡',
            title: 'refactor'
          },
          release: {
            description: '创建发布提交',
            emoji: '🏹',
            title: 'release'
          },
          style: {
            description: '标记、空格、格式、缺少分号...',
            emoji: '🎨',
            title: 'style'
          },
          test: {
            description: '添加测试相关',
            emoji: '🚨',
            title: 'test'
          },
          revert: {
            description: '恢复之前的提交',
            emoji: '↪️',
            title: 'revert'
          }
        }
      },
      scope: {
        description:
          'What is the scope of this change (e.g. component or file name)'
      },
      subject: {
        description: 'Write a short, imperative tense description of the change'
      },
      body: {
        description: 'Provide a longer description of the change'
      },
      isBreaking: {
        description: 'Are there any breaking changes?'
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself'
      },
      breaking: {
        description: 'Describe the breaking changes'
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?'
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)'
      }
    }
  }
}
