// https://leetcode-cn.com/problems/smallest-sufficient-team/
var Test = require('../Common/Test');

var smallestSufficientTeam = function (req_skills, people) {
    const [neededSkills, skillMasks] = createSkillMasks(req_skills);
    const peopleMasks = people.map(person => person.reduce((skillsMask, skill) => skillsMask | skillMasks.get(skill), 0));
    const occured = new Set();
    let states = [[0, []]];     //key: rest skills, value: team
    while (states.length) {
        const states2 = [];
        for (const [skills, team] of states) {
            for (let i = 0; i < peopleMasks.length; i++) {
                const personMask = peopleMasks[i];
                const newSkills = skills | personMask;
                // if (occured.has(newSkills)) {
                    // console.log();
                    // console.log({ newSkills });
                    // console.log(team);
                // }
                if (skills != newSkills && !occured.has(newSkills)) {
                    occured.add(newSkills);
                    const newTeam = team.slice();
                    newTeam.push(i);
                    if (newSkills == neededSkills) {
                        return newTeam;
                    }
                    states2.push([newSkills, newTeam]);
                }
            }
        }
        states = states2;
    }
    return [];

    function createSkillMasks(req_skills) {
        const skillMasks = new Map();
        let skills = 0;
        let mask = 1;
        for (const skill of req_skills) {
            skills |= mask;
            skillMasks.set(skill, mask);
            mask <<= 1;
        }
        return [skills, skillMasks];
    }
};

function test(req_skills, people) {
    Test.test(smallestSufficientTeam, req_skills, people);
}

// test(["java", "nodejs", "reactjs"], [["java"], ["nodejs"], ["nodejs", "reactjs"]]);
// test(["algorithms", "math", "java", "reactjs", "csharp", "aws"], [["algorithms", "math", "java"], ["algorithms", "math", "reactjs"], ["java", "csharp", "aws"], ["reactjs", "csharp"], ["csharp", "math"], ["aws", "java"]]);
test(["hfkbcrslcdjq", "jmhobexvmmlyyzk", "fjubadocdwaygs", "peaqbonzgl", "brgjopmm", "x", "mf", "pcfpppaxsxtpixd", "ccwfthnjt", "xtadkauiqwravo", "zezdb", "a", "rahimgtlopffbwdg", "ulqocaijhezwfr", "zshbwqdhx", "hyxnrujrqykzhizm"],
    [["peaqbonzgl", "xtadkauiqwravo"], ["peaqbonzgl", "pcfpppaxsxtpixd", "zshbwqdhx"], ["x", "a"], ["a"], ["jmhobexvmmlyyzk", "fjubadocdwaygs", "xtadkauiqwravo", "zshbwqdhx"], ["fjubadocdwaygs", "x", "zshbwqdhx"], ["x", "xtadkauiqwravo"], ["x", "hyxnrujrqykzhizm"], ["peaqbonzgl", "x", "pcfpppaxsxtpixd", "a"], ["peaqbonzgl", "pcfpppaxsxtpixd"], ["a"], ["hyxnrujrqykzhizm"], ["jmhobexvmmlyyzk"], ["hfkbcrslcdjq", "xtadkauiqwravo", "a", "zshbwqdhx"], ["peaqbonzgl", "mf", "a", "rahimgtlopffbwdg", "zshbwqdhx"], ["xtadkauiqwravo"], ["fjubadocdwaygs"], ["x", "a", "ulqocaijhezwfr", "zshbwqdhx"], ["peaqbonzgl"], ["pcfpppaxsxtpixd", "ulqocaijhezwfr", "hyxnrujrqykzhizm"], ["a", "ulqocaijhezwfr", "hyxnrujrqykzhizm"], ["a", "rahimgtlopffbwdg"], ["zshbwqdhx"], ["fjubadocdwaygs", "peaqbonzgl", "brgjopmm", "x"], ["hyxnrujrqykzhizm"], ["jmhobexvmmlyyzk", "a", "ulqocaijhezwfr"], ["peaqbonzgl", "x", "a", "ulqocaijhezwfr", "zshbwqdhx"], ["mf", "pcfpppaxsxtpixd"], ["fjubadocdwaygs", "ulqocaijhezwfr"], ["fjubadocdwaygs", "x", "a"], ["zezdb", "hyxnrujrqykzhizm"], ["ccwfthnjt", "a"], ["fjubadocdwaygs", "zezdb", "a"], [], ["peaqbonzgl", "ccwfthnjt", "hyxnrujrqykzhizm"], ["xtadkauiqwravo", "hyxnrujrqykzhizm"], ["peaqbonzgl", "a"], ["x", "a", "hyxnrujrqykzhizm"], ["zshbwqdhx"], [], ["fjubadocdwaygs", "mf", "pcfpppaxsxtpixd", "zshbwqdhx"], ["pcfpppaxsxtpixd", "a", "zshbwqdhx"], ["peaqbonzgl"], ["peaqbonzgl", "x", "ulqocaijhezwfr"], ["ulqocaijhezwfr"], ["x"], ["fjubadocdwaygs", "peaqbonzgl"], ["fjubadocdwaygs", "xtadkauiqwravo"], ["pcfpppaxsxtpixd", "zshbwqdhx"], ["peaqbonzgl", "brgjopmm", "pcfpppaxsxtpixd", "a"], ["fjubadocdwaygs", "x", "mf", "ulqocaijhezwfr"], ["jmhobexvmmlyyzk", "brgjopmm", "rahimgtlopffbwdg", "hyxnrujrqykzhizm"], ["x", "ccwfthnjt", "hyxnrujrqykzhizm"], ["hyxnrujrqykzhizm"], ["peaqbonzgl", "x", "xtadkauiqwravo", "ulqocaijhezwfr", "hyxnrujrqykzhizm"], ["brgjopmm", "ulqocaijhezwfr", "zshbwqdhx"], ["peaqbonzgl", "pcfpppaxsxtpixd"], ["fjubadocdwaygs", "x", "a", "zshbwqdhx"], ["fjubadocdwaygs", "peaqbonzgl", "x"], ["ccwfthnjt"]]);

