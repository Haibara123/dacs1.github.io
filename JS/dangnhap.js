
document.getElementById("login-form").onsubmit = function(event) {
	event.preventDefault();
  if (validateForm()) {
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  }
  };
  
  function validateForm() {
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
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
  
	if (!isValid) {
	  alert(errorMessage);
	}
  
	return isValid;
  }