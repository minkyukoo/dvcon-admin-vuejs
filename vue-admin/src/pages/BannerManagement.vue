<template>
    <div>
        <div class="card">
            <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-6">
                    <h5>Search</h5>
                    <div class="p-formgrid p-grid">
                        <div class="p-field p-col">
                            <label for="name2">Name</label>
                            <InputText id="name2" type="text" placeholder="Search" />
                        </div>
                        <div class="p-field p-col">
                            <label for="email2">state</label>
                            <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                        </div>
                    </div>
                    <div class="p-formgrid p-grid">
                        <div class="p-field p-col">
                            <label for="name2">Start Date</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue1"></Calendar>
                        </div>
                        <div class="p-field p-col">
                            <label for="email2">End Date</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue2"></Calendar>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-between p-ai-center">
                <div class="">
                    <Button label="today" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"></Button>
                    <Button label="last week" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"></Button>
                    <Button label="last month" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"></Button>
                    <Button label="last 6 months" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"></Button>
                    <Button label="last year" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"></Button>
                </div>
                <div>
                    <Button label="initialization" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"></Button>
                    <Button label="search" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="p-grid">
                <div class="p-col-12">
                    <div class="card">
                        <Toast />
                        <DataTable :value="customer3" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
                            <Column field="representative.name" header="Representative"></Column>
                            <Column field="name" header="Name" style="min-width: 200px"></Column>
                            <Column field="country" header="Country" style="min-width: 200px">
                                <template #body="slotProps">
                                    <img src="assets/demo/flags/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                                    <span class="image-text p-ml-2">{{ slotProps.data.country.name }}</span>
                                </template>
                            </Column>
                            <Column field="company" header="Company" style="min-width: 200px"></Column>
                            <Column field="status" header="Status" style="min-width: 200px">
                                <template #body="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.data.status">
                                        {{ slotProps.data.status }}
                                    </span>
                                </template>
                            </Column>
                            <Column field="date" header="Date" style="min-width: 200px"></Column>
                            <template #groupheader="slotProps">
                                <img :alt="slotProps.data.representative.name" :src="'assets/demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                                <span class="image-text">{{ slotProps.data.representative.name }}</span>
                            </template>
                            <template #groupfooter="slotProps">
                                <td style="text-align: right" class="p-text-bold p-pr-6">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</td>
                            </template>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ProductService from '../service/ProductService';
import CustomerService from '../service/CustomerService';
// import {FilterMatchMode,FilterOperator} from 'primevue/api';
export default {
    data() {
        return {
            dropdownValues: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' },
            ],
            dropdownValue: null,
            calendarValue1: null,
            calendarValue2: null,
            customer3: null,
        };
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersMedium().then((data) => (this.customer3 = data));
    },
    methods: {
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
    },
};
</script>

<style></style>
