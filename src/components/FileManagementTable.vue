<template>
  <div class="table-wrapper">
    <section class="table-wrapper__top-section">
      <h4 class="table-wrapper__top-section-label">Files</h4>
      <BaseButton :maxWidthInRem="6" @click="onAddBtnClick">
        <IconAdd :sizeInRem="2" />
      </BaseButton>
    </section>
    <table class="files-table">
      <thead class="files-table__head">
        <tr class="files-table__head-row">
          <th
            v-for="header in tableHeaders"
            :key="header"
            class="files-table__head-item"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableDataRows" :key="row.added">
          <td
            v-for="(itemValue, itemKey) in row"
            :key="itemKey"
            class="files-table__body-item"
          >
            <template v-if="itemKey === 'name'">
              <span class="bold-data-text">
                {{ getBoldNamePart(itemValue) }}
              </span>
              {{ getNameRemainder(itemValue) }}
            </template>
            <template v-else-if="itemKey === 'status'">
              <span class="status" :class="getStatusItemClass(itemValue)">
                {{ itemValue }}
              </span>
            </template>
            <template v-else-if="itemKey === 'actions'">
              <div class="files-table__actions-wrapper">
                <button
                  v-for="action in itemValue"
                  :key="action"
                  class="files-table__action-btn"
                  @click="onActionBtnClick(action)"
                >
                  <component
                    :is="getActionComponent(action)"
                    class="files-table__action-icon"
                  />
                </button>
              </div>
            </template>
            <template v-else>{{ itemValue }}</template>
          </td>
        </tr>
      </tbody>
    </table>
    <section class="table-wrapper__bottom-section">
      <span>Rows per page</span>
      <input type="number" style="width: 3rem" />
      <span>1 to 7 of 12</span>
      <button>&lt;</button>
      <button>&gt;</button>
    </section>
  </div>
</template>

<script>
import IconAdd from "@/components/icons/IconAdd.vue";
import IconView from "@/components/icons/IconView.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconLoad from "@/components/icons/IconLoad.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import tableData from "@/data/table-data.json";
import { STATUS_CLASSES, ACTIONS } from "@/constants";

export default {
  name: "FileManagementTable",

  components: {
    IconAdd,
    IconView,
    IconEdit,
    IconLoad,
    IconDelete,
  },

  data() {
    return {
      tableHeaders: [],
      tableDataRows: [],
    };
  },

  methods: {
    onAddBtnClick() {
      console.log("Add button was clicked!");
    },

    getBoldNamePart(name) {
      const openingParenIndex = name.indexOf("(");

      if (openingParenIndex === -1) {
        return name;
      } else {
        return name.substring(0, openingParenIndex);
      }
    },

    getNameRemainder(name) {
      const openingParenIndex = name.indexOf("(");

      if (openingParenIndex === -1) {
        return "";
      } else {
        return name.substring(openingParenIndex);
      }
    },

    getStatusItemClass(itemValue) {
      const statusClass = STATUS_CLASSES[itemValue];

      if (statusClass) {
        return statusClass;
      } else {
        console.error(`Unknown status value: ${itemValue}`);
        return "status-unknown";
      }
    },

    getActionComponent(actionName) {
      const actionIcon = ACTIONS[actionName]?.iconName;

      if (actionIcon) {
        return actionIcon;
      } else {
        console.error(`Unknown action name: ${actionName}`);
        return null;
      }
    },

    onActionBtnClick(actionName) {
      const actionTitle = ACTIONS[actionName]?.title;

      if (actionTitle) {
        console.log(`${actionTitle} action button was clicked!`);
      } else {
        console.error(`Unknown action name: ${actionName}`);
      }
    },
  },

  mounted() {
    this.tableHeaders = Object.keys(tableData[0] ?? {});

    this.tableDataRows = tableData.map((rowObj) => {
      const validActions = [];

      rowObj.actions.forEach((actionName) => {
        if (Object.keys(ACTIONS).includes(actionName)) {
          validActions.push(actionName);
        } else {
          console.error(`Unknown action name: ${actionName}`);
        }
      });

      if (!Object.keys(STATUS_CLASSES).includes(rowObj.status)) {
        rowObj.status = "Unknown status";
      }

      return { ...rowObj, actions: validActions };
    });
  },
};
</script>

<style scoped>
.table-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-border);
}
.table-wrapper__top-section {
  padding: 1rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  background-color: var(--color-table-top-section-bg);
  border-radius: 0.25rem 0.25rem 0 0;
}
.table-wrapper__top-section-label {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--color-text);
}
.table-wrapper__bottom-section {
  margin-top: auto;
  padding: 0.75rem;
  align-self: flex-end;
}

.files-table {
  border-radius: 0.25rem 0.25rem 0 0;
}
.files-table__head {
  border-radius: 0.25rem 0.25rem 0 0;
}
.files-table__head-row {
  border-radius: 0.25rem 0.25rem 0 0;
}
.files-table__head-item {
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  color: var(--color-text);
  text-transform: capitalize;
  background-color: var(--color-table-head);
  border-right: 1px solid white;
}
.files-table__head-item:first-child {
  border-radius: 0.25rem 0 0 0;
}
.files-table__head-item:last-child {
  border-radius: 0 0.25rem 0 0;
  border-right: none;
}
.files-table__body-item {
  padding: 1rem;
  font-size: 1rem;
  vertical-align: middle;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
}
.files-table__actions-wrapper {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}
.files-table__action-btn {
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
}
.files-table__action-btn:hover {
  background-color: var(--color-icon-bg-hover);
}

.bold-data-text {
  font-weight: 500;
}

.status {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
}
.status::before {
  content: "";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.25rem;
}
.status-submitted {
  background-color: var(--color-status-submitted-bg);
  color: var(--color-status-submitted-text);
}
.status-submitted::before {
  background-color: var(--color-status-submitted-circle);
}
.status-saved {
  background-color: var(--color-status-saved-bg);
  color: var(--color-status-saved-text);
}
.status-saved::before {
  background-color: var(--color-status-saved-circle);
}
.status-awaiting {
  background-color: var(--color-status-awaiting-bg);
  color: var(--color-status-awaiting-text);
}
.status-awaiting::before {
  background-color: var(--color-status-awaiting-circle);
}
.status-approved {
  background-color: var(--color-status-approved-bg);
  color: var(--color-status-approved-text);
}
.status-approved::before {
  background-color: var(--color-status-approved-circle);
}
.status-rejected {
  background-color: var(--color-status-rejected-bg);
  color: var(--color-status-rejected-text);
}
.status-rejected::before {
  background-color: var(--color-status-rejected-circle);
}
.status-unknown::before {
  margin-right: 0;
  width: 0;
}
</style>
