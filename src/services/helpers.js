export const passwordValid = password => {
  if (password.length < 8) return false;
  const regExp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[~!^(){}<>%@#&*+.,=_-]).*$/;
  if (!regExp.test(password)) return false;
  return true;
};

export const emailValid = email => {
  const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regExp.test(email)) return false;
  return true;
};

export const phoneValid = phone => {
  //  eslint-disable-next-line
  const regExp = /^[\+][1-9]{1}[\d]{9,13}$/;
  if (!regExp.test(phone)) return false;
  return true;
};

export const formatDate = date => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

export function isGood(password) {
  //TextBox left blank.

  //Regular Expressions.
  var regex = new Array();
  regex.push('[A-Z]'); //Uppercase Alphabet.
  regex.push('[a-z]'); //Lowercase Alphabet.
  regex.push('[0-9]'); //Digit.
  regex.push('[$@$!%*#?&]'); //Special Character.

  var passed = 0;

  //Validate for each Regular Expression.
  for (var i = 0; i < regex.length; i++) {
    if (new RegExp(regex[i]).test(password)) {
      passed++;
    }
  }

  //Display status.
  var strength = '';
  switch (passed) {
    case 0:
    case 1:
    case 2:
      strength = 'Weak';
      // "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
      break;
    case 3:
      strength = 'Medium';
      // "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
      break;
    case 4:
      strength = 'Strong';
      // "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
      break;
  }
  return strength;
  // password_strength.innerHTML = strength;
}
