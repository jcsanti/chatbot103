const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function trendingStars(res) {
  console.log('TRENDING STARS')

  const replies = []
  const cardsReplies = []
  const language = res.getMemory('language')
  console.log('======================================')
  console.log(language)
  console.log('======================================')
  replies.push(formatter.formatMsg(res.reply()))
  const response = await agent('GET', `https://api.github.com/search/repositories?q=language:${language.value}&sort=stars&order=desc`)
  console.log('======================================')
  console.log(response)
  console.log('======================================')
  const repos = response.body.items.slice(0, 10)
  console.log('======================================')
  console.log(repos)
  console.log('======================================')
  repos.forEach((rep) => {
    cardsReplies.push({
      name: rep.name,
      picture: rep.owner.avatar_url,
      link: rep.html_url,
    })
  })
  replies.push(formatter.formatCardsReplies(cardsReplies))
  return replies
}
