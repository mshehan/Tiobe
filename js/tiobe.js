/*
/Matthew Shehan
//mshehan@my.smccd.edu
//CIS 
//114 OL
//tiobe.js
//assignment 7
// 05-13-2016
 */
var tags = [
  ["Java", 20.956],
  ["C", 13.223],
  ["C++", 2.340],
  ["C#", 4.481],
  ["Python", 3.789],
  ["PHP", 2.992],
  ["JavaScript", 2.340],
  ["Ruby", 2.338],
  ["Perl", 2.326],
  ["Visual Basic .NET", 2.325],
  ["Delphi/Object Pascal", 2.008],
  ["Assembly Language", 1.883],
  ["Objective-C", 1.597],
  ["Swift", 1.593],
  ["R", 1.334],
  ["Groovy", 1.288],
  ["MATLAB", 1.287],
  ["PL/SQL", 1.208],
  ["D", 0.975]
];


WordCloud(document.getElementById('cloud'), {
  list: tags.map(function (word) {
    return [word[0], Math.round(word[1] * (document.getElementById('cloud').offsetWidth / 40))];
  }),
  color: "random-light"
});

var clicked = function (ev) {
  if (ev.target.nodeName === "SPAN") {
    var tag = ev.target.textContent || ev.target.innerText;
    var tagElem;
    if (tags.some(function (el) { if (el[0] === tag) { tagElem = el; return true; } return false; })) {
      document.getElementById("details").innerHTML = tag + " has a tiobe rating of " +
        tagElem[1] + "%"

    }
  } else {
    document.getElementById("details").innerHTML = "";
  }
}
document.getElementById("cloud").addEventListener("click", clicked)