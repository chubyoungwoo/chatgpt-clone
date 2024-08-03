import express from 'express';
import cors from 'cors';
import ImageKit from 'imagekit';
import mongoose from 'mongoose';
import Chat from './models/chat.js';
import UserChats from './models/userChats.js';

const port = process.env.PORT || 3000;
const app = express();
const CLIENT_URL = process.env.CLIENT_URL;
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true, //사용자 인증이 필요한 리소스(쿠키등 도메인이 다른경우 쿠키공유시 axios에서도 도메인이 다른데, 쿠키를 공유해야 하는 경우 withCredentials: true 옵션으로 요청을 보내야 한다
  })
);

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
  publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
});

app.get('/api/upload', (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.post('/api/chats', async (req, res) => {
  const { userId, text } = req.body;

  console.log(userId);
  console.log(text);

  try {
    // CREATE A NEW CHAT
    const newChat = new Chat({
      userId: userId,
      history: [{ role: 'user', parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    //사용자 채팅이 존재하는 체크
    const userChats = await UserChats.find({ userId: userId });

    if (!userChats.length) {
      const newUserChats = new UserChats({
        userId: userId,
        chats: [
          {
            _id: savedChat.id,
            title: text.substring(0, 40),
          },
        ],
      });
      await newUserChats.save();
    } else {
      //존재하면 push
      await UserChats.updateOne(
        { userId: userId },
        {
          $push: {
            chats: {
              _id: savedChat._id,
              title: text.substring(0, 40),
            },
          },
        }
      );
    }
    res.status(201).send(newChat._id);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error creating chat!');
  }
});

app.listen(port, () => {
  connect();
  console.log('Server runnint on 3000');
});
