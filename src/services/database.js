/*import { printPost } from '../components/feed.js'

export const addPosts = (post) => {
    return firebase.firestore().collection('postsTwo').add(post)
    .then(() => loadPosts());
}

export const loadPosts = () => {
    return firebase.firestore().collection('postspostsTwo').orderBy('time', 'desc')
    .get()
    .then(snap => {
        snap.forEach(post => {
            printPost(post)
        });
    })
    .catch((error) => {
        console.error('Erro ao excluir o post:', error)
    });
}*/