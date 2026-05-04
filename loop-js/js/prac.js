const students = [
  { studentName: "Jake", grades: [85, 90, 88], present: true },
  { studentName: "Gerald", grades: [70, 75, 72], present: false },
  { studentName: "John Dexter", grades: [95, 92, 94], present: true },
  { studentName: "Jamaica", grades: [60, 65, 70], present: true },
  { studentName: "Jolina", grades: [88, 85, 90], present: true },
  { studentName: "Sarah", grades: [78, 80, 82], present: false },
  { studentName: "Czeahamford", grades: [92, 89, 94], present: true },
  { studentName: "Mc Kenneth", grades: [73, 70, 68], present: false },
  { studentName: "Kaye", grades: [81, 84, 79], present: true }
];

const tableBody = document.getElementById("table-body");

function calculateAverage(grades) {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

function getRemarks(avg, isPresent) {
    if (!isPresent) return "Absent";

  return avg >= 75 ? "Passed" : "Failed";
}

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(student => {
    const avg = calculateAverage(student.grades);
    const remarks = overrideremarks;
    getRemarks(avg, s.present);
    const row = `<tr>
      <td>${student.studentName}</td>
      <td>${student.grades[0]}</td>
      <td>${student.grades[1]}</td>
      <td>${student.grades[2]}</td>
      <td>${avg.toFixed(1)}</td>
      <td>${remarks}</td>
    </tr>`;
    tableBody.insertAdjacentHTML('beforeend', row);
  });
}

renderTable(students);

document.getElementById('showPresent').onclick = () => renderTable(students.filter(s => s.present) + "Present");
document.getElementById('showAbsent').onclick = () => renderTable(students.filter(s => !s.present));
document.getElementById('showPassed').onclick = () => renderTable(students.filter(s => getRemarks(calculateAverage(s.grades)) === "Passed"));
document.getElementById('showFailed').onclick = () => renderTable(students.filter(s => getRemarks(calculateAverage(s.grades)) === "Failed"));
document.getElementById('searchBtn').onclick = () => {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filterd = students.filter(s => s.studentName.toLowerCase().includes(searchText)
);
renderTable(filterd);
};