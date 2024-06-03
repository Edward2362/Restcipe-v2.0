import { ApiError } from "@/utils/class/ApiError";
import { API_BASE_URL } from "@/utils/constant";

export const httpRequest = {
	get: async <T>(endpoint: string, init?: RequestInit) => {
		const response = await fetch(API_BASE_URL + endpoint, {
			...init,
			method: "GET",
			cache: "no-store",
		});

		const responseJson = await response.json();
		if (!response.ok) {
			throw new ApiError(response.status, responseJson);
		}
		if (!responseJson) return null;

		return responseJson as T;
	},

	post: async <T>(endpoint: string, data: T, init?: RequestInit) => {
		let headers = init?.headers || {};
		const response = await fetch(API_BASE_URL + endpoint, {
			...init,
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
			body: JSON.stringify(data),
		});

		const responseText = await response.text();
		if (!response.ok) {
			throw new ApiError(response.status, responseText);
		}
		if (!responseText) return null;

		return JSON.parse(responseText);
	},

	patch: async <T>(endpoint: string, data: T, init?: RequestInit) => {
		let headers = init?.headers || {};
		const response = await fetch(API_BASE_URL + endpoint, {
			...init,
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
			body: JSON.stringify(data),
		});

		const responseText = await response.text();
		if (!response.ok) {
			throw new ApiError(response.status, responseText);
		}
		if (!responseText) return null;

		return JSON.parse(responseText);
	},

	delete: async (endpoint: string, init?: RequestInit) => {
		const response = await fetch(API_BASE_URL + endpoint, {
			method: "DELETE",
			...init,
		});

		const responseText = await response.text();
		if (!response.ok) {
			throw new ApiError(response.status, responseText);
		}
		if (!responseText) return null;

		return JSON.parse(responseText);
	},
};
