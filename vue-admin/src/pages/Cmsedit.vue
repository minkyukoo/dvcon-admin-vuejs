<template>
<div class="p-grid cms_wrap">
        <div class="p-col-12">
            <div class="card">
                <h5>Correction</h5>
                <p>Title</p>
				<div class="p-field p-col-12 p-md-6">
                    <InputText id="lastname2" type="text"/>
                </div>
                 <p>Description</p>
                <div class="p-field p-col-12">
                    <Textarea class="descrition_edit" id="address" rows="4"/>
                </div>
                 <div class="button_wrap align-right">
                    <Button type="button" class="p-mr-2 p-mb-2" label="Submit"></Button>
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
    .descrition_edit{
        width: 100%;
    }
    .p-field{
        padding:0 1rem 1rem 0;
    }
    .align-right{
        text-align: right;
        width: 100%;
    }
</style>