// const fileinput = document.getElementById('fileinput');
// const uploadbutton = document.getElementById('uploadbutton');
// const shareablelink = document.getElementById('shareablelink');
// fileinput.addEventListener("change", async ()=>{
//     const selectedFiles = fileinput.files;
//     if(selectedFiles.length > 0){
       
//         const filenames = Array.from(selectedFiles).map((file) => file.name).join(", ");
//     const lable = document.querySelector(".custom-file-lab");
//     lable.innerHTML = filenames;
//     }
// })
//  const file = fileinput.files[0];
// if (file) {
//     try{
// const formData = new FormData();
// formData.append("file", file);

// uploadbutton.disabled = true;
// uploadbutton.textContent = "sharing...";
// const response = await fetch("https://file.io/?expires=1d" ,{
//     method:"POST",
//     body:formData,
// });
// const data = await response.json();
// console.log(data);
// if(response.ok){
    
//     const link = '<p>Download File <a href="${data.link} target="_blank" ">${data.link}</a></p>'
// shareablelink.innerHTML = link;
// }
// else{
//     shareablelink.innerHTML = "File share failed please try again!"
// }

//     } catch(error){
//         shareablelink.textContent = "An error occures please try again!";
//         console.error("Error sharing file:" , error);

//     } finally {
// uploadbutton.disabled = false;
// uploadbutton.textContent = "share";

// }
//  else {
 
//     shareablelink.textContent = "Please upload a file to share";


// }
// });


// --------------------------------------------------------------------------------
const fileinput = document.getElementById('fileinput');
const uploadbutton = document.getElementById('uploadbutton');
const shareablelink = document.getElementById('shareablelink');

fileinput.addEventListener("change", async () => {
    const selectedFiles = fileinput.files;
    if (selectedFiles.length > 0) {
        const filenames = Array.from(selectedFiles).map((file) => file.name).join(", ");
        const label = document.querySelector(".custom-file-lab");
        label.innerHTML = filenames;

        const file = fileinput.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                uploadbutton.disabled = true;
                uploadbutton.textContent = "Sharing...";

                const response = await fetch("https://file.io/?expires=1d", {
                    method: "POST",
                    body: formData,
                });

                const data = await response.json();
                console.log(data);

                if (response.ok) {
                    const link = `<p>Download File <a href="${data.link}" target="_blank">${data.link}</a></p>`;
                    shareablelink.innerHTML = link;
                } else {
                    shareablelink.innerHTML = "File share failed. Please try again!";
                }

            } catch (error) {
                shareablelink.textContent = "An error occurred. Please try again!";
                console.error("Error sharing file:", error);

            } finally {
                uploadbutton.disabled = false;
                uploadbutton.textContent = "Share";
            }
        } else {
            shareablelink.textContent = "Please upload a file to share";
        }
    }
});
