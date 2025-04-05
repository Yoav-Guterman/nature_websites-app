// This will run when MongoDB starts
db = db.getSiblingDB('natureWebsites');

// Create collections
db.createCollection('regions');
db.createCollection('websites');

// First, insert 5 regions
db.regions.insertMany([
    { name: "North" },
    { name: "South" },
    { name: "Central" },
    { name: "Coast" },
    { name: "Mountain" }
]);

// Store the inserted region IDs in variables for reference
var regionIds = db.regions.find().toArray().map(region => region._id);

// Now insert websites that reference those regions
db.websites.insertMany([
    {
        name: "Sea of Galilee Tours",
        description: "Boat tours on the historic sea",
        regionId: regionIds[0].toString(),
        region: regionIds[0],
        adultPrice: 60,
        childPrice: 30
    },
    {
        name: "Eilat Coral Beach",
        description: "Snorkeling in pristine waters",
        regionId: regionIds[1].toString(),
        region: regionIds[1],
        adultPrice: 65,
        childPrice: 40
    },
    {
        name: "Jerusalem Old City",
        description: "Historical tours of ancient sites",
        regionId: regionIds[2].toString(),
        region: regionIds[2],
        adultPrice: 50,
        childPrice: 25
    },
    {
        name: "Tel Aviv Museum",
        description: "Modern art and cultural exhibits",
        regionId: regionIds[2].toString(),
        region: regionIds[2],
        adultPrice: 40,
        childPrice: 15
    },
    {
        name: "Haifa Port Tour",
        description: "Exploring the historic coastal city",
        regionId: regionIds[3].toString(),
        region: regionIds[3],
        adultPrice: 55,
        childPrice: 25
    },
    {
        name: "Mount Hermon Ski Resort",
        description: "Winter sports and mountain views",
        regionId: regionIds[4].toString(),
        region: regionIds[4],
        adultPrice: 95,
        childPrice: 55
    },
    {
        name: "Golan Heights Winery",
        description: "Wine tasting tours in the mountains",
        regionId: regionIds[4].toString(),
        region: regionIds[4],
        adultPrice: 70,
        childPrice: 0
    },
    {
        name: "cool north trip!",
        description: "cool north trip!!!",
        regionId: regionIds[0].toString(),
        region: regionIds[0],
        adultPrice: 10,
        childPrice: 5
    },
    {
        name: "cool north trip2!",
        description: "cool north trip2!!!",
        regionId: regionIds[0].toString(),
        region: regionIds[0],
        adultPrice: 10,
        childPrice: 5
    }
]);