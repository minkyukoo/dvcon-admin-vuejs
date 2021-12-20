<template>
    <div class="p-grid cms_wrap">
        <div class="p-col-12">
            <div class="card">
                <h5>Search</h5>
                <div class="p-grid p-formgrid">
					<div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
						<span class="p-input-icon-right">
							<InputText type="text" placeholder="Search" />
							<i class="pi pi-search" />
						</span>
					</div>
				</div>
                <div class="button_wrap">
                    <div class="p-grid p-formgrid">
                        <div class="p-col-12 p-mb-12 p-lg-12 p-mb-lg-12">
                            <Button label="initialization" class="p-button-outlined p-mr-2 p-mb-2" />
                            <Button type="button" class="p-mr-2 p-mb-2" label="Search" icon="pi pi-search"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="p-grid cms_table_wrap">
        <div class="p-col-12">
			<div class="card">
				<h5>Subheader Grouping</h5>
				<DataTable :value="customer3" rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name" style="min-width:200px"></Column>
                    <Column field="country" header="Country" style="min-width:200px">
                        <template #body="slotProps">
                            <img src="assets/demo/flags/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text p-ml-2">{{slotProps.data.country.name}}</span>
                        </template>
                    </Column>
                    <Column field="company" header="Company" style="min-width:200px"></Column>
                    <Column field="status" header="Status" style="min-width:200px">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                    </Column>
                    <Column field="date" header="Date" style="min-width:200px"></Column>
                    <template #groupheader="slotProps">
						<img :alt="slotProps.data.representative.name" :src="'assets/demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                    <template #groupfooter="slotProps">
                        <td style="text-align: right" class="p-text-bold p-pr-6">Total Customers: {{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                    </template>
                </DataTable>
			</div>
		</div>
    </div>

</template>


<script>
	import {FilterMatchMode,FilterOperator} from 'primevue/api';
	import CustomerService from "../service/CustomerService";
	import ProductService from '../service/ProductService';
	export default {
         name: 'cms',
		data() {
			return {
				customer1: null,
				customer2: null,
				customer3: null,
				filters1: null,
				filters2: {},
				loading1: true,
				loading2: true,
				idFrozen: false,
				products: null,
				expandedRows: [],
				statuses: [
					'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
				],
				representatives: [
					{name: "Amy Elsner", image: 'amyelsner.png'},
					{name: "Anna Fali", image: 'annafali.png'},
					{name: "Asiya Javayant", image: 'asiyajavayant.png'},
					{name: "Bernardo Dominic", image: 'bernardodominic.png'},
					{name: "Elwin Sharvill", image: 'elwinsharvill.png'},
					{name: "Ioni Bowcher", image: 'ionibowcher.png'},
					{name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
					{name: "Onyama Limba", image: 'onyamalimba.png'},
					{name: "Stephen Shaw", image: 'stephenshaw.png'},
					{name: "XuXue Feng", image: 'xuxuefeng.png'}
				],
			}
		},
		customerService: null,
		productService: null,
		created() {
			this.customerService = new CustomerService();
			this.productService = new ProductService();
			this.initFilters1();
		},
		mounted() {
			this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
			this.customerService.getCustomersLarge().then(data => {
				this.customer1 = data; 
				this.loading1 = false;
				this.customer1.forEach(customer => customer.date = new Date(customer.date));
			});
			this.customerService.getCustomersLarge().then(data => this.customer2 = data);
			this.customerService.getCustomersMedium().then(data => this.customer3 = data);
			this.loading2 = false;
		},
		methods: {
			initFilters1() {
				this.filters1 = {
					'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
					'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'representative': {value: null, matchMode: FilterMatchMode.IN},
					'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
					'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
					'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
					'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
					'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
				}
			},
			clearFilter1() {
				this.initFilters1();
			},
			onRowExpand(event) {
				this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
			},
			onRowCollapse(event) {
				this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
			},
			expandAll() {
				this.expandedRows = this.products.filter(p => p.id);
				this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
			},
			collapseAll() {
				this.expandedRows = null;
				this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
			},
			formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
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
			}
		}
	}
</script>

<style scoped>
.button_wrap{
    width: 100%;
    text-align: right;
    margin-top: 30px;
}
</style>
