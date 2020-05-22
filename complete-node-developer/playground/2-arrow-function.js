const event = {
	name: 'Birthday Party',
	guestList: ['Arfiz', 'Farez', 'Putul'],
	printGuestList() {
		console.log('Guest list for ' + this.name);

		this.guestList.forEach((guest) => {
			console.log(guest + ' is attending ' + this.name);
		});
	},
};

event.printGuestList();
