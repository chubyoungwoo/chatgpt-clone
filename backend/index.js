import express from 'express';
import cors from 'cors';
import ImageKit from 'imagekit';

const port = process.env.PORT || 3000;
const app = express();
const CLIENT_URL = process.env.CLIENT_URL;
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true, //사용자 인증이 필요한 리소스(쿠키등 도메인이 다른경우 쿠키공유시 axios에서도 도메인이 다른데, 쿠키를 공유해야 하는 경우 withCredentials: true 옵션으로 요청을 보내야 한다
  })
);

const imagekit = new ImageKit({
  urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
  publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
});

app.get('/api/upload', (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(port, () => {
  console.log('Server runnint on 3000');
});
