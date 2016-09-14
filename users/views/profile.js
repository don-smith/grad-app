const { html } = require('inu')
const { navigate } = require('inux')

module.exports = user

function user ({id}, model, dispatch) {
  const user = model.user.find(function (user) {
    return user.id == id
  })
  return html`
  <main>
    <div class='grad'>
      ${ user ? 
        html`<div class="grad-image">
          <img src=${user.image_link} alt="image of ${user.name}">
        </div>
        <div>${user.name}</div>
        <div>${user.long_description}</div>
        <div>${user.phone}</div>
        <div>${user.cv_link}</div>
        <div>${user.github_link}</div>
        <div>${user.linkedin_link}</div>
        <div>${user.email}</div>
        <button onclick=${() => dispatch(navigate(`/`))}>Back</button>
        `
       : html`<h2>We got no grads</h2>` }
    </div>
  </main>
  `
}
