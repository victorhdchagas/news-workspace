<script setup lang="ts">
defineProps<{
  myNews: {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: Date;
    source: { id: string; name: string };
    url: string;
  };
}>();
</script>
<template>
  <div
    class="w-full self-stretch basis-[100%] sm:basis-[45%] md:basis-[23%] flex flex-col justify-center items-center px-2"
  >
    <div class="self-stretch hover:animate-pulse">
      <a :href="myNews.url" target="_blank"
        ><img :src="myNews.urlToImage" class="h-[270px] md:h-[150px] m-auto"
      /></a>
    </div>
    <div class="flex flex-col justify-stretch">
      <span class="text-sm pb-2">{{ myNews.source.name }}</span>
      <p class="text-lg md:h-[270px] lg:h-[150px] overflow-y-hidden">
        {{ myNews.description.substring(0, 200) }}
      </p>
      <div
        class="flex flex-row justify-between items-between text-sm pt-2 gap-4"
      >
        <span>{{ myNews.publishedAt }}</span>
        <span>{{ myNews.author }}</span>
      </div>
    </div>
  </div>
</template>
