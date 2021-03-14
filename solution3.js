function solution(relation) {
    let answer = 0;
    let candidates = [];
    const loops = relation[0];
    const loopsLength = loops.length;

    for (let column = 0; column < loopsLength - 1; column++) {
        const rows = relation.map(rel => rel[column]);
        const isDuplicatedColumn = new Set(rows).size !== rows.length;

        if (!isDuplicatedColumn) {
            candidates.push(column);
            answer++;
        }
    }

    for (let column = 0; column < loopsLength - 1; column++) {
        for (let nextColumn = 0; nextColumn < loopsLength - 1; nextColumn++) {
            const isCurrentCandidate = candidates.findIndex(el => el === column) > -1;
            const isNextCandidate = candidates.findIndex(el => el === nextColumn) > -1;
            if (!isCurrentCandidate && !isNextCandidate && column !== nextColumn) {
                const rows = relation.map(rel => `${rel[column]} ${rel[nextColumn]}`);
                const isDuplicatedColumn = new Set(rows).size !== rows.length;

                if (!isDuplicatedColumn) {
                    candidates.push(column);
                    candidates.push(nextColumn);
                    answer++;
                }
            }
        }
    }

    return answer;
}

console.log(solution([['100', 'ryan', 'music', '2'], ['200', 'apeach', 'math', '2'], ['300', 'tube', 'computer', '3'], ['400', 'con', 'computer', '4'], ['500', 'muzi', 'music', '3'], ['600', 'apeach', 'music', '2']]))
