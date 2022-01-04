<template>
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-panel">
                <a @click="goDashboard" class="logo">
                    <img src="assets/layout/images/logo-freya-single.svg" alt="freya-layout" />
                </a>
                <InputText id="email" placeholder="Email" v-model="email" :class="`input-forms ${error.email ? 'p-invalid' : ''}`" />
                <div class="text-red">{{ error.email }}</div>
                <Password
                    id="password"
                    placeholder="Password"
                    :feedback="false"
                    v-model="password"
                />
                <div class="text-red">{{ error.password }}</div>
                <Button label="LOGIN" type="button" @click="Login"></Button>
                <a href="#">forget password?</a>
                <!-- <p>Don’t you have an account, <a href="#">sign up</a></p> -->
            </div>
        </div>
        <div class="login-footer">
            <h4>Vue Admin</h4>
            <h6>Copyright Ⓒ Hanriver Technology</h6>
        </div>
    </div>
</template>

<script>
import validateLogin from "../validations/validateLogin";
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
            error: {},
        };
    },
    methods: {
        async Login() {
            let credentials = {
                email: this.email,
                password: this.password,
            };
            const { isInvalid, error } = validateLogin(credentials);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.error = {};
                console.log('pass');
                await axios({
                    method: 'post',
                    url: 'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/auth/login',
                    data: credentials,
                    headers: {
                        source: 'dvcon',
                        apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                    },
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.data.status === 200) {
                            console.log(response.data.status);
                            // localStorage.removeItem("expirytoken");
                            localStorage.setItem('token', response.data.data.token);
                            window.location = '/';
                            // this.$router.push({ name: 'dashboard' });
                        }
                    })
                    .catch(function (response) {
                        console.log(response);
                        alert('Email or, password is incorrect');
                    });
            }
        },
        goDashboard() {
            window.location = '/';
        },
    },
};
</script>
