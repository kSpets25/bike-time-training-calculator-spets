console.log("hello")
const deleteEntry = document.querySelectorAll('.delete-button')
const updateEntry = document.querySelectorAll('.update-button')

deleteEntry.forEach(data_id => data_id.onclick = handleClick)
updateEntry.forEach(data_id => data_id.onclick = handleClick)

async function handleClick(e) {
  const data_id= e.target.dataset.id
  const response = await fetch('/api/training-log/' + data_id, {
    method: 'DELETE' 
  })
  if (response.status === 200) {
    window.location.reload()
 } else {
  console.log('didnt work')
 } 

 async function handleClick(e) {
  const data_id= e.target.dataset.id
  const response = await fetch('/api/training-log/' + data_id, {
    method: 'update' 
  })
  if (response.status === 200) {
    //show form and update
    //submit
    window.location.reload()
 } else {
  console.log('didnt work')
 } 

 Handlebars.registerHelper("link", function(text, url) {
  var url = Handlebars.escapeExpression(url),
      text = Handlebars.escapeExpression(text)
      
 return new Handlebars.SafeString("<a href='" + url + "'>" + text +"</a>");
  })
}
}

