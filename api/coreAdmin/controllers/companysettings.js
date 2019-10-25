const mongoose  = require("mongoose");

const Companysettings = require('../models/companysettings');

exports.create_companysettings = (req,res,next)=>{
    Companysettings.find()
                    .exec()
                    .then(data =>{
                        var companyId = 1;
                        const companysettings = new Companysettings({
                                _id             : new mongoose.Types.ObjectId(),
                                companyId              : companyId,
                                companyName            : req.body.companyName,
                                companyContactNumber   : req.body.companyContactNumber,
                                companyMobileNumber    : req.body.companyMobileNumber,
                                companyEmail           : req.body.companyEmail,
                                // companyAltEmail        : req.body.companyAltEmail,
                                companywebsite         : req.body.companywebsite,
                                companyaddress         : req.body.companyaddress,
                                city                   : req.body.city, 
                                country                : req.body.country,
                                state                  : req.body.state,
                                district               : req.body.district,
                                pincode                : req.body.pincode,
                                taluka                 : req.body.taluka,
                                logoFilename           : req.body.logoFilename,
                                companyUniqueID        : req.body.companyUniqueID,
                                companyLogo            : req.body.companyLogo,
                                
                        });
                        companysettings.save()
                                        .then(data=>{
                                            res.status(200).json("CompanySetting Added");
                                        })
                                        .catch(err =>{
                                            console.log(err);
                                            res.status(500).json({
                                                error: err
                                            });
                                        });
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
};

exports.detail_companysettings = (req,res,next)=>{
    Companysettings.findOne({companyId:req.params.companysettingsID})
        .exec()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json('Company Details not found');
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.list_companysettings = (req,res,next)=>{
    Companysettings.find({})
        .exec()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json('Company Details not found');
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
exports.update_companysettings_taxSettings = (req,res,next)=>{
    Companysettings.updateOne(
        {  companyId : req.body.companyId},
        {
            $set:{
                taxSettings : {
                taxType         : req.body.taxType,
                taxRating       : req.body.taxRating,
                effectiveFrom   : req.body.effectiveFrom,
                createdAt       : new Date(),
                },
            }
        }
        )
        .exec()
        .then(data=>{
            if(data.nModified == 1){
                res.status(200).json("Company Tax Details added");
            }else{
                res.status(404).json("Company Tax Not found");
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

}

exports.update_companysettinginfo = (req,res,next)=>{
    // var roleData = req.body.role;
    Companysettings.updateOne(

        { companyId : req.body.companyId},    
            {
                $set:{

                    "companyName"            : req.body.companyName,
                    "companyContactNumber"   : req.body.companyContactNumber,
                    "companyMobileNumber"    : req.body.companyMobileNumber,
                    "companyEmail"           : req.body.companyEmail,
                    "companyAltEmail"        : req.body.companyAltEmail,
                    "companywebsite"         : req.body.companywebsite,
                    "companyaddress"         : req.body.companyaddress,
                    "city"                   : req.body.city, 
                    "country"                : req.body.country,
                    "state"                  : req.body.state,
                    "district"               : req.body.district,
                    "pincode"                : req.body.pincode,
                    "taluka"                 : req.body.taluka,
                
                }
            }
        )
        .exec()
        .then(data=>{
            if(data.nModified == 1){
                res.status(200).json("Company Setting Updated");
            }else{
                res.status(401).json("Company Setting Not Found");
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
// exports.update_companysettings_info = (req,res,next)=>{
//     Companysettings.updateOne(
//         {  companyId : req.body.companyId},
//         {
//             $push:{
                
//                     "companyName"            : req.body.companyName,
//                     "companyContactNumber"   : req.body.companyContactNumber,
//                     "companyMobileNumber"    : req.body.companyMobileNumber,
//                     "companyEmail"           : req.body.companyEmail,
//                     "companyAltEmail"        : req.body.companyAltEmail,
//                     "companywebsite"         : req.body.companywebsite,
//                     "companyaddress"         : req.body.companyaddress,
//                     "city"                   : req.body.city, 
//                     "country"                : req.body.country,
//                     "state"                  : req.body.state,
//                     "district"               : req.body.district,
//                     "pincode"                : req.body.pincode,
//                     "taluka"                 : req.body.taluka,
                
//             }
//         }
//         )
//         .exec()
//         .then(data=>{
//             if(data.nModified == 1){
//                 res.status(200).json("Company info Details added");
//             }else{
//                 res.status(404).json("Company info Not found");
//             }
//         })
//         .catch(err =>{
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });

// }
exports.update_companysettings_companyLocationsInfo = (req,res,next)=>{
    // var roleData = req.body.role;
    Companysettings.updateOne(
        {  companyId : req.body.companyId},
        {
            $set:{
                companyLocationsInfo         :   {
                    Location        : req.body.Location,
                    contactnumber   : req.body.contactnumber,
                    blockname       : req.body.blockname,
                    landmark        : req.body.landmark,
                    companyDistrict : req.body.companyDistrict,
                    companyPincode  : req.body.companyPincode,
                    companyCity     : req.body.companyCity,
                    companyState    : req.body.companyState,
                    companyCountry  : req.body.companyCountry,
                    companytaluka   : req.body.companytaluka,
                                              
                                               
                                                
                },
            }
        }
        )
        .exec()
        .then(data=>{
            if(data.nModified == 1){
                res.status(200).json("Company Locations Details added");
            }else{
                res.status(404).json("Company Locations Not found");
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

// exports.update_companysettings = (req,res,next)=>{
//     var info = req.params.info;
//     var action = req.params.action;
//     switch(action){
//         case 'add' :
//             switch(info){
//                 case 'location':
//                      Companysettings.updateOne(

//                         { companyId : req.body.companyId},  
//                         {
//                             $push:{
//                                 companyLocationsInfo : {
//                                     Location        : req.body.Location,
//                                     contactnumber   : req.body.contactnumber,
//                                     blockname       : req.body.blockname,
//                                     landmark        : req.body.landmark,
//                                     companyDistrict : req.body.companyDistrict,
//                                     companyPincode  : req.body.companyPincode,
//                                     companyCity     : req.body.companyCity,
//                                     companyState    : req.body.companyState,
//                                     companyCountry  : req.body.companyCountry,
//                                     companytaluka   : req.body.companytaluka,
//                                 }
//                             }
//                         }
//                     )
//                     .exec()
//                     .then(data=>{
//                         if(data.nModified == 1){
//                             res.status(200).json("Company Locations Details added");
//                         }else{
//                             res.status(404).json("Company Locations Not found");
//                         }
//                     })
//                     .catch(err =>{
//                         console.log(err);
//                         res.status(500).json({
//                             error: err
//                         });
//                     });  
//                     break;              
//                 case 'tax' :
//                     Companysettings.updateOne(
//                         { companyId : req.body.companyId},  
//                         {
//                             $push:{
//                                 taxSettings : {
//                                     taxType         : req.body.taxType,
//                                     taxRating       : req.body.taxRating,
//                                     effectiveFrom   : req.body.effectiveFrom,
//                                     createdAt       : new Date(),
//                                 }
//                             }
//                         }
//                     )
//                     .exec()
//                     .then(data=>{
//                         if(data.nModified == 1){
//                             res.status(200).json("Company Tax Details added");
//                         }else{
//                             res.status(404).json("Company Tax Not found");
//                         }
//                     })
//                     .catch(err =>{
//                         console.log(err);
//                         res.status(500).json({
//                             error: err
//                         });
//                     });  
//                     break;
//                 case 'bank' :
//                     Companysettings.updateOne(

//                         { companyId : req.body.companyId},  
//                         {
//                             $push:{
//                                 bankDetails : {
//                                     accHolderName : req.body.accHolderName,
//                                     accNickName   : req.body.accNickName,
//                                     bankName      : req.body.bankName,
//                                     branchName    : req.body.branchName,
//                                     accType       : req.body.accType,
//                                     accNumber     : req.body.accNumber,
//                                     ifscCode      : req.body.ifscCode,
//                                 }
//                             }
//                         }
//                     )
//                     .exec()
//                     .then(data=>{
//                         if(data.nModified == 1){
//                             res.status(200).json("Company Bank Details added");
//                         }else{
//                             res.status(404).json("Company Bank Not found");
//                         }
//                     })
//                     .catch(err =>{
//                         console.log(err);
//                         res.status(500).json({
//                             error: err
//                         });
//                     });  
//                     break;
//                 default :
//                     res.status(404).json('This Information is not captured yet.')
//             };
//             break;
//         case 'remove' :
//             switch(info){
//                 case 'location':
//                     Companysettings.updateOne(
//                                         { companyId : req.body.companyID},  
//                                         {
//                                             $pull:{
//                                                 companyLocationsInfo : {
//                                                     _id        : req.body.locationID,
//                                                 }
//                                             }
//                                         }
//                                     )
//                                     .exec()
//                                     .then(data=>{
//                                         if(data.nModified == 1){
//                                             res.status(200).json("Company Location removed");
//                                         }else{
//                                             res.status(404).json("Company Location Not found");
//                                         }
//                                     })
//                                     .catch(err =>{
//                                         console.log(err);
//                                         res.status(500).json({
//                                             error: err
//                                         });
//                                     });  
//                     break;
//                 case 'tax' :
//                     Companysettings.updateOne(
//                                         { companyId : req.body.companyID},  
//                                         {
//                                             $pull:{
//                                                 taxSettings : {
//                                                     _id        : req.body.taxID,
//                                                 }
//                                             }
//                                         }
//                                     )
//                                     .exec()
//                                     .then(data=>{
//                                         if(data.nModified == 1){
//                                             res.status(200).json("Company Tax Settings removed");
//                                         }else{
//                                             res.status(404).json("Company Not found");
//                                         }
//                                     })
//                                     .catch(err =>{
//                                         console.log(err);
//                                         res.status(500).json({
//                                             error: err
//                                         });
//                                     });  
//                     break;
//                 case 'bank' 
//                     Companysettings.updateOne(
//                                         { companyId : req.body.companyID},  
//                                         {
//                                             $pull:{
//                                                 bankDetails : {
//                                                     _id        : req.body.bankID,
//                                                 }
//                                             }
//                                         }
//                                     )
//                                     .exec()
//                                     .then(data=>{
//                                         if(data.nModified == 1){
//                                             res.status(200).json("Company Bank Details removed");
//                                         }else{
//                                             res.status(404).json("Company Not found");
//                                         }
//                                     })
//                                     .catch(err =>{
//                                         console.log(err);
//                                         res.status(500).json({
//                                             error: err
//                                         });
//                                     });  
//                     break;
//                 default :
//                     res.status(404).json('This Information is not captured yet.')
//             };
//             break;
//         case 'edit' :
//             switch(info){
//                 case 'location':
//                     Companysettings.updateOne(
//                         { "companyId" : req.body.companyId, "companyLocationsInfo._id":req.body.locationID},  
//                         {
//                             $set:{
//                                 "companyLocationsInfo.$.location"          : req.body.location,
//                                 "companyLocationsInfo.$.companyAddress"    : req.body.companyAddress,
//                                 "companyLocationsInfo.$.companyPincode"    : req.body.companyPincode,
//                                 "companyLocationsInfo.$.companyCity"       : req.body.companyCity,
//                                 "companyLocationsInfo.$.companyState"      : req.body.companyState,
//                                 "companyLocationsInfo.$.companyCountry"    : req.body.companyCountry,  
                                
//                             }
//                         }
//                     )
//                     // Companysettings.updateOne(
//                     //                     { "companyId" : req.body.companyID, "companyLocationsInfo._id":req.body.locationID},  
//                     //                     {
//                     //                         $set:{
//                     //                             "companyLocationsInfo.$.location"          : req.body.location,
//                     //                             "companyLocationsInfo.$.companyAddress"    : req.body.companyAddress,
//                     //                             "companyLocationsInfo.$.companyPincode"    : req.body.companyPincode,
//                     //                             "companyLocationsInfo.$.companyCity"       : req.body.companyCity,
//                     //                             "companyLocationsInfo.$.companyState"      : req.body.companyState,
//                     //                             "companyLocationsInfo.$.companyCountry"    : req.body.companyCountry,                                                
//                     //                         }
//                     //                     }
//                     //                 )
//                                     .exec()
//                                     .then(data=>{
//                                         if(data.nModified == 1){
//                                             res.status(200).json("Company Location updated");
//                                         }else{
//                                             res.status(404).json("Company Location Not found");
//                                         }
//                                     })
//                                     .catch(err =>{
//                                         console.log(err);
//                                         res.status(500).json({
//                                             error: err
//                                         });
//                                     });  
//                     break;
//                 case 'tax' :
//                     Companysettings.updateOne(
//                                         { "companyId" : req.body.companyID, "taxSettings._id":req.body.taxID},  
//                                         {
//                                             $set:{
//                                                 "taxSettings.$.taxType"          : req.body.taxType,
//                                                 "taxSettings.$.taxRating"        : req.body.taxRating,
//                                                 "taxSettings.$.effectiveFrom"    : req.body.effectiveFrom,
//                                                 // "taxSettings.$.effectiveTo"      : req.body.effectiveTo
//                                             }
//                                         }
//                                     )
//                                     .exec()
//                                     .then(data=>{
//                                         if(data.nModified == 1){
//                                             res.status(200).json("Company Tax updated");
//                                         }else{
//                                             res.status(404).json("Company Tax Not found");
//                                         }
//                                     })
//                                     .catch(err =>{
//                                         console.log(err);
//                                         res.status(500).json({
//                                             error: err
//                                         });
//                                     });  
//                     break;
//                 case 'bank' :
//                     Companysettings.updateOne(
//                                         { "companyId" : req.body.companyID, "bankDetails._id":req.body.bankID},  
//                                         {
//                                             $set:{
//                                                 "bankDetails.$.accHolderName" : req.body.accHolderName,
//                                                 "bankDetails.$.bankName"      : req.body.bankName,
//                                                 "bankDetails.$.branchName"    : req.body.branchName,
//                                                 "bankDetails.$.accNumber"     : req.body.accNumber,
//                                                 "bankDetails.$.ifscCode"      : req.body.ifscCode,
//                                             }
//                                         }
//                                     )
//                                     .exec()
//                                     .then(data=>{
//                                         if(data.nModified == 1){
//                                             res.status(200).json("Company Bank Details updated");
//                                         }else{
//                                             res.status(404).json("Company Bank Not found");
//                                         }
//                                     })
//                                     .catch(err =>{
//                                         console.log(err);
//                                         res.status(500).json({
//                                             error: err
//                                         });
//                                     });  
//                     break;
//                 default :
//                     res.status(404).json('This Information is not captured yet.')
//             };
//         break;
//         default :
//             res.status(404).json('Action Not found');
//             break;
//     }
// }

// exports.update_companysettinginfo = (req,res,next)=>{
//     // var roleData = req.body.role;
//     Companysettings.updateOne(
//         { companyId : req.body.companyId},    
//             {
//                 $set:{
           
//                     "companyName"            : req.body.companyName,
//                     "companyContactNumber"   : req.body.companyContactNumber,
//                     "companyMobileNumber"    : req.body.companyMobileNumber,
//                     "companyEmail"           : req.body.companyEmail,
//                     "companyAltEmail"        : req.body.companyAltEmail,
//                     "companywebsite"         : req.body.companywebsite,
//                     "companyaddress"         : req.body.companyaddress,
//                     "city"                   : req.body.city, 
//                     "country"                : req.body.country,
//                     "state"                  : req.body.state,
//                     "district"               : req.body.district,
//                     "pincode"                : req.body.pincode,
//                     "taluka"                 : req.body.taluka,
                
//                 }
//             }
//         )
//         .exec()
//         .then(data=>{
//             if(data.nModified == 1){
//                 res.status(200).json("Company Setting Updated");
//             }else{
//                 res.status(401).json("Company Setting Not Found");
//             }
//         })
//         .catch(err =>{
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// }


exports.delete_companysettings = (req,res,next)=>{
    Companysettings.deleteOne({_id:req.params.companysettingsID})
        .exec()
        .then(data=>{
            res.status(200).json("Company Settings deleted");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
