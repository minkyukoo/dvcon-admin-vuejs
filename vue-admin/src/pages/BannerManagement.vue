<template>
    <div>
        <Toast />
        <div class="card">
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>Search</h5>
                    <div class="p-formgrid p-grid">
                        <div class="p-field p-col-12 p-md-4">
                            <label for="name2">Name</label>
                            <InputText id="name2" type="text" placeholder="Search" :modelValue="title" v-model="title" />
                        </div>
                        <div class="p-field p-col-12 p-md-4">
                            <label for="email2">state</label>
                            <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                        </div>
                        <div class="p-field p-col-12 p-md-4">
                            <label for="name2">Start Date</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue1"></Calendar>
                        </div>
                        <div class="p-field p-col-12 p-md-4">
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
                    <Button label="reset" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" v-on:click="reInitialize"></Button>
                    <Button label="search" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="getProductsWithOrdersSmall"></Button>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="p-grid">
                <div class="p-col-12">
                    <div class="p-d-flex p-jc-between">
                        <h4>Banner Management</h4>
                        <div>
                            <router-link to="/create-banner">
                                <Button label="New" icon="pi pi-plus" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                            </router-link>
                        </div>
                    </div>
                    <DataTable :value="products" class="p-datatable-gridlines" dataKey="id" responsiveLayout="scroll" :paginator="true" :rows="4" :rowHover="true" v-if="products.length > 0" :loading="loading1">
                        <ConfirmDialog group="dialog" />
                        <!-- <template #header>
                                <div class="table-header-container">
                                    <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="p-mr-2 p-mb-2" />
                                    <Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" class="p-mb-2" />
                                </div>
                            </template> -->
                        <!-- <Column :expander="true" headerStyle="width: 3rem" /> -->
                        <template #empty> No customers found. </template>
                        <template #loading> Loading customers data. Please wait. </template>
                        <!-- <Column field="name" header="Number">
                            <template #body="slotProps">
                                <span class="p-column-title">Number</span>
                                {{ slotProps.data.id }}
                            </template>
                        </Column> -->
                        <Column field="" header="">
                            <template #body="{ data }">
                                <span class="p-column-title"> <Checkbox id="data.id" name="option" value="data.id" v-model="checkboxValue" /></span>
                                <span style="display: none">{{ data.name }}</span>
                                <Checkbox id="checkOption1" name="option" value="Chicago" v-model="checkboxValue" />
                            </template>
                        </Column>
                        <Column field="name" header="Title" style="min-width: 12rem">
                            <template #body="slotProps">
                                <span class="p-column-title">Title</span>
                                {{ slotProps.data.title }}
                            </template>
                        </Column>
                        <!-- <Column field="name" header="Subtitle" >
                            <template #body="slotProps">
                                <span class="p-column-title">Subtitle</span>
                                {{ slotProps.data.subTitle }}
                            </template>
                        </Column> -->
                        <Column header="Image" style="min-width: 12rem">
                            <template #body="slotProps">
                                <span class="p-column-title">Image</span>
                                <img :src="'http://dvcon-admin-nodejs.dvconsulting.org:4545' + slotProps.data.bannerImage" :alt="slotProps.data.image" class="product-image" />
                            </template>
                        </Column>
                        <Column field="price" header="Banner Position" style="min-width: 12rem">
                            <template #body="slotProps">
                                <span class="p-column-title">Banner Position</span>
                                {{ formatCurrency(slotProps.data.bannerPostion) }}
                            </template>
                        </Column>
                        <Column field="Creation" header="Creation Date" style="min-width: 12rem">
                            <template #body="slotProps">
                                <span class="p-column-title">Creation Date</span>
                                {{ formatCurrency(slotProps.data.createdDate) }}
                            </template></Column
                        >
                        <Column field="Status" header="Status" style="min-width: 12rem">
                            <template #body="slotProps">
                                <span class="p-column-title">Status</span>
                                {{ formatCurrency(slotProps.data.status) }}
                            </template></Column
                        >
                        <!-- <Column field="rating" header="Reviews" >
                            <template #body="slotProps">
                                <span class="p-column-title">Reviews</span>
                                <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                            </template>
                        </Column>
                        <Column field="inventoryStatus" header="Status" >
                            <template #body="slotProps">
                                <span class="p-column-title">Status</span>
                                <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{ slotProps.data.inventoryStatus }}</span>
                            </template>
                        </Column> -->
                        <Column field="inventoryStatus" header="management">
                            <template #body="{ data }">
                                <div class="p-d-flex">
                                    <router-link :to="'/edit-banner/' + data.id">
                                        <Button label="correction" icon="pi pi-pencil" iconPos="left" class="p-button p-button-outlined p-button-help p-button-sm p-mr-2 p-mb-2"></Button>
                                    </router-link>
                                    <Button label="Delete" icon="pi pi-trash" iconPos="left" class="p-button p-button-outlined p-button-danger p-button-sm p-mr-2 p-mb-2" @click="showModal(data.id)"></Button>
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>
        <Modal v-show="isModalVisible" @close="closeModal" v-bind:showCloseBtn="false">
            <template v-slot:header>
                <div class="p-text-center w-100">
                    <i class="pi pi-question-circle" style="fontsize: 4.5rem; color: #1976d2"></i>
                </div>
            </template>
            <template v-slot:body>
                <div class="w-full p-text-center">
                    <h4 class="p-mb-1">Are you Sure ?</h4>
                    You can't revert the changes
                </div>
            </template>
            <template v-slot:footer>
                <div class="p-d-flex p-jc-center">
                    <Button label="Cancel" class="p-button p-button-secondary p-button-sm p-mr-2 p-mb-2" @click="closeModal"> </Button>
                    <Button label="Confirm" class="p-button p-button-success p-button-sm p-mr-2 p-mb-2" @click="DeleteRow"> </Button>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
