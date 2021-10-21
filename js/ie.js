function isIE () {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}

// ie跳转
if (isIE()) {
    window.location.href = "ie.html"
}