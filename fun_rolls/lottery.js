let selected = [0, 0, 0, 0, 0, 0, 0, 0];

class Combination {
    constructor(selected = [], combination = [[],[],[],[],[]], count = 0) {
        this.combination = combination;
        this.selected = selected;
        this.count = count;
    }
    InsertM(roles, member) {
        this.combination[roles].push(member);
        this.selected[member] = 1;
        this.count++;
    }
}

var combinations = [];

function CombinationsCaster1(temp) {
    let r = 4;
    for (let c1 = 0; c1 < entry[r].length; c1++) {
        if (temp.selected[entry[r][c1]] == 0) {
            let temp1 = new Combination([...temp.selected], temp.combination.map(arr => [...arr]), temp.count);
            temp1.InsertM(r, entry[r][c1]);
            if(temp1.count == 8) combinations.push(temp1);
        }
    }
}
function CombinationsCaster2(temp) {
    let r = 4;
    for (let c1 = 0; c1 < entry[r].length - 1; c1++) {
        if (temp.selected[entry[r][c1]])
            continue;
        let temp1 = new Combination([...temp.selected], temp.combination.map(arr => [...arr]), temp.count);
        temp1.InsertM(r, entry[r][c1]);

        for(let c2 = 0; c2 < entry[r].length; c2++) {
            if (temp1.selected[entry[r][c2]] == 0) {
                let temp2 = new Combination([...temp1.selected], temp1.combination.map(arr => [...arr]), temp1.count);
                temp2.InsertM(r, entry[r][c2]);
                if(temp2.count == 8) combinations.push(temp2);
            }
        }
    }
}
function CombinationRange1c1(temp) {
    let r = 3;
    for (let c1 = 0; c1 < entry[r].length - 1; c1++) {
        if (temp.selected[entry[r][c1]])
            continue;
        let temp1 = new Combination([...temp.selected], temp.combination.map(arr => [...arr]), temp.count);
        temp1.InsertM(r, entry[r][c1]);
        CombinationsCaster1(temp1);
    }
}
function CombinationRange2c1(temp) {
    let r = 3;
    for (let r1 = 0; r1 < entry[r].length - 1; r1++) {
        if (temp.selected[entry[r][r1]])
            continue;
        let temp1 = new Combination([...temp.selected], temp.combination.map(arr => [...arr]), temp.count);
        temp1.InsertM(r, entry[r][r1]);

        for(let r2 = 0; r2 < entry[r].length; r2++) {
            if (temp1.selected[entry[r][r2]] == 0) {
                let temp2 = new Combination([...temp1.selected], temp1.combination.map(arr => [...arr]), temp1.count);
                temp2.InsertM(r, entry[r][r2]);

                CombinationsCaster1(temp2);
            }
        }
    }
}
function CombinationRange1c2(temp) {
    let r = 3;
    for (let c1 = 0; c1 < entry[r].length - 1; c1++) {
        if (temp.selected[entry[r][c1]])
            continue;
        let temp1 = new Combination([...temp.selected], temp.combination.map(arr => [...arr]), temp.count);
        temp1.InsertM(r, entry[r][c1]);
        CombinationsCaster2(temp1);
    }
}
function CombinationMelee1(temp) {
    let r = 2;
    for (let d1 = 0; d1 < entry[r].length; d1++) {
        if (temp.selected[entry[r][d1]])
            continue;
        let temp1 = new Combination([...temp.selected], temp.combination.map(arr => [...arr]), temp.count);
        temp1.InsertM(r, entry[r][d1]);
        CombinationRange1c2(temp1);
        CombinationRange2c1(temp1);
    }
}
function CombinationMelee2(temp) {
    let r = 2;
    for (let d1 = 0; d1 < entry[r].length - 1; d1++) {
        if (temp.selected[entry[r][d1]])
            continue;
        let temp1 = new Combination([...temp.selected], temp.combination.map(arr => [...arr]), temp.count);
        temp1.InsertM(r, entry[r][d1]);

        for(let d2 = d1 + 1; d2 < entry[2].length; d2++) {
            if (temp1.selected[entry[r][d2]] == 0) {
                let temp2 = new Combination([...temp1.selected], temp1.combination.map(arr => [...arr]), temp1.count);
                temp2.InsertM(r, entry[r][d2]);

                CombinationRange1c1(temp2);
            }
        }
    }
}

