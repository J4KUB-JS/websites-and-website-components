const rating = document.querySelectorAll('form button')
const submitButton = document.querySelector('.b-submit')
const ratingSection = document.querySelector('.rating-box')
const thankYouSection = document.querySelector('.thankU')
const userRating = document.querySelector('#user-rating')
const info = document.querySelector('#info')

let selectedRating = 0
rating.forEach(button =>{

    button.addEventListener('click', (e)=>{

        e.preventDefault()

        rating.forEach(rating =>{
            if(rating.classList.value === 'selected'){
                rating.classList.remove('selected')
                rating.classList.add('button-rate')
            }
        })

        button.classList.remove('button-rate')
        button.classList.add('selected')
        selectedRating = button.innerHTML
        
    })
})

submitButton.addEventListener('click', (e)=>{
    if(selectedRating == 0){
        info.classList.add('animate')
        info.innerHTML = 'Please select rating!'
    }else{
        ratingSection.style.display = 'none'
        thankYouSection.style.visibility = 'visible'
        
        userRating.innerHTML = selectedRating
        
    }
})
