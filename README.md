# Vue 2 File Management Table

### This is Vue 2 application that provides a user-friendly interface for managing file uploads and displaying file data in a paginated table. Key features include: drag-and-drop file uploading, row selection via checkboxes, and customizable pagination.

---

## Preview:

![project preview](https://github.com/user-attachments/assets/25be9bcf-a5fa-4ec5-8285-7823ed019dea)

---

## Instruction for launching this project

1. Go to the folder on your PC where you want to install the project:
   `cd "your-folder"`
1. Download and install files of this project:
   `git clone https://github.com/Shist/vue-2-file-management-table`
1. Go to the app folder:
   `vue-2-file-management-table`
1. Install all needed dependencies:
   `npm install`
1. Run the project:
   `npm run serve`

---

## Description of folder structure

- The `public` folder stores main html document and its favicon
- The `src` folder stores all the files connected with development
  - The `assets` folder stores all needed assets for the app
    - The `styles` folder stores all the application styles
  - The `components` folder stores some Vue components that can presumably be reused somewhere many times
    - The `base` folder stores some custom app elements which are expected to be used as default for the application
    - The `icons` folder stores all icons which styles can be dynamically changed via Vue
  - The `constants` folder stores the file with a list of app constants
  - The `data` folder stores the json file with table data

---

## Technologies used in the project

- HTML
- CSS
- Javascript
- Vue 2 (Options API)
- Vue CLI (Babel, ESlint, etc.)
