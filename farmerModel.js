import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: { type: String },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const farmerModel = mongoose.model("User", farmerSchema);

export default farmerModel;
