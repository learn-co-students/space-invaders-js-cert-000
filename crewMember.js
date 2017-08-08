class CrewMember {
  constructor(position) {
    this.position = position;
	//Mit der Erzeugung ist ein Crew-Mitglied noch keinem Raumschiff zugeordnet
	CrewMember.prototype.currentShip ="Looking for a Rig";
	 }






/*Diese Funktionen sollen nur dann den Prototypen vom Raumschiff verändern, wenn ein
Crew-Mitglied in seinem Prototyp ein Raumschiff hat, er also nicht nach einem Ausschau hält
this.currentShip != "Looking for a Rig", das Raumschiff trägt sich in jeden Crew-Prototypen
bei seiner Erzeugung ein
 */
 /*Diese Funktion kann nur von einem Member in der Position Pilot aktiviert werden:
Die Funktion soll den Prototyp von spaceship so beeinflussen, dass er auf "engaged" gesetzt wird */

 engageWarpDrive() {
	if ((this.position === "Pilot")&&(this.currentShip != "Looking for a Rig")){
	Spaceship.prototype.warpDrive =	"engaged!"}
	else
	{ return("had no effect");
	}
  }

  setsInvisibility()  {
	if ((this.position === "Defender")&&(this.currentShip != "Looking for a Rig")){
	Spaceship.prototype.cloaked =	true}
	else	{
    return("had no effect");
  }
  }

  chargePhasers() {
	if ((this.position === "Gunner")&&(this.currentShip != "Looking for a Rig")){
	Spaceship.prototype.phasersCharge =	"charged!"}
	else	{
    return("had no effect");
  }
}
}
