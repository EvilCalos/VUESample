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

    login: ({commit,state},guest)=>{
        return new Promise((resolve,reject)=>{
            shop.login(guest,user=>{
                console.log(user)
                if(user.username==='shuntao'&&user.password==='123456'){
                    console.log(user.isLoggedIn)
                    const isLoggedIn=user.isLoggedIn
                    commit('userIsLoggedIn',isLoggedIn)
                    resolve(user)
                }
            })
        })
    }
}

const mutations={

    userIsLoggedIn:(state,isLoggedIn)=>{
        state.isLoggedIn=isLoggedIn
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}