// import ProductService from '../service/ProductService';
import axios from 'axios';
import { useRoute } from 'vue-router';
// import CustomerService from '../service/CustomerService';
// import {FilterMatchMode,FilterOperator} from 'primevue/api';
import Modal from '../components/CustomModal.vue';
export default {
    data() {
        return {
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }, { name: 'deleted' }],
            dropdownValue: null,
            calendarValue1: null,
            calendarValue2: null,
            isModalVisible: false,
            // customer3: null,
            // customer2: null,
            products: {},
            title: null,
            loading1: true,
            deletedID: null,
        };
    },
    // customerService: null,
    // productService: null,

    components: {
        Modal,
    },

    created() {
        // this.productService = new ProductService();
        // this.customerService = new CustomerService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);

        this.getProductsWithOrdersSmall();
    },
    methods: {
        async getProductsWithOrdersSmall() {
            // console.log('search banner by Name', this.dropdownValue?.name);
            await axios
                .post(
                    'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/banner',
                    {
                        searchData: this.title,
                        status: this.dropdownValue?.name,
                        startDate: this.calendarValue1,
                        endDate: this.calendarValue2,
                        sortBy: "createdDate",
                        sortOrder: "desc"
                    },
                    {
                        headers: {
                            source: 'dvcon',
                            apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                            token: localStorage.getItem('token'),
                        },
                    }
                )
                .then((data) => {
                    console.log(data);
                    this.products = data.data.data.banners;
                    this.loading1 = false;
                    // console.log(JSON.stringify(this.products));
                })
                .catch((err) => console.log(err));
        },
        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
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
        showModal(id) {
            console.log(id);
            this.isModalVisible = true;
            this.deletedID = id;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        async DeleteRow() {
            // console.log('login token', localStorage.getItem('token'));
            return await axios
                .delete(
                    'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/banner/delete',
                    {
                        data: {
                            deleteIdArray: this.deletedID,
                        },
                        headers: {
                            source: 'dvcon',
                            apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                            token: localStorage.getItem('token'),
                        },
                    },
                )
                .then((response) => {
                    console.log(response);
                    alert("Baner removed");
                    location.reload();
                    // alert(response)
                })
                .catch((response) => {
                    // console.log(response);
                    alert(response);
                });
        },
        reInitialize() {
            this.dropdownValue = null;
            this.calendarValue1 = null;
            this.calendarValue2 = null;
            this.title = null;
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

.w-100 {
    width: 100%;
}
</style>
