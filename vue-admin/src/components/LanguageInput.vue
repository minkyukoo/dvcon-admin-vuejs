<template>
  <div class="lang-dropdown">
    <select v-model="$i18n.locale">
      <option v-for="lang in langs" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
    </select>
    <!-- <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select> -->

  </div>
</template>
<script>
export default {
  name: "LanguageInput",
  data() {
    return {
      langs: [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'kr',
          name: 'Korean'
        }
      ],
    }
  },
}
</script>
