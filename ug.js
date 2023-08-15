console.log("randomWord", randomWord)

// hariu.innerHTML

// 3. Санамсаргүй сонгосон үгийн урттай тэнцүү
// _ зураас харуулна , Хинт харуулна
const displayWord = document.getElementById("displayWord")
console.log('displayWord', displayWord, randomWord)
for (let i = 0; i < randomWord.word.length; i++) {
    displayWord.append("_")
}
const hint = document.getElementById("hint")
hint.textContent = randomWord.hint
// 4. Товч дарах үед функц ажиллана.
// Функц нь Санамсаргүй сонгосон үг
//  дотор дарсан үсэн
// байна уу шалгана
const zuvTaasanUsegnuud = []
const ugiigDelgetsendUzuul = () => {
    for (let i = 0; i < randomWord.word.length; i++) {
        const shalgahUseg = randomWord.word[i]
        console.log(zuvTaasanUsegnuud, shalgahUseg)
        if (zuvTaasanUsegnuud.includes(shalgahUseg)) {
            console.log('ene useg oldson', shalgahUseg)
            displayWord.append(shalgahUseg)
        } else {
            displayWord.append("_")
        }
    }
}
// "apple" => "a"
const ugendUsegOrsonuu = (useg) => {
    for (let i = 0; i < randomWord.word.length; i++) {
        const shalgahUseg = randomWord.word[i]
        if (shalgahUseg === useg) {
            zuvTaasanUsegnuud.push(useg)
            break;
        }
    }
    console.log("zuvTaasanUsegnuud", zuvTaasanUsegnuud)
}
const usegShalga = (useg) => {
    console.log("usegShalga ajillaj bn==>", useg)
    displayWord.textContent = ""
    ugendUsegOrsonuu(useg);
    ugiigDelgetsendUzuul()


}
// 5. Үсэг таасан бол орсон бол тухайн үсгийг харуулна
// 6. Үсэг таагаагүй бол алдааг нь тоолно
// 7. Алдаа 5-с хэтэрсэн бол Хожигдоно
// 8. Үг бүрэн таасан эсэх