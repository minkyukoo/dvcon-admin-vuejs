<template>

  
  <div class="lang-dropdown">
   
    <select v-model="$i18n.locale" @change="setLocale($i18n.locale)" placeholder="English" >
      <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang.code" >{{ lang.name }}</option>
    </select>
  </div>
</template>
<script>
import { useI18n } from "vue3-i18n";
export default {
  name: "LanguageInput",
  setup() {
    const i18n = useI18n();
    const setLocale = (lang) => {
      i18n.setLocale(lang);
      console.log(lang);
    };

    return {
      setLocale,
    };
  },
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
  mounted(){
    
  }
}
</script>
<style scoped>

</style>
