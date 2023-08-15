const randomToo = Math.floor(Math.random() * 100) + 1;


function addText() {
    const taasanToo = document.getElementById("taasanToo").value;
    const resultElement = document.getElementById("utga")

    if(taasanToo==randomToo) {
  
        resultElement.textContent = "Баяр Хүргэе!!";
      } else if(taasanToo < randomToo) {
        resultElement.textContent = "Бага байна";
      } else {
      (taasanToo> randomToo)
      resultElement.textContent = "Их байна";
      }
}