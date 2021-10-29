const dropZone= document.querySelector(".drop-zone");
const browseBtn= document.querySelector(".browseBtn");
const fileInput=document.querySelector("#fileInput");


// change to axios
const host="https://innshare.herokuapp.com/"
const uploadURL=`${host}api/files`
// const uploadURL=`${host}api/files`




// drag events mdn 
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault()
    console.log("dragging");

    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged");
    }
})
// /* dragged event mdn */

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragged")
})

dropZone.addEventListener("drop", (e) => {
    e.preventDefault()
    dropZone.classList.remove("dragged")
    const files=e.dataTransfer.files;
    console.log(files);
    if(files.length){
        fileInput.files= files;
    }
});
// uploadFile
fileInput.addEventListener("change",()=>{
    uploadFile()
})




// browsing file
browseBtn.addEventListener("click", (e) => {
   console.log(fileInput);
   fileInput.click()
   uploadFile()
});

// Uploading the file using XHR
// // change to axios
// const uploadFile=()=>{
//     const file=fileInput.files[0];
//     const formData = new FormData();
//     formData.append("myfile",file);

//     const xhr=new.XMLHttpRequest();
//     xhr.onreadystatechange=()=>{
    // if(xhr.readyState === XMLHttpRequest.DONE){
    //     console.log(xhr.response);
    // }
//};


//     xhr.open("POST",uploadURL);
//     xhr.send(formData);
// }








console.log("hello");