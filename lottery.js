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
        temp1.InsertM(4, entry[r][c1]);
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
    let selected = [0, 0, 0, 0, 0, 0, 0, 0];
    // const combination = [[],[],[],[],[],];
    // CreateCombinationsTH
    for (let t1 = 0; t1 < entry[0].length - 1; t1++) {
        let temp = new Combination(selected);
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


function DisplayOnResult(index) {

}

function execute() {
    let random = Math.floor(Math.random() * combinations.length);
    console.log(combinations[random].combination[0]
        , combinations[random].combination[1]
        , combinations[random].combination[2]
        , combinations[random].combination[3]
        , combinations[random].combination[4]);
    // DisplayOnResult(random);
}

let isStart = false;

function time() {
    const rept = [];
    while (rept.length < 1) {
        const selected = [];
        while (selected.length < 6) {
            const num = parseInt(Math.random() * 45) + 1;
            if (selected.indexOf(num) == -1) {
                selected.push(num);
                selected.sort((a, b) => a - b)
            }
        }
        // console.log(selected)

        let hasNum = false;
        for (const lotto of rept) {
            if (lotto == selected.toString()) {
                hasNum = true;
                break;
            }
        }
        if (!hasNum) rept.push(selected);
    }
    // console.log(rept)
    document.getElementById("ran").innerHTML = rept
}

var roll = null;

function start() {
    if (!isStart) {
        isStart = true;
        // time();
        execute();
        roll = setInterval(execute, 1000)
    }
}
function stop() {
    if (roll != null) {
        clearInterval(roll);
        isStart = false;
    }
}