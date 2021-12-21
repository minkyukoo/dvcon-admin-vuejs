<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h5>Search</h5>
				<div class="p-col-6">
					<div class="p-fluid">
						<div class="p-grid">
							<div class="p-formgrid p-grid">
								<div class="p-field p-col-6">
									<label for="name2">question</label>
									<InputText id="name2" type="text" />
								</div>
								<div class="p-field p-col-6">
									<label for="state">state</label>
									<Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
								</div>
								<div class="p-field p-col-6">
									<label for="state">Start Date:</label>
									<Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>
								</div>
								<div class="p-field p-col-6">
									<label for="state">Last Date:</label>
									<Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="p-grid">
					<div class="p-col-12">
						<div class="p-formgrid p-grid">
							<div class="p-field p-col-6">
								<Button label="Primary" class="p-button p-component p-mr-2 p-mb-2"/>
								<Button label="Secondary" class="p-button-secondary p-mr-2 p-mb-2" />
							</div>
							<div class="p-field p-col-6">
								<Button label="Primary" class="p-button p-component p-mr-2 p-mb-2"/>
								<Button label="Secondary" class="p-button-secondary p-mr-2 p-mb-2" />
							</div>
						</div>
					</div>
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
					{name: 'Option 1', code: 'Option 1'},
					{name: 'Option 2', code: 'Option 2'},
					{name: 'Option 3', code: 'Option 3'}
				],
				dropdownItem: null,
			}
		},
		computed: {
			
		}
	}
</script>

<style scoped>
</style>