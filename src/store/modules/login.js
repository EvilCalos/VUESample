/* eslint-disable */
import shop from '../../api/shop.js'

const state={
    username:'',
    password:'',
    isLoggedIn:false
}

const getters={
    userIsLoggedIn: state=>state.isLoggedIn,
}

const actions={

    login: ({commit,state},user)=>{
        return new Promise((resolve,reject)=>{
            shop.login(state,user=>{
                console.log(user)
                if(user.username==='shuntao'&&user.password==='123456'){
                    commit('login',user.isLoggedIn)
                    resolve(user)
                }
            })
        })
    }
}

const mutations={

    userIsLoggedIn:({state},{isLoggedIn})=>{
        state.isLoggedIn=isLoggedIn
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}