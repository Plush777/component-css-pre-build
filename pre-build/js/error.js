var agent = navigator.userAgent.toLowerCase();

if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
    window.location.href = "error.html";
}