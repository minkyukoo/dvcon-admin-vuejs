<template>
    <div class="p-col-12 p-pb-0">
        <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
    </div>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>New</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">Title</label>
                            <InputText :class="`${error.title ? 'p-invalid' : ''}`" type="text" placeholder="Title" id="title2" v-model="title"></InputText>
                            <div class="text-red">{{ error.title }}</div>
                        </div>

                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">state</label>
                            <Dropdown :class="`${error.dropdownValue ? 'p-invalid' : ''}`" v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Privacy Policy" />
                            <div class="text-red">{{ error.dropdownValue }}</div>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-field">
                    <label>Description :</label>
                    <div :class="`${error.modelname ? 'p-invalid' : ''}`">
                        <span class="p-float-label">
                            <Quill-Editor style="height: 200px" v-model:content="modelname" ref="myQuillEditor" :options="editorOption" contentType="html" />
                        </span>
                    </div>
                    <div class="text-red">
                        <p>{{ error.modelname }}</p>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button label="Add Faq" icon="pi pi-plus" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="addcms"></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill';
import CmsService from '../../service/API/CmsService';
import validateAddCms from '../../validations/cms/validateAddCms';
// import axios from 'axios';
export default {
    name: 'CreateBanner',
    components: {
        QuillEditor,
    },
    data() {
        return {
            modelname: '',
            editorOption: {
                toolbar: 'essential',
                contentType: 'text',
                placeholder: 'Type your comment....',
                readonly: true,
                theme: 'snow',
            },
            dropdownValues: [
                { name: 'Privacy Policy', id: 1 },
                { name: 'Terms & condition', id: 2 },
            ],
            dropdownValueTypes: [{ name: 'main_banner' }, { name: 'banner_top' }, { name: 'banner_bottom' }],
            dropdownValue: '1',
            dropdownValueType: null,
            title: '',
            // desc: null,
            subtitle: null,
            link: null,
            file: null,
            image: '',
            fileName: '',
            formData: new FormData(),
            error: {},
        };
    },
    created() {
        this.cmsService = new CmsService();
    },

    methods: {
        addcms() {
            let vcheckData = {
                title: this.title,
                state: this.dropdownValue.name == undefined ? 'Privacy Policy' : this.dropdownValue.name,
                modelname: this.modelname,
            };
            const { isInvalid, error } = validateAddCms(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.error = {};

                // console.log(this.dropdownValue.id);
                this.cmsService.addCms(this.title, this.modelname, this.dropdownValue.id == undefined ? this.dropdownValue : this.dropdownValue.id).then(() => {
                    this.$router.push({ name: 'Cms' });
                });
            }
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
.ql-editor {
    height: 200px;
}
.invalid-quill {
    border: 1px solid red;
}
</style>
