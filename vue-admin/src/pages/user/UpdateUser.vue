<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.push('/user')" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>Correction</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="nameuser">Name</label>
                        <InputText id="nameuser" type="text" placeholder="Name" :modelValue="mydata.name" v-model="mydata.name" />
                    </div>
                    <div class="p-field p-col">
                        <label for="emailuser">Email Id</label>
                        <InputText id="emailuser" type="email" placeholder="Email_Id" :modelValue="mydata.Email" v-model="mydata.Email" />
                    </div>
                    <div class="p-field p-col">
                        <label for="mobileuser">Phone Number</label>
                        <InputText id="mobileuser" type="text" placeholder="Phone_No" :modelValue="mydata.phone" v-model="mydata.phone" />
                    </div>

                    <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" v-model="mydata.gender" :options="dropdownItems" optionLabel="name" :placeholder="mydata.gender"></Dropdown>
                    </div>
                </div>
                <div class="p-d-flex p-jc-end">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button icon="pi pi-times" label="Cancel" class="p-mr-2"></Button>
                    <Button ref="popup" @click="confirm($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from '../../service/API/UserService';
export default {
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'm' },
                { name: 'female', code: 'f' },
            ],
            dropdownItem: null,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            products: null,
            selectedProduct: null,
            mydata: {
                name: '',
                Email: '',
                phone: '',
                gender: '',
            },
        };
    },
    created() {
        this.userService = new UserService();
    },
    methods: {
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.userService
                        .updateUser(this.mydata.name, this.mydata.phone, this.mydata.Email, this.mydata.gender.code, this.$route.params.id)
                        .then((res) => {
                            console.warn(res);
                            this.$router.push({ name: 'User' });
                        })
                        .catch((res) => alert(res));

                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
    },
    mounted() {
        this.userService
            .viewUser(this.$route.params.id)
            .then((res) => {
                this.mydata.name = res.data.data[0].name;
                this.mydata.Email = res.data.data[0].email;
                this.mydata.phone = res.data.data[0].mobile;
                this.mydata.gender = res.data.data[0].gender === 'm' ? 'male' : 'female';
                console.log(res.data.data);
            })
            .catch((err) => {
                alert(err);
            });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
