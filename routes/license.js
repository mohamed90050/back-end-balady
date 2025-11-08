// import express from 'express';
// import License from '../models/License.js';
// const router = express.Router();

// // Helper function to filter license fields
// const filterLicenseFields = (license) => {
//   return {
//     _id: license._id,
//     licenseNumberIssued: license.licenseNumberIssued,
//     licenseNumber: license.licenseNumber,
//     certificateNnumber: license.certificateNnumber,
//     licenseIssueDate: license.licenseIssueDate,
//     licenseExpirationDate: license.licenseExpirationDate,
//     licenseType: license.licenseType,
//     buildingType: license.buildingType,
//     buildingComponents:license.buildingComponents,
//     buildingCount: license.buildingCount,
//     isDivided: license.isDivided,
//     mainBuildingType: license.mainBuildingType,
//     secondaryBuildingType: license.secondaryBuildingType,
//     totalBuildingArea: license.totalBuildingArea,
//     totalLandArea: license.totalLandArea,
//     buildingDescription: license.buildingDescription,
//     isVisible: license.isVisible,
//     owners: license.owners,
//     ownerShip:license.ownerShip,

//     bordersData:license.bordersData,
//     bordersData1:license.bordersData1,
//     bordersData2:license.bordersData2,
//     bordersData3:license.bordersData3,

//     cadastralReport:license.cadastralReport,
//     usedLandGeneral:license.usedLandGeneral,
//     landData:license.landData,
//     geoLocation:license.geoLocation,
//     midpointCoordinates:license.midpointCoordinates,
//     coordinates:license.coordinates,
//     contractingData:license.contractingData,
//     thermalInsulation:license.thermalInsulation,
    
//   };
// };

// router.post('/', async (req, res) => {
//   try {
//     console.log('📦 Incoming license data:', req.body); // << تحقق من البيانات
//     const license = new License(req.body);
//     await license.save();
//     res.status(201).json(filterLicenseFields(license));
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const licenses = await License.find().sort({ createdAt: -1 });
//     const filtered = licenses.map(filterLicenseFields);
//     res.json(filtered);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const license = await License.findById(req.params.id);
//     if (!license) return res.status(404).json({ message: 'الرخصة غير موجودة' });
//     res.json(filterLicenseFields(license));
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const license = await License.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(filterLicenseFields(license));
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.patch('/:id/visibility', async (req, res) => {
//   try {
//     const license = await License.findById(req.params.id);
//     if (!license) return res.status(404).json({ message: 'الرخصة غير موجودة' });
//     license.isVisible = !license.isVisible;
//     await license.save();
//     res.json(filterLicenseFields(license));
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// export default router;



















import express from 'express';
import License from '../models/License.js';

const router = express.Router();

// ✅ Helper: فلترة الداتا اللي هترجع
const filterLicenseFields = (license) => {
  return {
    _id: license._id,
    licenseNumberIssued: license.licenseNumberIssued,
    licenseNumber: license.licenseNumber,
    certificateNnumber: license.certificateNnumber,
    licenseIssueDate: license.licenseIssueDate,
    licenseExpirationDate: license.licenseExpirationDate,
    licenseType: license.licenseType,
    buildingType: license.buildingType,
    buildingComponents: license.buildingComponents,
    buildingCount: license.buildingCount,
    isDivided: license.isDivided,
    mainBuildingType: license.mainBuildingType,
    secondaryBuildingType: license.secondaryBuildingType,
    totalBuildingArea: license.totalBuildingArea,
    totalLandArea: license.totalLandArea,
    buildingDescription: license.buildingDescription,
    isVisible: license.isVisible,
    owners: license.owners,
    ownerShip: license.ownerShip,

    bordersData: license.bordersData,
    bordersData1: license.bordersData1,
    bordersData2: license.bordersData2,
    bordersData3: license.bordersData3,

    cadastralReport: license.cadastralReport,
    usedLandGeneral: license.usedLandGeneral,
    landData: license.landData,
    geoLocation: license.geoLocation,
    midpointCoordinates: license.midpointCoordinates,
    coordinates: license.coordinates,
    contractingData: license.contractingData,
    thermalInsulation: license.thermalInsulation,
  };
};

// ✅ Helper: يتأكد إن الحاجة Array
const cleanArray = (value) => {
  return Array.isArray(value) ? value : [];
};

// ✅ POST (إضافة رخصة جديدة)
router.post('/', async (req, res) => {
  try {
    console.log('📦 Incoming license data:', JSON.stringify(req.body, null, 2));

    let data = req.body;

    // تنظيف الداتا عشان ما يوقعش السيرفر
    data.owners = cleanArray(data.owners);
    data.ownerShip = cleanArray(data.ownerShip);
    data.bordersData = cleanArray(data.bordersData);
    data.bordersData1 = cleanArray(data.bordersData1);
    data.bordersData2 = cleanArray(data.bordersData2);
    data.bordersData3 = cleanArray(data.bordersData3);
    data.buildingComponents = cleanArray(data.buildingComponents);
    data.cadastralReport = cleanArray(data.cadastralReport);
    data.geoLocation = cleanArray(data.geoLocation);
    data.midpointCoordinates = cleanArray(data.midpointCoordinates);
    data.coordinates = cleanArray(data.coordinates);
    data.contractingData = cleanArray(data.contractingData);
    data.thermalInsulation = cleanArray(data.thermalInsulation);
    data.landData = cleanArray(data.landData);

    const license = new License(data);
    await license.save();

    res.status(201).json(filterLicenseFields(license));
  } catch (err) {
    console.error("❌ Error while saving license:", err);
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET (كل الرخص)
router.get('/', async (req, res) => {
  try {
    const licenses = await License.find().sort({ createdAt: -1 });
    res.json(licenses.map(filterLicenseFields));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET (رخصة واحدة)
router.get('/:id', async (req, res) => {
  try {
    const license = await License.findById(req.params.id);
    if (!license) return res.status(404).json({ message: 'الرخصة غير موجودة' });
    res.json(filterLicenseFields(license));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ PUT (تعديل رخصة)
router.put('/:id', async (req, res) => {
  try {
    const license = await License.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(filterLicenseFields(license));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ PATCH (تغيير حالة الظهور)
router.patch('/:id/visibility', async (req, res) => {
  try {
    const license = await License.findById(req.params.id);
    if (!license) return res.status(404).json({ message: 'الرخصة غير موجودة' });
    license.isVisible = !license.isVisible;
    await license.save();
    res.json(filterLicenseFields(license));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
