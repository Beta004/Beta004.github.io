function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// 滑动阻尼逻辑
window.addEventListener("load", function() {
  const fixedContainer = document.querySelector('.fixed-container');
  const scrollContainer = document.querySelector('.scroll-container');
  
  // 设置 body 高度以恢复滚动条
  document.body.style.height = scrollContainer.scrollHeight + 'px';

  // 监听滚动事件
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollContainer.style.transform = `translateY(-${scrollTop}px)`;
  });
});