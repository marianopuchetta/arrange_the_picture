// let pics_names = ["fila-1-col-1.jpg","fila-1-col-2.jpg","fila-1-col-3.jpg",
//                   "fila-2-col-1.jpg","fila-2-col-2.jpg","fila-2-col-3.jpg",
//                   "fila-3-col-1.jpg","fila-3-col-2.jpg","fila-3-col-3.jpg",]
const btn = document.getElementById("btn");

//obtiene numero random
const getRandom = () => {
    return num = Math.floor(Math.random() * 9 )
}

//fill an array with 0-8 unordered
let fillArray = () => {
    let array = [];
    console.log('fill array');
    for (let i = 0; i < 9; i++) {
        let num = getRandom()
        while (array.includes(num)) {
            num = getRandom()
        }
        array[i] = num;
    }
    return array;
}

// // fill the image using backgroundImage
// function fill_image() {
//     let new_array = fillArray();
//     console.log(new_array + 'new_arrayyyyyyyyyyy');
//     let index_new_array = 0;
//     for (let i = 1; i < 4; i++) {
//         for (let j = 1; j < 4; j++) {
//             let div = document.getElementById("item" + new_array[index_new_array]);
//             div.style.backgroundImage = "url(/media/fila-" + i + "-col-" + j + ".jpg)";
//             console.log('randon number: ' +new_array[index_new_array] +' div number: ' + (index_new_array + 1) + ' fila-' + i + '-col-' + j + '.jpg');
//             index_new_array++;
//         }
//     }
// }


// fill the image using setAttribute
function fill_image() {
    let new_array = fillArray();//array with indexs unordered 0-8
    let img_array = document.getElementsByTagName('img');//all img tags
    let index_new_array = 0;
    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            let img =  img_array[new_array[index_new_array]];//select an img tag from array with the randon index
            console.log(img);
            img.setAttribute("src","/media/fila-" + i + "-col-" + j + ".jpg");
            index_new_array++;
        }
    }
}


//
btn.addEventListener('click', () => {
    console.log('click')
    fill_image();
})

// DnD Api
document.addEventListener('DOMContentLoaded', (event) => {
var dragSrcEl = null;

    function handleDragStart(e) {
      this.style.opacity = '1';
      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'move';
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
          }
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
          }
        return false;
      }
  
    let items = document.querySelectorAll('section .item');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
    });
  });
