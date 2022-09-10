function editProfile() {
    document.querySelector('.container').style.display = 'none'
    document.querySelector('.edit-container').style.display = 'block'

    const fname = document.querySelector('#fname').textContent
    document.querySelector('#input-fname').value = fname

    const lname = document.querySelector('#lname').textContent
    document.querySelector('#input-lname').value = lname

    const email = document.querySelector('#email').textContent
    document.querySelector('#input-email').value = email

    const dob = document.querySelector('#dob').textContent
    document.querySelector('#input-dob').value = dob
 }

 function saveProfile() {
    document.querySelector('#fname').textContent = document.querySelector('#input-fname').value
    document.querySelector('#lname').textContent = document.querySelector('#input-lname').value
    document.querySelector('#email').textContent = document.querySelector('#input-email').value
    document.querySelector('#dob').textContent = document.querySelector('#input-dob').value

    document.querySelector('.container').style.display = 'block'
    document.querySelector('.edit-container').style.display = 'none'
 }