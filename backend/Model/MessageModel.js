// Model For Message
// - Sender
// - Content
// - Chat

import moongoose from "moongoose";


const MessageModel = moongoose.Schema({
    Sender : {
        type : moongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    Content : {type : String , trim : true},
    Chat : {
        type : moongoose.Schema.Types.ObjectId,
        ref : "Chat"
    }
},
{
    timestamps : true
}
)


const Message = moongoose.model("Message" , MessageModel);
export default Message;