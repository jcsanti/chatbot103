const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const languages = ['Asssembly', 'C', 'C++', 'Go', 'Java', 'JavaScript', 'Python', 'Ruby', 'Rust', 'Swift',]

export default async function showLanguage(res) {
  console.log('SHOW LANGUAGE')

  const replies = []
  const quickReplies = []
  languages.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `Top starred repos in ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}
