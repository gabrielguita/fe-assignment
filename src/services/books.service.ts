// import { API_BASE_URL, API_RESULTS } from "./constants";
// const API_URL = process.env.REACT_APP_API_URL || API_BASE_URL;
import { mockData } from "@/data";
import { FetchParams } from "./types";

export async function fetchUsers({ pageNo, itemsPerPage = 4 }: FetchParams) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const results = mockData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(mockData.length / itemsPerPage);
  const hasNextPage = pageNo < totalPages;

  return {
    results,
    nextCursor: hasNextPage ? pageNo + 1 : undefined,
    totalPages,
  };
}
