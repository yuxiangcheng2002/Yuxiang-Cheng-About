image_array = ['1.JPG','2.jpg']

function randomImage(){
    randome_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('projects').src = `./Projects/${selected_image}`
}
