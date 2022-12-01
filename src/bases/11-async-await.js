// Async - Await

/*
const getImagePromise = () => {
    const promise = new Promise( (resolve, reject) => {
        resolve( 'hppt://cvbhjknlm.com')
    })
}

getImagePromise().then( console.log )
*/


// Easy Way

/*
const getImagePromise = () => new Promise( resolve => resolve('hppt://cvbhjknlm.com') )
getImagePromise().then( console.log )
*/

export const getImage = async() => {

    try {
        const apiKey = 'ZdVMJbgVfQZOraPsIHJklsIjlJPJWQhg';

        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);   
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        // const img = document.createElement('img');
        //     img.src = url;
        //     document.body.append( img )

        return url;

    } catch ( err ) {
        // console.error(err)
        return 'image not found';
    }
}
   

getImage();
