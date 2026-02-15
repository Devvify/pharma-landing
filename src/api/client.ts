import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL as string;
const moduleid = import.meta.env.VITE_DNN_MODULE_ID as string;
const tabid = import.meta.env.VITE_DNN_TAB_ID as string;

if (!baseURL) throw new Error("Missing VITE_API_BASE_URL");
if (!moduleid) throw new Error("Missing VITE_DNN_MODULE_ID");
if (!tabid) throw new Error("Missing VITE_DNN_TAB_ID");

export const api = axios.create({
  baseURL,
  headers: {
    moduleid,
    tabid,
  },
});

interface ErrorResponse {
  Message?: string;
}

export function getErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    return (
      (err.response?.data as ErrorResponse)?.Message ||
      err.response?.statusText ||
      err.message
    );
  }
  return err instanceof Error ? err.message : "Something went wrong";
}
