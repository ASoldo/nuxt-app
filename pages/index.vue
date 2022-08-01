<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-gray-600 text--lg">{{ soldo }}</h1>
    <h1>hey</h1>
    <!-- <h1>{{filtersList[0]}}</h1> -->
    <!-- <h1>{{name}}</h1> -->
    <!-- <h1>{{ triforce }}</h1>
    <ContentDoc path="/" />
    <ContentDoc path="/users/user" v-slot="name">
      <h1 style="color: red">
        {{ name.doc.name }}
        {{ name.doc.age }}
      </h1>
      <slot name="name"></slot>
    </ContentDoc>

    <ContentQuery path="/" v-slot="{ data }">
      {{ data[1].name }}
      {{ data[1].age }}
    </ContentQuery>

    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>

    <p>{{ customer.user.name }}</p>
    <p>{{ customer.user.age }}</p>
    <button @click="filtersStore.counter++">
      Click {{ filtersStore.counter }}
    </button>
    <Noe ime="Hej jooooo" @soldo-emit="recieved($event)">
      <template #noe-name>
        <h1>Noe name</h1>
      </template>
      <template v-slot:noe-age>
        <h1 class="text-blue-300">32</h1>
      </template>
      <h1>theme</h1>
    </Noe>
    
    <PixiApp :bunny="'/img/Bunny.png'" />
    <TroisApp />
    <Lottie /> -->
    <button @click="postRegisterForm">Click</button>

    <!-- <main role="main">
      <StoryblokComponent v-if="story" :blok="story.content" />
    </main> -->
    <div>
      {{fps}}/fps
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFiltersStore } from "~/store/index";
import { useFps } from '@vueuse/core'

let response = ref<FormValidation>({ hasErrors: false })
const errors = ref(new Map())

async function postRegisterForm() {
  response.value = await registerWithEmail("Soldos", "andrijas", "soldo.andrija@gmail.coms", "0123456789");
  errors.value = response.value.errors
};

// import { User, Customer } from "~/types/User";

const story = await useStoryblok('home', {version: 'draft'});

// let user = ref<User>({
//   name: "Soldo",
//   age: 20,
// });

// let customer = ref<Customer>({
//   user: user.value,
//   created: true,
// });
const soldo = "Soldo00" as string;
const filtersStore = useFiltersStore();
// const filtersList = filtersStore.filtersList;

// const uhuuu = reactive({
//     name: 'Link' as string
// });

let triforce = ref<string>("Linkkkk");

triforce.value = "sasd";

const store = filtersStore.counter;

const recieved = function (param) {
  console.log("recieved" + param.broj);
};
const fps = useFps();
</script>
