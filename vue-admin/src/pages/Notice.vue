<template>
  <div class="p-grid">
    <Toast />
    <div class="p-col-12">
      <div class="card p-fluid">
        <h4>
          <strong>Search</strong>
        </h4>
        <div class="p-formgrid p-grid">
          <div class="p-field p-col">
            <label for="nameuser">Name</label>
            <InputText id="nameuser" type="text" placeholder="Search" />
          </div>

          <div class="p-field p-col">
            <label for="mobileuser">Phone Number</label>
            <InputText id="mobileuser" type="text" placeholder="Search" />
          </div>
          <div class="p-field p-col">
            <label for="emailuser">E-mail</label>
            <InputText id="emailuser" type="email" placeholder="Search" />
          </div>
          <!-- <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
          </div>-->
        </div>
        <div class="p-formgrid p-grid">
          <!-- <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Password</label>
                        <InputText id="pass" type="password" placeholder="password" />
          </div>-->
          <div class="p-field p-col-12 p-md-3">
            <label for="pass">Start Date:</label>
            <Calendar
              :showIcon="true"
              :showButtonBar="true"
              v-model="calendarValue"
              placeholder="YYYY.MM.DD"
            ></Calendar>
          </div>
          <div class="p-field p-col-12 p-md-3">
            <label for="verify-pass">Last Date:</label>
            <Calendar
              :showIcon="true"
              :showButtonBar="true"
              v-model="calendarValue1"
              placeholder="YYYY.MM.DD"
            ></Calendar>
          </div>
        </div>

        <div class="p-d-flex p-jc-end">
          <Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2">
            <i class="pi pi-refresh p-mr-2"></i> initialization
          </Button>
          <Button label="Primary" class="p-mr-2 p-mb-2">
            <i class="pi pi-search p-mr-2"></i> search
          </Button>
        </div>
      </div>
    </div>
    <div class="p-col-12">
      <div class="card">
        <div class="p-d-flex p-jc-between p-mb-2">
          <div>
            <h5>User List</h5>
          </div>
          <div>
            <Button label="Primary" class="p-mr-2 p-mb-2">
              <i class="pi pi-download p-mr-2"></i> Download Excel
            </Button>
            <router-link to="/add-user">
              <Button label="Primary" class="p-mr-2 p-mb-2">
                <i class="pi pi-plus p-mr-2"></i> New
              </Button>
            </router-link>
          </div>
        </div>

        <DataTable
          :value="customer1"
          :paginator="true"
          class="p-datatable-gridlines"
          :rows="10"
          data-key="id"
          :rowHover="true"
          v-model:filters="filters1"
          filterDisplay="menu"
          :loading="loading1"
          :filters="filters1"
          responsiveLayout="scroll"
          :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']"
        >
          <!-- <template #header>
                        <div class="p-d-flex p-jc-between p-flex-column p-flex-sm-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined p-mb-2" @click="clearFilter1()"/>
                            <span class="p-input-icon-left p-mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
          </template>-->
          <template #empty>No customers found.</template>
          <template #loading>Loading customers data. Please wait.</template>

          <Column field="name" header="Name" style="min-width:12rem">
            <template #body="{ data }">
              <span class="p-column-title">Name</span>
              {{ data.name }}
            </template>
            <!-- <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>-->
          </Column>
          <Column header="Country" filterField="country.name" style="min-width:12rem">
            <template #body="{ data }">
              <span class="p-column-title">Country</span>
              <img
                src="assets/demo/flags/flag_placeholder.png"
                :alt="data.country.name"
                :class="'flag flag-' + data.country.code"
                width="30"
              />
              <span
                style="margin-left: .5em; vertical-align: middle"
                class="image-text"
              >{{ data.country.name }}</span>
            </template>
            <!-- <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
            </template>-->
            <template #filterclear="{ filterCallback }">
              <Button
                type="button"
                icon="pi pi-times"
                @click="filterCallback()"
                class="p-button-secondary"
              ></Button>
            </template>
            <template #filterapply="{ filterCallback }">
              <Button
                type="button"
                icon="pi pi-check"
                @click="filterCallback()"
                class="p-button-success"
              ></Button>
            </template>
            <template #filterfooter>
              <div class="p-px-3 p-pt-0 p-pb-3 p-text-center p-text-bold">Customized Buttons</div>
            </template>
          </Column>
          <Column
            header="Agent"
            filterField="representative"
            :showFilterMatchModes="false"
            :filterMenuStyle="{ width: '14rem' }"
            style="min-width:14rem"
          >
            <template #body="{ data }">
              <span class="p-column-title">Agent</span>
              <img
                :alt="data.representative.name"
                :src="'assets/demo/images/avatar/' + data.representative.image"
                width="32"
                style="vertical-align: middle"
              />
              <span
                style="margin-left: .5em; vertical-align: middle"
                class="image-text"
              >{{ data.representative.name }}</span>
            </template>
            <!-- <template #filter="{filterModel}">
                            <div class="p-mb-3 p-text-bold">Agent Picker</div>
                            <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter" style="width: 12rem">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'assets/demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span style="margin-left: .5em; vertical-align: middle" class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
            </MultiSelect>-->
            <!-- </template> -->
          </Column>
          <Column header="Date" filterField="date" data-type="date" style="min-width:10rem">
            <template #body="{ data }">
              <span class="p-column-title">Date</span>
              {{ formatDate(data.date) }}
            </template>
            <!-- <template #filter="{filterModel}">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
            </template>-->
          </Column>
          <Column
            header="Balance"
            filterField="balance"
            data-type="numeric"
            style="min-width:10rem"
          >
            <template #body="{ data }">
              <span class="p-column-title">Balance</span>
              {{ formatCurrency(data.balance) }}
            </template>
            <!-- <template #filter="{filterModel}">
                            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
            </template>-->
          </Column>
          <Column
            field="status"
            header="Status"
            :filterMenuStyle="{ width: '14rem' }"
            style="min-width:12rem"
          >
            <template #body="{ data }">
              <span class="p-column-title">Status</span>
              <span :class="'customer-badge status-' + data.status">{{ data.status }}</span>
            </template>
            <!-- <template #filter="{filterModel}">
                            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #value="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                    <span v-else>{{slotProps.placeholder}}</span>
                                </template>
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
            </template>-->
          </Column>
          <!-- <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Activity</span>
                            <ProgressBar :value="data.activity" :showValue="false"></ProgressBar>
                        </template>
                        <template #filter={filterModel}>
                            <Slider v-model="filterModel.value" range class="p-m-3"></Slider>
                            <div class="p-d-flex p-ai-center p-jc-between p-px-2">
                                <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                                <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                            </div>
                        </template>
          </Column>-->
          <Column
            field="verified"
            header="Verified"
            data-type="boolean"
            bodyClass="p-text-center"
            style="min-width:8rem"
          >
            <template #body="{ data }">
              <span class="p-column-title">Verified</span>
              <i
                class="pi"
                :class="{ 'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified }"
              ></i>
            </template>
            <!-- <template #filter={filterModel}>
                            <TriStateCheckbox v-model="filterModel.value" />
            </template>-->
          </Column>
          <Column header="extra" filterField="exra" data-type="numeric">
            <template #body="{ data }">
              <span class="p-column-title">Balance</span>
              <p style="display:none">{{ formatCurrency(data.balance) }}</p>
              <div style="display:flex">
                <router-link to="/user/view-user">
                  <Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2">
                    <i class="pi pi-eye p-mr-2"></i> view
                  </Button>
                </router-link>
                <router-link to="/user/edit-user">
                  <Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2">
                    <i class="pi pi-user-edit p-mr-2"></i> Edit
                  </Button>
                </router-link>
                <Button
                  label="Delete"
                  icon="pi pi-trash"
                  class="p-button-danger p-button-outlined"
                  @click="del"
                />
                <ConfirmDialog group="dialog" />
              </div>
            </template>
            <!-- <template #filter="{filterModel}">
                            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
            </template>-->
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticePage"
}
</script>

<style lang="scss" scoped>
</style>