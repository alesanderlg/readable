
const performChange = (post, updatedPost) =>{
    return post.id === updatedPost.id ? updatedPost : post
}

export function updateObject(state , updatedPost) {
   return state.posts.map((post) => performChange(post, updatedPost))
}

export function colorByCategory (category) {
    switch(category){
        case 'react':
            return 'post-category cat-2'
        case 'redux':
            return 'post-category cat-3'
        case 'udacity':
            return 'post-category cat-4'
        default:
        return 'post-category cat-1'
    }
}

export function formatDate (date){
    return new Date(date).toDateString()
}

