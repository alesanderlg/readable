export function validatePostReplay(author , comment) {
    return {
        author: author.length === 0,
        comment: comment.length === 0
    }
 }