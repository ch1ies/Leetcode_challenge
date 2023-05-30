/**
 * 编辑距离
 * @param {*} oldWord
 * @param {*} newWord
 */
function editDistance(oldWord, newWord) {
    if ( typeof oldWord !== 'string' || typeof newWord !== 'string') {
        return new Error('argus must be string')
    }
    // 类似于diff
    for(let i = 0; i < newWord.length; i++) {

    }
}

