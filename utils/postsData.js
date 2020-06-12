import serverUrl from './env'
import axios from 'axios'
    
export async function getPostData(id) {

}
    // parecido com getSortedPostsData
export async function allPostsData (){
    
        let res = await axios.get(`${serverUrl}/posts`)
        
        const allPosts = res.data.map(postName => {
        
            const id = postName.slug
            
            const postResult = {
                    body: postName.body,
                    title: postName.title,
                    photo: postName.photo
                }               
    
                return {
                    id,
                    ...postResult
                }
            })
        
        return allPosts
}


