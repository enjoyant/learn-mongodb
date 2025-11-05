import express from "express";
import dotenv from "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";
//중복처리 않게 하는 기능(sql스러운)이 필요하면 다른 몽고db 라이브러리필요(mongoose)

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

const app = express();

// JSON형태의 데이터를 객체로 변환
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MONGO DB 객체 생성
const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME);
const collection = db.collection("users");

//드래그 선택해서 Ctrl + D 동일단어 모두 자동선택
//화살표위치 옮겨서 동시수정 가능

// 데이터 읽기 - GET
app.get("/users", async (req, res) => {
  try {
    //toArray가 없으면 하나씩만 가져옴
    const users = await collection.find().toArray();
    console.log("🚀 ~ users:", users);
    //응답
    res.status(200).json(users);
  } catch (error) {
    console.log(`🤣fetch Error: ${error}`);
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; //동일함 const id = req.params.id //string
    const user = await collection.findOne({ _id: new ObjectId(id) });
    console.log("🚀 ~ user:", user);
    //응답
    res.status(200).json(user);
  } catch (error) {
    console.log(`🤣fetch Error: ${error}`);
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});

// 데이터 추가 - POST
app.post("/users", async (req, res) => {
  try {
    //받은데이터를 구조분해하여 할당
    const { name, age, email } = req.body;
    //DB에 추가
    const result = await collection.insertOne({
      name: name, //변수명 같으면 생략가능
      age,
      email,
      createAt: new Date(),
    });
    //응답..추가 성공
    res.status(201).json(result);
  } catch (error) {
    console.log(`Error creating user: ${error}`);
    res.status(500).json({
      message: "Error creating users",
      error: error.message,
    });
  }
});

// 데이터 수정 - PUT
app.put("/users/:id", async (req, res) => {
  try {
    //http의 parms에서 가져옴
    const { id } = req.params; //동일함 const id = req.params.id //string
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { ...req.body, updatedAt: new Date() },
      }
    );
    console.log("🚀 ~ result:", result);
    //수정된 문서가 있는 경우와 없는경우 응답
    result.modifiedCount
      ? res.status(201).json(result)
      : res.status(404).json({
          message: "User not found or no change made",
        });
  } catch (error) {
    console.log(`Error updating user: ${error}`);
    res.status(500).json({
      message: "Error updating user",
      error: error.message,
    });
  }
});

// 데이터 삭제 - DELETE
app.delete("/users/:id", async (req, res) => {
  try {
    //http의 parms에서 가져옴
    const { id } = req.params; //동일함 const id = req.params.id //string
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    //응답
    result.deletedCount
      ? res.status(200).json({
          message: "User deleted",
          id: id,
        })
      : res.status(404).json({
          message: "User not found",
        });
  } catch (error) {
    console.log(`Error Deleting user: ${error}`);
    res.status(500).json({
      message: "Error Deleting user",
      error: error.message,
    });
  }
});
// DB연결 함수
const connectDB = async () => {
  try {
    await client.connect();
    console.log(`👌MongoDB Connected`);
  } catch (error) {
    //윈도우 이모지 단축키 : 윈도우 + .
    console.log(`🤣MongoDB Error: ${error}`);
  }
};

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
  connectDB();
});
