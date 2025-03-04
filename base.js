const base = document.getElementById('base');

//////////////////////////////////////////////////


// function AddJobIcons(string, Job, Name='None') {
function AddColumnHead(parent, i, j, k = 0) {
    job = (i < 2 ? JOBS[i][j] : JOBS[i][j][k])
    let col = (i < 2 ? i * 10 + j + 1 : i * 100 + j * 10 + k);

    const cols = document.createElement('div');
    cols.className = 'line';
    if (i<2 && j == 0 || i == 2 && k == 0) {
        cols.className = 'role-line';
        cols.style.paddingLeft = '2px';
    }
    cols.style.gridColumn = `${col}`; // + '/ span 1'; //`${string} / span 1`;
    base.appendChild(cols);

    const div = document.createElement('div');
    div.className = 'column-head job-col';
    div.style.gridColumn = `${col}`

    const span = document.createElement('span');
    span.innerText = job;
    span.style.backgroundColor = graphColor(job, 'None');
    div.appendChild(span);

    parent.appendChild(div);
}

function addJobEventListeners(div, member, row, i, j, k = 0) {
    let role = (i < 2 ? ROLE_JOB[i].role : ROLE_JOB[i].jobs[j].role);
    let col = (i < 2 ? i * 10 + j + 1 : i * 100 + j * 10 + k);

    div.addEventListener('click', () => {
        // updateAppContent(member, job, row, col);
        if (i < 2) member.jobs[i][j] ^= true;
        else member.jobs[i][j][k] ^= true;
        // var result = (i < 2) ? member.jobs[i][j] : member.jobs[i][j][k];
        div.classList.toggle("cant");
        // div.style.opacity = result ? '1' : '0.3';
        // UpdateRoles();
        // console.log(`Member: ${member.name}, Job: ${JOBS[i][j]}/${member.jobs[i][j][k]}, Row: ${row}, Column: ${col}`);
    });
    div.addEventListener('mouseenter', () => {
        div.parentElement.querySelector('.member').style.backgroundColor = '#987';
        rolehead = base.querySelector(`.role-col.${role}`);
        rolehead.style.backgroundColor = '#777';
    });
    div.addEventListener('mouseleave', () => {
        div.parentElement.querySelector('.member').style.backgroundColor = '';
        rolehead = base.querySelector(`.role-col.${role}`);
        rolehead.style.backgroundColor = '';
    });
}

function updateAppContent(member, job, row, col) {
    const appContent = document.getElementById('app');
    appContent.innerHTML = `Member: ${member}, Job: ${job}, Row: ${row}, Column: ${col}`;
}

// JOB COLS
for (let i = 0; i < JOBS.length; i++) {
    let j = 0;
    if (i < 2) {
        const div = document.createElement('div');
        div.className = "column-head role-col " + ROLE_JOB[i].role;
        let col = i * 10 + 1;
        div.style.gridColumn = `${col} / span ${JOBS[i].length}`;
        // div.style.gridColumn = `${i * 4 + 1} / span ${JOBS[i].length}`;
        AddIcon(div, i, j);
        base.appendChild(div);
    }
    for (j = 0; j < JOBS[i].length; j++) {
        if (Array.isArray(JOBS[i][j])) {
            let k = 0;
            const div = document.createElement('div');
            div.className = "column-head role-col " + ROLE_JOB[i].jobs[j].role;
            let col = i * 100 + j * 10 + k;
            div.style.gridColumn = `${col} / span ${JOBS[i][j].length}`;
            // div.style.gridColumn = `${i * 4 + 1} / span ${JOBS[i].length}`;
            AddIcon(div, i, j, k);
            base.appendChild(div);

            for (k = 0; k < JOBS[i][j].length; k++) {
                // string = `${i + 1}_${j + 1}_${k + 1}`;
                // AddJobIcons(string, JOBS[i][j][k]);
                AddColumnHead(base, i,j,k);
            }
        }
        else {
            string = `${i + 1}_${j + 1}`;
            // AddJobIcons(string, JOBS[i][j]);
            AddColumnHead(base, i,j);
        }

    }
}

// MEMBERS
// members.forEach(member => {
for (let m =0; m < members.length; m++) {
    const block = document.createElement('div');
    block.className = `block`;
    block.setAttribute('member', `${m}`);

    const row = document.createElement('div');
    row.className = 'row';
    row.style.gridRow = `${m + 1}`;
    block.appendChild(row);

    const member_div = document.createElement('div');
    member_div.className = 'member';
    member_div.style.gridRow = `${m + 1}`; // span 99`;
    // div.textContent = members[i];
    {
        const span = document.createElement('span');
        // span.textContent = member;
        span.textContent = `파티원 ${m + 1}: ` + members[m].name;
        span.contentEditable = true;
        span.addEventListener('input', (e) => {
            members[m].name = e.target.innerText;
        });
        member_div.appendChild(span);
    }
    block.appendChild(member_div);

    for (let i = 0; i < JOBS.length; i++) {
        for (j = 0; j < JOBS[i].length; j++) {
            if (Array.isArray(JOBS[i][j])) {
                for (k = 0; k < JOBS[i][j].length; k++) {
                    const div = document.createElement('div');
                    div.className = `job ${JOBS[i][j][k]} ${ROLE_JOB[i].jobs[j].role}`;
                    if (members[m].jobs[i][j][k] == 0)
                        div.classList.toggle("cant");
                    let col = i * 100 + j * 10 + k;
                    div.style.gridColumn = `${col}`;
                    div.style.gridRow = `${m + 1}`;
                    addJobEventListeners(div, members[m], m + 1, i, j, k);
                    AddIcon(div, i, j, k + 1);
                    block.appendChild(div);
                }
            }
            else {
                string = `${i + 1}_${j + 1}`;
                const div = document.createElement('div');
                div.className = `job ${JOBS[i][j]} ${ROLE_JOB[i].role}`;
                if (members[m].jobs[i][j] == 0)
                    div.classList.toggle("cant");
                let col = i * 10 + j + 1;
                div.style.gridColumn = `${col}`;
                div.style.gridRow = `${m + 1}`;
                addJobEventListeners(div, members[m], m + 1, i, j);
                AddIcon(div, i, j + 1);
                block.appendChild(div);
            }
        }
    }
    base.appendChild(block);
}

