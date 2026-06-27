const mongoose = require('mongoose')

const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical Questions is required"]
    },
    intention:{
        type:String,
        required:[true,"Intention is required"]
    },
    answer:{
        type:String,
        required:[true,"Answers is required"]
    }
},
{
    _id:false
})
const behavioralQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical Questions is required"]
    },
    intention:{
        type:String,
        required:[true,"Intention is required"]
    },
    answer:{
        type:String,
        required:[true,"Answers is required"]
    }
},
{
    _id:false
})

const skillGapSchema = new mongoose.Schema({
    skill:{
        type:String,
        required:[true,"Skills is required"]
    },
    severity:{
        type:String,
        enum:["low","medium","high"],
        required:[true,"Severity is Required"]
    }
},{
    _id:false
})
const perparationPlanSchema = new mongoose.Schema({
    day:{
        type:Number,
        required:[true,"Day is required"]
    },
    focus:{
        type:String,
        required:[true,"Focus is Required"]
    },
    tasks:[{
        type:String,
        required:[true,"task is required"]
    }]
},{
    _id:false
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
        type:String,
        required:[true,"Job Description is required"]
    },
    resume:{
        type:String
    },
    selfDescription:{
        type:String
    },
     title: {                    // <-- Add it here
        type: String
    },
    matchScore:{
        type:Number,
        min:0,
        max:100
    },
    technicalQuestions:[technicalQuestionSchema],
    behavioralQuestions:[behavioralQuestionSchema],
    skillGaps:[skillGapSchema],
    preparationPlan:[perparationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title: {
        type: String,
        required: [ true, "Job title is required" ]
    }
},{
    timestamps:true
})

const interviewReportModel = mongoose.model("InterviewReport",interviewReportSchema);

module.exports = interviewReportModel;