// create your variables

const imageUrl = document.querySelector('input[name="image"]');
const topTextInput = document.querySelector('input[name="toptext"]');
const bottomTextInput = document.querySelector('input[name="bottomtext"]');
const submit = document.getElementById('submit');
const newMeme = document.getElementById('new-meme');
const form = document.getElementById('My-Form');


// function to generate meme

// let image;

// imageUrl.addEventListener("change", function(){
//     const imageLink = URL.createObjectURL(imageUrl.files[0]);
//     image = new Image(); 
//     image.src = imageLink;
//     image.addEventListener('load', function(){
//         generateMeme(newMeme,image, topTextInput.value, bottomTextInput.value);
//     });
// });

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const memeGenerator = generateMeme(
        imageUrl.value, 
        topTextInput.value, 
        bottomTextInput.value
    );
    newMeme.appendChild(memeGenerator);
});

function generateMeme(image, toptext, btmtext){
    const meme = document.createElement('h2');
    meme.innerHTML = image;
    meme.innerText = (toptext, btmtext);
    return meme;

}
