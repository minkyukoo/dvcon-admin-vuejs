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
export default {
    name: 'cms',

    data() {
			return {
				filters1: null,
				
				statuses: [
					'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
				],
				
			}
		},
}
</script>

<style scoped>
.button_wrap{
    width: 100%;
    text-align: right;
    margin-top: 30px;
}
</style>
