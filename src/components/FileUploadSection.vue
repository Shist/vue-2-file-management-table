<template>
  <div class="upload-panel">
    <BaseButton :maxWidthInRem="12" @click="onUploadClick">
      <IconLoad :sizeInRem="4" tip="Upload" />
    </BaseButton>
    <label
      for="file-upload"
      class="drag-drop-field"
      @click.prevent
      @dragover.prevent="fileDragOver"
      @dragleave="fileDragLeave"
      @drop.prevent="fileDrop"
    >
      <input
        v-show="false"
        ref="fileUploadElement"
        type="file"
        accept="application/json"
        id="file-upload"
        @change="fileChange"
      />
      <h3 v-if="!isJsonFileUploaded" class="drag-drop-field__default-label">
        Drag & Drop file here to upload
      </h3>
      <div v-else class="drag-drop-field__uploaded-labels-wrapper">
        <div class="drag-drop-field__file-info-grid">
          <span class="drag-drop-field__file-info-label">
            Uploaded file name:
          </span>
          <span class="drag-drop-field__file-info-value">
            {{ jsonFile.name }}
          </span>
          <span class="drag-drop-field__file-info-label">
            Uploaded file size:
          </span>
          <span class="drag-drop-field__file-info-value">
            {{ jsonFile.size }} bytes
          </span>
        </div>
        <span class="drag-drop-field__uploaded-label">
          You can upload another file if you want
        </span>
      </div>
    </label>
  </div>
</template>

<script>
import IconLoad from "@/components/icons/IconLoad.vue";

export default {
  name: "FileUploadSection",

  components: {
    IconLoad,
  },

  data() {
    return {
      fileUploadElement: null,
      jsonFile: null,
      isJsonFileUploaded: false,
    };
  },

  methods: {
    onUploadClick() {
      this.$refs.fileUploadElement?.click();
    },

    prepareFile(file) {
      if (file.type !== "application/json") {
        console.error("You can upload *.json files only!");
        return;
      }

      this.jsonFile = file;
      this.isJsonFileUploaded = true;
    },

    fileChange(e) {
      if (!e.target?.files.length) {
        console.error("Something went wrong during file upload!");
        return;
      }

      const filesAmount = e.target.files.length;
      const lastFile = e.target.files[filesAmount - 1];
      this.prepareFile(lastFile);
    },

    fileDragOver(e) {
      const uploadWrapper = e.target?.closest(".drag-drop-field");
      uploadWrapper?.classList.add("green-filter-bg");
    },

    fileDragLeave(e) {
      const uploadWrapper = e.target?.closest(".drag-drop-field");
      uploadWrapper?.classList.remove("green-filter-bg");
    },

    fileDrop(e) {
      this.fileDragLeave(e);

      if (!e.dataTransfer?.files.length) {
        console.error("Something went wrong during file upload!");
        return;
      }

      const filesAmount = e.dataTransfer.files.length;
      const lastFile = e.dataTransfer.files[filesAmount - 1];
      this.prepareFile(lastFile);
    },
  },
};
</script>

<style scoped>
.green-filter-bg {
  background-color: rgba(var(--color-drag-drop-bg-rgb), 0.5);
}

.upload-panel {
  display: flex;
  column-gap: 1rem;
}

.drag-drop-field {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.25rem dashed var(--color-border);
  border-radius: 0.25rem;
}
.drag-drop-field__default-label {
  position: relative;
  z-index: -1;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text);
}
.drag-drop-field__uploaded-labels-wrapper {
  position: relative;
  z-index: -1;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
}
.drag-drop-field__file-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.25rem;
  column-gap: 0.5rem;
  color: var(--color-text);
}
.drag-drop-field__file-info-label {
  justify-self: end;
  font-size: 1rem;
}
.drag-drop-field__file-info-value {
  font-size: 1rem;
}
.drag-drop-field__uploaded-label {
  font-size: 1.25rem;
}
</style>
