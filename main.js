
const info = {
  name: 'YOUR_NAME',
  email: 'YOUR_EMAIL',
  phone: 'YOUR_PHONE',
  company: 'YOUR_CURRENT_COMPANY',
  linkedin: 'YOUR_LINKEDIN_URL',
  github: 'YOUR_GITHUB_URL',
  twitter: 'YOUR_TWITTER_URL',
  portfolio: 'YOUR_PORTFOLIO_URL',
  other: 'YOUR_OTHER_WEBSITE_URL'
}

const matchUpInfo = (key) => {
  if (key.includes('name'))       return info.name
  if (key.includes('email'))      return info.email
  if (key.includes('phone'))      return info.phone
  if (key.includes('company'))    return info.company
  if (key.includes('linkedin'))   return info.linkedin
  if (key.includes('github'))     return info.github
  if (key.includes('twitter'))    return info.twitter
  if (key.includes('portfolio'))  return info.portfolio
  if (key.includes('other'))      return info.other
  return ''
}

function fillInInfo() {
  const questions = Array.from(document.querySelectorAll('.application-question'))
  questions.forEach(item => {
    const key = item.querySelector('.application-label').textContent.toLowerCase()
    const value = matchUpInfo(key)
    const field = item.querySelector('.application-field input')
    if (field) {
      field.value = value
      field.text = value
    }
  })
}

fillInInfo()
