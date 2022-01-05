<template>
    <router-link to="/banner-management">
        <Toast />
        <Button label="Go Back" icon="pi pi-angle-left" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-5"></Button>
    </router-link>
    <div class="card">
        <div class="p-grid p-fluid">
            <div class="p-col-12">
                <h5>Correction</h5>
                <div class="p-grid p-formgrid p-mb-3">
                    <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        <label for="title2">Title</label>
                        <InputText type="text" placeholder="Title" :modelValue="title" id="title2" v-model="title"></InputText>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        <label for="subtitle2">Subtitle</label>
                        <InputText type="text" placeholder="Subtitle" :modelValue="subtitle" id="subtitle2" v-model="subtitle"></InputText>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        <label for="state2">state</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" :placeholder="dropdownValue" />
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        <label for="title2">Link</label>
                        <InputText type="text" :modelValue="link" placeholder="link" id="title2" v-model="link"></InputText>
                    </div>
                </div>
                <div class="p-grid p-formgrid">
                    <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        <label for="subtitle2">Image <span class="img-info">(File size must be at least 500*900px) </span> </label>
                        <div class="custom-select">
                            <span v-if="!fileName">Select File</span>
                            <span v-else>{{ fileName }}</span>
                            <input type="file" class="select-file" v-on:change="onFileChange" />
                            <Button label="Select File" class="SelectBtn" />
                        </div>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        <label for="state2">Type</label>
                        <Dropdown v-model="dropdownValueType" :options="dropdownValueTypes" optionLabel="name" :placeholder="dropdownValueType" />
                    </div>
                </div>
            </div>
        </div>
        <div class="p-d-flex p-jc-end p-ai-center">
            <ConfirmPopup group="popup"></ConfirmPopup>
            <div>
                <Button label="confirm" icon="pi pi-save" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="confirm($event)"></Button>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import BannerService from '../../service/API/BannerService';
export default {
    name: 'EditBanner',
    data() {
        return {
            dropdownValues: [{ name: 'Select' }, { name: 'active' }, { name: 'inactive' }],
            dropdownValueTypes: [{ name: 'main_banner' }, { name: 'banner_top' }, { name: 'banner_bottom' }],
            dropdownValue: null,
            dropdownValueType: null,
            title: null,
            subtitle: null,
            link: null,
            file: null,
            image: '',
            fileName: '',
        };
    },
    created() {
        this.bannerService = new BannerService();
    },
    mounted() {
        this.bannerService
            .viewBanner(this.$route.params.id)
            .then((res) => {
                this.title = res.data.data[0].title;
                this.subtitle = res.data.data[0].subTitle;
                this.link = res.data.data[0].link;
                this.dropdownValueType = res.data.data[0].bannerPostion;
                this.dropdownValue = res.data.data[0].status;
                this.fileName = res.data.data[0].bannerImage;
                console.log(res.data.data[0].bannerImage);
            })
            .catch((err) => {
                alert(err);
            });
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.formData.append('image', files[0]);
            // this.formData.append('_method', 'PUT');
            this.file = files[0];
            this.fileName = this.file.name;
            console.log(this.fileName);
        },
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.bannerService
                        .updateBanner(this.$route.params.id, this.title, this.subtitle)
                        .then((res) => {
                            console.warn(res);
                            this.$router.push({ name: 'BannerManagement' });
                        })
                        .catch((res) => alert(res));

                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
    },
};
</script>

<style scoped>
.img-info {
    font-size: 11px;
    font-weight: 400;
    color: red;
}
.custom-select {
    position: relative;
    border: 1px solid #cecece;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
}
.select-file {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0%;
    z-index: 5;
    opacity: 0;
}
.SelectBtn {
    max-width: 100px;
}
.custom-select span {
    max-width: 140px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
