export function validatePostReplay(author , comment) {
    return {
        author: author.length === 0,
        comment: comment.length === 0
    }
 }

 export function validateNewPost(selectedCategory, title, body, author) {
     return {
        selectedCategory: selectedCategory.length === 0,
        title: title.length === 0,
        body: body.length === 0,
        author: author.length === 0
     }
 }