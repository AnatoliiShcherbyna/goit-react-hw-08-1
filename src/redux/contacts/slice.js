import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "../contacts/operations";
import { logout } from "../auth/operations";

const initialState = {
	items: [],
	loadning: false, 
	error: null
 };

const slice = createSlice({
	name: 'contacts',
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.items = action.payload;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter(item => item.id !== action.payload);
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.items.push(action.payload);
			})
			.addCase(logout.fulfilled, () => initialState)
			.addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending),
				(state) => {
					state.loadning = true;
				})
			.addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled),
				(state) => {
					state.loadning = false;
				})
			.addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected),
				(state, action) => {
					state.loadning = false;
					state.error = action.payload
			})
	},
}); 

export const contactsReducer = slice.reducer;


