
document.getElementById("register-form").onsubmit = function(event) {
	event.preventDefault();
  if (validateForm()) {
    alert("Đăng ký thành công!");
    window.location.href = "index.html";
  }
  };
  
  function validateForm() {
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirm-password").value;
	var isValid = true;
	var errorMessage = "";
  
	if (username === "") {
	  errorMessage += "Vui lòng nhập tên đăng nhập\n";
	  isValid = false;
	}
  
	if (email === "") {
	  errorMessage += "Vui lòng nhập email\n";
	  isValid = false;
	} else {
	  // Kiểm tra định dạng email
	  var emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
	  if (!emailPattern.test(email)) {
		errorMessage += "Định dạng email không hợp lệ\n";
		isValid = false;
	  }
	}
  
	if (password === "") {
	  errorMessage += "Vui lòng nhập mật khẩu\n";
	  isValid = false;
	} else {
	  // Kiểm tra độ dài password
	  if (password.length < 6) {
		errorMessage += "Mật khẩu phải chứa ít nhất 6 ký tự\n";
		isValid = false;
	  }
	}
  
	if (confirmPassword === "") {
	  errorMessage += "Vui lòng nhập xác nhận mật khẩu\n";
	  isValid = false;
	} else {
	  // Kiểm tra confirm password có giống với password không
	  if (confirmPassword !== password) {
		errorMessage += "Mật khẩu không khớp\n";
		isValid = false;
	  }
	}
  
	if (!isValid) {
	  alert(errorMessage);
	}
  
	return isValid;
  }