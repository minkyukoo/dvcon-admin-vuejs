<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>New</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="nameuser">Name</label>
                        <InputText id="nameuser" type="text" placeholder="Enter_Name" v-model="name" />
                    </div>
                    <div class="p-field p-col">
                        <label for="emailuser">Email Id</label>
                        <InputText id="emailuser" type="email" placeholder="Enter_Email" v-model="email" />
                    </div>
                    <div class="p-field p-col">
                        <label for="mobileuser">Phone Number</label>
                        <InputText id="mobileuser" type="text" placeholder="Enter_Mobile" v-model="mobile" />
                    </div>

                    <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Password</label>
                        <InputText id="pass" type="password" placeholder="password" v-model="pass" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Confirm Password</label>
                        <InputText id="pass" type="password" placeholder="Confirm_password" v-model="confirm_pass" />
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <Button label="Primary" class="p-mr-2 p-mb-2" @click="Adduser"><i class="pi pi-search p-mr-2"></i> Create User</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from '../service/API/UserService';
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
    created() {
        this.userService = new UserService();
    },
    methods: {
        Adduser() {
            this.userService.addUser(this.name, this.mobile, this.email, this.gender, this.pass, this.confirm_pass).then(data => {
                alert(data);
                this.$router.push({ name: 'User' });
            });
        },
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
