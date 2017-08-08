class Spaceship {
	constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
	this.phasers = phasers;
	this.shields = shields;
	
	// kann nur von einem Pilot mit der Funktion WarpDrive geändert werden
	Spaceship.prototype.warpDrive = "disengaged";
	// das Raumschiff trägt sich in jeden Crew-Prototypen (dort ist .currentShip) bei seiner Erzeugung ein
	crew.forEach(e => {e.currentShip = this});
	// kann nur von einem Defender mit der Funktion setsInvisibility geändert werden
	Spaceship.prototype.cloaked = false;
	//Wenn das Raumschiff keine Crew hat, bleibt es angedockt
	if (crew.length === 0) {
	Spaceship.prototype.docked = true
	}
	else{
	Spaceship.prototype.docked = false	
	}
	// kann nur von einem Gunner mit der Funktion ChargePhasers geändert werden
	Spaceship.prototype.phasersCharge = "uncharged"
	}
}

	