module.exports = mongoose => {
    mongoose.pluralize(null);
    const dataSchema = mongoose.model("list_tiket", mongoose.Schema({
        noTiket: {
            type: String,
            require: true
        },
        summary:{
            type: String,
            require: true
        },
        status:{
            type: String,
            require: true
        },
        tanggal:{
            type: String,
            require: true
        },
        pemilik:{
            type: String,
            require: true
        },
        keterangan:{
            type: String,
            require: true
        },
        tipe:{
            type: String,
            require: true
        },
        noPo:{
            type: String
        },
        noDo:{
            type: String
        },
        noPoSap:{
            type: String
        },
        isDeleted: {
            type: Boolean,
            index: true,
            default: false
        }
    }, {
        timestamps: true
    }))
    return dataSchema;
}