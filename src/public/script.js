console.log('hello from the browser JavaScript')

const handleResponse = (response, event) => {
  event.target.parentNode.parentNode.remove()
}

const deleteReview = (event) => {
  const confirmed = confirm('Are you sure you want to delete this review?')
  if (confirmed) {
    const reviewId = parseInt(event.target.attributes.value.nodeValue)
    fetch(`/reviews/${reviewId}`, {method: 'delete', credentials: 'include'})
    .then(response => handleResponse(response, event))
    .catch(error => console.log('Error in fetching::', error.stack))
  }
}

document.querySelectorAll('.delete-review').forEach(delbutton => {
  delbutton.addEventListener('click', deleteReview)
})
