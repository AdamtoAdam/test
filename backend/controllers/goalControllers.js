const asyncHandler = require('express-async-handler')



//@desc    Get goals
//@route    GET /api/goals
//@access   PRIVATE
const getGoals = asyncHandler(async (req,res)=>{
    res.json({message:'get goals'})
})

//@desc     Set goals
//@route    POST /api/goals
//@access   PRIVATE
const setGoal = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'set goal'})
})

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   PRIVATE
const updateGoal = asyncHandler(async (req,res)=>{
    res.json({message:`put goal ${req.params.id}`})
})

//@desc     Delete goals
//@route    DELETE /api/goals/:id
//@access   PRIVATE
const deleteGoal = asyncHandler(async (req,res)=>{
    res.json({message:`delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
