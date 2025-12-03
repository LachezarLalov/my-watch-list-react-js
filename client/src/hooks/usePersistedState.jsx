import { useState } from 'react';

export function usePersistedState(initialState, key) {
	const [state, setState] = useState(() => {
		const storageData = localStorage.getItem(key);

		if (!storageData) {
			return initialState;
		}

		const data = JSON.parse(storageData);
		return data;
	});

	const setPersistedState = (value) => {
		localStorage.setItem(key, JSON.stringify(value));

		setState(value);
	};

	return [state, setPersistedState];
}
