import {asynchandler} from "../utils/Asynchandler.js"
import {Apierror} from '../utils/Apierror.js'
import {LoanOffer} from "../model/loan_offer.js"
import {Apiresponse} from "../utils/Apiresponse.js"

const createoffer = asynchandler(async(req,res) =>{
    const {name,loanAmount,interestRate} = req.body
    if(!name || !loanAmount || !interestRate){
        throw new Apierror(400,"All fields are required: name, loanAmount, interestRate")
    }
    const newoffer = await LoanOffer.create({
        name,
        loanAmount,
        interestRate
    })
    return Apiresponse(res,200,true,"Loan offer created successfully",newoffer) 
})


const getOffersByAmount = asynchandler(async(req, res) => {
    // Get the maxAmount from request query or body
    const { maxAmount } = req.query // or req.body if you prefer POST request
    
    // Validate the input
    if (!maxAmount) {
        throw new Apierror(400, "Please provide a maximum amount parameter")
    }

    // Convert maxAmount to number and validate
    const amount = Number(maxAmount)
    if (isNaN(amount) || amount <= 0) {
        throw new Apierror(400, "Please provide a valid positive amount")
    }

    // Find all offers where loanAmount is less than or equal to maxAmount
    const offers = await LoanOffer.find({
        loanAmount: { $lte: amount }
    }).sort({ loanAmount: 1 }) // Optional: sort by amount ascending

    // If no offers found
    if (!offers || offers.length === 0) {
        return Apiresponse(res, 200, true, "No loan offers found within the specified amount", [])
    }

    // Return the found offers
    return Apiresponse(res, 200, true, "Loan offers retrieved successfully", offers)
})

export {createoffer,getOffersByAmount}

