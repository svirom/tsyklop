document.addEventListener('DOMContentLoaded', function() {

  const amountInput = document.querySelector('.review-form .form-control-amount');
  const btnTips = document.querySelectorAll('.review-form__buttons .btn-tips');

  const ratingServices = document.querySelectorAll('.review-service');

  const fileUpload = document.querySelector('#review-load_file');
  const loadFileName = document.querySelector('.load-file-name');

  // tips amount
  btnTips.forEach(function(btnTip) {
    btnTip.addEventListener('click', function() {
      const tipAmount = this.getAttribute('data-amount');
      
      amountInput.value = tipAmount;
    })
  })

  // rating
  ratingServices.forEach(function(ratingService) {
    const ratingItems = ratingService.querySelectorAll('.review-list .review-item');
    const textRating = ratingService.querySelector('.review-service__rating');

    ratingItems.forEach(function(ratingItem) {
      ratingItem.addEventListener('click', function() {
        const dataRating = ratingItem.getAttribute('data-value');
        const ratingInput = ratingItem.closest('.review-service').querySelector('.form-question');
  
        ratingItems.forEach(function(ratingItem) {
          ratingItem.classList.remove('active');
        })
        ratingItem.classList.add('active');
        
        switch (dataRating) {
          case '1':
            textRating.innerText = textRating.getAttribute('data-value-1');
            break;
          case '2':
            textRating.innerText = textRating.getAttribute('data-value-2');
            break;
          case '3':
            textRating.innerText = textRating.getAttribute('data-value-3');
            break;
          case '4':
            textRating.innerText = textRating.getAttribute('data-value-4');
            break;
          case '5':
            textRating.innerText = textRating.getAttribute('data-value-5');
            break;
        }
  
        ratingInput.value = dataRating;
      })
    })
  })


  // file upload
  fileUpload.addEventListener('change', function() {
    loadFileName.innerText = fileUpload.files[0].name;
  })

})