import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // to allow users to chat with themselves ( similar to self in whatsapp, remove the content inside find(), and just keep it empty)
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
