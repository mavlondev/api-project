import axios from "axios";

const api_token = "7162699212:AAGfs-zedH0n4jJYamV-lScwkPRb4C93GpQ"
async function Telegram_bot(){
    let updates = await axios.get("https://api.telegram.org/bot7162699212:AAGfs-zedH0n4jJYamV-lScwkPRb4C93GpQ/"+ "getUpdates") 
    if (updates.data.ok==false) return
    for(let message of updates.data.result){
        let a = new Object(message.message)
        let b = new Object(a.chat)
        let c = b.id
        sendRequest("sendMessage", {
            chat_id:c, 
            text:"mavlon"
        })
        console.log(c)
    }
}
  
async function sendRequest(methodName, option){
    let response = await axios.post("https://api.telegram.org/bot7162699212:AAGfs-zedH0n4jJYamV-lScwkPRb4C93GpQ/" + methodName, option)
    return response.data
}

Telegram_bot()