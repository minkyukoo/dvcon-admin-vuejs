<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('search.title') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="nameuser">{{ $t('search.label.name') }}</label>
                        <InputText id="nameuser" :class="`${error.name ? 'p-invalid' : ''}`" type="text" :placeholder="$t('search.placeholder.search')" v-model="name" />
                        <div class="text-red">{{ error.name }}</div>
                    </div>

                    <div class="p-field p-col">
                        <label for="mobileuser">{{ $t('search.label.phoneNumber') }}</label>
                        <InputText id="mobileuser" :class="`${error.mobile ? 'p-invalid' : ''}`" type="text" :placeholder="$t('search.placeholder.search')" v-model="mobile" />
                        <div class="text-red">{{ error.mobile }}</div>
                    </div>
                    <div class="p-field p-col">
                        <label for="emailuser">{{ $t('search.label.email') }}</label>
                        <InputText id="emailuser" :class="`${error.email ? 'p-invalid' : ''}`" type="email" :placeholder="$t('search.placeholder.search')" v-model="email" />
                        <div class="text-red">{{ error.email }}</div>
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
                        <label for="pass">{{ $t('search.label.startDate') }}</label>
                        <Calendar :class="`${error.calendarValue ? 'p-invalid' : ''}`" :showIcon="true" :showButtonBar="true" v-model="calendarValue" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                        <div class="text-red">{{ error.calendarValue }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="verify-pass">{{ $t('search.label.lastDate') }}</label>
                        <Calendar :class="`${error.calendarValue1 ? 'p-invalid' : ''}`" :showIcon="true" :showButtonBar="true" v-model="calendarValue1" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                        <div class="text-red">{{ error.calendarValue1 }}</div>
                    </div>
                </div>
                <div class="p-d-flex p-jc-between p-ai-center p-mt-6">
                    <div class="">
                        <Button label="today" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="today"></Button>
                        <Button label="last week" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastweek"></Button>
                        <Button label="last month" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastmonth"></Button>
                        <Button label="last 6 months" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastsixmonth"></Button>
                        <Button label="last year" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastyear"></Button>
                    </div>
                    <div>
                        <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetUser"></Button>
                        <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchuser"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div><h5>User List</h5></div>
                    <div>
                        <Button label="Primary" class="p-mr-2 p-mb-2" @click="exceldownload"><i class="pi pi-download p-mr-2"></i> Download Excel</Button>
                        <router-link to="/add-user">
                            <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-plus p-mr-2"></i> New</Button>
                        </router-link>
                    </div>
                </div>

                <DataTable
                    :value="customer1"
                    :paginator="true"
                    class="p-datatable-gridlines"
                    :rows="5"
                    dataKey="id"
                    :rowHover="true"
                    v-model:filters="filters1"
                    filterDisplay="menu"
                    :loading="loading1"
                    :filters="filters1"
                    responsiveLayout="scroll"
                    v-if="render"
                >
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
                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>

                    <Column field="" header="">
                        <template #body="{ data }">
                            <span class="p-column-title"> <Checkbox id="data.id" name="option" value="data.id" v-model="checkboxValue" /></span>
                            <span style="display: none">{{ data.name }}</span>
                            <Checkbox id="checkOption1" name="option" value="Chicago" v-model="checkboxValue" />
                        </template>
                    </Column>
                    <Column field="name" header="Name" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Name</span>
                            {{ data.name }}
                        </template>
                    </Column>
                    <Column header="Id" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Id</span>
                            {{ data.id }}
                        </template>
                    </Column>
                    <Column header="Email" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Email</span>
                            {{ data.email }}
                        </template>
                    </Column>
                    <Column header="Mobile" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Mobile</span>
                            {{ data.mobile }}
                        </template>
                    </Column>
                    <Column header="created-date" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Created-Date</span>
                            {{ data.createdDate }}
                        </template>
                    </Column>
                    <Column header="extra">
                        <template #body="{ data }">
                            <span class="p-column-title">Balance</span>
                            <p style="display: none">{{ data.mobile }}</p>
                            <div style="display: flex">
                                <router-link :to="'/user/view-user/' + data.id"
                                    ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> view</Button>
                                </router-link>
                                <router-link :to="'/user/edit-user/' + data.id"
                                    ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> Edit</Button></router-link
                                >
                                <Button label="Delete" icon="pi pi-trash" class="p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="confirm(data.id)" />
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
// import validateUsersearch from '../../validations/validateUserSearch';
// import { FilterMatchMode, FilterOperator } from 'primevue/api';
import UserService from '../../service/API/UserService';
import axios from 'axios';
// import ProductService from '../service/ProductService';
// import axios from 'axios';
export default {
    data() {
        return {
            render: true,
            name: '',
            email: '',
            mobile: '',
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            checkboxValue: [],
            selectedProduct: null,
            calendarValue: '',
            calendarValue1: '',
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
            error: {},
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.userService = new UserService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.userService.getUserList(this.name, this.email, this.mobile).then((data) => {
            this.customer1 = data;
            this.loading1 = false;
        });
    },
    methods: {
        resetUser() {
            this.name = '';
            this.email = '';
            this.mobile = '';
            this.error = {};
            this.calendarValue = '';
            this.calendarValue1 = '';
            this.userService.getUserList(this.name, this.email, this.mobile).then((data) => {
                this.customer1 = data;
            });
        },
        searchuser() {
            // let vcheckData = {
            //     name: this.name,
            //     email: this.email,
            //     mobile: this.mobile,
            //     calendarValue: this.calendarValue,
            //     calendarValue1: this.calendarValue1
            // };
            // const { isInvalid, error } = validateUsersearch(vcheckData);
            // if (isInvalid) {
            //     this.error = error;
            //     console.log(error);
            // } else {
            //     this.error = {};
            //     console.log('pass');
                this.userService.getUserList(this.name, this.email, this.mobile, this.calendarValue, this.calendarValue1).then((data) => {
                    this.customer1 = data;
                    console.log(data);
                    this.loading1 = false;
                    this.customer1.forEach((customer) => (customer.date = new Date(customer.date)));
                });
            // }
        },
        today() {
            const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
            this.userService.getUserListsingle(utc).then((data) => {
                this.customer1 = data;
                console.log(data);
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.date = new Date(customer.date)));
            });
        },
        lastweek() {
            const date = new Date();
            date.setDate(date.getDate() - 7);
            const startDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
            this.userService.getUserListsingle(startDate).then((data) => {
                this.customer1 = data;
                console.log(data);
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.date = new Date(customer.date)));
            });
        },
        lastmonth() {
            const date = new Date();
            date.setDate(date.getDate() - 30);
            const startDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
            this.userService.getUserListsingle(startDate).then((data) => {
                this.customer1 = data;
                console.log(data);
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.date = new Date(customer.date)));
            });
        },
        lastsixmonth() {
            const date = new Date();
            date.setDate(date.getDate() - 182);
            const startDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
            this.userService.getUserListsingle(startDate).then((data) => {
                this.customer1 = data;
                console.log(data);
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.date = new Date(customer.date)));
            });
        },
        lastyear() {
            const date = new Date();
            date.setDate(date.getDate() - 365);
            const startDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
            this.userService.getUserListsingle(startDate).then((data) => {
                this.customer1 = data;
                console.log(data);
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.date = new Date(customer.date)));
            });
        },
        exceldownload() {
            console.log(this.customerService);
            this.userService.downloadExcel().then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Userlist.xlsx'); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        },
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

        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
        },
        expandAll() {
            this.expandedRows = this.products.filter((p) => p.id);
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
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
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

        confirm(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: '/user/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
            setTimeout(() => {
                this.userService.getUserList(this.name, this.email, this.mobile, this.calendarValue, this.calendarValue1).then((data) => {
                    this.customer1 = data;
                    console.log(data);
                    this.loading1 = false;
                    this.customer1.forEach((customer) => (customer.date = new Date(customer.date)));
                });
            }, 2000);
        },
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
