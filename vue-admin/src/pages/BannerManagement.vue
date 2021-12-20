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
                    <Toast />
                    <DataTable :value="products" dataKey="id" responsiveLayout="scroll" scrollable scrollHeight="400px" class="p-mt-3">
                        <!-- <template #header>
                                <div class="table-header-container">
                                    <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="p-mr-2 p-mb-2" />
                                    <Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" class="p-mb-2" />
                                </div>
                            </template> -->
                        <!-- <Column :expander="true" headerStyle="width: 3rem" /> -->
                        <Column field="name" header="Number">
                            <template #body="slotProps">
                                <span class="p-column-title">Number</span>
                                {{ slotProps.data.number }}
                            </template>
                        </Column>
                        <Column field="name" header="Title" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Title</span>
                                {{ slotProps.data.name }}
                            </template>
                        </Column>
                        <Column field="name" header="Subtitle" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Subtitle</span>
                                {{ slotProps.data.name }}
                            </template>
                        </Column>
                        <Column header="Image">
                            <template #body="slotProps">
                                <span class="p-column-title">Image</span>
                                <img :src="'assets/demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
                            </template>
                        </Column>
                        <Column field="price" header="Banner Position" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Banner Position</span>
                                {{ formatCurrency(slotProps.data.bannerPosition) }}
                            </template>
                        </Column>
                        <Column field="category" header="Creation Date" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Creation Date</span>
                                {{ formatCurrency(slotProps.data.creationDate) }}
                            </template></Column
                        >
                        <!-- <Column field="rating" header="Reviews" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Reviews</span>
                                <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                            </template>
                        </Column>
                        <Column field="inventoryStatus" header="Status" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Status</span>
                                <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{ slotProps.data.inventoryStatus }}</span>
                            </template>
                        </Column> -->
                        <Column field="inventoryStatus" header="Status" >
                            <template #body>
                                <Button label="correction" icon="pi pi-pencil" iconPos="left" class="p-button p-button-info p-button-sm p-mr-2 p-mb-2"></Button>
                                <Button label="Delete" icon="pi pi-calendar" iconPos="left" class="p-button p-button-danger p-button-sm p-mr-2 p-mb-2"></Button>
                            </template>
                        </Column>
                        <!-- <template #expansion="slotProps">
                                <div class="orders-subtable">
                                    <h5>Orders for {{ slotProps.data.name }}</h5>
                                    <DataTable :value="slotProps.data.orders" responsiveLayout="scroll">
                                        <Column field="id" header="Id" :sortable="true">
                                            <template #body="slotProps">
                                                <span class="p-column-title">Id</span>
                                                {{ slotProps.data.id }}
                                            </template>
                                        </Column>
                                        <Column field="customer" header="Customer" :sortable="true">
                                            <template #body="slotProps">
                                                <span class="p-column-title">Customer</span>
                                                {{ slotProps.data.customer }}
                                            </template>
                                        </Column>
                                        <Column field="date" header="Date" :sortable="true">
                                            <template #body="slotProps">
                                                <span class="p-column-title">Date</span>
                                                {{ slotProps.data.date }}
                                            </template>
                                        </Column>
                                        <Column field="amount" header="Amount" :sortable="true">
                                            <template #body="slotProps" :sortable="true">
                                                <span class="p-column-title">Amount</span>
                                                {{ formatCurrency(slotProps.data.amount) }}
                                            </template>
                                        </Column>
                                        <Column field="status" header="Status" :sortable="true">
                                            <template #body="slotProps">
                                                <span class="p-column-title">Status</span>
                                                <span :class="'order-badge order-' + (slotProps.data.status ? slotProps.data.status.toLowerCase() : '')">{{ slotProps.data.status }}</span>
                                            </template>
                                        </Column>
                                        <Column headerStyle="width:4rem">
                                            <template #body>
                                                <Button icon="pi pi-search" />
                                            </template>
                                        </Column>
                                    </DataTable>
                                </div>
                            </template> -->
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from '../service/ProductService';
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
            customer2: null,
            products: null,
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.customerService = new CustomerService();
        this.productService = new ProductService();
    },
    mounted() {
        this.customerService.getCustomersMedium().then((data) => (this.customer3 = data));
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    },
    methods: {
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
        // expandAll() {
        //     this.expandedRows = this.products.filter((p) => p.id);
        //     this.$toast.add({ severity: 'success', summary: 'All Rows Expanded', life: 3000 });
        // },
        // collapseAll() {
        //     this.expandedRows = null;
        //     this.$toast.add({ severity: 'success', summary: 'All Rows Collapsed', life: 3000 });
        // },
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
    },
};
</script>

<style scoped lang="scss">
::v-deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}

::v-deep(.p-progressbar) {
    height: 0.5rem;
    background-color: #d8dadc;

    .p-progressbar-value {
        background-color: #607d8b;
    }
}

::v-deep(.p-datatable .p-sortable-column .p-column-title) {
    display: block;
}

.p-datatable .p-column-filter {
    display: none;
}

.table-header {
    display: flex;
    justify-content: space-between;
}

.customer-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3px;

    &.status-qualified {
        background: #c8e6c9;
        color: #256029;
    }

    &.status-unqualified {
        background: #ffcdd2;
        color: #c63737;
    }

    &.status-negotiation {
        background: #feedaf;
        color: #8a5340;
    }

    &.status-new {
        background: #b3e5fc;
        color: #23547b;
    }

    &.status-renewal {
        background: #eccfff;
        color: #694382;
    }

    &.status-proposal {
        background: #ffd8b2;
        color: #805b36;
    }
}

.p-progressbar-value.ui-widget-header {
    background: #607d8b;
}

@media (max-width: 640px) {
    .p-progressbar {
        margin-top: 0.5rem;
    }
}

.product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.orders-subtable {
    padding: 1rem;
}

.product-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3px;

    &.status-instock {
        background: #c8e6c9;
        color: #256029;
    }

    &.status-outofstock {
        background: #ffcdd2;
        color: #c63737;
    }

    &.status-lowstock {
        background: #feedaf;
        color: #8a5340;
    }
}

.order-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3px;

    &.order-delivered {
        background: #c8e6c9;
        color: #256029;
    }

    &.order-cancelled {
        background: #ffcdd2;
        color: #c63737;
    }

    &.order-pending {
        background: #feedaf;
        color: #8a5340;
    }

    &.order-returned {
        background: #eccfff;
        color: #694382;
    }
}
.p-datatable {
    .p-sortable-column {
        &.p-highlight {
            &:hover {
                background: rgb(216 217 243);
                color: #464df2;
            }
        }
    }
}

.true-icon {
    color: #256029;
}

.false-icon {
    color: #c63737;
}
</style>
