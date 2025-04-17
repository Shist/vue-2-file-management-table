<template>
  <div class="global-container">
    <FileUploadSection />
    <FileManagementTable class="global-container__files-table" />
  </div>
</template>

<script>
import FileUploadSection from "@/components/FileUploadSection.vue";
import FileManagementTable from "@/components/FileManagementTable.vue";

export default {
  name: "App",

  components: {
    FileUploadSection,
    FileManagementTable,
  },
};
</script>
