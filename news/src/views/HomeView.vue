<script setup lang="ts">
import CustomTextInput from "@/components/CustomTextInput.vue";
import NewsCard from "@/components/NewsCard.vue";
import query from "@/lib/query";
import { ref } from "vue";
const searchedNews = ref([]);
const searchParams = {
  q: "",
};
const queryError = ref({
  msg: "",
  status: false,
});
const buscar = () => {
  queryError.value.status = false;
  query(searchParams)
    .then((ret) => {
      if (ret.status == "ok")
        searchedNews.value = ret.articles.map((article) => ({
          ...article,
          publishedAt: new Date(article.publishedAt).toLocaleDateString(),
        }));
    })
    .catch((er) => {
      queryError.value.msg = "Erro na consulta da API";
      queryError.value.status = true;
    });
};
const getSearchQuery = (text) => {
  searchParams.q = text;
};
</script>

<template>
  <main class="mt-2">
    <form class="flex flex-row flex-nowrap">
      <CustomTextInput
        description="Busca"
        v-on:update="getSearchQuery"
      ></CustomTextInput>
      <button
        type="submit"
        @click.prevent="buscar"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buscar
      </button>
    </form>
    <h1
      v-if="queryError.status"
      class="w-full pl-2 text-xl font-bold text-red-800"
    >
      {{ queryError.msg }}
    </h1>
    <section
      v-if="searchedNews.length > 0"
      class="flex flex-row flex-wrap gap-4 p-2"
    >
      <NewsCard
        :my-news="news"
        v-for="(news, index) of searchedNews"
        v-bind:key="index"
      />
    </section>
  </main>
</template>
