const actions = {
  'most-stars': require('./most-stars'),
  'most-forks': require('./most-forks'),
  'show-languages': require('./show-languages'),
  'laugh': require('./laugh'),
}

export default async function handleAction(res, payload) {
  const currentAction = res.action && res.action.slug
  console.log(currentAction)
  let replies = []
  if (actions[currentAction]) {
    console.log('Enter action')
    replies = await actions[currentAction].default(res, payload)
  } else if (res.reply()) {
    replies.push({
      type: 'text',
      content: res.reply(),
    })
  } else {
    replies.push({
      type: 'text',
      content: 'Sorry I did not understand',
    })
  }
  return replies
}
