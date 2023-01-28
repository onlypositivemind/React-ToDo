export const loadLocalStorageItem = (key: string) => {
	try {
		const savedItem = localStorage.getItem(key);
		
		if (!savedItem) {
			return undefined;
		}
		
		return JSON.parse(savedItem);
	} catch (e) {
		return undefined;
	}
};

export const saveLocalStorageItem = (key: string, value: string) => {
	try {
		localStorage.setItem(key, value);
	} catch (e) {
		console.error(e);
	}
};

