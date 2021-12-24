<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>New</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="nameuser">Name</label>
                        <InputText id="nameuser" type="text" placeholder="Search" />
                    </div>
                     <div class="p-field p-col">
                        <label for="emailuser">Email Id</label>
                        <InputText id="emailuser" type="email" placeholder="Search" />
                    </div>
                    <div class="p-field p-col">
                        <label for="mobileuser">Phone Number</label>
                        <InputText id="mobileuser" type="text" placeholder="Search" />
                    </div>
                   
                    <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
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
                    <Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-refresh p-mr-2"></i> initialization</Button>
                    <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-search p-mr-2"></i> search</Button>
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

           
        };
    },
    
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
