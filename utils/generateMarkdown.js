function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '(https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache 2.0') {
    return '(https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '(https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
  } else if (license === 'BSD 3-Clause') {
    return '(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else {
    return '';
  }
 
}

module.exports = {
  renderLicenseBadge
};


