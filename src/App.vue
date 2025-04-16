<template>
  <div class="global-container">
    <FileUploadSection />
    <FileManagementTable />
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

<style>
@import "@/assets/styles/reset.css";

:root {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  --color-text: #3c434b;
  --color-btn: #fdd835;
  --color-icon: #3c434b;
  --color-border: #dce0e4;
  --drag-drop-bg: #e8f5e9;
  --drag-drop-bg-rgb: 232, 245, 233;
}

.global-container {
  padding: 1rem;
}
</style>
