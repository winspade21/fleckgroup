import civilImg from "../../assets/images/civil-dozer.jpg";
import earthmovingImg from "../../assets/images/earthmoving.jpg";
import demolitionImg from "../../assets/images/demolition.jpeg";
import haulageImg from "../../assets/images/haulage-smalldigger.jpg";
import transportImg from "../../assets/images/transport.jpg";
// import positrackImg from "../../assets/images/positrack.jpg";
// import moxieImg from "../../assets/images/moxie.jpg";
// import rollerImg from "../../assets/images/roller.jpg";
// import serviceImg from "../../assets/images/service-vehicle.jpg";
// import graderImg from "../../assets/images/grader.jpg";


export const fleetCategories = [
  {
    id: 1,
    title: "Dozers",
    image: civilImg,
    equipment: [
      { name: "Civil Dozer", description: "Heavy-duty dozer for roadworks and site prep.", image: civilImg },
      { name: "Demolition Rig", description: "Specialised machinery for industrial demolition.", image: demolitionImg },
    ],
  },
  {
    id: 2,
    title: "Excavators",
    image: earthmovingImg,
    equipment: [
      { name: "Excavator", description: "Versatile machine for bulk excavation and earthworks.", image: earthmovingImg },
    ],
  },
  {
    id: 3,
    title: "Posi Tracks",
    // image: positrackImg,
    equipment: [
      { name: "Tracked Loader", 
        description: "Compact loader with tracks for rough terrain.", 
        //image: positrackImg 
      },
    ],
  },
  {
    id: 4,
    title: "Moxies & Site Dumpers",
    // image: moxieImg,
    equipment: [
      { name: "Site Dumper", 
        description: "Transport materials around tight sites.", 
        //image: moxieImg 
      },
    ],
  },
  {
    id: 5,
    title: "Trucks & Transport",
    image: haulageImg,
    equipment: [
      { name: "Haulage Truck", description: "Reliable transport for aggregates and materials.", image: haulageImg },
      { name: "Heavy Transport Vehicle", description: "Oversized equipment transport.", image: transportImg },
    ],
  },
  {
    id: 6,
    title: "Rollers & Compaction",
    // image: rollerImg,
    equipment: [
      { name: "Road Roller", 
        description: "Heavy roller for asphalt and soil compaction.", 
        //image: rollerImg
      },
    ],
  },
  {
    id: 7,
    title: "Service Vehicles",
    // image: serviceImg,
    equipment: [
      { name: "Service Truck", 
        description: "Maintenance and support for fleet operations.", 
        //image: serviceImg 
        
      },
    ],
  },
  {
    id: 8,
    title: "Graders",
    // image: graderImg,
    equipment: [
      { name: "Grader", 
        description: "Precision grading for roads and surfaces.", 
        //image: graderImg 
      },
    ],
  },
];