document.getElementById('learnMoreBtn').addEventListener('click', function() {
    alert('Thank you for your interest! Feel free to explore our catalog.');
  });

  document.getElementById('paymentBtn').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'block';
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'none';
  });
  
  document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('paymentPopup').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
  });  