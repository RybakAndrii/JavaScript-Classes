
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees; 
  }


  getHtml() {
    let html = `<table border="1" cellspacing="0" cellpadding="5">
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Salary</th>
                        </tr>`;
  
    for (let employee of this.employees) {
      html += `<tr>
                        <td>${employee.name}</td>
                        <td>${employee.position}</td>
                        <td>${employee.salary}</td>
                     </tr>`;
    }

    html += `</table>`;
    return html;
  }
}


let employees = [
  new Employee("John Doe", "Manager", "$3000"),
  new Employee("Jane Smith", "Accountant", "$2500"),
  new Employee("Michael Brown", "Teller", "$1800"),
  new Employee("Emily Davis", "Customer Service", "$2000"),
];


let empTable = new EmpTable(employees);


document.write(empTable.getHtml());
