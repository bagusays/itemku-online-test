function solution(N, users) {
    let failureRate = [];

    for(let i = 1; i <= N; i++) {
        if(i > N) {
            break;
        }

        let filteringUsers = users.filter(x => x >= i);
        let countValInArray = filteringUsers.filter(x => x == i).length;

        failureRate.push([i, countValInArray, filteringUsers.length, countValInArray/filteringUsers.length]);
    }

    let constructTheFailureRate = failureRate.map(x => ({ stage: x[0], resultFailureRate: x[3] }));
    let sortByFailureRate = constructTheFailureRate.sort((a, b) => b.resultFailureRate - a.resultFailureRate || a.stage - b.stage);
    sortByFailureRate = sortByFailureRate.map(x => x.stage);

    console.log(sortByFailureRate)
}

solution(5, [2,1,2,6,2,4,3,3])
solution(4, [4,4,4,4,4])