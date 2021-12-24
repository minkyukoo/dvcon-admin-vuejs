<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>Correction</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="nameuser">Name</label>
                        <InputText id="nameuser" type="text" placeholder="Search" :modelValue="mydata.name" />
                    </div>
                     <div class="p-field p-col">
                        <label for="emailuser">Email Id</label>
                        <InputText id="emailuser" type="email" placeholder="Search"  :modelValue="mydata.Email"/>
                    </div>
                    <div class="p-field p-col">
                        <label for="mobileuser">Phone Number</label>
                        <InputText id="mobileuser" type="text" placeholder="Search" :modelValue="mydata.phone" />
                    </div>
                   
                    <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One" :optionValue="mydata.gender"></Dropdown>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Password</label>
                        <InputText id="pass" type="password" placeholder="password" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Confirm Password</label>
                        <InputText id="pass" type="password" placeholder="password" />
                    </div>
                   
                </div>

                <div class="p-d-flex p-jc-end">
                <ConfirmPopup group="popup"></ConfirmPopup>
				<Button ref="popup" @click="confirm($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"></Button>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>

export default {
    data() {
        return {
			

            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
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
                mydata:{
                    name:"Bhagirathi Sahoo",
                    Email:"bhagiathi@divii.com",
                    phone:"9776509846",
                    gender:"male"
                }

           
        };
       
    },
    methods:{
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
						this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
					},
					reject: () => {
						this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
					}
				});
			},
    }
    
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>


