// create your variables

const imageUrl = document.getElementById('meme-image');
const topTextInput = document.querySelector('input[name="toptext"]');
const bottomTextInput = document.querySelector('input[name="bottomtext"]');
const submit = document.getElementById('submit');
const newMeme = document.querySelector('.container');
const form = document.getElementById('My-Form');
const reset = document.querySelector('button')

//FUNCTION TO GENERATE MEME

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log("generate meme!");
    const memeGenerator = generateMeme(
        imageUrl.value, 
        topTextInput.value, 
        bottomTextInput.value
    );
    newMeme.appendChild(memeGenerator);
});

//FUNCTION TO PRINT IMAGES AND TEXT
function generateMeme(imageValue, toptext, btmtext){
    const meme = document.createElement('div');
    meme.innerText = toptext + btmtext;
    const image = document.createElement('img');
    image.src = imageValue;
    meme.appendChild(image)
    return meme;
}

//FUNCTION TO RESET MEME CONTAINER
reset.addEventListener("click", function(event){
   event.newMeme.remove();
  });

