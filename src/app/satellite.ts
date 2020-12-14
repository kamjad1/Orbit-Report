export class Satellite { 
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, orbitType: string, type: string, operational: boolean, launchDate: string) {
        //constructor(name, orbitType, type, operational, launchDate) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }

    shouldShowWarning(): boolean {
       return this.type === "Space Debris";

    }
}

