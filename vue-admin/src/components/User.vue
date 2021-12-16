<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card p-fluid">
				<h5>New</h5>
				<div class="p-formgrid p-grid">
					<div class="p-field p-col">
						<label for="nameuser">Name</label>
						<InputText id="nameuser" type="text" placeholder="name" />
					</div>
					<div class="p-field p-col">
						<label for="emailuser">Email Address</label>
						<InputText id="emailuser" type="email" placeholder="Email address"/>
					</div>
					<div class="p-field p-col">
						<label for="mobileuser">Phone Number</label>
						<InputText id="mobileuser" type="text" placeholder="phone number"/>
					</div>
					<div class="p-field p-col">
						
						<label for="state">gender</label>
						<Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
					
					</div>
					
				</div>
				<div class="p-formgrid p-grid">
					<div class="p-field p-col">
						<label for="name2">Name</label>
						<InputText id="name2" type="text" />
					</div>
					<div class="p-field p-col">
						<label for="email2">Email</label>
						<InputText id="email2" type="text" />
					</div>
					<div class="p-field p-col">
						<label for="email2">Email</label>
						<InputText id="email2" type="text" />
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
					{name: 'male', code: 'male'},
					{name: 'female', code: 'female'},
					{name: 'others', code: 'others'}
				],
				dropdownItem: null,
			}
		}
	}
</script>
<style scoped>

</style>