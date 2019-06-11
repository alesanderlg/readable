const performChangeOnPost = (post, updatedPost) =>{
    return post.id === updatedPost.id ? updatedPost : post
}

const performChangeOnComment = (comment, updatedComment) =>{
    return comment.id === updatedComment.id ? updatedComment : comment
}

export function updateVoteScorePost(state , updatedPost) {
   return state.posts.map((post) => performChangeOnPost(post, updatedPost))
}

export function updateVoteScoreComment(state, updatedComment){
    return state.comments.map((comment) => performChangeOnComment(comment, updatedComment))
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

export function postsCountByCategory (allPosts, category){
    return (allPosts !== undefined) ? (category === 'all') ? allPosts.length 
                : allPosts.filter(post => post.category === category).length : 0
  }
