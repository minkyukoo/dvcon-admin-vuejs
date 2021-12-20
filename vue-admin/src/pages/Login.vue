<template>
	<div class="login-body">
		<div class="login-wrapper">
			<div class="login-panel">
				<a @click="goDashboard" class="logo">
                    <img src="assets/layout/images/logo-freya-single.svg" alt="freya-layout" />
                </a>
                <InputText id="email" placeholder="Email" v-model="username"/>
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
export default {
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods: {
        Login(){
            localStorage.setItem('user-data',{username: this.username,password:this.password});
            window.location = "/#/"
        },
        goDashboard() {
            window.location = "/#/"
        }
    }
};
</script>
