const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post one', body: 'This is post one'}
]

// create a function to loop through the object


function getPost() {
    setTimeout(() => {
        let result = '';
        posts.forEach((post) => {
            result += `<p>${post.title}</p>`;
        });
        document.body.innerHTML = result
    }, 1000)
}




function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            posts.push(post)

            const prob = true

            if(!prob){
                resolve()
            }else{
                reject('Something went wrong')
            }
            
            
        }, 2000)
    })
}

async function init(){
    await createPost({title: 'third post', body: 'third content of the 3rd post'})

    getPost()
}

init()


// createPost({title: 'third post', body: 'third content of the 3rd post'})
//  .then(getPost)
//  .catch(err => console.log(err))

// const Promise1 = promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise(() => setTimeout(resolve, 2000, 'Goodbye'))

// const promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())


// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))