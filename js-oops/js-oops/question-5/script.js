// Q5: Ride-Sharing Application (Classes + Error Handling)

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating); // Inherit name and rating from User.
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null || this.distance === "") {
      throw new Error("Distance was not provided. Please enter the trip distance.");
    }

    if (typeof this.distance !== "number" || Number.isNaN(this.distance)) {
      throw new Error("Distance must be a valid number.");
    }

    if (this.distance < 0) {
      throw new Error("Distance cannot be negative.");
    }

    const ratePerKm = 12;
    const baseFare = 30;
    return baseFare + (this.distance * ratePerKm);
  }
}

const driver = new Driver("Neha", 4.8, " sedan");
const output = document.getElementById("output");

function showTrip(trip) {
  try {
    const fare = trip.calculateFare();
    const message = `${trip.fromLocation} to ${trip.toLocation} | Distance: ${trip.distance} km | Fare: ₹${fare} | Driver: ${driver.name} (${driver.vehicle.trim()})`;
    console.log(message);

    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
  } catch (error) {
    console.error(error.message);

    const paragraph = document.createElement("p");
    paragraph.textContent = `Error: ${error.message}`;
    output.appendChild(paragraph);
  }
}

// Valid trip, negative-distance trip, and missing-distance trip.
showTrip(new Trip("Mathura", "Agra", 60));
showTrip(new Trip("Mathura", "Delhi", -10));
showTrip(new Trip("Mathura", "Vrindavan", undefined));
