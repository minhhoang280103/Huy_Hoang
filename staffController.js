"use strict";
const Staff = require("../models/staff").Staff;
function StaffController() {
    const SELF={};
    return{
        getList: (req, res)=>
        {
            try{
                return Staff.find()
                .then((rs)=>{
                    res.render("pages/index",{
                        staffs:rs,
                        urlUploaded:null,
                    });
                })
                .catch((error) =>{
                    res.json({s:400, msg:error});
                });
            }catch(error){
                console.log(error);
            }
        },
        addStaff: (req, res) => {
        try {
            let data = req.body;
            console.log(data);
            return Staff.create(data)
            .then((rs) => {
                return res.redirect("/staff/list");
            })
            .catch((err) => {
                res.send({ s: 400, msg: err });
            });
        } catch (error) {
            console.log(error);
        }
        },
        getStaffDetail: async (req, res) => {
        try {
            let staffId = req.params?.id;
            let staffInfo = await Staff.findById(staffId);
            if (!staffInfo) {
            return res.json({ s: 404, msg: "Staff not found" });
            }
            return res.json({ s: 200, data: staffInfo });
        } catch (error) {
            console.log(error);
        }
        },
        editStaff: async (req, res) => {
        try {
            let data = req.body;
            let staffInfo = await Staff.findById(data?._id);//check id xem nó có tồn tại hay k bằng findByid
            if (!staffInfo) {
            return res.json({ s: 404, msg: "Staff not found" });
            }
            delete data._id;
            return Staff.findByIdAndUpdate(staffInfo._id, data)
            .then((rs) => {
                if (rs) {
                res.redirect("/staff/list");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        } catch (error) {
            console.log(error);
        }
        },
    }
    }


module.exports = new StaffController();