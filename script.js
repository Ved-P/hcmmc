var data = [
  {"name": "Mr. G",
    "role": "Head of the Competition, Problem Writer"},
  {"name": "Nathaniel Satriya",
    "role": "Chief Technical Officer, HCMMC 2020 Lead, Problem Writer"},
  {"name": "Kriti Kaushal",
    "role": "HCMMC 2021 Lead, Problem Writer"},
  {"name": "Anvitha Mattapalli",
    "role": "HCMMC 2021 Lead, Problem Writer"},
  {"name": "Ved Pradhan",
    "role": "HCMMC 2022 Lead, Problem Writer, Webmaster"},
  {"name": "Chinmay Raghvendran",
    "role": "HCMMC 2022 Lead, Problem Writer"},
  ];

function showPeople() {
  var html = document.getElementById('people');

  for (let i = 0; i < data.length; i++) {
    html.innerHTML += "<div class='person'><b>" + data[i].name + "</b><br>" + data[i].role + "</div>";
  }
}
