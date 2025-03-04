// const localStorage = {
//     "thema" : 3
// };
localStorage.setItem("thema", 1)

const not_use = [
    [1, 4, 0],
    [2, 4, 0],
    [6, 3, [6,3,4]]
];
const JOBS = [
    ["PLD", "WAR", "DRK", "GNB"],
    ["WHM", "SCH", "AST", "SGE"],
    [
        ["MNK", "DRG", "NIN", "SAM", "RPR", "VPR"],
        ["BRD", "MCH", "DNC"],
        ["BLM", "SMN", "RDM", "PIC"]
    ]
]
const ROLE_JOB = [
    {'role' : "tank", 'jobs' : ["PLD", "WAR", "DRK", "GNB"]},
    {'role' : "healer", 'jobs' : ["WHM", "SCH", "AST", "SGE"]},
    {'role' : "dps", 'jobs' : [
        {'role' : "melee", 'jobs' : ["MNK", "DRG", "NIN", "SAM", "RPR", "VPR"]},
        {'role' : "ranged", 'jobs' : ["BRD", "MCH", "DNC"]},
        {'role' : "casters", 'jobs' : ["BLM", "SMN", "RDM", "PIC"]}
    ]}
]

class Member {
    constructor(name, jobs) {
        this.name = name;
        this.jobs = jobs;
    }
}

const members = [
    new Member("멩탱", [ [0, 0, 0, 0], [1, 1, 1, 1],
        [ [0, 0, 0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 1] ]
    ]),
    new Member("습탱", [ [0, 0, 0, 0], [1, 1, 1, 1],
        [ [1, 0, 1, 0, 1, 0], [1, 1, 1], [1, 1, 1, 1] ]
    ]),
    new Member("주님", [ [0, 0, 0, 0], [0, 0, 0, 0],
        [ [0, 0, 0, 1, 0, 0], [0, 0, 0], [0, 1, 0, 0] ]
    ]),
    new Member("집사", [ [1, 1, 1, 1], [0, 0, 0, 0],
        [ [1, 1, 1, 1, 1, 1], [1, 1, 1], [1, 1, 1, 1] ]
    ]),
    new Member("근딜", [ [1, 0, 0, 0], [1, 1, 0, 0],
        [ [0, 0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 0, 1] ]
    ]),
    new Member("짱딜", [ [1, 0, 0, 0], [0, 1, 0, 0],
        [ [0, 0, 0, 0, 0, 0], [0, 0, 0], [0, 1, 0, 1] ]
    ]),
    new Member("원딜", [ [1, 1, 0, 1], [1, 1, 0, 0],
        [ [0, 0, 1, 0, 0, 0], [0, 0, 0], [0, 1, 0, 1] ]
    ]),
    new Member("마딜", [ [0, 1, 0, 1], [1, 0, 1, 1],
        [ [1, 1, 0, 1, 1, 0], [1, 1, 1], [1, 1, 0, 1] ]
    ]),
];

// T	T	H1	H2	D1	D2	D3	D4
// T1	-	x	●	●	x	x	●	●
// T2	x	-	●	●	●	●	●	●
// H1	x	x	-	x	●	●	x	●
// H2	●	●	x	-	●	●	●	●
// D1	●	●	●	●	-	x	x	●
// D2	●	●	●	●	●	-	●	x
// D3	●	●	●	●	●	●	-	●
// D4	●	●	x	x	●	●	●	-

function AddIcon(parent, i, j, k = 0, text=null) {
    job = (i < 2 ? JOBS[i][j] : JOBS[i][j][k]);

    const em = document.createElement('em');
    let string = (i < 2 ? `${i + 1}_${j}` : `${i + 1}_${j + 1}_${k}`);
    em.setAttribute('data-job', `${string}`);
    if (text) em.textContent = text;
    parent.appendChild(em);
}
