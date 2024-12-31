// Event listener for the 'Find' button
document.querySelector(".search-btn").addEventListener("click", function () {
    const location = document.querySelector(".search-input").value.trim();
    if (location) {
      alert(`Searching weather for "${location}"...`);
      // هنا يمكن إضافة API لعرض بيانات الطقس بناءً على الموقع المدخل
    } else {
      alert("Please enter a location!");
    }
  });
  
  // Event listener for the 'Subscribe' button
  document.querySelector(".subscribe-btn").addEventListener("click", function () {
    const email = document.querySelector(".subscribe-input").value.trim();
    if (email && validateEmail(email)) {
      alert(`Thank you for subscribing with ${email}!`);
      // هنا يمكن إرسال البريد الإلكتروني إلى السيرفر (إذا أردت)
    } else {
      alert("Please enter a valid email!");
    }
  });
  
  // Function to validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }