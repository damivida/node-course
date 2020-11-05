const event = {
    name: 'Spot Party',
    guestLists: ['Tuvok', 'Paris', 'Kim'],
    printGuestlist() {
        console.log('Guest list for: ' + this.name);
        
        this.guestLists.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestlist();
