// Models for Chat Model
// - ChatName
// - isGroupChat
// - Users
// - latestMessage
// -  groupAdmin

import moongoose from "moongoose";

const chatModel = moongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    Users: [
      {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const chat = moongoose.model("chat" , chatModel)

export default chat;
