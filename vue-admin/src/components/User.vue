<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>Search</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="nameuser">Name</label>
                        <InputText id="nameuser" type="text" placeholder="Search" />
                    </div>

                    <div class="p-field p-col">
                        <label for="mobileuser">Phone Number</label>
                        <InputText id="mobileuser" type="text" placeholder="Search" />
                    </div>
                    <div class="p-field p-col">
                        <label for="emailuser">E-mail</label>
                        <InputText id="emailuser" type="email" placeholder="Search" />
                    </div>
                    <!-- <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
                    </div> -->
                </div>
                <div class="p-formgrid p-grid">
                    <!-- <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Password</label>
                        <InputText id="pass" type="password" placeholder="password" />
                    </div> -->
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Start Date:</label>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" placeholder="YYYY.MM.DD"></Calendar>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="verify-pass">Last Date:</label>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue1" placeholder="YYYY.MM.DD"></Calendar>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-refresh p-mr-2"></i> initialization</Button>
                    <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-search p-mr-2"></i> search</Button>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div><h5>User List</h5></div>
                    <div>
                        <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-download p-mr-2"></i> Download Excel</Button>
                        <router-link to="/add-user">
                            <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-plus p-mr-2"></i> New</Button>
                        </router-link>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
                    <ConfirmDialog group="dialog" />
                    <!-- <template #header>
                        <div class="p-d-flex p-jc-between p-flex-column p-flex-sm-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined p-mb-2" @click="clearFilter1()"/>
                            <span class="p-input-icon-left p-mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template> -->
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>

                    <Column field="name" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Name</span>
                            {{ data.name }}
                        </template>
                        <!-- <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template> -->
                    </Column>
                    <Column header="Id" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Id</span>
                            {{ data.id }}
                        </template>
                    </Column>
                    <Column header="Email" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Email</span>
                            {{ data.email }}
                        </template>
                    </Column>
                    <Column header="Mobile" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Mobile</span>
                            {{ data.mobile }}
                        </template>
                    </Column>
                    <Column header="created-date" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Created-Date</span>
                            {{ data.createdDate }}
                        </template>
                    </Column>
                    <Column header="extra">
                        <template #body="{data}">
                            <span class="p-column-title">Balance</span>
                            <p style="display:none">{{ data.mobile }}</p>
                            <div style="display:flex">
                                <router-link :to="'/user/view-user/' + data.id"
                                    ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> view</Button>
                                </router-link>
                                <router-link :to="'/user/edit-user/' + data.id"
                                    ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> Edit</Button></router-link
                                >
                                <Button label="Delete" icon="pi pi-trash" class="p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="del(data.id)" />
                            </div>
                        </template>
                        <!-- <template #filter="{filterModel}">
                            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                        </template> -->
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
// import { FilterMatchMode, FilterOperator } from 'primevue/api';
import CustomerService from '../service/CustomerService';
import axios from 'axios';
// import ProductService from '../service/ProductService';
// import axios from 'axios';
export default {
    data() {
        return {
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,

            selectedProduct: null,
            calendarValue: null,
            calendarValue1: null,
            customer1: null,

            filters1: null,
            filters2: {},
            loading1: true,

            idFrozen: false,
            products: null,
            expandedRows: [],
            user: null,
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],

            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,

            // representatives: [
            //     { name: 'Amy Elsner', image: 'amyelsner.png' },
            //     { name: 'Anna Fali', image: 'annafali.png' },
            //     { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            //     { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            //     { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            //     { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            //     { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            //     { name: 'Onyama Limba', image: 'onyamalimba.png' },
            //     { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            //     { name: 'XuXue Feng', image: 'xuxuefeng.png' },
            // ],
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.customerService = new CustomerService();

        // this.initFilters1();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        // this.customerService.getCustomersLarge().then(data => {
        //     this.customer1 = data;
        //     console.log(data)
        //     this.loading1 = false;
        //     this.customer1.forEach(customer => (customer.date = new Date(customer.date)));
        // });
        this.customerService.getUserList().then(data => {
            this.customer1 = data;
            console.log(data);
            this.loading1 = false;
            this.customer1.forEach(customer => (customer.date = new Date(customer.date)));
        });
    },
    methods: {
        Showid() {
            console.log('hello');
        },
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        // initFilters1() {
        //     this.filters1 = {
        //         global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //         name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        //         'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        //         representative: { value: null, matchMode: FilterMatchMode.IN },
        //         date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        //         balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        //         status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        //         activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
        //         verified: { value: null, matchMode: FilterMatchMode.EQUALS },
        //     };
        // },
        // clearFilter1() {
        //     this.initFilters1();
        // },
        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
        },
        expandAll() {
            this.expandedRows = this.products.filter(p => p.id);
            this.$toast.add({ severity: 'success', summary: 'All Rows Expanded', life: 3000 });
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({ severity: 'success', summary: 'All Rows Collapsed', life: 3000 });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        },
        calculateCustomerTotal(name) {
            let total = 0;
            if (this.customer3) {
                for (let customer of this.customer3) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        },
        del(id) {
            // console.log(id);

            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({
                        method: 'delete',
                        url: 'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/user/delete',
                        data: {
                            deleteIdArray: id,
                        },
                        headers: {
                            source: 'dvcon',
                            apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                            token: localStorage.getItem('token'),
                        },
                    })
                        .then(function(response) {
                            console.log(response);
                            // alert('Deleted successfully');
                            location.reload();
                        })
                        .catch(function(response) {
                            console.log(response);
                        });
                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
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
