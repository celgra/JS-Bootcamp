let restaurant = {
    name: 'RGV',
    guestCap: 75,
    guestCount: 0,
    checkAvail: function(partySize) {
        let seatsLeft = this.guestCap - this.guestCount
        return partySize <= seatsLeft
    }
}
//seatParty
let seatParty = function(partySize) {
    
}

//removeParty
restaurant.seatParty(72)
console.log(restaurant.checkAvail(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvail(4))