// ["hfkbcrslcdjq", "jmhobexvmmlyyzk", "fjubadocdwaygs", "peaqbonzgl", "brgjopmm", "x", "mf", "pcfpppaxsxtpixd", "ccwfthnjt", "xtadkauiqwravo", "zezdb", "a", "rahimgtlopffbwdg", "ulqocaijhezwfr", "zshbwqdhx", "hyxnrujrqykzhizm"]
// [["peaqbonzgl", "xtadkauiqwravo"], ["peaqbonzgl", "pcfpppaxsxtpixd", "zshbwqdhx"], ["x", "a"], ["a"], ["jmhobexvmmlyyzk", "fjubadocdwaygs", "xtadkauiqwravo", "zshbwqdhx"], ["fjubadocdwaygs", "x", "zshbwqdhx"], ["x", "xtadkauiqwravo"], ["x", "hyxnrujrqykzhizm"], ["peaqbonzgl", "x", "pcfpppaxsxtpixd", "a"], ["peaqbonzgl", "pcfpppaxsxtpixd"], ["a"], ["hyxnrujrqykzhizm"], ["jmhobexvmmlyyzk"], ["hfkbcrslcdjq", "xtadkauiqwravo", "a", "zshbwqdhx"], ["peaqbonzgl", "mf", "a", "rahimgtlopffbwdg", "zshbwqdhx"], ["xtadkauiqwravo"], ["fjubadocdwaygs"], ["x", "a", "ulqocaijhezwfr", "zshbwqdhx"], ["peaqbonzgl"], ["pcfpppaxsxtpixd", "ulqocaijhezwfr", "hyxnrujrqykzhizm"], ["a", "ulqocaijhezwfr", "hyxnrujrqykzhizm"], ["a", "rahimgtlopffbwdg"], ["zshbwqdhx"], ["fjubadocdwaygs", "peaqbonzgl", "brgjopmm", "x"], ["hyxnrujrqykzhizm"], ["jmhobexvmmlyyzk", "a", "ulqocaijhezwfr"], ["peaqbonzgl", "x", "a", "ulqocaijhezwfr", "zshbwqdhx"], ["mf", "pcfpppaxsxtpixd"], ["fjubadocdwaygs", "ulqocaijhezwfr"], ["fjubadocdwaygs", "x", "a"], ["zezdb", "hyxnrujrqykzhizm"], ["ccwfthnjt", "a"], ["fjubadocdwaygs", "zezdb", "a"], [], ["peaqbonzgl", "ccwfthnjt", "hyxnrujrqykzhizm"], ["xtadkauiqwravo", "hyxnrujrqykzhizm"], ["peaqbonzgl", "a"], ["x", "a", "hyxnrujrqykzhizm"], ["zshbwqdhx"], [], ["fjubadocdwaygs", "mf", "pcfpppaxsxtpixd", "zshbwqdhx"], ["pcfpppaxsxtpixd", "a", "zshbwqdhx"], ["peaqbonzgl"], ["peaqbonzgl", "x", "ulqocaijhezwfr"], ["ulqocaijhezwfr"], ["x"], ["fjubadocdwaygs", "peaqbonzgl"], ["fjubadocdwaygs", "xtadkauiqwravo"], ["pcfpppaxsxtpixd", "zshbwqdhx"], ["peaqbonzgl", "brgjopmm", "pcfpppaxsxtpixd", "a"], ["fjubadocdwaygs", "x", "mf", "ulqocaijhezwfr"], ["jmhobexvmmlyyzk", "brgjopmm", "rahimgtlopffbwdg", "hyxnrujrqykzhizm"], ["x", "ccwfthnjt", "hyxnrujrqykzhizm"], ["hyxnrujrqykzhizm"], ["peaqbonzgl", "x", "xtadkauiqwravo", "ulqocaijhezwfr", "hyxnrujrqykzhizm"], ["brgjopmm", "ulqocaijhezwfr", "zshbwqdhx"], ["peaqbonzgl", "pcfpppaxsxtpixd"], ["fjubadocdwaygs", "x", "a", "zshbwqdhx"], ["fjubadocdwaygs", "peaqbonzgl", "x"], ["ccwfthnjt"]]