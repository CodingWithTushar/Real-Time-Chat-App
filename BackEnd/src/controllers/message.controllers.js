import UserModel from "../model/user.model.js";

export const getUsersForSideBar = async(req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUser = await UserModel.find({_id: {$ne:loggedInUserId}})

        res.status(200).json(filteredUser)
    } catch (e) {
        console.error
    }
}

export const getMessages = () => {
    try {
        const {id:userToChatId} = req.params
    } catch (e) {
        
    }
}