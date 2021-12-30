<template>
    <router-link to="/banner-management">
        <Button label="Go Back" icon="pi pi-angle-left" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
    </router-link>
    <div class="card">
        <div class="p-grid p-fluid">
            <div class="p-col-12 p-md-9">
                <h5>New</h5>
                <div class="p-grid p-formgrid p-mb-3">
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0 p-field">
                        <label for="title2">Title</label>
                        <InputText type="text" placeholder="Title" id="title2" v-model="title"></InputText>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0 p-field">
                        <label for="subtitle2">Subtitle</label>
                        <InputText type="text" placeholder="Subtitle" id="subtitle2" v-model="subtitle"></InputText>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0 p-field">
                        <label for="state2">state</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                    </div>
                </div>
                <div class="p-grid p-formgrid">
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0 p-field">
                        <label for="title2">Link</label>
                        <InputText type="text" placeholder="link" id="title2" v-model="link"></InputText>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0 p-field">
                        <label for="subtitle2">Image <span class="img-info">(File size must be at least 500*900px) </span> </label>
                        <div class="custom-select">
                            <span>Select File</span>
                            <input type="file" class="select-file" v-on:change="onFileChange(event)" />
                            <Button label="Select File" class="SelectBtn" />
                        </div>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0 p-field">
                        <label for="state2">Type</label>
                        <Dropdown v-model="dropdownValueType" :options="dropdownValueTypes" optionLabel="name" placeholder="Select" />
                    </div>
                </div>
                <!-- <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="name2">Start Date</label>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue1"></Calendar>
                    </div>
                    <div class="p-field p-col">
                        <label for="email2">End Date</label>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue2"></Calendar>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="p-d-flex p-jc-end p-ai-center">
            <div>
                <Button label="initialization" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" v-on:click="reinitialize"> </Button>
                <Button label="confirm" icon="pi pi-save" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="addBanner"></Button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CreateBanner',
    data() {
        return {
            dropdownValues: [{ name: 'Select' }, { name: 'active' }, { name: 'inactive' }],
            dropdownValueTypes: [{ name: 'state' }, { name: 'main r' }, { name: 'sub top' }, { name: 'sub bottom' }],
            dropdownValue: null,
            dropdownValueType: null,
            title: null,
            subtitle: null,
            link: null,
        };
    },
    methods: {
        reinitialize() {
            (this.dropdownValue = null), (this.dropdownValueType = null), (this.title = null), (this.subtitle = null), (this.link = null);
        },
        onFileChange(e) {
            var files = e?.target.files || e?.dataTransfer.files;
            if (!files.length) {
                return;
            }
            this.createImage(files[0]);
        },
        addBanner() {
            console.log(this.dropdownValue?.name);
            return axios
                .post(
                    'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/banner/add',
                    {
                        title: this.title,
                        subtitle: this.subtitle,
                        link: this.link,
                        status: this.dropdownValue?.name,
                        type: this.dropdownValueType?.name,
                    },
                    {
                        headers: {
                            source: 'dvcon',
                            apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                            token: localStorage.getItem('token'),
                        },
                    }
                )
                .then(res => {
                    alert(res.data.data[0]);
                    this.$router.push({ name: 'User' });
                    console.log(res);
                })
                .catch(err => {
                    alert(err);
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
</style>
