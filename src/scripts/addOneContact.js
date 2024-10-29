import { readContacts } from "./../utils/readContacts.js";
import { createFakeContact } from "./../utils/createFakeContact.js";
import { writeContacts } from "./../utils/writeContacts.js";

export const addOneContact = async () => {
	const contact = await readContacts();
	const newContact = createFakeContact();
	contact.push(newContact);
	await writeContacts(contact);
};

addOneContact();
