const app_block = document.getElementById('app');
const result_block = document.getElementById('result');

// ROLE-COLS
var cols = [];
var roles = [];

//////////////////////////////////////////////////
// DISPLAY ELEMENTS
function AddRoles(target, i, j, k = 0) {
    let col = (i < 2 ? (i + 1) * 10 + 1 : i * 100 + j * 10 + k);
    let role  = (i < 2 ? ROLE_JOB[i].role : ROLE_JOB[i].jobs[j].role);

    const vline = document.createElement('div');
    vline.className = 'role-line';
    vline.style.paddingLeft = '2px';
    vline.style.gridColumn = `${col}`; // + '/ span 1'; //`${string} / span 1`;
    target.appendChild(vline);

    const div = document.createElement('div');
    div.className = "column-head role-col";
    div.style.gridColumn = `${col}`; // span ${JOBS[i].length}`;
    AddIcon(div, i, j, k, role.toUpperCase());
    target.appendChild(div);

    const role_block = document.createElement('div');
    role_block.className = "role_block " + role;
    role_block.style.gridColumn = `${col}`;

    target.appendChild(role_block);
}

for (let i = 0; i < ROLE_JOB.length; i++) {
    let j = 0;
    if (i < 2) {
        let col = (i + 1) * 10 + 1;
        cols.push(col);
        roles.push(ROLE_JOB[i].role);

        AddRoles(app_block, i, j);
        AddRoles(result_block, i, j);
    }
    else {
        for (j = 0; j < ROLE_JOB[i].jobs.length; j++) {
            let k = 0;
            let col = i * 100 + j * 10 + k;
            cols.push(col);
            roles.push(ROLE_JOB[i].jobs[j].role);

            AddRoles(app_block, i, j, k);
            AddRoles(result_block, i, j, k);
        }
    }
}



//////////////////////////////////////////////////
// MEMBERS
const entry = [
    [],
    [],
    [],
    [],
    [],
];

// Role-Jobs
function UpdateRoles() {
    for (let i = 0; i < cols.length; i++) {
        entry[i] = [];
        const role_block = document.getElementsByClassName(`role_block ${roles[i]}`)[0];
        role_block.innerHTML = '';
        // const role_block = document.createElement('div');

        for (let m = 0; m < members.length; m++) {
            // const member_block = document.getElementById(`member_${i}`);
            const member_block = document.createElement('div');
            member_block.className = `members ${m}`;

            const name = document.createElement('div');
            name.innerText = members[m].name;
            name.className = 'member_name';
            member_block.appendChild(name);

            const jobs_block = document.createElement('div');
            jobs_block.className = 'jobs';
            let sum = 0;
            if (i < 2) {
                for (let j = 0; j < JOBS[i].length; j++) {
                    // console.log(members[m].name, members[m].jobs[i][j]);
                    if (members[m].jobs[i][j])
                        sum++, AddIcon(jobs_block, i, j + 1);
                }
            }
            else {
                let j = i - 2;
                for (let k = 0; k < JOBS[2][j].length; k++) {
                    // console.log(members[m].name, members[m].jobs[2][j]);
                    if (members[m].jobs[2][j][k])
                        sum++, AddIcon(jobs_block, 2, j, k + 1);
                }
            }

            member_block.appendChild(jobs_block);

            if (sum > 0)
            {
                role_block.appendChild(member_block);
                entry[i].push(m);
            }
        }
    }
    // console.log(entry);
}
UpdateRoles();
