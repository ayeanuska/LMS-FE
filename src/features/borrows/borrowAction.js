import { borrowBook} from "./borrowAxios";
import {toast} from react-toastify;
import { getAllBookAction } from "../books/bookAction";



// auto login user

export const borrowBookAction=(obj)=> async(dispatch)=>{


    // 1. burrowAxios
    const pending = borrowBook(obj);

    toast.promise(pending, {
        pending :"please wait",
    });

    const {status, message} = await pending
    toast[status](message);

    if (status== "success"){
        //update the book storre with updated book data
        dispatch (getAllBookAction());



    }


}

   
















