<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>More Information</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                       <strong> <label for="nameuser">Name:</label></strong>
                        <p>Bhagirathi sahoo</p>
                    </div>
                     <div class="p-field p-col">
                       <strong><label for="emailuser">E-mail:</label></strong>
                       <p>bhagiathi@divii.com</p>
                    </div>
                    <div class="p-field p-col">
                        <strong><label for="mobileuser">Phone Number:</label></strong>
                       <p>+91- 9776509846</p>
                    </div>
                   
                    <div class="p-field p-col">
                        <strong><label for="state">gender:</label></strong>
                        <p>men</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                       <strong><label for="pass">Total Points:</label></strong>
                        <p>0</p>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <strong><label for="pass">Number Of Visits:</label></strong>
                        <p>0</p>
                    </div>
                   
                </div>

                <div class="p-d-flex p-jc-end">
                     <router-link to="/view-user"><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i>point</Button>
                             </router-link>
                             <router-link to="/edit-user"><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> Edit</Button></router-link>
                            <Button label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i> delete</Button>
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
