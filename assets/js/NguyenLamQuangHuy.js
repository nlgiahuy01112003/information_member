document.addEventListener("DOMContentLoaded", function () {
  // Hộp thoại xác nhận tuổi
  const isOldEnough = confirm("Bạn có đủ 18 tuổi không?");
  if (!isOldEnough) {
    alert("Bạn chưa đủ 18 tuổi, vui lòng quay lại sau.");
    window.location.href = "https://www.google.com"; // Chuyển hướng nếu chưa đủ 18
    return;
  }

  const fadeInElements = document.querySelectorAll(".fade-in");

  function checkScroll() {
    fadeInElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();

  // Hiệu ứng phát sáng khi di chuột vào các phần tử neon-text
  document.querySelectorAll(".neon-text").forEach(el => {
    el.addEventListener("mouseenter", function () {
      el.style.textShadow = "0 0 15px #0ff, 0 0 30px #0fa, 0 0 45px #0f8";
    });
    el.addEventListener("mouseleave", function () {
      el.style.textShadow = "0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0fa";
    });
  });

  // Xử lý nút bấm "Xem Dự Án"
  document.getElementById("viewProjectBtn").addEventListener("click", function () {
    alert("Đang cập nhật dự án...");
  });
});
