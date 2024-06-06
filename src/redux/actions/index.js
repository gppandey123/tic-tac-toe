import { INCREAMENT } from "../constant/action-type";

export function increment(payload) {
  return { type: INCREAMENT, payload };
}