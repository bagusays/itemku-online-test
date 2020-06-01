// Hi! Before you see my answer, I just wanna asking a question. That you put the correct name on the 1st index of Record?
// I'm a little bit confused, on the 1st index with uid1234 you put Muzi as the name.
// And the 4th index with the same uid which is also uid1234 you put Prodo as the name.
// I think you made a typo or something that you put on Muzi on the 1st index, which should be Prodo. isn't it?

function solution(record) {
    let answer = [];

    for(let recordDetail of record) {
        let splittingRecord = recordDetail.split(" ")
        let uid = splittingRecord[1];
        let action = splittingRecord[0];
        let userName = splittingRecord[2];

        let wordAction;
        let result;

        if(userName === undefined) { // it's mean that user has gone
            let userNameBasedOnIdx = record.find(x => x.includes(uid)).split(" ")[2]
            wordAction = "has left";
            userName = userNameBasedOnIdx;
        } else if(action === "Change") { // it's mean that user changing the username
            let indexThatContainsUid = answer.findIndex(x => x.id === uid)
            let getOldUserName = answer[indexThatContainsUid].text.split(" ")[0];
            newText = answer[indexThatContainsUid].text.replace(getOldUserName, `${userName}`);

            answer[indexThatContainsUid] = {id: uid, text: newText}
            continue;
        } else {
            wordAction = "Came in";
        }

        result = `${userName} ${wordAction}.`;

        answer.push({id: uid, text: result});
    }

    return answer.map(x => x.text);
}

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

console.log(record);
console.log(solution(record));