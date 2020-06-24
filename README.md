# vue-desgn-pattern
this project is made for passing my significant time in wasting, but in a funny way :smiley:

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```


## How to Structure a Vue.js Project
*By Sandoche Adittane.*
sorry *Adittane*, I couldn't take your permission before using your article for time being. :sleeping:
 
you may read actual article in [this url](https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb "article").

![Vue Logo](https://miro.medium.com/max/1808/1*YFdPXlOnzP2cReGcDzafmA.png)

```
.
├── app.css     
├── App.vue     
├── assets      
│   └── ...     
├── components      
│   └── ...     
├── main.js     
├── mixins      
│   └── ...
├── router
│   └── index.js
├── store
│   ├── index.js
│   ├── modules
│   │   └── ...
│   └── mutation-types.js
├── translations
│   └── index.js
├── utils
│   └── ...
└── views
    └── ...
```
A few details about each of these folders:
* **assets** — Where you put any assets that are imported into your components
* **components** — All the components of the projects that are not the main views
* **mixins** — The mixins are the parts of javascript code that is reused in different components. In a mixin you can put any component’s methods from Vue.js they will be merged with the ones of the component that uses it.
* **router** — All the routes of your projects (in my case I have them in the index.js). Basically in Vue.js everything is a component. But not everything is a page. A page has a route like “/dashboard”, “/settings” or “/search”. If a component has a route it is routed.
* **store (optional)** — The Vuex constants in mutation-type.js, the Vuex modules in the subfolder modules (which are then loaded in the index.js).
* **translations (optional)** — Locales files, I use Vue-i18n, and it works pretty good.
* **utils (optional)** — Functions that I use in some components, such as regex value testing, constants or filters.
* **views —** To make the project faster to read I separate the components that are routed and put them in this folder. The components that are routed for me are more than a component since they represent pages and they have routes, I put them in “views” then when you check a page you go to this folder.
You can eventually add other folders depending on your need such as filters,or constants, API.



## Naming conventions
Here are a few conventions coming from the Vue.js official styleguide that you need to structure well your project:
* Component names should always be multi-word, except for root “App” components. Use “UserCard” or “ProfileCard” instead of “Card” for example.
* Each component should be in its own file.
* Filenames of single-file components should either be always PascalCase or always kebab-case. Use “UserCard.vue” or “user-card.vue”.
* Components that are only used once per page should begin with the prefix “The”, to denote that there can be only one. For example for a navbar or a footer you should use “TheNavbar.vue” or “TheFooter.vue”.
* Child components should include their parent name as a prefix. For example if you would like a “Photo” component used in the “UserCard” you will name it “UserCardPhoto”. It’s for better readability since files in a folder are usually order alphabetically.
* Always use full name instead of abbreviation in the name of your components. For example don’t use “UDSettings”, use instead “UserDashboardSettings”.


## FONT AWESOME(Best way to use in vue apps)
[read here](https://medium.com/front-end-weekly/how-to-use-fon-awesome-5-on-vuejs-project-ff0f28310821)