var push = require("web-push");

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCu538H8lbUh54nQg6Q8WohFFdKY2C8uYE",
  authDomain: "fms-pdsl.firebaseapp.com",
  projectId: "fms-pdsl",
  storageBucket: "fms-pdsl.appspot.com",
  messagingSenderId: "202877192295",
  appId: "1:202877192295:web:b32cc251da12646c4e2cc2",
  measurementId: "G-X44JK3Y8ED",
};

const VAPID_KEY =
  "BO4AYo97O_R2lmD_q7kPzGI4rr2cMuQhCk1g5N9O-d5_alvIT7D0CqWxZFe-he-10hAS9uLRUs92D4CO5bwzhXQ";

const sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fhRwju7VFEA:APA91bEECyQij9fbtvxYAaVdSe36f1Wn8gb6AdbA7Ez5Wac6-mkVq5og2idT51LuaA5uC5oKUp0sJwLQeBx4fo_bL4hCbNLfAhpOHIKce97m3-0HXv1cNeTRJLZ2dbkK5UGSHjeuCnGe",
  expirationTime: null,
  keys: {
    p256dh:
      "BF0vGC-poYloqeyrPnyf_fu1KBCoUvVrEcX26F6BLi6qrQ3NDTgo6vCYGd6hMOe7k0y7FbhccGl4AoOipmVCFpA",
    auth: "E-8oYCUI6auoCpvQIK_5gg",
  },
};
push.sendNotification(sub, "test message");
