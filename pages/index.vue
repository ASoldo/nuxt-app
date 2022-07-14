<template>
    <div class="container mx-auto bg-gray-300 p-8">
        <h1 class="font-bold text-gray-600 text--lg">{{soldo}}</h1>
        <!-- <h1>{{filtersList[0]}}</h1> -->
        <h1>{{name}}</h1>
        <h1>{{triforce}}</h1>
        <ContentDoc path="/" />
        <ContentDoc path="/users/user" v-slot="name">
          <h1 style="color: red;">
              {{name.doc.name}}
              {{name.doc.age}}
          </h1>
          <slot name="name"></slot>
            
           
        </ContentDoc>

         <ContentQuery path="/" v-slot="{data}">
            {{data[1].name}}
            {{data[1].age}}

        </ContentQuery>

        <p>{{user.name}}</p>
        <p>{{user.age}}</p>

        <p>{{customer.user.name}}</p>
        <p>{{customer.user.age}}</p>
        <button @click="filtersStore.counter++">Click {{filtersStore.counter}}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFiltersStore } from '~/stores/index';

import {User, Customer} from '~/types/User';
export default defineComponent({
    name: "IndexAndrija",
    setup(){
        let data = null;
        let user = ref<User>({
            name: "Soldo",
            age: 20
        });

        let customer = ref<Customer>({
            user: user.value,
            created: true
        });
        const soldo = "Soldo00" as string;
        const filtersStore = useFiltersStore();
        // const filtersList = filtersStore.filtersList;
        const uhuuu = reactive({
            name: 'Link' as string
        });

        let triforce = ref<string>('Linkkkk');

        triforce.value = "sasd";

        const store = filtersStore.counter;
        return{
            soldo,
            filtersStore,
            // filtersList,
            ...toRefs(uhuuu),
            triforce,
            data,
            user,
            customer,
            store
        }
    }
})
</script>