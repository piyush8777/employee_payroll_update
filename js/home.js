window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}    
    <tr>
    <td><img class="profile" alt=""
          src="../assets/profile-images/Ellipse -2.png">
    </td>
    <td>Piyush Shaw</td>
    <td>Male</td>
    <td><div class='dept-label'>HR</div> <div class='dept-label'>Engineer</div></td>
    <td>3000000</td>
    <td>1 Jan 2020</td>
    <td>
      <img id="1" onclick="remove(this)" alt="delete"
            src="../assets/icons/delete-black-18dp.svg">
      <img id="1" alt="edit" onclick="update(this)"
            src="../assets/icons/create-black-18dp.svg">
    </td>    
  </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const creteEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Piyush Shaw',
            _gender: 'Male',
            _department: [
                'Engineer',
                'HR'
            ],
            _salary: '3000000',
            _startDate: '1 Jan 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assest/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Shreya Singh',
            _gender: 'Female',
            _department: [
                'HR',
                'Finance'
            ],
            _salary: '5000000',
            _startDate: '1 Feb 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assest/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

//To print Multiple Department without showing 'undefined'.
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for ( const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}