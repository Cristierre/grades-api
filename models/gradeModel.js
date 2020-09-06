

export default (mongoose) =>{

    const alunoInfoSchema = mongoose.Schema({
        name: {type: String, required: true},
        subject: {type: String , required: true},
        type: {type: String , required: true},
        value: {type: Number , required: true},
        lastModified: {type: Date, required:true}
    })

    alunoInfoSchema.method('toJSON', () => {
        const {__v, _id, ...object} = this.toObject;
        object.id = _id;
        return object;
    })
    
    const gradeModel = mongoose.model('grades',alunoInfoSchema);
    return gradeModel;
}

