import {Rover} from "./rover";

describe("Mars Rover", () => {
   test("should return the location when rover init", () => {
       const location = {x:1,y:2,direction:'N'};
       const rover = new Rover(location);
       const newLocation = rover.getLocation();
       expect(newLocation).toEqual(location);
   })
})