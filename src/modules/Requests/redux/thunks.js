import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const _sendQuestionThunk = createAsyncThunk("sendQuestion", async (data) => {
  const name = data.name;
  const phone = data.phone;
  console.log("name", data.name);
  console.log("phone", data.phone);
  try {
    const response = await axios.post("http://localhost:5000/api/question", {
      name,
      phone,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
});

const _sendOrderThunk = createAsyncThunk("sendOrder", async (data) => {
  const name = data.name;
  const phone = data.phone;
  const payment = data.payment;
  const comment = data.comment;
  const price = data.price;
  const orderItems = data.orderItems;
  try {
    const response = await axios.post("http://localhost:5000/api/order", {
      name,
      phone,
      payment,
      comment,
      price,
      orderItems,
    });
    alert(response.data.message);
  } catch (e) {
    return e;
  }
});

const _sendFileThunk = createAsyncThunk("sendFile", async (data) => {
  try {
    console.log(data);
    const response = await axios.post("http://localhost:5000/api/upload", {
      data,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
});

export const sendQuestionThunk = (data) => _sendQuestionThunk(data);
export const sendOrderThunk = (data) => _sendOrderThunk(data);
export const sendFileThunk = (data) => _sendFileThunk(data);
