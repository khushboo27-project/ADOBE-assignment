module.exports = mongoose => {
  
  var schema = mongoose.Schema(
   {
	  title: { type: String, required: true },
	  description: { type: String },
	  dueDate: { type: Date },
	  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
	  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
	  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Optional for authentication
	}
  );
  
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
