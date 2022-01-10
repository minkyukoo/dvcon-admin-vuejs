<template>
    <div class="p-col-12 p-pb-0">
        <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
    </div>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>New</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">Title</label>
                            <InputText type="text" placeholder="Title" id="title2" v-model="title"></InputText>
                        </div>

                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">state</label>
                            <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                        </div>
                    </div>
                </div>
                <!-- <div class="p-col-12">
                    <span class="p-float-label">
                        <Textarea inputId="textarea" rows="5" cols="30" v-model="desc"></Textarea>
                        <label for="textarea">Write Your Comment...</label>
                    </span>
                </div> -->
                <div class="p-col-12">
                    <span class="p-float-label">
                        <Quill-Editor style="height: 230px" v-model="content" ref="myQuillEditor" :options="editorOption" />
                    </span>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button label="cancel" icon="pi pi-times" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="cancel"></Button>
                    <Button label="confirm" icon="pi pi-check" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="addnotice"></Button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import validateEditUser from '../../validations/user/validateEditUser';
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
            error: {},
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
        cancel() {
            this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            setTimeout(() => {
                this.$router.go(-1);
            }, 2000);
        },
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    console.log(this.mydata.gender);
                    let vcheckData = {
                        name: this.mydata.name,
                        email: this.mydata.Email,
                        mobile: this.mydata.phone,
                        gender: this.mydata.gender == undefined ? '' : this.mydata.gender,
                    };
                    console.log(vcheckData);
                    const { isInvalid, error } = validateEditUser(vcheckData);
                    if (isInvalid) {
                        this.error = error;
                        console.log(error);
                    } else {
                        this.error = {};
                        console.log('pass');
                        this.userService
                            .updateUser(this.mydata.name, this.mydata.phone, this.mydata.Email, this.mydata.gender.code, this.$route.params.id)
                            .then((res) => {
                                console.warn(res);
                                this.$router.push({ name: 'User' });
                            })
                            .catch((res) => alert(res));

                        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                    }
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
    },
    // mounted() {
    //     this.userService
    //         .viewUser(this.$route.params.id)
    //         .then((res) => {
    //             this.mydata.name = res.data.data[0].name;
    //             this.mydata.Email = res.data.data[0].email;
    //             this.mydata.phone = res.data.data[0].mobile;
    //             this.mydata.gender = res.data.data[0].gender === 'm' ? 'male' : 'female';
    //             console.log(res.data.data);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
