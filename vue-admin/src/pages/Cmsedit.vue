<template>
<div class="p-grid cms_wrap">
        <div class="p-col-12">
            <div class="card">
                <h5>Search</h5>
				<p>Title</p>
                <div class="p-grid p-formgrid">
					<div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
						<InputText type="text" placeholder="Title"></InputText>
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
</template>
<script>
export default {
         name: 'Cmsedit',
}
</script>
<style scoped>

</style>