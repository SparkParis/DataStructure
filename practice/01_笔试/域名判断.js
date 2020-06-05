function isDomain(domainA, domainB) {
  A = domainA.toString();
  B = domainB.toString();
  if (A.indexOf(B) <= -1) {
    return 'no';
  } else {
    return 'yes'
  }
}

var flag = isDomain('123qq.com', 'qq.com');
console.log(flag)