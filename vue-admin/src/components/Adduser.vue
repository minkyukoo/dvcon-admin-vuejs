<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>New</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="nameuser">Name</label>
                        <InputText id="nameuser" type="text" placeholder="Search" v-model="name" />
                    </div>
                    <div class="p-field p-col">
                        <label for="emailuser">Email Id</label>
                        <InputText id="emailuser" type="email" placeholder="Search" v-model="email" />
                    </div>
                    <div class="p-field p-col">
                        <label for="mobileuser">Phone Number</label>
                        <InputText id="mobileuser" type="text" placeholder="Search" v-model="mobile"/>
                    </div>

                    <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One" ></Dropdown>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Password</label>
                        <InputText id="pass" type="password" placeholder="password" v-model="pass"/>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Confirm Password</label>
                        <InputText id="pass" type="password" placeholder="password" v-model="confirm_pass"/>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <!-- <Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-refresh p-mr-2"></i> initialization</Button> -->
                    <Button label="Primary" class="p-mr-2 p-mb-2" @click="Adduser"><i class="pi pi-search p-mr-2" ></i> Create User</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,
            name: '',
            mobile: '',
            email: '',
            gender: 'm',
            pass: '',
            confirm_pass: '',
        };
    },
    methods: {
        Adduser() {
            return axios({
                method: 'post',
                url: 'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/user/add',
                data: {
                    name: this.name,
                    mobile: this.mobile,
                    email: this.email,
                    gender: this.gender,
                    password: this.pass,
                    confirm_password: this.confirm_pass,
                },
                headers: {
                    source: 'dvcon',
                    apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                    token: localStorage.getItem('token'),
                },
            }).then(res => {
                alert(res.data.data[0]);
                 this.$router.push({ name: 'User' });
                console.log(res);
                }
            ).catch(err=>{
                
                alert(err)
            })
        },
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
