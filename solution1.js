function solution(record) {
    let history = [];

    record.map(item => {
        const recordSplit = item.split(" ");

        const keyWord = recordSplit[0];
        const uid = recordSplit[1];
        const name = recordSplit[2] ? recordSplit[2] : "";

        switch (keyWord) {
            case 'Enter': {
                const userEnter = history.find(item => item.user.uid === uid);
                if (userEnter) {
                    history = history.map(item => {
                        if (item.user.uid === uid) {
                            return {
                                ...item,
                                user: { uid, name }
                            }
                        }

                        return item;
                    });
                }

                history.push({
                    user: { uid, name },
                    message: 'came in'
                })
                break;
            }
            case 'Leave': {
                const userLeave = history.findIndex(item => item.user.uid === uid);
                if (userLeave > -1) {
                    const name = history[userLeave].user.nickName;
                    history.push({
                        user: { uid, name },
                        message: 'has left'
                    });
                }
                break;
            }
            case 'Change': {
                history = history.map(item => {
                    if (item.user.uid === uid) {
                        return {
                            ...item,
                            user: { uid, name }
                        }
                    }

                    return item;
                });
                break;
            }
            default:
                break;
        }
    });

    return history.map(item => `${item.user.name} ${item.message}`);
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));
