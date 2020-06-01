function hasDuplicates(w){
    return new Set(w).size !== w.length
}

function solution(relation) {
    let answer = [];
    let candidateKey = [];

    for(let i = 0; i < relation[0].length; i++) {
        let byColumn = relation.map(x => x[i])
        if(!candidateKey.includes(i)) {
            if(!hasDuplicates(byColumn)) {
                answer.push(i)
                candidateKey.push(i)
            }
        }
    }

    let possibility = {}
    for(let i = 0; i < relation[0][0].length; i++) {
        if(candidateKey.includes(i)) {
            continue;
        }

        let byColumn = relation.map(x => x[i])
        for(let j = 0; j < relation.length; j++) {
            for(let k = 0; k < relation[0].length; k++){
                if(i == k || candidateKey.includes(k)) {
                    continue;
                }

                if(possibility[i, k] === undefined) {
                    possibility[i, k] = [];
                }

                possibility[i, k].push({ candidate: [i, k], content: `${relation[j][i]}-${relation[j][k]}`})
            }
        }
    }

    for (let [key, value] of Object.entries(possibility)) {
        let constructPossibility = value.map(x => x.content)
        if(!hasDuplicates(constructPossibility)) {
            let candidate = value[0].candidate.sort((a, b) => a - b);
            if(!answer.includes(JSON.stringify(candidate))) {
                answer.push(JSON.stringify(candidate))
            }

        }
    }

    answer = answer.map(x => JSON.parse(x))
    console.log(answer.length)
    return answer.length;
}

let rawArray = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];
solution(rawArray)