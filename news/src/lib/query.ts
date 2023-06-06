import type { NewsApiParams } from "@/types/query-type";

export default async function (params: NewsApiParams) {
  try {
    const str = Object.keys(params)
      .map(function (key) {
        return key + "=" + (params as any)[key];
      })
      .join("&");
    const serverResponse = await fetch("http://localhost:3001/news?" + str, {
      method: "GET",
      cache: "force-cache",
    });
    if (serverResponse.status == 200) {
      return await serverResponse.json();
    }
    throw new Error("Falha na API");
  } catch (error) {
    throw new Error("Falha na API");
  }
}
