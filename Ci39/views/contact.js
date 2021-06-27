function alertMessage() {
    alert("Cảm ơn bạn đã gửi lời nhắn đến với nhà hàng");
    document.getElementById("feedbackForm").reset();
}
async function getFeedback() {
    let feedbackForm = document.getElementById("feedbackForm")
    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault()
        let name = feedbackForm.name.value
        let phoneNumber = feedbackForm.phoneNumber.value
        let email = feedbackForm.email.value
        let message = feedbackForm.message.value
        console.log(name)
        console.log(phoneNumber)
        console.log(email)
        console.log(message)
        alertMessage()
        resetform()
    })
}
getFeedback();