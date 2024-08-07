console.log("hello")
const deleteEntry = document.querySelectorAll('.delete-button')

deleteEntry.forEach(data_id => data_id.onclick = handleClick)

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
}

