import { userAgent } from "next/server";

let users = []

export const getUsers = ()=> users;

export const addUser = (user)=> {
    users.push(user)
};
export const trashUser = (id)=> {
    users = users.filter((user)=> user.id !== id)
};