import * as types from "../../actions/types";
import {Storage} from "../../until/until"

let storage = new Storage();

let userInfo = storage.getItem("user");

const initialState = {
    loginState:{
        loginState:!!userInfo,
        username: userInfo ? userInfo.username:"游客",
        token:userInfo ? userInfo.token:""
    }
}

export function loginReducer(state=initialState.loginState, action){
    switch (action.type){
        case types.CHANGE_LOGIN_STATE:
            let data = { ...state, loginState: action.loginstate, username: action.username, token: action.token };
            console.log("登录状态修改：", action.loginstate)
            if(action.loginstate){
                storage.setItem({name:"user",value: data})
            }else{
                console.log("移除缓存：")
                storage.removeItem("user");
            }
            return data;
       default:
            //这里需要判断是否为undefined
            // return state;
            return state === undefined ? [] : state;
    }
}