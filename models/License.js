// import mongoose from 'mongoose';


// const licenseSchema = new mongoose.Schema({
// licenseNumberIssued: String,        // كان: issuedFrom
// licenseNumber: String,
// certificateNnumber: String,         // كان: certificateNumber
// licenseIssueDate: String,           // كان: issueDate
// licenseExpirationDate: String,      // كان: expiryDate
// licenseType: String,
// buildingType: String,
// buildingCount: String,
// isDivided: String,
// mainBuildingType: String,           // كان: mainConstructionType
// secondaryBuildingType: String,      // كان: subConstructionType
// totalBuildingArea: String,          // كان: totalBuildArea
// totalLandArea: String,
// buildingDescription: String,
// isVisible: { type: Boolean, default: true },

// owners: [
//   {
//     ownerName: String,
//     ownerIdNumber: String,
//     idNumberType: String,
//   }
// ],

// ownerShip:[
//   {
//     documentNumber:String,
//     documentType:String,
//     documentDate:String,
//   }
// ],

// bordersData:[
//   {
// name1:String,
// name2:String,
// name3:String,
// name4:String,
//   }
// ],


// bordersData1:[
//   {
// name1:String,
// name2:String,
// name3:String,
// name4:String,
//   }
// ],

// bordersData2:[
//   {
// name1:String,
// name2:String,
// name3:String,
// name4:String,
//   }
// ],

// bordersData3:[
//   {
// name1:String,
// name2:String,
// name3:String,
// name4:String,
//   }
// ],
// buildingComponents:[{
//   buildComponent:String,
//   floorArea:String,
//   numberOfFloors:String,
//   numberOfUnits:String,
//   componentUsage:String,
// }]
// ,

// cadastralReport: [{
//   cadastralReportNumber: String,
//   cadastralReportDate: String,
// }],

// usedLandGeneral:String,

// geoLocation: [{
//   surveyReportData:String,
//   municipality: String,
//   district: String,
//   planNumber: String
// }]
// ,

// midpointCoordinates:[ {
//   midpointEasternCoordinate:String,
//   midpointNorthernCoordinate: String,
// }]
// ,

// coordinates: [
//   {
//     coordinateNumber: String,
//     easternCoordinate: String,
//     northernCoordinate: String,
//   }
// ],

// contractingData:[
//   {
//     officeEngineer:String,
//     officeEngineerSup:String
//   }
// ],

// thermalInsulation: [
//   {
//     glassType: String,
//     glassTypeValue: String,
//     roofType: String,
//     roofTypeValue: String,
//     wallType: String,
//     wallTypeValue: String
//   }
// ]
// ,
// landData:[
//   {
//     landNumber:String,
//     usedLand:String,
//     landArea:String,
//   }
// ],




// }, { timestamps: true });

// export default mongoose.model('License', licenseSchema);
















import mongoose from 'mongoose';

const licenseSchema = new mongoose.Schema({
  licenseNumberIssued: String,
  licenseNumber: String,
  certificateNnumber: String,
  licenseIssueDate: String,
  licenseExpirationDate: String,
  licenseType: String,
  buildingType: String,
  buildingCount: String,
  isDivided: String,
  mainBuildingType: String,
  secondaryBuildingType: String,
  totalBuildingArea: String,
  totalLandArea: String,
  buildingDescription: String,
  isVisible: { type: Boolean, default: true },

  owners: {
    type: [
      {
        ownerName: { type: String, default: "" },
        ownerIdNumber: { type: String, default: "" },
        idNumberType: { type: String, default: "" },
      }
    ],
    default: []
  },

  ownerShip: {
    type: [
      {
        documentNumber: { type: String, default: "" },
        documentType: { type: String, default: "" },
        documentDate: { type: String, default: "" },
      }
    ],
    default: []
  },

  bordersData: { type: [{ name1: String, name2: String, name3: String, name4: String }], default: [] },
  bordersData1: { type: [{ name1: String, name2: String, name3: String, name4: String }], default: [] },
  bordersData2: { type: [{ name1: String, name2: String, name3: String, name4: String }], default: [] },
  bordersData3: { type: [{ name1: String, name2: String, name3: String, name4: String }], default: [] },

  buildingComponents: {
    type: [
      {
        buildComponent: { type: String, default: "" },
        floorArea: { type: String, default: "" },
        numberOfFloors: { type: String, default: "" },
        numberOfUnits: { type: String, default: "" },
        componentUsage: { type: String, default: "" },
      }
    ],
    default: []
  },

  cadastralReport: { type: [{ cadastralReportNumber: String, cadastralReportDate: String }], default: [] },

  usedLandGeneral: String,

  geoLocation: {
    type: [
      {
        surveyReportData: String,
        municipality: String,
        district: String,
        planNumber: String
      }
    ],
    default: []
  },

  midpointCoordinates: {
    type: [{ midpointEasternCoordinate: String, midpointNorthernCoordinate: String }],
    default: []
  },

  coordinates: {
    type: [{ coordinateNumber: String, easternCoordinate: String, northernCoordinate: String }],
    default: []
  },

  contractingData: { type: [{ officeEngineer: String, officeEngineerSup: String }], default: [] },

  thermalInsulation: {
    type: [
      {
        glassType: String,
        glassTypeValue: String,
        roofType: String,
        roofTypeValue: String,
        wallType: String,
        wallTypeValue: String
      }
    ],
    default: []
  },

  landData: {
    type: [{ landNumber: String, usedLand: String, landArea: String }],
    default: []
  }

}, { timestamps: true });

export default mongoose.model('License', licenseSchema);
