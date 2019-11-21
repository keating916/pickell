var formData = new FormData(document.getElementById("survey-form"))
const token = "1c5b73fe-1b1f-4bdd-9e4e-25206b0f4718"
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

let button = document.getElementById("submit")
button.addEventListener("click", e=> {
  Email.send({
    SecureToken : token,
    To : 'keating916@gmail.com',
    From : "keatingdev25@gmail.com",
    Subject : "Form Contact",
    Body : formData
}).then(
  message => alert(message)
);
})

  action="mailto:dummy1@chamisplace.com"
  method="POST"
  enctype="multipart/form-data"
  name="EmailTestForm">