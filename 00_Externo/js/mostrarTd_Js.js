
<!DOCTYPE html>
<html lang="pt">
  <head>
  <meta charset="utf-8">
  <meta content="width=300, initial-scale=1" name="viewport">
  <meta name="google-site-verification" content="LrdTUW9psUAMbh4Ia074-BPEVmcpBxF6Gwf0MSgQXZs">
  <title>Fazer login nas Contas do Google</title>
  <style>
  @font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(//fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN_r8OUuhs.ttf) format('truetype');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(//fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0e.ttf) format('truetype');
}
  </style>
  <style>
  h1, h2 {
  -webkit-animation-duration: 0.1s;
  -webkit-animation-name: fontfix;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 0;
  }
  @-webkit-keyframes fontfix {
  from {
  opacity: 1;
  }
  to {
  opacity: 1;
  }
  }
  </style>
<style>
  html, body {
  font-family: Arial, sans-serif;
  background: #fff;
  margin: 0;
  padding: 0;
  border: 0;
  position: absolute;
  height: 100%;
  min-width: 100%;
  font-size: 13px;
  color: #404040;
  direction: ltr;
  -webkit-text-size-adjust: none;
  }
  button,
  input[type=button],
  input[type=submit] {
  font-family: Arial, sans-serif;
  font-size: 13px;
  }
  a,
  a:hover,
  a:visited {
  color: #427fed;
  cursor: pointer;
  text-decoration: none;
  }
  a:hover {
  text-decoration: underline;
  }
  h1 {
  font-size: 20px;
  color: #262626;
  margin: 0 0 15px;
  font-weight: normal;
  }
  h2 {
  font-size: 14px;
  color: #262626;
  margin: 0 0 15px;
  font-weight: bold;
  }
  input[type=email],
  input[type=number],
  input[type=password],
  input[type=tel],
  input[type=text],
  input[type=url] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: inline-block;
  height: 36px;
  padding: 0 8px;
  margin: 0;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  font-size: 15px;
  color: #404040;
  }
  input[type=email]:hover,
  input[type=number]:hover,
  input[type=password]:hover,
  input[type=tel]:hover,
  input[type=text]:hover,
  input[type=url]:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  }
  input[type=email]:focus,
  input[type=number]:focus,
  input[type=password]:focus,
  input[type=tel]:focus,
  input[type=text]:focus,
  input[type=url]:focus {
  outline: none;
  border: 1px solid #4d90fe;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  }
  input[type=checkbox],
  input[type=radio] {
  -webkit-appearance: none;
  display: inline-block;
  width: 13px;
  height: 13px;
  margin: 0;
  cursor: pointer;
  vertical-align: bottom;
  background: #fff;
  border: 1px solid #c6c6c6;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  }
  input[type=checkbox]:active,
  input[type=radio]:active {
  background: #ebebeb;
  }
  input[type=checkbox]:hover {
  border-color: #c6c6c6;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  }
  input[type=radio] {
  -moz-border-radius: 1em;
  -webkit-border-radius: 1em;
  border-radius: 1em;
  width: 15px;
  height: 15px;
  }
  input[type=checkbox]:checked,
  input[type=radio]:checked {
  background: #fff;
  }
  input[type=radio]:checked::after {
  content: '';
  display: block;
  position: relative;
  top: 3px;
  left: 3px;
  width: 7px;
  height: 7px;
  background: #666;
  -moz-border-radius: 1em;
  -webkit-border-radius: 1em;
  border-radius: 1em;
  }
  input[type=checkbox]:checked::after {
  content: url(https://ssl.gstatic.com/ui/v1/menu/checkmark.png);
  display: block;
  position: absolute;
  top: -6px;
  left: -5px;
  }
  input[type=checkbox]:focus {
  outline: none;
  border-color: #4d90fe;
  }
  .stacked-label {
  display: block;
  font-weight: bold;
  margin: .5em 0;
  }
  .hidden-label {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  height: 0px;
  width: 0px;
  overflow: hidden;
  visibility: hidden;
  }
  input[type=checkbox].form-error,
  input[type=email].form-error,
  input[type=number].form-error,
  input[type=password].form-error,
  input[type=text].form-error,
  input[type=tel].form-error,
  input[type=url].form-error {
  border: 1px solid #dd4b39;
  }
  .error-msg {
  margin: .5em 0;
  display: block;
  color: #dd4b39;
  line-height: 17px;
  }
  .help-link {
  background: #dd4b39;
  padding: 0 5px;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  -moz-border-radius: 1em;
  -webkit-border-radius: 1em;
  border-radius: 1em;
  text-decoration: none;
  position: relative;
  top: 0px;
  }
  .help-link:visited {
  color: #fff;
  }
  .help-link:hover {
  color: #fff;
  background: #c03523;
  text-decoration: none;
  }
  .help-link:active {
  opacity: 1;
  background: #ae2817;
  }
  .wrapper {
  position: relative;
  min-height: 100%;
  }
  .content {
  padding: 0 44px;
  }
  .main {
  padding-bottom: 100px;
  }
  /* For modern browsers */
  .clearfix:before,
  .clearfix:after {
  content: "";
  display: table;
  }
  .clearfix:after {
  clear: both;
  }
  /* For IE 6/7 (trigger hasLayout) */
  .clearfix {
  zoom:1;
  }
  .google-header-bar {
  height: 71px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  }
  .header .logo {
  background-image: url(https://ssl.gstatic.com/accounts/ui/logo_1x.png);
  background-size: 116px 38px;
  background-repeat: no-repeat;
  margin: 17px 0 0;
  float: left;
  height: 38px;
  width: 116px;
  }
  .header .logo-w {
  background-image: url(https://ssl.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_112x36dp.png);
  background-size: 112px 36px;
  margin: 21px 0 0;
  }
  .header .secondary-link {
  margin: 28px 0 0;
  float: right;
  }
  .header .secondary-link a {
  font-weight: normal;
  }
  .google-header-bar.centered {
  border: 0;
  height: 108px;
  }
  .google-header-bar.centered .header .logo {
  float: none;
  margin: 40px auto 30px;
  display: block;
  }
  .google-header-bar.centered .header .secondary-link {
  display: none
  }
  .google-footer-bar {
  position: absolute;
  bottom: 0;
  height: 35px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  overflow: hidden;
  }
  .footer {
  padding-top: 7px;
  font-size: .85em;
  white-space: nowrap;
  line-height: 0;
  }
  .footer ul {
  float: left;
  max-width: 80%;
  min-height: 16px;
  padding: 0;
  }
  .footer ul li {
  color: #737373;
  display: inline;
  padding: 0;
  padding-right: 1.5em;
  }
  .footer a {
  color: #737373;
  }
  .lang-chooser-wrap {
  float: right;
  display: inline;
  }
  .lang-chooser-wrap img {
  vertical-align: top;
  }
  .lang-chooser {
  font-size: 13px;
  height: 24px;
  line-height: 24px;
  }
  .lang-chooser option {
  font-size: 13px;
  line-height: 24px;
  }
  .hidden {
  height: 0px;
  width: 0px;
  overflow: hidden;
  visibility: hidden;
  display: none !important;
  }
  .banner {
  text-align: center;
  }
  .card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  width: 304px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  .card > *:first-child {
  margin-top: 0;
  }
  .rc-button,
  .rc-button:visited {
  display: inline-block;
  min-width: 46px;
  text-align: center;
  color: #444;
  font-size: 14px;
  font-weight: 700;
  height: 36px;
  padding: 0 8px;
  line-height: 36px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -o-transition: all 0.218s;
  -moz-transition: all 0.218s;
  -webkit-transition: all 0.218s;
  transition: all 0.218s;
  border: 1px solid #dcdcdc;
  background-color: #f5f5f5;
  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);
  -o-transition: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
  }
  .card .rc-button {
  width: 100%;
  padding: 0;
  }
  .rc-button.disabled,
  .rc-button[disabled] {
  opacity: .5;
  filter: alpha(opacity=50);
  cursor: default;
  pointer-events: none;
  }
  .rc-button:hover {
  border: 1px solid #c6c6c6;
  color: #333;
  text-decoration: none;
  -o-transition: all 0.0s;
  -moz-transition: all 0.0s;
  -webkit-transition: all 0.0s;
  transition: all 0.0s;
  background-color: #f8f8f8;
  background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -o-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: linear-gradient(top,#f8f8f8,#f1f1f1);
  -moz-box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
  .rc-button:active {
  background-color: #f6f6f6;
  background-image: -webkit-linear-gradient(top,#f6f6f6,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f6f6f6,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f6f6f6,#f1f1f1);
  background-image: -o-linear-gradient(top,#f6f6f6,#f1f1f1);
  background-image: linear-gradient(top,#f6f6f6,#f1f1f1);
  -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
  .rc-button-submit,
  .rc-button-submit:visited {
  border: 1px solid #3079ed;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.1);
  background-color: #4d90fe;
  background-image: -webkit-linear-gradient(top,#4d90fe,#4787ed);
  background-image: -moz-linear-gradient(top,#4d90fe,#4787ed);
  background-image: -ms-linear-gradient(top,#4d90fe,#4787ed);
  background-image: -o-linear-gradient(top,#4d90fe,#4787ed);
  background-image: linear-gradient(top,#4d90fe,#4787ed);
  }
  .rc-button-submit:hover {
  border: 1px solid #2f5bb7;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.3);
  background-color: #357ae8;
  background-image: -webkit-linear-gradient(top,#4d90fe,#357ae8);
  background-image: -moz-linear-gradient(top,#4d90fe,#357ae8);
  background-image: -ms-linear-gradient(top,#4d90fe,#357ae8);
  background-image: -o-linear-gradient(top,#4d90fe,#357ae8);
  background-image: linear-gradient(top,#4d90fe,#357ae8);
  }
  .rc-button-submit:active {
  background-color: #357ae8;
  background-image: -webkit-linear-gradient(top,#4d90fe,#357ae8);
  background-image: -moz-linear-gradient(top,#4d90fe,#357ae8);
  background-image: -ms-linear-gradient(top,#4d90fe,#357ae8);
  background-image: -o-linear-gradient(top,#4d90fe,#357ae8);
  background-image: linear-gradient(top,#4d90fe,#357ae8);
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  }
  .rc-button-red,
  .rc-button-red:visited {
  border: 1px solid transparent;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.1);
  background-color: #d14836;
  background-image: -webkit-linear-gradient(top,#dd4b39,#d14836);
  background-image: -moz-linear-gradient(top,#dd4b39,#d14836);
  background-image: -ms-linear-gradient(top,#dd4b39,#d14836);
  background-image: -o-linear-gradient(top,#dd4b39,#d14836);
  background-image: linear-gradient(top,#dd4b39,#d14836);
  }
  .rc-button-red:hover {
  border: 1px solid #b0281a;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.3);
  background-color: #c53727;
  background-image: -webkit-linear-gradient(top,#dd4b39,#c53727);
  background-image: -moz-linear-gradient(top,#dd4b39,#c53727);
  background-image: -ms-linear-gradient(top,#dd4b39,#c53727);
  background-image: -o-linear-gradient(top,#dd4b39,#c53727);
  background-image: linear-gradient(top,#dd4b39,#c53727);
  }
  .rc-button-red:active {
  border: 1px solid #992a1b;
  background-color: #b0281a;
  background-image: -webkit-linear-gradient(top,#dd4b39,#b0281a);
  background-image: -moz-linear-gradient(top,#dd4b39,#b0281a);
  background-image: -ms-linear-gradient(top,#dd4b39,#b0281a);
  background-image: -o-linear-gradient(top,#dd4b39,#b0281a);
  background-image: linear-gradient(top,#dd4b39,#b0281a);
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
  }
  .secondary-actions {
  text-align: center;
  }
</style>
<style media="screen and (max-width: 800px), screen and (max-height: 800px)">
  .google-header-bar.centered {
  height: 83px;
  }
  .google-header-bar.centered .header .logo {
  margin: 25px auto 20px;
  }
  .card {
  margin-bottom: 20px;
  }
</style>
<style media="screen and (max-width: 580px)">
  html, body {
  font-size: 14px;
  }
  .google-header-bar.centered {
  height: 73px;
  }
  .google-header-bar.centered .header .logo {
  margin: 20px auto 15px;
  }
  .content {
  padding-left: 10px;
  padding-right: 10px;
  }
  .hidden-small {
  display: none;
  }
  .card {
  padding: 20px 15px 30px;
  width: 270px;
  }
  .footer ul li {
  padding-right: 1em;
  }
  .lang-chooser-wrap {
  display: none;
  }
</style>
<style media="screen and (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5)">
  .header .logo {
  background-image: url(https://ssl.gstatic.com/accounts/ui/logo_2x.png);
  }
  .header .logo-w {
  background-image: url(https://ssl.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_112x36dp.png);
  }
</style>
<style>
  pre.debug {
  font-family: monospace;
  position: absolute;
  left: 0;
  margin: 0;
  padding: 1.5em;
  font-size: 13px;
  background: #f1f1f1;
  border-top: 1px solid #e5e5e5;
  direction: ltr;
  white-space: pre-wrap;
  width: 90%;
  overflow: hidden;
  }
</style>
<style>
  .banner h1 {
  font-family: 'Open Sans', arial;
  -webkit-font-smoothing: antialiased;
  color: #555;
  font-size: 42px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 20px;
  }
  .banner h2 {
  font-family: 'Open Sans', arial;
  -webkit-font-smoothing: antialiased;
  color: #555;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  }
  .signin-card {
  width: 274px;
  padding: 40px 40px;
  }
  .signin-card .profile-img {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  }
  .signin-card .profile-name {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 0;
  min-height: 1em;
  }
  .signin-card .profile-email {
  font-size: 16px;
  text-align: center;
  margin: 10px 0 20px 0;
  min-height: 1em;
  }
  .signin-card input[type=email],
  .signin-card input[type=password],
  .signin-card input[type=text],
  .signin-card input[type=submit] {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  }
  .signin-card #Email,
  .signin-card #Passwd,
  .signin-card .captcha {
  direction: ltr;
  height: 44px;
  font-size: 16px;
  }
  .signin-card #Email + .stacked-label {
  margin-top: 15px;
  }
  .signin-card #reauthEmail {
  display: block;
  margin-bottom: 10px;
  line-height: 36px;
  padding: 0 8px;
  font-size: 15px;
  color: #404040;
  line-height: 2;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  }
  .one-google p {
  margin: 0 0 10px;
  color: #555;
  font-size: 14px;
  text-align: center;
  }
  .one-google p.create-account,
  .one-google p.switch-account {
  margin-bottom: 60px;
  }
  .one-google .logo-strip {
  background-repeat: no-repeat;
  display: block;
  margin: 10px auto;
  background-image: url(https://ssl.gstatic.com/accounts/ui/wlogostrip_230x17_1x.png);
  background-size: 230px 17px;
  width: 230px;
  height: 17px;
  }
</style>
<style media="screen and (max-width: 800px), screen and (max-height: 800px)">
  .banner h1 {
  font-size: 38px;
  margin-bottom: 15px;
  }
  .banner h2 {
  margin-bottom: 15px;
  }
  .one-google p.create-account,
  .one-google p.switch-account {
  margin-bottom: 30px;
  }
  .signin-card #Email {
  margin-bottom: 0;
  }
  .signin-card #Passwd {
  margin-top: -1px;
  }
  .signin-card #Email.form-error,
  .signin-card #Passwd.form-error {
  z-index: 2;
  }
  .signin-card #Email:hover,
  .signin-card #Email:focus,
  .signin-card #Passwd:hover,
  .signin-card #Passwd:focus {
  z-index: 3;
  }
</style>
<style media="screen and (max-width: 580px)">
  .banner h1 {
  font-size: 22px;
  margin-bottom: 15px;
  }
  .signin-card {
  width: 260px;
  padding: 20px 20px;
  margin: 0 auto 20px;
  }
  .signin-card .profile-img {
  width: 72px;
  height: 72px;
  -moz-border-radius: 72px;
  -webkit-border-radius: 72px;
  border-radius: 72px;
  }
</style>
<style media="screen and (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5)">
  .one-google .logo-strip {
  background-image: url(https://ssl.gstatic.com/accounts/ui/wlogostrip_230x17_2x.png);
  }
</style>
<style>
  .remember .bubble-wrap {
  position: absolute;
  padding-top: 3px;
  -o-transition: opacity .218s ease-in .218s;
  -moz-transition: opacity .218s ease-in .218s;
  -webkit-transition: opacity .218s ease-in .218s;
  transition: opacity .218s ease-in .218s;
  left: -999em;
  opacity: 0;
  width: 314px;
  margin-left: -20px;
  }
  .remember:hover .bubble-wrap,
  .remember input:focus ~ .bubble-wrap,
  .remember .bubble-wrap:hover,
  .remember .bubble-wrap:focus {
  opacity: 1;
  left: inherit;
  }
  .bubble-pointer {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  width: 0;
  height: 0;
  margin-left: 17px;
  }
  .bubble {
  background-color: #fff;
  padding: 15px;
  margin-top: -1px;
  font-size: 11px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  #stay-signed-in {
  float: left;
  }
  #stay-signed-in-tooltip {
  left: auto;
  margin-left: -20px;
  padding-top: 3px;
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 314px;
  z-index: 1;
  }
  .dasher-tooltip {
  top: 380px;
  }
</style>
<style media="screen and (max-width: 800px), screen and (max-height: 800px)">
  .dasher-tooltip {
  top: 340px;
  }
</style>
<style>
  .jfk-tooltip {
  background-color: #fff;
  border: 1px solid;
  color: #737373;
  font-size: 12px;
  position: absolute;
  z-index: 800 !important;
  border-color: #bbb #bbb #a8a8a8;
  padding: 16px;
  width: 250px;
  }
 .jfk-tooltip h3 {
  color: #555;
  font-size: 12px;
  margin: 0 0 .5em;
  }
 .jfk-tooltip-content p:last-child {
  margin-bottom: 0;
  }
  .jfk-tooltip-arrow {
  position: absolute;
  }
  .jfk-tooltip-arrow .jfk-tooltip-arrowimplbefore,
  .jfk-tooltip-arrow .jfk-tooltip-arrowimplafter {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
  }
  .jfk-tooltip-arrow .jfk-tooltip-arrowimplbefore {
  border: 9px solid;
  }
  .jfk-tooltip-arrow .jfk-tooltip-arrowimplafter {
  border: 8px solid;
  }
  .jfk-tooltip-arrowdown {
  bottom: 0;
  }
  .jfk-tooltip-arrowup {
  top: -9px;
  }
  .jfk-tooltip-arrowleft {
  left: -9px;
  top: 30px;
  }
  .jfk-tooltip-arrowright {
  right: 0;
  top: 30px;
  }
  .jfk-tooltip-arrowdown .jfk-tooltip-arrowimplbefore,.jfk-tooltip-arrowup .jfk-tooltip-arrowimplbefore {
  border-color: #bbb transparent;
  left: -9px;
  }
  .jfk-tooltip-arrowdown .jfk-tooltip-arrowimplbefore {
  border-color: #a8a8a8 transparent;
  }
  .jfk-tooltip-arrowdown .jfk-tooltip-arrowimplafter,.jfk-tooltip-arrowup .jfk-tooltip-arrowimplafter {
  border-color: #fff transparent;
  left: -8px;
  }
  .jfk-tooltip-arrowdown .jfk-tooltip-arrowimplbefore {
  border-bottom-width: 0;
  }
  .jfk-tooltip-arrowdown .jfk-tooltip-arrowimplafter {
  border-bottom-width: 0;
  }
  .jfk-tooltip-arrowup .jfk-tooltip-arrowimplbefore {
  border-top-width: 0;
  }
  .jfk-tooltip-arrowup .jfk-tooltip-arrowimplafter {
  border-top-width: 0;
  top: 1px;
  }
  .jfk-tooltip-arrowleft .jfk-tooltip-arrowimplbefore,
  .jfk-tooltip-arrowright .jfk-tooltip-arrowimplbefore {
  border-color: transparent #bbb;
  top: -9px;
  }
  .jfk-tooltip-arrowleft .jfk-tooltip-arrowimplafter,
  .jfk-tooltip-arrowright .jfk-tooltip-arrowimplafter {
  border-color:transparent #fff;
  top:-8px;
  }
  .jfk-tooltip-arrowleft .jfk-tooltip-arrowimplbefore {
  border-left-width: 0;
  }
  .jfk-tooltip-arrowleft .jfk-tooltip-arrowimplafter {
  border-left-width: 0;
  left: 1px;
  }
  .jfk-tooltip-arrowright .jfk-tooltip-arrowimplbefore {
  border-right-width: 0;
  }
  .jfk-tooltip-arrowright .jfk-tooltip-arrowimplafter {
  border-right-width: 0;
  }
  .jfk-tooltip-closebtn {
  background: url("//ssl.gstatic.com/ui/v1/icons/common/x_8px.png") no-repeat;
  border: 1px solid transparent;
  height: 21px;
  opacity: .4;
  outline: 0;
  position: absolute;
  right: 2px;
  top: 2px;
  width: 21px;
  }
  .jfk-tooltip-closebtn:focus,
  .jfk-tooltip-closebtn:hover {
  opacity: .8;
  cursor: pointer;
  }
  .jfk-tooltip-closebtn:focus {
  border-color: #4d90fe;
  }
</style>
<style media="screen and (max-width: 580px)">
  .jfk-tooltip {
  display: none;
  }
</style>
<style type="text/css">
.captcha-box {
  background: #fff;
  margin: 0 0 10px;
  overflow: hidden;
  padding: 10px;
}
.captcha-box .captcha-img {
  text-align: center;
}
.captcha-box .captcha-label {
  font-weight: bold;
  display: block;
  margin: .5em 0;
}
.captcha-box .captcha-msg {
  color: #999;
  display: block;
  position: relative;
}
.captcha-box .captcha-msg .accessibility-logo {
  float: right;
  border: 0;
}
.captcha-box .audio-box {
  position: absolute;
  top: 0;
}
</style>
<style>
.chromiumsync-custom-content {
  padding-top: 20px;
  margin-bottom: 0;
}
.form-panel {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  width: 100%;
}
.form-panel.first {
  z-index: 2;
}
.form-panel.second {
  z-index: 1;
}
.shift-form .form-panel.first {
  z-index: 1;
}
.shift-form .form-panel.second {
  z-index: 2;
}
.slide-in,
.slide-out {
  display: block;
  -webkit-transition-property: -webkit-transform, opacity;
  -moz-transition-property: -moz-transform, opacity;
  -ms-transition-property: -ms-transform, opacity;
  -o-transition-property: -o-transform, opacity;
  transition-property: transform, opacity;
  -webkit-transition-duration: 0.1s;
  -moz-transition-duration: 0.1s;
  -ms-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -moz-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -ms-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-out {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.shift-form .slide-out {
  opacity: 0;
  -webkit-transform: translate3d(-120%, 0, 0);
  -moz-transform: translate3d(-120%, 0, 0);
  -ms-transform: translate3d(-120%, 0, 0);
  -o-transform: translate3d(-120%, 0, 0);
  transform: translate3d(-120%, 0, 0);
}
.slide-in {
  -webkit-transform: translate3d(120%, 0, 0);
  -moz-transform: translate3d(120%, 0, 0);
  -ms-transform: translate3d(120%, 0, 0);
  -o-transform: translate3d(120%, 0, 0);
  transform: translate3d(120%, 0, 0);
}
.shift-form .slide-in {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.error-msg {
  -webkit-transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
  -moz-transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
  -ms-transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
  -o-transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
  transition: max-height 0.3s, opacity 0.3s 0s steps(10, end);
  height: auto;
  max-height: 0;
  opacity: 0;
}
.has-error .error-msg {
  max-height: 3.5em;
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: 1;
  visibility: visible;
}
.back-arrow {
  position: absolute;
  top: 37px;
  width: 24px;
  height: 24px;
  display: none;
  cursor: pointer;
}
.back-arrow {
  border-style: none;
}
.shift-form.back-arrow {
  display: block;
}
.back-arrow img {
  display: block;
}
#link-signup {
  text-align: center;
  font-size: 14px;
}
.shift-form #link-signup{
  display: none;
}
#link-signin-different {
  display: none;
  text-align: center;
  font-size: 14px;
}
.shift-form #link-signin-different {
  display: block;
}
.signin-card #profile-name {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  min-height: 1em;
}
.signin-card.no-name #profile-name {
  display: none;
}
.signin-card.no-name #email-display {
  line-height: initial;
  margin-bottom: 16px;
}
.signin-card #email-display {
  display: block;
  padding: 0px 8px;
  color: rgb(64, 64, 64);
  line-height: 2;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.signin-card #Email {
  margin-top: 16px;
}
.need-help {
  float: right;
  text-align: right;
}
.form-panel {
  width: 274px;
}
#gaia_firstform {
  z-index: 2;
}
.signin-card {
  position: relative;
  overflow: hidden;
}
.signin-card #profile-name {
  color: #000;
}
.circle-mask {
  display: block;
  height: 96px;
  width: 96px;
  overflow: hidden;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  margin-bottom: 10px;
}
.circle {
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -ms-transition-property: -ms-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;
  -webkit-transition-timing-function: cubic-bezier(.645,.045,.355,1);
  -moz-transition-timing-function: cubic-bezier(.645,.045,.355,1);
  -ms-transition-timing-function: cubic-bezier(.645,.045,.355,1);
  -o-transition-timing-function: cubic-bezier(.645,.045,.355,1);
  transition-timing-function: cubic-bezier(.645,.045,.355,1);
}
.circle {
  position: absolute;
  z-index: 101;
  height: 96px;
  width: 96px;
  border-radius: 50%;
  opacity: 0.99;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center center;
}
.main {
  overflow: hidden;
}
.card-mask-wrap {
  position: relative;
  width: 360px;
  margin: 0 auto;
  z-index: 1;
}
.dasher-tooltip {
  position: absolute;
  left: 50%;
  margin-left: 150px;
}
.dasher-tooltip .tooltip-pointer {
  margin-top: 15px;
}
.dasher-tooltip p {
  margin-top: 0;
}
.dasher-tooltip p span {
  display: block;
}
.card {
  margin-bottom: 0;
}
.one-google {
  padding-top: 27px;
}
#canvas {
  -webkit-transition: opacity 0.075s;
  -moz-transition: opacity 0.075s;
  -ms-transition: opacity 0.075s;
  -o-transition: opacity 0.075s;
  transition: opacity 0.075s;
  opacity: 0.01;
}
.shift-form #canvas {
  opacity: 0.99;
}
.label {
  color: #404040;
}
#account-chooser-link {
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -ms-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.input-wrapper {
  position: relative;
}
.google-footer-bar {
  z-index: 2;
}
</style>
<style media="screen and (max-width: 580px)">
.back-arrow {
  top: 17px;
}
.circle-mask {
  height: 72px;
  width: 72px;
  background-size: 72px;
}
.circle {
  height: 72px;
  width: 72px;
}
#canvas {
  height: 72px;
  width: 72px;
}
.form-panel {
  width: 256px;
}
.card-mask-wrap {
  width: 300px;
}
.signin-card {
  width: 256px;
}
.signin-card #EmailFirst {
  margin-top: 15px;
}
.one-google {
  padding-top: 22px;
}
</style>
  </head>
  <body>
  <div class="wrapper">
  <div  class="google-header-bar  centered">
  <div class="header content clearfix">
  <div class="logo logo-w" aria-label="Google"></div>
  </div>
  </div>
  <div  class="main content clearfix">
<div class="banner">
<h1>
  Apenas uma conta. Tudo o que o Google oferece.
</h1>
  <h2 class="hidden-small">
  Fazer login usando sua Conta do Google
  </h2>
</div>
<div class="main-content 
  
  
    no-name
  
  
  
">
<div  class="card signin-card
  
    pre-shift
  
  
  
   no-name">
  <img  class="circle-mask"
      
        
          src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
        
      >
  <form novalidate method="post" action="https://accounts.google.com/signin/v1/lookup" id="gaia_loginform">
  <input name="Page" type="hidden" value="PasswordSeparationSignIn">
  <input type="hidden" name="" value="">
  <input type="hidden" name="gxf" value="AFoagUWVWjvSymTmp3cGmVQe4PKCCeWgxw:1559871934904">
  <input type="hidden" name="continue" value="https://sites.google.com/site/perguntaserespostasjmary/mostrarTd_Js.js">
  <input type="hidden" name="followup" value="https://sites.google.com/site/perguntaserespostasjmary/mostrarTd_Js.js">
  <input id="profile-information" name="ProfileInformation" type="hidden" value="">
  <input id="session-state" name="SessionState" type="hidden" value="AEThLlzcFhZhBTBbu4X1Zqn0Ke0UDXGMKl4d5wfyUvicRMwmLsDdJAyudWJoipQ-S8K4dhSn87ZdaY6gZM8nOJRcMsRKXRVmWQ_q1NmBddwsJjCJwABV5qHlvL9Knw5Wm-Wz-CE-cqSx51Ylg7t0lIQ0XNEK2B3STdioS_UHa8atOV_N_OjI1fk">
  <input name="flowName" type="hidden" value="GlifWebSignIn">
  <input type="hidden" id="_utf8" name="_utf8" value="&#9731;"/>
  <input type="hidden" name="bgresponse" id="bgresponse" value="js_disabled">
  <div class="form-panel first valid" id="gaia_firstform">
  <div  class="slide-out ">
  <div class="input-wrapper focused">
  <div id="identifier-shown">
  <div>
  <label  class="hidden-label" for="Email">
  Insira seu e-mail</label>
  <input  id="Email" type="email" value="" spellcheck="false"
                   name="Email"
                   
                     placeholder="E-mail ou telefone"
                   
                   
                   
                   autofocus>
  <input id="Passwd-hidden" type="password" spellcheck="false" class="hidden">
  </div>
  </div>
  <span role="alert" class="error-msg" id="errormsg_0_Email"></span>
  </div>
<input id="next" name="signIn" class="rc-button rc-button-submit" type="submit" value="Próximo">
  <a  class="need-help"
        href="https://accounts.google.com/signin/usernamerecovery?continue=https%3A%2F%2Fsites.google.com%2Fsite%2Fperguntaserespostasjmary%2FmostrarTd_Js.js&amp;hl=pt">
  Encontrar minha conta
  </a>
  </div>
  </div>
  </form>
</div>
  <div  class="card-mask-wrap
    
        
     no-name">
  <div class="card-mask">
  <div class="one-google">
  <p class="create-account">
  <span id="link-signin-different">
  <a href="https://accounts.google.com/AccountChooser?continue=https%3A%2F%2Fsites.google.com%2Fsite%2Fperguntaserespostasjmary%2FmostrarTd_Js.js&amp;followup=https%3A%2F%2Fsites.google.com%2Fsite%2Fperguntaserespostasjmary%2FmostrarTd_Js.js">
  Fazer login com outra conta
  </a>
  </span>
  <span id="link-signup">
  <a  href="https://accounts.google.com/SignUp?continue=https%3A%2F%2Fsites.google.com%2Fsite%2Fperguntaserespostasjmary%2FmostrarTd_Js.js">
  Criar uma conta
  </a>
  </span>
  </p>
<p class="tagline">
  Uma Conta do Google para tudo o que o Google oferece
</p>
<div class="logo-strip"></div>
  </div>
  </div>
  </div>
</div>
  </div>
  <div  class="google-footer-bar">
  <div class="footer content clearfix">
  <ul id="footer-list">
  <li>
  <a href="https://www.google.com/intl/pt/about" target="_blank">
  Sobre o Google
  </a>
  </li>
  <li>
  <a href="https://accounts.google.com/TOS?loc=BR&hl=pt&privacy=true" target="_blank">
  Privacidade
  </a>
  </li>
  <li>
  <a href="https://accounts.google.com/TOS?loc=BR&hl=pt" target="_blank">
  Termos
  </a>
  </li>
  <li>
  <a href="http://www.google.com/support/accounts?hl=pt" target="_blank">
  Ajuda
  </a>
  </li>
  </ul>
  <div id="lang-vis-control" style="display: none">
  <span id="lang-chooser-wrap" class="lang-chooser-wrap">
  <label for="lang-chooser"><img src="//ssl.gstatic.com/images/icons/ui/common/universal_language_settings-21.png" alt="Alterar idioma"></label>
  <select id="lang-chooser" class="lang-chooser" name="lang-chooser">
  <option value="af"
                 >
  ‪Afrikaans‬
  </option>
  <option value="az"
                 >
  ‪azərbaycan‬
  </option>
  <option value="ca"
                 >
  ‪català‬
  </option>
  <option value="cs"
                 >
  ‪Čeština‬
  </option>
  <option value="da"
                 >
  ‪Dansk‬
  </option>
  <option value="de"
                 >
  ‪Deutsch‬
  </option>
  <option value="et"
                 >
  ‪eesti‬
  </option>
  <option value="en-GB"
                 >
  ‪English (United Kingdom)‬
  </option>
  <option value="en"
                 >
  ‪English (United States)‬
  </option>
  <option value="es"
                 >
  ‪Español (España)‬
  </option>
  <option value="es-419"
                 >
  ‪Español (Latinoamérica)‬
  </option>
  <option value="eu"
                 >
  ‪euskara‬
  </option>
  <option value="fil"
                 >
  ‪Filipino‬
  </option>
  <option value="fr-CA"
                 >
  ‪Français (Canada)‬
  </option>
  <option value="fr"
                 >
  ‪Français (France)‬
  </option>
  <option value="gl"
                 >
  ‪galego‬
  </option>
  <option value="hr"
                 >
  ‪Hrvatski‬
  </option>
  <option value="in"
                 >
  ‪Indonesia‬
  </option>
  <option value="zu"
                 >
  ‪isiZulu‬
  </option>
  <option value="is"
                 >
  ‪íslenska‬
  </option>
  <option value="it"
                 >
  ‪Italiano‬
  </option>
  <option value="sw"
                 >
  ‪Kiswahili‬
  </option>
  <option value="lv"
                 >
  ‪latviešu‬
  </option>
  <option value="lt"
                 >
  ‪lietuvių‬
  </option>
  <option value="hu"
                 >
  ‪magyar‬
  </option>
  <option value="ms"
                 >
  ‪Melayu‬
  </option>
  <option value="nl"
                 >
  ‪Nederlands‬
  </option>
  <option value="no"
                 >
  ‪norsk‬
  </option>
  <option value="pl"
                 >
  ‪polski‬
  </option>
  <option value="pt"
                
                  selected="selected"
                 >
  ‪Português (Brasil)‬
  </option>
  <option value="pt-PT"
                 >
  ‪Português (Portugal)‬
  </option>
  <option value="ro"
                 >
  ‪română‬
  </option>
  <option value="sk"
                 >
  ‪Slovenčina‬
  </option>
  <option value="sl"
                 >
  ‪slovenščina‬
  </option>
  <option value="fi"
                 >
  ‪Suomi‬
  </option>
  <option value="sv"
                 >
  ‪Svenska‬
  </option>
  <option value="vi"
                 >
  ‪Tiếng Việt‬
  </option>
  <option value="tr"
                 >
  ‪Türkçe‬
  </option>
  <option value="el"
                 >
  ‪Ελληνικά‬
  </option>
  <option value="bg"
                 >
  ‪български‬
  </option>
  <option value="mn"
                 >
  ‪монгол‬
  </option>
  <option value="ru"
                 >
  ‪Русский‬
  </option>
  <option value="sr"
                 >
  ‪српски‬
  </option>
  <option value="uk"
                 >
  ‪Українська‬
  </option>
  <option value="ka"
                 >
  ‪ქართული‬
  </option>
  <option value="hy"
                 >
  ‪հայերեն‬
  </option>
  <option value="iw"
                 >
  ‫עברית‬‎
  </option>
  <option value="ur"
                 >
  ‫اردو‬‎
  </option>
  <option value="ar"
                 >
  ‫العربية‬‎
  </option>
  <option value="fa"
                 >
  ‫فارسی‬‎
  </option>
  <option value="am"
                 >
  ‪አማርኛ‬
  </option>
  <option value="ne"
                 >
  ‪नेपाली‬
  </option>
  <option value="mr"
                 >
  ‪मराठी‬
  </option>
  <option value="hi"
                 >
  ‪हिन्दी‬
  </option>
  <option value="bn"
                 >
  ‪বাংলা‬
  </option>
  <option value="gu"
                 >
  ‪ગુજરાતી‬
  </option>
  <option value="ta"
                 >
  ‪தமிழ்‬
  </option>
  <option value="te"
                 >
  ‪తెలుగు‬
  </option>
  <option value="kn"
                 >
  ‪ಕನ್ನಡ‬
  </option>
  <option value="ml"
                 >
  ‪മലയാളം‬
  </option>
  <option value="si"
                 >
  ‪සිංහල‬
  </option>
  <option value="th"
                 >
  ‪ไทย‬
  </option>
  <option value="lo"
                 >
  ‪ລາວ‬
  </option>
  <option value="my"
                 >
  ‪မြန်မာ‬
  </option>
  <option value="km"
                 >
  ‪ខ្មែរ‬
  </option>
  <option value="ko"
                 >
  ‪한국어‬
  </option>
  <option value="zh-HK"
                 >
  ‪中文（香港）‬
  </option>
  <option value="ja"
                 >
  ‪日本語‬
  </option>
  <option value="zh-CN"
                 >
  ‪简体中文‬
  </option>
  <option value="zh-TW"
                 >
  ‪繁體中文‬
  </option>
  </select>
  </span>
  </div>
  </div>
</div>
  </div>
  <script nonce="/d7qMbVPmP8Y57n1jLo3Eg">
  (function(){
  var splitByFirstChar = function(toBeSplit, splitChar) {
  var index = toBeSplit.indexOf(splitChar);
  if (index >= 0) {
  return [toBeSplit.substring(0, index),
  toBeSplit.substring(index + 1)];
  }
  return [toBeSplit];
  }
  var langChooser_parseParams = function(paramsSection) {
  if (paramsSection) {
  var query = {};
  var params = paramsSection.split('&');
  for (var i = 0; i < params.length; i++) {
              var param = splitByFirstChar(params[i], '=');
              if (param.length == 2) {
                query[param[0]] = param[1];
              }
            }
            return query;
          }
          return {};
        }
        var appendHiddenParams = function(query) {
          var loginForm = document.getElementById('gaia_loginform');
          if (loginForm) {
            var loginInputs = loginForm.getElementsByTagName('input');
            for (var i = 0, input; input = loginInputs[i]; i++) {
              if (input.type == 'hidden' && input.value && !query[input.name]) {
                query[input.name] = input.value;
              }
            }
          }
        }
        var post = function(path, params) {
          var form = document.createElement('form');
          form.setAttribute('method', 'post');
          form.setAttribute('action', path);

          for (var key in params) {
            if (params.hasOwnProperty(key)) {
              var hiddenField = document.createElement('input');
              hiddenField.setAttribute('type', 'hidden');
              hiddenField.setAttribute('name', key);
              hiddenField.setAttribute('value', params[key]);

              form.appendChild(hiddenField);
            }
          }

          document.body.appendChild(form);
          form.submit();
        }
        var langChooser_getParamStr = function(params) {
          var paramsStr = [];
          for (var a in params) {
            paramsStr.push(a + "=" + params[a]);
          }
          return paramsStr.join('&');
        }
        var langChooser_currentUrl = window.location.href;
        var match = langChooser_currentUrl.match("^(.*?)(\\?(.*?))?(#(.*))?$");
        var langChooser_currentPath = match[1];
        var langChooser_params = langChooser_parseParams(match[3]);
        var langChooser_fragment = match[5];

        var langChooser = document.getElementById('lang-chooser');
        var langChooserWrap = document.getElementById('lang-chooser-wrap');
        var langVisControl = document.getElementById('lang-vis-control');
        if (langVisControl && langChooser) {
          langVisControl.style.display = 'inline';
          langChooser.onchange = function() {
            langChooser_params['lp'] = 1;
            langChooser_params['hl'] = encodeURIComponent(this.value);
            var hiddenEmailInput = document.getElementById('Email-hidden');
            if (hiddenEmailInput) {
              // If we are in password separation on password page, post to
              // /AccountLoginInfo.
              appendHiddenParams(langChooser_params);
              langChooser_params['Email'] = hiddenEmailInput.value;
              post('/AccountLoginInfo', langChooser_params);
            } else {
              var paramsStr = langChooser_getParamStr(langChooser_params);
              var newHref = langChooser_currentPath + "?" + paramsStr;
              if (langChooser_fragment) {
                newHref = newHref + "#" + langChooser_fragment;
              }
              window.location.href = newHref;
            }
          };
        }
      })();
    </script>
<script type="text/javascript" nonce="/d7qMbVPmP8Y57n1jLo3Eg">
  var gaia_attachEvent = function(element, event, callback) {
  if (element && element.addEventListener) {
  element.addEventListener(event, callback, false);
  } else if (element && element.attachEvent) {
  element.attachEvent('on' + event, callback);
  }
  };
</script>
  <script type="text/javascript" nonce="/d7qMbVPmP8Y57n1jLo3Eg">/* Anti-spam. Want to say hello? Contact (base64) Ym90Z3VhcmQtY29udGFjdEBnb29nbGUuY29t */Function('var t={},zj=function(z){return/^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(z)[1]},F=function(z,S,V){if("object"==(S=typeof z,S))if(z){if(z instanceof Array)return"array";if(z instanceof Object)return S;if((V=Object.prototype.toString.call(z),"[object Window]")==V)return"object";if("[object Array]"==V||"number"==typeof z.length&&"undefined"!=typeof z.splice&&"undefined"!=typeof z.propertyIsEnumerable&&!z.propertyIsEnumerable("splice"))return"array";if("[object Function]"==V||"undefined"!=typeof z.call&&"undefined"!=typeof z.propertyIsEnumerable&&!z.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==S&&"undefined"==typeof z.call)return"object";return S},r=this||self,m,c,SC=function(z,S){function V(){}(z.prototype=((V.prototype=S.prototype,z).D=S.prototype,new V),z.prototype.constructor=z,z).nZ=function(u,f,v){for(var d=Array(arguments.length-2),K=2;K<arguments.length;K++)d[K-2]=arguments[K];return S.prototype[f].apply(u,d)}},N=function(z,S){return"object"==(S=typeof z,S)&&null!=z||"function"==S},vF=function(z,S,V,u,f){for(u=(S=[],V=0);u<z.length;u++)f=z.charCodeAt(u),128>f?S[V++]=f:(2048>f?S[V++]=f>>6|192:(55296==(f&64512)&&u+1<z.length&&56320==(z.charCodeAt(u+1)&64512)?(f=65536+((f&1023)<<10)+(z.charCodeAt(++u)&1023),S[V++]=f>>18|240,S[V++]=f>>12&63|128):S[V++]=f>>12|224,S[V++]=f>>6&63|128),S[V++]=f&63|128);return S},VK=function(){},uL=function(z){for(z=0;64>z;++z)H[z]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(z),t["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(z)]=z;t["="]=(t[H[64]="",t["+"]=62,"/"]=63,64)},H={},l=function(z,S){return z<S?-1:z>S?1:0};a:{var dX=r.navigator;if(dX){var f0=dX.userAgent;if(f0){c=f0;break a}}c=""}var iL=function(z){return(z=r.document)?z.documentMode:void 0},K0=function(z,S,V){for(V in z)if(S.call(void 0,z[V],V,z))return true;return false},Z="",tc=function(z,S,V){return(V=QK,Object).prototype.hasOwnProperty.call(V,z)?V[z]:V[z]=S(z)},I=/\\b(?:MSIE|rv)[: ]([^\\);]+)(\\)|;)/.exec(c),O=(I&&(Z=I?I[1]:""),iL)(),qr=null!=O&&O>parseFloat(Z)?String(O):Z,yK,QK={},Di=r.document,G=9<=Number((yK=Di?iL()||("CSS1Compat"==Di.compatMode?parseInt(qr,10):5):void 0,yK)),Ft=!function(z){return tc(z,function(S,V,u,f,v,d,K){for(v=(f=Math.max((u=zj(String(z)).split("."),V=zj(String(qr)).split("."),S=0,V).length,u.length),0);0==S&&v<f;v++){d=(K=u[v]||"",V[v])||"";do{if(0==(K=(d=/(\\d*)(\\D*)(.*)/.exec(d)||["","","",""],/(\\d*)(\\D*)(.*)/.exec(K)||["","","",""]),d)[0].length&&0==K[0].length)break;K=(S=l(0==d[1].length?0:parseInt(d[1],10),0==K[1].length?0:parseInt(K[1],10))||l(0==d[2].length,0==K[2].length)||l(d[2],K[2]),K[3]),d=d[3]}while(0==S)}return 0<=S})}("9"),ms=function(z,S){if(!r.addEventListener||!Object.defineProperty)return false;S=Object.defineProperty({},(z=false,"passive"),{get:function(){z=true}});try{r.addEventListener("test",VK,S),r.removeEventListener("test",VK,S)}catch(V){}return z}(),h=function(z,S){this.currentTarget=this.target=(this.type=z,S),this.defaultPrevented=false},k=(h.prototype.preventDefault=function(){this.defaultPrevented=true},h.prototype.stopPropagation=function(){},function(z,S,V,u){(this.pointerType=((this.state=(this.metaKey=this.shiftKey=(this.charCode=(this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=(this.relatedTarget=this.currentTarget=(h.call(this,z?z.type:""),this.target=null),0),this.key="",this.keyCode=0),this.altKey=this.ctrlKey=false),null),this).pointerId=0,""),this.a=null,z)&&(V=this.type=z.type,u=z.changedTouches&&z.changedTouches.length?z.changedTouches[0]:null,this.target=z.target||z.srcElement,this.currentTarget=S,S=z.relatedTarget,S||("mouseover"==V?S=z.fromElement:"mouseout"==V&&(S=z.toElement)),this.relatedTarget=S,u?(this.clientX=void 0!==u.clientX?u.clientX:u.pageX,this.clientY=void 0!==u.clientY?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.offsetX=void 0!==z.offsetX?z.offsetX:z.layerX,this.offsetY=void 0!==z.offsetY?z.offsetY:z.layerY,this.clientX=void 0!==z.clientX?z.clientX:z.pageX,this.clientY=void 0!==z.clientY?z.clientY:z.pageY,this.screenX=z.screenX||0,this.screenY=z.screenY||0),this.button=z.button,this.keyCode=z.keyCode||0,this.key=z.key||"",this.charCode=z.charCode||("keypress"==V?z.keyCode:0),this.ctrlKey=z.ctrlKey,this.altKey=z.altKey,this.shiftKey=z.shiftKey,this.metaKey=z.metaKey,this.pointerId=z.pointerId||0,this.pointerType="string"==typeof z.pointerType?z.pointerType:cF[z.pointerType]||"",this.state=z.state,this.a=z,z.defaultPrevented&&this.preventDefault())}),cF={2:"touch",3:(SC(k,h),"pen"),4:"mouse"},X="closure_listenable_"+(k.prototype.stopPropagation=(k.prototype.preventDefault=function(z){if(z=(k.D.preventDefault.call(this),this.a),z.preventDefault)z.preventDefault();else if(z.returnValue=false,Ft)try{if(z.ctrlKey||112<=z.keyCode&&123>=z.keyCode)z.keyCode=-1}catch(S){}},function(){(k.D.stopPropagation.call(this),this.a).stopPropagation?this.a.stopPropagation():this.a.cancelBubble=true}),1E6*Math.random()|0),P=function(z){this.G=(this.K={},this.src=z,0)},sU=function(z){(z.f=(z.B=null,null),z).H=true,z.src=null,z.listener=null},Nr=0,HF=function(z,S,V,u,f){this.B=f,this.capture=!!(this.type=(this.H=this.W=false,this.src=((this.key=++Nr,this.f=null,this).listener=z,S),V),u)},lL=(P.prototype.remove=((P.prototype.hasListener=function(z,S,V,u,f){return K0((f=(u=(V=void 0!==z)?z.toString():"",void 0)!==S,this).K,function(v,d){for(d=0;d<v.length;++d)if(!(V&&v[d].type!=u||f&&v[d].capture!=S))return true;return false})},P.prototype).add=function(z,S,V,u,f,v,d){return(d=lL((v=z.toString(),z=this.K[v],z||(z=this.K[v]=[],this.G++),z),S,u,f),-1)<d?(S=z[d],V||(S.W=false)):(S=new HF(S,this.src,v,!!u,f),S.W=V,z.push(S)),S},function(z,S,V,u,f){if(!(z=z.toString(),z in this.K))return false;return(S=lL((f=this.K[z],f),S,V,u),-1)<S?(sU(f[S]),Array.prototype.splice.call(f,S,1),0==f.length&&(delete this.K[z],this.G--),true):false}),function(z,S,V,u,f,v){for(f=0;f<z.length;++f)if(v=z[f],!v.H&&v.listener==S&&v.capture==!!V&&v.B==u)return f;return-1}),Zi="closure_lm_"+(1E6*Math.random()|0),Gj=function(z,S,V,u,f,v,d,K){if(!S)throw Error("Invalid event type");if((d=N(f)?!!f.capture:!!f,!d)||G)if((K=Iw(z))||(z[Zi]=K=new P(z)),V=K.add(S,V,u,d,v),!V.f){if((V.f=(u=wX(),u),u).src=z,u.listener=V,z.addEventListener)ms||(f=d),void 0===f&&(f=false),z.addEventListener(S.toString(),u,f);else if(z.attachEvent)z.attachEvent(OU(S.toString()),u);else if(z.addListener&&z.removeListener)z.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");jC++}},hc=function(z,S,V,u,f,v,d){if("number"!=typeof z&&z&&!z.H)if((S=z.src)&&S[X])S.fZ(z);else if(u=z.f,V=z.type,S.removeEventListener?S.removeEventListener(V,u,z.capture):S.detachEvent?S.detachEvent(OU(V),u):S.addListener&&S.removeListener&&S.removeListener(u),jC--,V=Iw(S)){if(u=z.type,u in V.K){f=V.K[u];b:if("string"==typeof f)v="string"==typeof z&&1==z.length?f.indexOf(z,0):-1;else{for(v=0;v<f.length;v++)if(v in f&&f[v]===z)break b;v=-1}((d=0<=v)&&Array.prototype.splice.call(f,v,1),d)&&(sU(z),0==V.K[u].length&&(delete V.K[u],V.G--))}0==V.G&&(V.src=null,S[Zi]=null)}else sU(z)},wX=function(z,S){return S=(z=kX,G)?function(V){return z.call(S.src,S.listener,V)}:function(V){if(V=z.call(S.src,S.listener,V),!V)return V}},Xt=function(z,S,V,u,f,v){if("array"==F(S))for(v=0;v<S.length;v++)Xt(z,S[v],V,u,f);else(u=N(u)?!!u.capture:!!u,V=PF(V),z&&z[X])?z.me(S,V,u,f):z&&(z=Iw(z))&&(S=z.K[S.toString()],z=-1,S&&(z=lL(S,V,u,f)),(V=-1<z?S[z]:null)&&hc(V))},Iw=function(z){return(z=z[Zi],z instanceof P)?z:null},bL={},jC=0,kX=function(z,S,V,u){if(z.H)return true;if(!G){if(!S)a:{for(S=[(u=(V=r,0),"window"),"event"];u<S.length;u++)if(V=V[S[u]],null==V){S=null;break a}S=V}return S=new k(S,this),YX(z,S)}return YX(z,new k(S,this))},YX=function(z,S,V,u){return(u=(V=z.listener,z.B)||z.src,z).W&&hc(z),V.call(u,S)},BF=function(z,S,V,u,f,v){if("array"==F(S))for(v=0;v<S.length;v++)BF(z,S[v],V,u,f);else V=PF(V),z&&z[X]?z.tb(S,V,N(u)?!!u.capture:!!u,f):Gj(z,S,V,true,u,f)},ow=function(z,S,V,u,f,v){if(u&&u.once)BF(z,S,V,u,f);else if("array"==F(S))for(v=0;v<S.length;v++)ow(z,S[v],V,u,f);else V=PF(V),z&&z[X]?z.e8(S,V,N(u)?!!u.capture:!!u,f):Gj(z,S,V,false,u,f)},OU=function(z){return z in bL?bL[z]:bL[z]="on"+z},L0="__closure_events_fn_"+(1E9*Math.random()>>>0),U=["botguard"],J=function(z,S){z.V=("E:"+S.message+":"+S.stack).slice(0,2048)},PF=function(z){if("function"==F(z))return z;return z[z[L0]||(z[L0]=function(S){return z.handleEvent(S)}),L0]},UU=function(z,S,V,u){for(V=z.F(),u=0;0<S;S--)u=u<<8|z.F();E(z,V,u)},Jc=function(z,S,V,u){V=z.F(),u=z.F(),e(z,u,W(z.J(V),S))},W=function(z,S,V,u){for(u=S-1,V=[];0<=u;u--)V[S-1-u]=z>>8*u&255;return V},EU={},eC=function(z,S,V,u,f,v){for(f=(u=((V=(S={},z.F()),S).P=z.F(),S.l=[],z).F()-1,z.F()),v=0;v<u;v++)S.l.push(z.F());for((S.h=z.J(V),S).M=z.J(f);u--;)S.l[u]=z.J(S.l[u]);return S},x=function(z,S,V,u,f){(3<((u=(((f=z.J(158),S=[S,f>>8&255,f&255],void 0)!=u&&S.push(u),0==z.J(11).length)&&(z.w[11]=void 0,E(z,11,S)),""),V)&&(V.message&&(u+=V.message),V.stack&&(u+=":"+V.stack)),V=z.J(128),V)&&(u=u.slice(0,V-3),V-=u.length+3,u=vF(u.replace(/\\r\\n/g,"\\n")),e(z,133,W(u.length,2).concat(u),12)),E)(z,128,V)},WF={},xX={},Mr=function(z,S,V,u,f){for((z.S=false,z).R=!(u=[],(z.iY=function(v,d,K){return d=function(){return K()},K=function(){return v},d[this.I]=function(Q){v=Q},d},z.Jb=(z.m=void 0,[]),z.A=25,z).T=(f=(z.L=function(v,d,K,Q,q,y){return v=(((y=(q=function(){return Q()},(K=(Q=function(){return Q[K.X+(q[K.U]===d)-!y[K.U]]},this),K).b),q)[K.I]=function(D){Q[K.Z]=D},q)[K.I](v),q)},0),z.N=0,0),1),z.C=void 0;128>f;f++)u[f]=String.fromCharCode(f);(((f=(z.CZ=((((((((((((z.s=((((((z.$=(((E(z,2,(z.w=[],z.c=[],0)),E)(z,158,0),E)(z,153,function(v,d,K,Q,q,y,D){g(v,1,5)||(d=eC(v),K=d.l,q=d.h,Q=d.M,D=K.length,0==D?y=Q[q]():1==D?y=Q[q](K[0]):2==D?y=Q[q](K[0],K[1]):3==D?y=Q[q](K[0],K[1],K[2]):x(v,22),E(v,d.P,y))}),[]),E)(z,133,Ac(4)),E(z,144,function(v,d,K,Q,q){0!==(Q=(K=(q=(Q=(K=(d=v.F(),v).F(),v.F()),d=v.J(d),v).J(v.F()),v.J(K)),v).J(Q),d)&&(Q=gX(v,Q,q,1,d,K),ow(d,K,Q),E(v,73,[d,K,Q]))}),E(z,90,function(v,d,K,Q){(Q=(K=(d=v.F(),v.F()),v.F()),E)(v,Q,(v.J(d)in v.J(K))+0)}),E(z,191,r),E)(z,149,{}),E(z,255,function(v,d,K,Q,q,y,D){if((d=v.F(),K=$X(v),Q="",v).w[220])for(q=v.J(220),y=0,D=q.length;K--;)y=(y+$X(v))%D,Q+=u[q[y]];else for(;K--;)Q+=u[v.F()];E(v,d,Q)}),E(z,89,function(v,d,K){K=(d=v.F(),v.F()),E(v,K,v.J(K)+v.J(d))}),E)(z,20,function(v){Jc(v,4)}),E(z,125,function(v,d,K){K=(d=v.F(),v).F(),E(v,K,""+v.J(d))}),E(z,23,function(v,d,K,Q){(K=(d=v.F(),v).F(),Q=v.F(),E)(v,Q,v.J(d)||v.J(K))}),E)(z,238,function(v){UU(v,2)}),E(z,251,function(v,d,K,Q,q,y){if(!g(v,1,255)){if("object"==F((v=(Q=(K=(d=(q=(Q=(K=(d=v.F(),v.F()),v).F(),v.F()),v.J(d)),v.J(K)),v).J(Q),v).J(q),d))){for(y in q=[],d)q.push(y);d=q}for(y=(q=0,d.length);q<y;q+=Q)K(d.slice(q,q+Q),v)}}),E)(z,139,function(v,d,K){d=(d=v.F(),K=v.F(),v.w[d])&&v.J(d),E(v,K,d)}),E(z,121,function(v,d,K,Q){(Q=(d=v.F(),K=v.F(),v.F()),E)(v,Q,v.J(d)>>K)}),E(z,247,function(v,d,K,Q){(d=(d=v.F(),K=v.F(),Q=v.F(),K=v.J(K),v).J(d),E)(v,Q,d[K])}),E(z,147,0),[]),E(z,134,function(v){v.Fn(4)}),E)(z,159,[]),E)(z,5,function(v,d,K){(K=(d=v.F(),v.F()),0)!=v.J(d)&&E(v,2,v.J(K))}),E(z,85,z),E(z,93,function(v,d,K,Q,q,y,D){g(v,1,5)||(d=eC(v),q=d.h,Q=d.M,K=d.l,D=K.length,0==D?y=new Q[q]:1==D?y=new Q[q](K[0]):2==D?y=new Q[q](K[0],K[1]):3==D?y=new Q[q](K[0],K[1],K[2]):4==D?y=new Q[q](K[0],K[1],K[2],K[3]):x(v,22),E(v,d.P,y))}),E)(z,148,function(v){UU(v,4)}),E(z,253,function(v,d,K){d=(K=(d=v.F(),v.F()),v.J(d)),E(v,K,F(d))}),E)(z,146,function(v,d,K,Q){(d=(Q=(K=(d=v.F(),v.F()),v.F()),v.J(d))==v.J(K),E)(v,Q,+d)}),E(z,221,function(){}),E)(z,242,[165,0,0]),E(z,201,function(v,d){d=v.F(),v=v.J(d),Xt(v[0],v[1],v[2])}),E)(z,172,function(v,d,K){g(v,1,5)||(d=v.F(),K=v.F(),E(v,K,function(Q){return eval(Q)}(v.J(d))))}),E)(z,11,[]),E(z,58,function(v){UU(v,1)}),E)(z,160,function(v,d,K,Q,q){(K=(q=(Q=(K=(d=v.F(),v.F()),v).J(v.F()),v.J(v.F())),v.J(K)),E)(v,d,gX(v,K,Q,q))}),z.bY=function(v,d){d.push(v[0]<<24|v[1]<<16|v[2]<<8|v[3]),d.push(v[4]<<24|v[5]<<16|v[6]<<8|v[7]),d.push(v[8]<<24|v[9]<<16|v[10]<<8|v[11])},E)(z,63,function(v,d){g(v,1,5)||(d=eC(v),E(v,d.P,d.h.apply(d.M,d.l)))}),E(z,235,function(v,d){(d=v.J(v.F()),C0)(v,d)}),E)(z,236,function(v,d,K,Q){if(d=v.s.pop()){for(K=v.F();0<K;K--)Q=v.F(),d[Q]=v.w[Q];v.w=(d[128]=(d[11]=v.w[11],v.w[128]),d)}else E(v,2,v.i.length)}),window.performance||{}).timing||{}).navigationStart||0,E(z,128,2048),E(z,154,function(v){Jc(v,1)}),E(z,252,function(v,d,K,Q){Q=(K=(d=v.F(),v.F()),v.F()),v.J(d)[v.J(K)]=v.J(Q)}),E(z,180,function(v,d,K,Q,q,y,D,b,Y,p,p0,A,rX){for(p=Y=(b=(D=(y=(q=(Q=K=(d=v.F(),0),function(R,w){for(;Q<R;)K|=v.F()<<Q,Q+=8;return K>>=(w=K&((Q-=R,1)<<R)-1,R),w}),q(3))+1,q(5)),[]),0);p<D;p++)p0=q(1),b.push(p0),Y+=p0?0:1;for(Y=(Y-1).toString((A=[],2)).length,p=0;p<D;p++)b[p]||(A[p]=q(Y));for(p=0;p<D;p++)b[p]&&(A[p]=v.F());for(p=y,rX=[];p--;)rX.push(v.J(v.F()));E(v,d,function(R,w,Rw,B,L){for(Rw=(R.N++,w=(B=0,[]),[]);B<D;B++){if(L=A[B],!b[B]){for(;L>=w.length;)w.push(R.F());L=w[L]}Rw.push(L)}R.m=(R.C=R.L(rX.slice(),R.F),R.L(Rw,R.F))})}),uL(),V.O)||function(){},E(z,156,0),E)(z,162,function(v,d,K,Q,q){for(Q=(K=(d=v.F(),$X(v)),[]),q=0;q<K;q++)Q.push(v.F());E(v,d,Q)}),E)(z,73,0),E)(z,104,106),E(z,166,0),S&&"!"==S.charAt(0)?(z.V=S,f()):(V=!!V.O,z.i=[],C(z,[EU,S]),C(z,[Tj,f]),T(z,false,V,true))},$X=function(z,S){return(S=z.F(),S)&128&&(S=S&127|z.F()<<7),S},aw=function(z,S){return z[S]<<24|z[S+1]<<16|z[S+2]<<8|z[S+3]},n0={},Ss=function(z,S,V,u,f){for(;z.$.length;){if(V=V&&S)z.T&&z.S?(z.S=false,V=0!=document.hidden?false:true):V=false;if(V){z.yJ((f=z,function(){T(f,false,S,false)}));break}u=(V=true,u=z.$.pop(),zb(z,u))}return u},vi={},Tj={},V0=function(z,S,V,u){try{for(u=0;79669387488!=u;)z+=(S<<4^S>>>5)+S^u+V[u&3],u+=2489668359,S+=(z<<4^z>>>5)+z^u+V[u>>>11&3];return[z>>>24,z>>16&255,z>>8&255,z&255,S>>>24,S>>16&255,S>>8&255,S&255]}catch(f){throw f;}},M=function(z,S){try{Mr(this,z,S)}catch(V){J(this,V)}},gX=(M.prototype.ar=function(z,S,V,u){try{u=z[(S+2)%3],z[S]=z[S]-z[(S+1)%3]-u^(1==S?u<<V:u>>>V)}catch(f){throw f;}},M.prototype.VJ=(M.prototype.U=(M.prototype.Ir=function(z,S,V,u){for(;V--;)2!=V&&158!=V&&S.w[V]&&(S.w[V]=S[u](S[z](V),this));S[z]=this},"caller"),((M.prototype.wt=false,M).prototype.b=function(z,S,V,u,f,v,d,K,Q,q){if(S=z[0],S==EU){z=z[1];try{for(V=(S=[],0);V<z.length;){if(d=(u=t[z.charAt(V++)],f=V<z.length?t[z.charAt(V)]:0,++V,v=V<z.length?t[z.charAt(V)]:64,++V,V)<z.length?t[z.charAt(V)]:64,++V,null==u||null==f||null==v||null==d)throw Error();64!=(S.push(u<<2|f>>4),v)&&(S.push(f<<4&240|v>>2),64!=d&&S.push(v<<6&192|d))}this.i=S}catch(y){x(this,17,y)}uS(this)}else if(S==vi)u=z[1],u.push(this.J(242).length,this.J(133).length,this.J(159).length,this.J(128)),E(this,149,z[2]),this.w[124]&&dM(this,this.J(124));else{if(S==n0){for(v=(d=(((f=((0<((d=(f=((f=(v=W(this.J((u=z[2],242)).length+2,2),this.J(11)),0<f.length)&&e(this,242,W(f.length,2).concat(f),15),this.J(166)&511),f-=this.J(242).length+5,this).J(133),4<d.length)&&(f-=d.length+3),f)&&e(this,242,W(f,2).concat(Ac(f)),10),4<d.length)&&e(this,242,W(d.length,2).concat(d),153),Ac)(2).concat(this.J(242)),f[1]=f[0]^3,f)[3]=f[1]^v[0],f)[4]=f[1]^v[1],0),[]);d<f.length;d+=3)K=f[d],Q=(z=d+1<f.length)?f[d+1]:0,q=(S=d+2<f.length)?f[d+2]:0,V=K>>2,K=(K&3)<<4|Q>>4,Q=(Q&15)<<2|q>>6,q&=63,S||(q=64,z||(Q=64)),v.push(H[V],H[K],H[Q],H[q]);if(v=v.join(""))v="!"+v;else for(d=0,v="";d<f.length;d++)z=f[d][this.I](16),1==z.length&&(z="0"+z),v+=z;return this.J((f=v,242)).length=u[0],this.J(133).length=u[1],this.J(159).length=u[2],E(this,128,u[3]),f}if(S==WF)dM(this,z[1]);else if(S==xX)return dM(this,z[1])}},M.prototype).QJ=function(z,S,V,u,f,v){if(this.V)return this.V;try{v=[],u=!!z,f=[],C(this,[vi,f,S]),C(this,[n0,z,f,v]),T(this,false,u,true),V=v[0]}catch(d){J(this,d),V=this.V,z&&z(V)}return V},function(z,S,V,u,f,v){for(v=u=(V=[],0);v<z.length;v++)for(u+=S,f=f<<S|z[v];7<u;)u-=8,V.push(f>>u&255);return V}),function(z,S,V,u,f,v){return function(){var d=[xX,S,V,void 0,f,v,arguments],K=u&1;if(u&2)var Q=(C(z,d),T)(z,true,false,false);else K&&z.$.length?C(z,d):K?(C(z,d),T(z,true,false,false)):Q=zb(z,d);return Q}}),a=r,C0=(M.prototype.Z=(M.prototype.yJ=r.requestIdleCallback?function(z){requestIdleCallback(z,{timeout:4})}:r.setImmediate?function(z){setImmediate(z)}:function(z){setTimeout(z,0)},36),function(z,S){z.s.push(z.w.slice()),z.w[2]=void 0,E(z,2,S)}),C=(((M.prototype.Fn=function(z,S,V,u){(V=(u=(V=(z&=(S=z&4,3),this).F(),this).F(),this).J(V),S&&(V=vF((""+V).replace(/\\r\\n/g,"\\n"))),z)&&e(this,u,W(V.length,2)),e(this,u,V)},M).prototype.X=35,M.prototype).v={},function(z,S){z.$.splice(0,0,S)}),e=(M.prototype.I="toString",function(z,S,V,u,f,v){for(u=((f=z.J(S),133==S)?(S=function(d,K,Q,q){if((K=f.length,Q=K-4>>3,f).KZ!=Q){Q=(q=[0,0,0,v],(Q<<(f.KZ=Q,3))-4);try{f.dt=V0(aw(f,Q),aw(f,Q+4),q)}catch(y){throw y;}}f.push(f.dt[K&7]^d)},v=z.J(147)):S=function(d){f.push(d)},u&&S(u&255),z=V.length,0);u<z;u++)S(V[u])}),E=(M.prototype.J=function(z,S){if(S=this.w[z],void 0===S)throw x(this,30,0,z),this.v;return S()},function(z,S,V){if(2==S||158==S)if(z.w[S])z.w[S][z.I](V);else z.w[S]=z.iY(V);else if(242!=S&&133!=S&&159!=S&&11!=S||!z.w[S])z.w[S]=z.L(V,z.J);156==S&&(z.o=void 0,E(z,2,z.J(2)+4))}),zb=(M.prototype.N8=function(z,S,V,u,f){for(f=u=0;f<z.length;f++)u+=z.charCodeAt(f),u+=u<<10,u^=u>>6;return z=(u+=u<<3,u^=u>>11,u+(u<<15))>>>0,u=new Number(z&(1<<S)-1),u[0]=(z>>>S)%V,u},function(z,S,V,u,f){if(z.R=!(V=S[0],1),V==vi)z.A=25,z.b(S);else if(V==n0){V=(u=S[1],S[3]);try{f=z.b(S)}catch(v){J(z,v),f=z.V}(u&&u(f),V).push(f)}else if(V==WF)z.b(S);else if(V==EU)z.b(S);else if(V==Tj){try{for(f=0;f<z.c.length;f++)try{u=z.c[f],u[0][u[1]](u[2])}catch(v){}}catch(v){}z.c=[],(0,S[1])()}else if(V==xX)return u=S[6],f=S[2],E(z,123,S[4]?[u[0].a]:u),E(z,149,f),z.b(S)}),dM=function(z,S,V){return uS(((V=z.J(2),z.i)&&V<z.i.length?(E(z,2,z.i.length),C0(z,S)):E(z,2,S),z),V)},g=(M.prototype.$W=(M.prototype.Y=((M.prototype.F=function(z,S){if(this.C)return z=z?this.C().shift():this.m().shift(),this.C().length||this.m().length||(this.m=this.C=void 0,this.N--),z;if(!((z=this.J(2),z)in this.i))throw x(this,31),this.v;return((void 0==this.o&&(this.o=aw(this.i,z-4),this.j=void 0),this).j!=z>>3&&(this.j=z>>3,S=[0,0,0,this.J(156)],this.uY=V0(this.o,this.j,S)),E(this,2,z+1),this).i[z]^this.uY[z%8]},window.performance)||{}).now?function(){return this.CZ+(window.performance.now()|0)}:function(){return+new Date},function(z,S,V){if(3==z.length){for(V=0;3>V;V++)S[V]+=z[V];for(z=[13,8,13,12,16,5,3,10,15],V=0;9>V;V++)S[3](S,V%3,z[V])}}),function(z,S,V){if(0>=z.T||1<z.N||!z.R&&0<S||0!=document.hidden||z.Y()-z.g<z.T-V)return false;return!((S=z.J((z.S=true,2))-S,E(z,2,z.i.length),z).$.push([WF,S]),0)}),Ac=function(z,S){for(S=[];z--;)S.push(255*Math.random()|0);return S},T=(M.prototype.lY=function(z,S,V){return(S^=S<<13,S^=S>>17,S=(S^S<<5)&V)||(S=1),z^S},function(z,S,V,u,f){if(0!=z.$.length){if(f=0==z.N)z.g=z.Y();return(V=Ss(z,V,u),f)&&(f=z.Y()-z.g,f<(S?10:0)||0>=z.A--||z.Jb.push(254>=f?f:254)),V}}),uS=function(z,S,V,u,f,v,d){z.N++;try{for(v=(u=5001,V=(f=void 0,z.i.length),0);(z.wt||--u)&&(z.C||(v=z.J(2))<V);)try{z.C?f=z.F(true):(E(z,158,v),d=z.F(),f=z.J(d)),f&&f.call?f(z):x(z,21,0,d),z.R=true,g(z,0,2)}catch(K){K!=z.v&&(z.J(104)?x(z,22,K):E(z,104,K))}u||x(z,33)}catch(K){try{x(z,22,K)}catch(Q){J(z,Q)}}return(V=z.J(149),S)&&E(z,2,S),z.N--,V};U[0]in a||"undefined"==typeof a.execScript||a.execScript("var "+U[0]);for(var n;U.length&&(n=U.shift());)a=a[n]&&a[n]!==Object.prototype[n]?a[n]:a[n]={};((m=r.botguard,m).bg=function(z,S,V){return z&&z.substring&&(V=m[z.substring(0,3)])?new V(z.substring(3),S):new m.NLS(z,S)},m).NLS=function(z,S,V){(V=new M(z,{O:S}),this).invoke=function(u,f,v){return(v=V.QJ(f&&u,v),u)&&!f&&u(v),v}};try{m.u||(ow(r,"unload",function(){}),m.u=1)}catch(z){};')();</script>
  <script type="text/javascript" nonce="/d7qMbVPmP8Y57n1jLo3Eg">
  document.bg = new botguard.bg('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');
  </script>
<script nonce="/d7qMbVPmP8Y57n1jLo3Eg">
  gaia = window.gaia || {};
  gaia.ps = gaia.ps || {};
  gaia.ps.hasPrefilledIdentifier = false;
  function gaia_parseFragment() {
  var hash = location.hash;
  var params = {};
  if (!hash) {
  return params;
  }
  var paramStrs = decodeURIComponent(hash.substring(1)).split('&');
  for (var i = 0; i < paramStrs.length; i++) {
      var param = paramStrs[i].split('=');
      params[param[0]] = param[1];
    }
    return params;
  }

  function gaia_prefillEmail() {
    var email = null;
    var form = null;
    if (document.getElementById) {
      email = document.getElementById('Email');
      form = document.getElementById('gaia_loginform');
    }
    if (form && email && (email.value == null || email.value == '')
        && (email.type != 'hidden')) {
      hashParams = gaia_parseFragment();
      if (hashParams['Email'] && hashParams['Email'] != '') {
        email.value = hashParams['Email'];
      }
    }
  }

  
  try {
    gaia_prefillEmail();
  } catch (e) {
  }
  
</script>
<script nonce="/d7qMbVPmP8Y57n1jLo3Eg">
  var gaia_scrollToElement = function(element) {
  var calculateOffsetHeight = function(element) {
  var curtop = 0;
  if (element.offsetParent) {
  while (element) {
  curtop += element.offsetTop;
  element = element.offsetParent;
  }
  }
  return curtop;
  }
  var siginOffsetHeight = calculateOffsetHeight(element);
  var scrollHeight = siginOffsetHeight - window.innerHeight +
  element.clientHeight + 0.02 * window.innerHeight;
  window.scroll(0, scrollHeight);
  }
</script>
  <script nonce="/d7qMbVPmP8Y57n1jLo3Eg">
  if (gaia.ps.hasPrefilledIdentifier) {
  var form = document.getElementById('gaia_loginform');
  if (form) {
  form.submit();
  }
  }
  </script>
<script nonce="/d7qMbVPmP8Y57n1jLo3Eg">
  (function(){
  gaia_onLoginSubmit = function() {
  try {
  gaia.loginAutoRedirect.stop();
  } catch (err) {
  // do not prevent form from being submitted
  }
  try {
  document.bg.invoke(function(response) {
  document.getElementById('bgresponse').value = response;
  });
  } catch (err) {
  document.getElementById('bgresponse').value = '';
  }
  return true;
  }
  document.getElementById('gaia_loginform').onsubmit = gaia_onLoginSubmit;
  var signinButton;
  signinButton = document.getElementById('next');
  gaia_attachEvent(window, 'load', function(){
  gaia_scrollToElement(signinButton);
  });
  })();
</script>
  <script nonce="/d7qMbVPmP8Y57n1jLo3Eg">var e=this,g=function(b,c){b=b.split(".");var a=e;b[0]in a||!a.execScript||a.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===c?a[d]?a=a[d]:a=a[d]={}:a[d]=c};var h=function(){try{return new XMLHttpRequest}catch(a){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++)try{return new ActiveXObject(b[c])}catch(d){}}return null};g("gaia.ajax.newXmlHttpRequest",h);var k=function(){this.a=h();this.parameters={}};g("gaia.ajax.XmlHttpFormRequest",k);
k.prototype.send=function(b,c){var a=[],d;for(d in this.parameters)a.push(d+"="+encodeURIComponent(this.parameters[d]));a=a.join("&");var f=this.a;f.open("POST",b,!0);f.setRequestHeader("Content-type","application/x-www-form-urlencoded");f.onreadystatechange=function(){4==f.readyState&&c({status:f.status,text:f.responseText})};f.send(a)};k.prototype.send=k.prototype.send;
k.prototype.h=function(b,c,a){var d=this.a;d.open("POST",b,!0);d.setRequestHeader("Content-type","application/json");d.onreadystatechange=function(){4==d.readyState&&a({status:d.status,text:d.responseText})};d.send(c)};k.prototype.sendJson=k.prototype.h;k.prototype.get=function(b,c){var a=this.a;a.open("GET",b,!0);a.onreadystatechange=function(){4==a.readyState&&c({status:a.status,text:a.responseText})};a.send()};k.prototype.get=k.prototype.get;var l=/\s*;\s*/,m=function(){if(!document.cookie)return"";for(var b=document.cookie.split(l),c=0;c<b.length;c++){var a=b[c];a=a.replace(/^\s+/,"");a=a.replace(/\s+$/,"");if(0==a.indexOf("APISID="))return a.substr(7)}return""};var n=null,p=function(b,c){this.g=b;this.f=c;this.c=m();this.b=!1},q=function(){var b=n,c=m();c==b.c||b.b||(b.c=c,(new k).get(b.f,function(a){var d=n;a&&a.status&&200==a.status&&"OK"==a.text&&(d.a&&clearInterval(d.a),d.b||(window.location=d.g))}))};p.prototype.start=function(b){if(this.a)return!1;this.a=setInterval(function(){q()},b);return!0};g("gaia.loginAutoRedirect.start",function(b,c,a){if(n||!a||!c||0>=b)return!1;n=new p(c,a);return n.start(b)});
g("gaia.loginAutoRedirect.stop",function(){var b=n;b.b=!0;b.a&&(clearInterval(b.a),b.a=null)});
</script>
  <script type="text/javascript" nonce="/d7qMbVPmP8Y57n1jLo3Eg">
  gaia.loginAutoRedirect.start(5000,
  'https:\x2F\x2Faccounts.google.com\x2FServiceLogin?continue=https%3A%2F%2Fsites.google.com%2Fsite%2Fperguntaserespostasjmary%2FmostrarTd_Js.js\x26followup=https%3A%2F%2Fsites.google.com%2Fsite%2Fperguntaserespostasjmary%2FmostrarTd_Js.js\x26passive=1209600\x26noautologin=true',
  'https:\x2F\x2Faccounts.google.com\x2FPassiveLoginProber?continue=https%3A%2F%2Fsites.google.com%2Fsite%2Fperguntaserespostasjmary%2FmostrarTd_Js.js\x26followup=https%3A%2F%2Fsites.google.com%2Fsite%2Fperguntaserespostasjmary%2FmostrarTd_Js.js\x26passive=1209600');
  </script>
  </body>
</html>
