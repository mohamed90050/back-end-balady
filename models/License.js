import mongoose from 'mongoose';


const licenseSchema = new mongoose.Schema({
licenseNumberIssued: String,        // كان: issuedFrom
licenseNumber: String,
certificateNnumber: String,         // كان: certificateNumber
licenseIssueDate: String,           // كان: issueDate
licenseExpirationDate: String,      // كان: expiryDate
licenseType: String,
buildingType: String,
buildingCount: String,
isDivided: String,
mainBuildingType: String,           // كان: mainConstructionType
secondaryBuildingType: String,      // كان: subConstructionType
totalBuildingArea: String,          // كان: totalBuildArea
totalLandArea: String,
buildingDescription: String,
isVisible: { type: Boolean, default: true },

owners: [
  {
    ownerName: String,
    ownerIdNumber: String,
    idNumberType: String,
  }
],

ownerShip:[
  {
    documentNumber:String,
    documentType:String,
    documentDate:String,
  }
],

bordersData:[
  {
name1:String,
name2:String,
name3:String,
name4:String,
  }
],


bordersData1:[
  {
name1:String,
name2:String,
name3:String,
name4:String,
  }
],

bordersData2:[
  {
name1:String,
name2:String,
name3:String,
name4:String,
  }
],

bordersData3:[
  {
name1:String,
name2:String,
name3:String,
name4:String,
  }
],
buildingComponents:[{
  buildComponent:String,
  floorArea:String,
  numberOfFloors:String,
  numberOfUnits:String,
  componentUsage:String,
}]
,

cadastralReport: [{
  cadastralReportNumber: String,
  cadastralReportDate: String,
}],

usedLandGeneral:String,

geoLocation: [{
  surveyReportData:String,
  municipality: String,
  district: String,
  planNumber: String
}]
,

midpointCoordinates:[ {
  midpointEasternCoordinate:String,
  midpointNorthernCoordinate: String,
}]
,

coordinates: [
  {
    coordinateNumber: String,
    easternCoordinate: String,
    northernCoordinate: String,
  }
],

contractingData:[
  {
    officeEngineer:String,
    officeEngineerSup:String
  }
],

thermalInsulation: [
  {
    glassType: String,
    glassTypeValue: String,
    roofType: String,
    roofTypeValue: String,
    wallType: String,
    wallTypeValue: String
  }
]
,
landData:[
  {
    landNumber:String,
    usedLand:String,
    landArea:String,
  }
],




}, { timestamps: true });

export default mongoose.model('License', licenseSchema);
