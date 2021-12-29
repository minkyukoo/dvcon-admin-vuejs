<template>
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-panel">
                <a @click="goDashboard" class="logo">
                    <img src="assets/layout/images/logo-freya-single.svg" alt="freya-layout" />
                </a>
                <InputText id="email" placeholder="Email" v-model="username" />
                <Password id="password" placeholder="Password" :feedback="false" v-model="password" />
                <Button label="LOGIN" type="button" @click="Login"></Button>
                <a href="#">forget password?</a>
                <p>Don’t you have an account, <a href="#">sign up</a></p>
            </div>
        </div>
        <div class="login-footer">
            <h4>freya</h4>
            <h6>Copyright Ⓒ PrimeTek Informatics</h6>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async Login() {
            // localStorage.setItem('token',{username: this.username,password:this.password});
            // window.location = "/#/"
            await axios({
                method: 'post',
                url: 'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/auth/login',
                data: {
                    email: this.username,
                    password: this.password,
                },
                headers: {
                    source: 'dvcon',
                    apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                },
            })
                .then(function(response) {
                    console.log(response);
                    if (response.data.status === 200) {
                        console.log(response.data.status);
                        // localStorage.removeItem("expirytoken");
                        localStorage.setItem('token', response.data.data.token);
                        window.location = '/#/';
                    }
                })
                .catch(function(response) {
                    console.log(response);
                    alert('Email or, password is incorrect');
                });
        },
        goDashboard() {
            window.location = '/#/';
        },
    },
};
</script>