function CreateCombinations(progress=0) {
    combinations = [];
    let selected = [0, 0, 0, 0, 0, 0, 0, 0];
    // const combination = [[],[],[],[],[],];
    // CreateCombinationsTH
    for (let t1 = 0; t1 < entry[0].length; t1++) {
        let temp = new Combination([...selected]);
        temp.InsertM(0, entry[0][t1]);

        for (let t2 = t1 + 1; t2 < entry[0].length; t2++) {
            let temp1 = new Combination([...temp.selected], temp.combination.map(arr => [...arr]), temp.count);
            temp1.InsertM(0, entry[0][t2]);

            // Healers
            for (let h1 = 0; h1 < entry[1].length; h1++) {
                if (temp.selected[entry[1][h1]])
                    continue;
                let temp2 = new Combination([...temp1.selected], temp1.combination.map(arr => [...arr]), temp1.count);
                temp2.InsertM(1, entry[1][h1]);


                for (let h2 = h1 + 1; h2 < entry[1].length; h2++) {
                    if (temp1.selected[entry[1][h2]])
                        continue;
                    let temp3 = new Combination([...temp2.selected], temp2.combination.map(arr => [...arr]), temp2.count);
                    temp3.InsertM(1, entry[1][h2]);

                    // DPS
                    CombinationMelee2(temp3); // M2 R1 C1
                    CombinationMelee1(temp3); // M1 ...
                }
            }
        }
    }
    console.log(combinations.length);
    let random = Math.floor(Math.random() * combinations.length);
    console.log(combinations[random]);
}
CreateCombinations();

let random = Math.floor(Math.random() * combinations.length);
// console.log(combinations[random].combination[0]
//     , combinations[random].combination[1]
//     , combinations[random].combination[2]
//     , combinations[random].combination[3]
//     , combinations[random].combination[4]);
DisplayOnResult(random);

function DisplayOnResult(index) {
    // console.log(combinations[index])
    for (let i = 0; i < cols.length; i++) {

        const role_block = document.getElementsByClassName(`role_block ${roles[i]}`)[1];
        role_block.innerHTML = '';

        for (let m = 0; m < combinations[index].combination[i].length; m++) {
            let member_idx = combinations[index].combination[i][m];
            // const member_block = document.getElementById(`member_${i}`);
            const member_block = document.createElement('div');
            member_block.className = `members`;

            const name = document.createElement('div');
            name.innerText = members[member_idx].name;
            name.className = 'member_name';
            member_block.appendChild(name);

            const jobs_block = document.createElement('div');
            jobs_block.className = 'jobs';

            if (i < 2) {
                for (let j = 0; j < JOBS[i].length; j++) {
                    if (members[member_idx].jobs[i][j])
                    AddIcon(jobs_block, i, j + 1);
                }
            }
            else {
                let j = i - 2;
                for (let k = 0; k < JOBS[2][j].length; k++) {
                    if (members[member_idx].jobs[2][j][k])
                    AddIcon(jobs_block, 2, j, k + 1);
                }
            }

            member_block.appendChild(jobs_block);

            role_block.appendChild(member_block);
        }
    }

}

let i = 0;
const elem = document.getElementById("myBar");
const leftover = document.getElementById("leftover");
const blink = document.getElementById("blink");
const progress = document.getElementById("progress");
function ROLL() {
    const critics = document.getElementById("critics").value;
    console.log(critics);

    if (i == 0)
    {
        UpdateRoles();
        CreateCombinations();

        const title = document.getElementById("congrat");
        title.style.opacity = 0;
        // title.innerText = '';

        i = 1;
        let critical_count = 0;
        elem.style.opacity = 0;
        leftover.style.opacity = 0;
        progress.style.opacity = 0.9;

        var width = 100;
        elem.style.width = width + "%";
        leftover.style.width = width + "%";

        var running = setInterval(frame2, 50);

        function frame2 () {
            elem.style.opacity = 1;
            leftover.style.opacity = 1;

            let random = Math.floor(Math.random() * combinations.length);
            DisplayOnResult(random);

            if (width >= 100) {
                i = 0;
                clearInterval(running);
                progress.style.opacity = 0;
                title.style.opacity = 1;
                // const span = document.createElement('span');
                // span.className = "black-han-sans-regular";
                // span.innerText = "★　당　첨　★";
                let width = 0;
                elem.style.width = width + "%";
                leftover.style.width = width + "%";

            } else {
                blink.style.display='none';
                leftover.style.width = width + "%";

                var rate_c = 0.2;
                let random = Math.random();

                let diff = 0;
                let unit = 3;

                if ( width > 20 && random < rate_c ) {
                    // width = width *(1 - Math.random()*0.3)
                    diff = -10 * Math.random();
                    if ( diff < -3 )
                        blink.style.display='block';

                    if ( width > 33 && critical_count > 0) {
                        critical_count--;
                    }
                }
                else
                    diff = Math.random() * unit;

                width += diff;
                width = Math.min(100.0, width);

                elem.style.width = width + "%";
                const percent = document.getElementById("percent");
                percent.innerText = width.toFixed(3).padStart(6, ' ') + " %";
            }
        }
    }
}
